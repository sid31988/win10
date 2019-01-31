var page = page || {};
page.PurchasedMaster = function (rootSelector, settings) {
    component.Page.call(this, rootSelector, settings);

    let _this = this;
    let base = {};

    _this.root = $(rootSelector);
 
    let defaultSettings = {
        purchasedTableSettings: null,
        purchasedFormSettings: null,
        purchasedCommandSettings: null,
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

    _this.purchasedMasterTable = null;
    _this.purchasedMasterForm = null;
    _this.purchasedMasterCommandPanel = null;

    _this.initialize = function () {
        let _settings = _this.settings();
        if (_settings.purchasedTableSettings === undefined || _settings.purchasedTableSettings === null) {
            throw "Unable to find settings for 'Receiver Trust Master' datatable."
        }
        _this.purchasedMasterTable = new component.DataTable(_settings.purchasedTableSelector, _settings.purchasedTableSettings);
        if (_settings.purchasedFormSettings === undefined || _settings.purchasedFormSettings === null) {
            throw "Unable to find settings for 'Receiver Trust Master' form."
        }
        _this.purchasedMasterForm = new component.Form(_settings.purchasedFormSelector, _settings.purchasedFormSettings);
        if (_settings.purchasedCommandSettings === undefined || _settings.purchasedCommandSettings === null) {
            throw "Unable to find settings for 'Receiver Trust Master' command panel."
        }

        let $purchasedDetailsPanel = $(_settings.purchasedDetailsPanelSelector);
        $purchasedDetailsPanel.hide();

        _this.purchasedMasterCommandPanel = new component.CommandPanel(_settings.purchasedCommandSelector, _settings.purchasedCommandSettings);
        _this.purchasedMasterCommandPanel.initialize();

        _this.purchasedMasterTable.initialize();
        _this.purchasedMasterForm.initialize();

        _this.handleEvents();
    }
}

page.PurchasedMaster.prototype.handleEvents = function () {
    let _this = this;

    let dataTable = _this.purchasedMasterTable;
    let form = _this.purchasedMasterForm;
    let settings = _this.settings();
    let $detailsPanel = $(settings.purchasedDetailsPanelSelector);
    let commandPanel = _this.purchasedMasterCommandPanel;
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