var page = page || {};
page.BulkPurchase = function (rootSelector, settings) {
    component.Base.call(this, rootSelector, settings);

    let _this = this;
    let base = {};

    let defaultSettings = {
        billingFormSelector: null,
        billingFormSettings: null,
        forexDetailsSettings: {
            dataTableSelector: null,
            tableSettings: null,
            summaryFormSelector: null,
            summaryFormSettings: null,
            detailsFormSelector: null,
            detailsFormSettings: {
                currencyNameSelector: null,
                currencyNoteSelector: null,
                quantitySelector: null,
                rateSelector: null,
                grossAmtSelector: null,
                calculatedGrossSelector: null,
                brokerFields: {
                    brokerPaiseSelector: null,
                    brokerPaiseAmtSelector: null,
                    brokerCommAmtSelector: null,
                    brokerTdsPercentageSelector: null,
                    brokerTdsAmtSelector: null
                },
                subBrokerFields: {
                    subBrokerPaiseSelector: null,
                    subBrokerPaiseAmtSelector: null,
                    subBrokerCommAmtSelector: null,
                    subBrokerTdsPercentageSelector: null,
                    subBrokerTdsAmtSelector: null
                }
            },
            commandPanelSelector: null,
            commandPanelSettings: {
                addCommandButtonSelector: null,
                editCommandButtonSelector: null,
                deleteCommandButtonSelector: null,
                saveCommandButtonSelector: null,
                cancelCommandButtonSelector: null
            },
            addUrl: null,
            editUrl: null,
            deleteUrl: null,
            saveUrl: null
        },
        paymentDetailsSettings: {
            dataTableSelector: null,
            tableSettings: null,
            detailsFormSelector: null,
            detailsFormSettings: null,
            commandPanelSelector: null,
            commandPanelSettings: {
                addCommandButtonSelector: null,
                editCommandButtonSelector: null,
                deleteCommandButtonSelector: null,
                saveCommandButtonSelector: null,
                cancelCommandButtonSelector: null
            },
            addUrl: null,
            editUrl: null,
            deleteUrl: null,
            saveUrl: null
        },
        commandPanelSelector: null,
        commandPanelSettings: {
            addCommandButtonSelector: null,
            editCommandButtonSelector: null,
            deleteCommandButtonSelector: null,
            saveCommandButtonSelector: null,
            cancelCommandButtonSelector: null
        },
        addUrl: null,
        editUrl: null,
        deleteUrl: null,
        saveUrl: null
    };

    base.settings = _this.settings;
    let _settings = null;
    _this.settings = function () {
        if (_settings === null) {
            _settings = base.settings();
            _settings = lib.getOrDefault(_settings, defaultSettings);
        }
        return _settings;
    }

    _this.billingForm = null;
    _this.forex = {
        dataTable: null,
        form: null,
        summaryForm: null,
        commandPanel: null
    };
    _this.payment = {
        dataTable: null,
        form: null,
        commandPanel: null
    }
    _this.commandPanel = null;
    _this.eventHandlers = null;

    _this.initialize = function () {
        let settings = _this.settings();
        _this.billingForm = new component.Form(settings.billingFormSelector, settings.billingFormSettings);
        _this.forex.dataTable = new component.DataTable(settings.forexDetailsSettings.dataTableSelector, settings.forexDetailsSettings.tableSettings);
        _this.forex.form = new page.BulkPurchase.ForexDetailsForm(settings.forexDetailsSettings.detailsFormSelector, settings.forexDetailsSettings.detailsFormSettings);
        _this.forex.summaryForm = new component.Form(settings.forexDetailsSettings.summaryFormSelector, settings.forexDetailsSettings.summaryFormSettings);
        _this.forex.commandPanel = new page.BulkPurchase.ForexCommandPanel(settings.forexDetailsSettings.commandPanelSelector, settings.forexDetailsSettings.commandPanelSettings);
        _this.payment.dataTable = new component.DataTable(settings.paymentDetailsSettings.dataTableSelector, settings.paymentDetailsSettings.tableSettings);
        _this.payment.form = new component.Form(settings.paymentDetailsSettings.formSelector, settings.paymentDetailsSettings.formSettings);
        _this.payment.commandPanel = new page.BulkPurchase.PaymentCommandPanel(settings.paymentDetailsSettings.commandPanelSelector, settings.paymentDetailsSettings.commandPanelSettings);
        _this.commandPanel = new component.CommandPanel(settings.commandPanelSelector, settings.commandPanelSettings);
        _this.eventHandlers = new page.BulkPurchase.Events(_this);
        _this.eventHandlers.initialize();

        _this.forex.dataTable.initialize();
        _this.forex.form.initialize();
        _this.forex.summaryForm.initialize();
        _this.forex.commandPanel.initialize();
        //_this.payment.dataTable.initialize();
        //_this.payment.form.initialize();
        //_this.payment.commandPanel.initialize();
        //_this.commandPanel.initialize();

        //Todo: Remove below code once the outer command buttons are available
        bulkPurchasePage.forex.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
        //bulkPurchasePage.payment.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
    }
}

