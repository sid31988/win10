var page = page || {};
page.tcMaster = page.tcMaster || {};
page.tcMaster.Base = function (rootSelector, settings) {
    component.Page.call(this, rootSelector, settings);

    let _this = this;
    let base = {};

    _this.pageName = "T.C. Master"
    _this.root = $(rootSelector);
 
    let defaultSettings = {
        tableSettings: null,
        formSettings: null,
        commandSettings: null,
        addUrl: null,
        editUrl: null,
        deleteUrl: null,
        saveUrl: null
    };

    base.settings = _this.settings;
    _this.settings = function () {
        let settings = base.settings();
        settings = lib.getOrDefault(settings, defaultSettings);
        return settings;
    }

    _this.tcMasterTable = null;
    _this.tcMasterForm = null;
    _this.tcMasterCommandPanel = null;

    _this.initialize = function () {
        let _settings = _this.settings();
        if (_settings.tableSettings === undefined || _settings.tableSettings === null) {
            throw "Unable to find settings for '" + _this.pageName + "' datatable."
        }
        _this.tcMasterTable = new component.DataTable(_settings.tableSelector, _settings.tableSettings);
        if (_settings.formSettings === undefined || _settings.formSettings === null) {
            throw "Unable to find settings for '" + _this.pageName + "' form."
        }
        _this.tcMasterForm = new component.Form(_settings.formSelector, _settings.formSettings);
        if (_settings.commandSettings === undefined || _settings.commandSettings === null) {
            throw "Unable to find settings for '" + _this.pageName + "' command panel."
        }

        let $tcMasterDetailsPanel = $(_settings.detailsPanelSelector);
        $tcMasterDetailsPanel.hide();

        _this.tcMasterCommandPanel = new component.CommandPanel(_settings.commandSelector, _settings.commandSettings);
        _this.tcMasterCommandPanel.initialize();

        _this.tcMasterTable.initialize();
        _this.tcMasterForm.initialize();

        _this.handleEvents();
    }
}

page.tcMaster.Base.prototype.handleEvents = function () {
    let _this = this;

    let dataTable = _this.tcMasterTable;
    let form = _this.tcMasterForm;
    let settings = _this.settings();
    let $detailsPanel = $(settings.detailsPanelSelector);
    let commandPanel = _this.tcMasterCommandPanel;
    let addUrl = settings.addUrl;
    let editUrl = settings.editUrl;
    let saveUrl = settings.saveUrl;
    let deleteUrl = settings.deleteUrl;

    dataTable.on("table.row.select", function (eventArgs) {
        $detailsPanel.show();
        form.loadEditView(editUrl, eventArgs);
        form.enable(false);
    });

    dataTable.on("table.init.complete", function () {
        if (dataTable.getRowCount() == 0) {
            form.loadAddView(addUrl, function () {
                console.log($detailsPanel);
                $detailsPanel.show();
            });
        }
    });

    form.on("form.add.success", function () {
        commandPanel.setCommandMode(component.CommandPanel.CommandMode.Add);
    });

    form.on("form.edit.success", function () {
        commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
    });

    form.on("form.save.success", function (savedData) {
        commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
        dataTable.reloadTable();
        let selectRowByIdOnDraw = function () {
            dataTable.selectRowById("Id", savedData.Id);
            dataTable.off("table.draw", selectRowByIdOnDraw);
        }
        dataTable.on("table.draw", selectRowByIdOnDraw);
    });

    form.on("form.cancel", function () {
        commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
    });

    form.on("form.delete.success", function (successData) {
        dataTable.reloadTable();
        let selectFirstRowOnDraw = function () {
            if (dataTable.getRowCount() > 0) {
                dataTable.selectRow(0);
            }
            else {
                form.loadAddView(addUrl, function () {
                    $detailsPanel.show();
                });
            }
            dataTable.off("table.draw", selectFirstRowOnDraw);
        }
        dataTable.on("table.draw", selectFirstRowOnDraw);
    });

    commandPanel.on("command.add", function (eventArgs) {
        form.loadAddView(addUrl);
    });

    commandPanel.on("command.edit", function (eventArgs) {
        form.enable(true);
        commandPanel.setCommandMode(component.CommandPanel.CommandMode.Edit);
    });

    commandPanel.on("command.delete", function (eventArgs) {
        form.deleteRecord(deleteUrl);
    });

    commandPanel.on("command.save", function (eventArgs) {
        form.postSaveData(saveUrl);
    });

    commandPanel.on("command.cancel", function (eventArgs) {
        form.cancelSave();
    });
}