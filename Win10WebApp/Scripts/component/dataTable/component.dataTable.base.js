var component = component || {};
component.DataTable = function DataTable (rootSelector, settingsOrFactory) {
    component.Base.call(this, rootSelector, settingsOrFactory);
    let _this = this;
    let base = {};

    _this.$root = $(rootSelector);
    _this.$rowCommandTemplate = null;

    _this.dataTable = null;
    _this.handlers = null;
    _this.formatHelper = null;

    let defaultSettings = {
        commandDisplay: component.DataTable.CommandDisplayTypes.internal,
        rowCommandTemplateSelector: null,
        dateFormat: "MM-dd-yyyy",
        tableSettings: null
    };

    base.settings = _this.settings;
    _this.settings = function () {
        let settings = base.settings();
        if (settings === undefined || settings === null) throw "Unable to find settings for " + _this.__proto__.constructor.name + ".";
        settings = lib.getOrDefault(settings, defaultSettings);
        return settings;
    }

    let getRowCommandTemplate = function () {
        if (settings.rowCommandTemplateSelector === null) {
            throw "Missing row command template selector.";
        }
        else {
            var $el = $(settings.rowCommandTemplateSelector);
            if ($el.length === 0) {
                throw "Unable to find element '" + settings.rowCommandTemplateSelector + "'"
            }
            return $el;
        }
    }

    let _tableSettings = null;
    _this.tableSettings = function () {
        if (_tableSettings == null) {
            let settings = _this.settings();
            _tableSettings = settings.tableSettings;
            for (let i = 0; i < _tableSettings.columns.length; i++) {
                let column = _tableSettings.columns[i];
                if (typeof column.render === "string") {
                    column.render = _this.formatHelper[column.render];
                }
            }
        }
        return _tableSettings;
    }

    _this.initialize = function () {
        _this.formatHelper = new component.DataTable.CellFormatHelper(_this);
        let settings = _this.settings();
        let tableSettings = _this.tableSettings();
        tableSettings.initComplete = function () {
            _this.emit("table.init.complete");
        };
        _this.dataTable = _this.$root.DataTable(tableSettings);
        _this.handlers = new component.DataTable.EventHandlers(_this);
        if (settings.commandDisplay === component.DataTable.CommandDisplayTypes.internal) {
            _this.$rowCommandTemplate = getRowCommandTemplate();
        }
    }

    _this.reloadTable = function () {
        _this.dataTable.ajax.reload();
        _this.dataTable.draw(false);

    }

    let getRows = function () {
        return _this.$root.find("tbody tr").toArray() || [];
    }

    let getSelectedRow = function () {
        return _this.$root.find("tbody tr.selected");
    }

    _this.selectRow = function (rowIndex) {
        let tableRows = getRows();
        let $row = $(tableRows[rowIndex]);
        let $selectedRow = getSelectedRow();
        if (!$row.hasClass("selected")) {
            if ($selectedRow) $selectedRow.removeClass("selected");
            $row.addClass("selected");
            var data = _this.dataTable.rows(".selected").data()[0];
            if (data !== undefined && data !== null) {
                _this.emit("table.row.select", data);
            }
        }
    }

    _this.getRowCount = function () {
        return _this.dataTable.rows()[0].length;
    }

    _this.selectRowById = function (keyName, keyValue) {
        if (_this.getRowCount() == 0) throw "No rows found.";
        let tableRows = getRows();
        let rowIndexById = -1;
        for (var i = 0; i < tableRows.length; i++) {
            var data = _this.dataTable.rows(tableRows[i]).data()[0];
            if (data[keyName] === keyValue) {
                rowIndexById = i;
                break;
            }
        }
        _this.selectRow(rowIndexById);
    }
}

component.DataTable.CommandDisplayTypes = {
    internal: 0,
    external: 1
};