page.BulkPurchase.ForexDetailsForm = function (rootSelector, settings) {
    component.Form.call(this, rootSelector, settings);

    let _this = this;
    _this.$currencyName = _this.$root.find(settings.currencyNameSelector);
    _this.$currencyNote = _this.$root.find(settings.currencyNoteSelector);
    _this.$quantity = _this.$root.find(settings.quantitySelector);
    _this.$rate = _this.$root.find(settings.rateSelector);
    _this.$grossAmt = _this.$root.find(settings.grossAmtSelector);
    _this.$calculatedGross = _this.$root.find(settings.calculatedGrossSelector);
    _this.brokerFields = {
        $brokerPaise: _this.$root.find(settings.brokerPaiseSelector),
        $brokerPaiseAmt: _this.$root.find(settings.brokerPaiseAmtSelector),
        $brokerCommAmt: _this.$root.find(settings.brokerCommAmtSelector),
        $brokerTdsPercentage: _this.$root.find(settings.brokerTdsPercentageSelector),
        $brokerTdsAmt: _this.$root.find(settings.brokerTdsAmtSelector),
        enable: function (enable) {
            _this.brokerFields.$brokerPaise.enable(enable);
            _this.brokerFields.$brokerPaiseAmt.enable(enable);
            _this.brokerFields.$brokerCommAmt.enable(enable);
            _this.brokerFields.$brokerTdsPercentage.enable(enable);
            _this.brokerFields.$brokerTdsAmt.enable(enable);
        }
    };
    _this.subBrokerFields = {
        $subBrokerPaise: _this.$root.find(settings.subBrokerPaiseSelector),
        $subBrokerPaiseAmt: _this.$root.find(settings.subBrokerPaiseAmtSelector),
        $subBrokerCommAmt: _this.$root.find(settings.subBrokerCommAmtSelector),
        $subBrokerTdsPercentage: _this.$root.find(settings.subBrokerTdsPercentageSelector),
        $subBrokerTdsAmt: _this.$root.find(settings.subBrokerTdsAmtSelector),
        enable: function (enable) {
            _this.subBrokerFields.$subBrokerPaise.enable(enable);
            _this.subBrokerFields.$subBrokerPaiseAmt.enable(enable);
            _this.subBrokerFields.$subBrokerCommAmt.enable(enable);
            _this.subBrokerFields.$subBrokerTdsPercentage.enable(enable);
            _this.subBrokerFields.$subBrokerTdsAmt.enable(enable);
        }
    };
}

page.BulkPurchase.ForexCommandPanel = function (rootSelector, settings) {
    component.CommandPanel.call(this, rootSelector, settings);
    let _this = this;

    _this.setCommandModeToView = function () {
        _this.enableViewCommands(true);
        _this.toggleViewCommands(true);
        _this.enableAddEditCommands(false);
        _this.toggleAddEditCommands(true);
        _this.emit("command.mode.view");
    }

    _this.setCommandModeToNone = function () {
        _this.enableViewCommands(false);
        _this.toggleViewCommands(true);
        _this.enableAddEditCommands(false);
        _this.toggleAddEditCommands(true);
        _this.emit("command.mode.none");
    }
}

page.BulkPurchase.PaymentCommandPanel = function (rootSelector, settings) {
    component.CommandPanel.call(this, rootSelector, settings);
    let _this = this;

    _this.setCommandModeToView = function () {
        _this.enableViewCommands(true);
        _this.toggleViewCommands(true);
        _this.enableAddEditCommands(false);
        _this.toggleAddEditCommands(true);
        _this.emit("command.mode.view");
    }

    _this.setCommandModeToNone = function () {
        _this.enableViewCommands(false);
        _this.toggleViewCommands(true);
        _this.enableAddEditCommands(false);
        _this.toggleAddEditCommands(true);
        _this.emit("command.mode.none");
    }
}

