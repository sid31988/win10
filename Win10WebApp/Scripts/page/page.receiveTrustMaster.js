var page = page || {};
page.ReceiverTrustMaster = function (rootSelector, settings) {
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

        _this.handleEvents();
    }
}

page.ReceiverTrustMaster.prototype.handleEvents = function () {
    let _this = this;

    let dataTable = _this.receiverTrustMasterTable;
    let form = _this.receiverTrustMasterForm;
    let settings = _this.settings();
    let $detailsPanel = $(settings.receiverTrustDetailsPanelSelector);
    let commandPanel = _this.receiverTrustMasterCommandPanel;
    let addUrl = settings.addUrl;
    let editUrl = settings.editUrl;
    let saveUrl = settings.saveUrl;
    let deleteUrl = settings.deleteUrl;

    dataTable.on("table.row.select", function (eventArgs) {
        $detailsPanel.show();
        form.loadEditView(editUrl, eventArgs);
        form.enable(false);
    });

    form.on("form.add.success", function () {
        commandPanel.setCommandMode(component.CommandPanel.CommandMode.Add);
    });

    form.on("form.edit.success", function () {
        commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
    });

    form.on("form.save.success", function () {
        commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
        dataTable.reloadTable();
    });

    form.on("form.cancel", function () {
        commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
    });

    form.on("form.delete.success", function (successData) {
        dataTable.reloadTable();
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