var page = page || {};
page.ReceiverTrustMaster2 = function (rootSelector, settings) {
    component.Page.call(this, rootSelector, settings);

    let _this = this;
    let base = {};

    _this.root = $(rootSelector);
 
    let defaultSettings = {
        receiverTrustTableSettings: null,
        receiverTrustFormSettings: null,
        receiverTrustCommandSettings: null,
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

    _this.receiverTrustMasterTable = null;
    _this.receiverTrustMasterForm = null;
    _this.receiverTrustMasterCommandPanel = null;

    _this.initialize = function () {
        let _settings = _this.settings();
        if (_settings.receiverTrustTableSettings === undefined || _settings.receiverTrustTableSettings === null) {
            throw "Unable to find settings for 'Receiver Trust Master' datatable."
        }
        _this.receiverTrustMasterTable = new component.DataTable(_settings.receiverTrustTableSelector, _settings.receiverTrustTableSettings);
        if (_settings.receiverTrustFormSettings === undefined || _settings.receiverTrustFormSettings === null) {
            throw "Unable to find settings for 'Receiver Trust Master' form."
        }
        _this.receiverTrustMasterForm = new component.Form(_settings.receiverTrustFormSelector, _settings.receiverTrustFormSettings);
        if (_settings.receiverTrustCommandSettings === undefined || _settings.receiverTrustCommandSettings === null) {
            throw "Unable to find settings for 'Receiver Trust Master' command panel."
        }

        let $receiverTrustDetailsPanel = $(_settings.receiverTrustDetailsPanelSelector);
        $receiverTrustDetailsPanel.hide();

        _this.receiverTrustMasterCommandPanel = new component.CommandPanel(_settings.receiverTrustCommandSelector, _settings.receiverTrustCommandSettings);
        _this.receiverTrustMasterCommandPanel.initialize();

        _this.receiverTrustMasterTable.initialize();
        _this.receiverTrustMasterForm.initialize();

        _this.receiverTrustMasterTable.bindTo("table2page", _this, function (sourceTable, targetPage) {
            sourceTable.on("table.row.select", function () {
                $receiverTrustDetailsPanel.show();
            });
        });
        _this.receiverTrustMasterTable.bindTo("table2form", _this.receiverTrustMasterForm, component.channel.DataTableToForm, _settings.addUrl, _settings.editUrl, _settings.deleteUrl, _settings.saveUrl);
        _this.receiverTrustMasterCommandPanel.bindTo("cp2table", _this.receiverTrustMasterTable, component.channel.CommandPanelToDataTable, _settings.addUrl, _settings.editUrl, _settings.deleteUrl, _settings.saveUrl);
        _this.receiverTrustMasterCommandPanel.bindTo("cp2form", _this.receiverTrustMasterForm, component.channel.CommandPanelToForm, _settings.addUrl, _settings.editUrl, _settings.deleteUrl, _settings.saveUrl);
        _this.receiverTrustMasterForm.bindTo("form2cp", _this.receiverTrustMasterCommandPanel, component.channel.FormToCommandPanel);
        _this.receiverTrustMasterForm.bindTo("form2table", _this.receiverTrustMasterTable, component.channel.FormToDataTable);
    }
}