page.BulkPurchase.Events = function (bulkPurchasePage) {
    let _this = this;

    _this.initialize = function () {
        let _settings = bulkPurchasePage.settings();
        bulkPurchasePage.commandPanel.on("command.add", function () {
            bulkPurchasePage.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Add);
            bulkPurchasePage.forex.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
            bulkPurchasePage.payment.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
        });

        bulkPurchasePage.commandPanel.on("command.edit", function () {
            bulkPurchasePage.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Edit);
            bulkPurchasePage.forex.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
            bulkPurchasePage.payment.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
        });

        bulkPurchasePage.commandPanel.on("command.delete", function () {
        });

        bulkPurchasePage.commandPanel.on("command.save", function () {
            let summaryFormData = bulkPurchasePage.forex.summaryForm.serializeJson();
            bulkPurchasePage.billingForm.postSaveData(bulkPurchasePage.saveUrl, summaryFormData);
        });

        bulkPurchasePage.commandPanel.on("command.cancel", function () {
            bulkPurchasePage.billingForm.cancelSave();
            bulkPurchasePage.forex.summaryForm.cancelSave();
        });

        bulkPurchasePage.billingForm.on(["form.save.success", "form.cancel"], function () {
            bulkPurchasePage.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
            bulkPurchasePage.forex.commandPanel.setCommandMode(component.CommandPanel.CommandMode.None);
            bulkPurchasePage.payment.commandPanel.setCommandMode(component.CommandPanel.CommandMode.None);
        });

        bulkPurchasePage.forex.commandPanel.on("command.mode.none", function () {
            bulkPurchasePage.forex.form.enable(false);
        });

        bulkPurchasePage.forex.commandPanel.on("command.mode.view", function () {
            bulkPurchasePage.forex.form.enable(false);
        });

        bulkPurchasePage.forex.commandPanel.on("command.add", function () {
            bulkPurchasePage.forex.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Add);
            //bulkPurchasePage.commandPanel.setCommandMode(component.CommandPanel.CommandMode.None);
            bulkPurchasePage.forex.form.loadAddView(_settings.forexDetailsSettings.addUrl);
            bulkPurchasePage.payment.form.enable(true);
        });

        bulkPurchasePage.forex.commandPanel.on("command.edit", function () {
            bulkPurchasePage.forex.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Edit);
            bulkPurchasePage.commandPanel.setCommandMode(component.CommandPanel.CommandMode.None);
            bulkPurchasePage.forex.form.loadEditView(_settings.forexDetailsSettings.editUrl);
            bulkPurchasePage.payment.form.enable(true);
        });

        bulkPurchasePage.forex.commandPanel.on("command.delete", function () {
            bulkPurchasePage.forex.form.deleteRecord(_settings.forexDetailsSettings.deleteUrl);
        });

        bulkPurchasePage.forex.commandPanel.on("command.save", function () {
            bulkPurchasePage.forex.form.postSaveData(_settings.forexDetailsSettings.saveUrl);
            bulkPurchasePage.payment.form.enable(false);
        });

        bulkPurchasePage.forex.commandPanel.on("command.cancel", function () {
            bulkPurchasePage.forex.form.cancelSave();
            bulkPurchasePage.payment.form.enable(false);
        });

        bulkPurchasePage.forex.form.on(["form.save.success", "form.cancel"], function () {
            bulkPurchasePage.forex.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
        });

        bulkPurchasePage.payment.commandPanel.on("command.mode.none", function () {
            bulkPurchasePage.payment.form.enable(false);
        });

        bulkPurchasePage.payment.commandPanel.on("command.mode.view", function () {
            bulkPurchasePage.payment.form.enable(false);
        });

        bulkPurchasePage.payment.commandPanel.on("command.add", function () {
            bulkPurchasePage.payment.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Add);
            bulkPurchasePage.commandPanel.setCommandMode(component.CommandPanel.CommandMode.None);
            bulkPurchasePage.payment.form.loadAddView(_settings.paymentDetailsSettings.addUrl);
            bulkPurchasePage.payment.form.enable(true);
        });

        bulkPurchasePage.payment.commandPanel.on("command.edit", function () {
            bulkPurchasePage.payment.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Edit);
            bulkPurchasePage.commandPanel.setCommandMode(component.CommandPanel.CommandMode.None);
            bulkPurchasePage.payment.form.loadEditView(_settings.paymentDetailsSettings.editUrl);
            bulkPurchasePage.payment.form.enable(true);
        });

        bulkPurchasePage.payment.commandPanel.on("command.delete", function () {
            bulkPurchasePage.payment.form.deleteRecord(_settings.paymentDetailsSettings.deleteUrl);
        });

        bulkPurchasePage.payment.commandPanel.on("command.save", function () {
            bulkPurchasePage.payment.form.postSaveData(_settings.paymentDetailsSettings.saveUrl);
            bulkPurchasePage.payment.form.enable(false);
        });

        bulkPurchasePage.payment.commandPanel.on("command.cancel", function () {
            bulkPurchasePage.payment.form.cancelSave();
            bulkPurchasePage.payment.form.enable(false);
        });

        bulkPurchasePage.payment.form.on(["form.save.success", "form.cancel"], function () {
            bulkPurchasePage.payment.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
        });
    }
}