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
    _this.$currencyName = null;
    _this.$currencyNote = null;
    _this.$quantity = null;
    _this.$rate = null;
    _this.$grossAmt = null;
    _this.$calculatedGross = null;
    _this.brokerFields = {
        $brokerPaise: null,
        $brokerPaiseAmt: null,
        $brokerCommAmt: null,
        $brokerTdsPercentage: null,
        $brokerTdsAmt: null,
        enable: function (enable) {
            _this.brokerFields.$brokerPaise.enable(enable);
            _this.brokerFields.$brokerPaiseAmt.enable(enable);
            _this.brokerFields.$brokerCommAmt.enable(enable);
            _this.brokerFields.$brokerTdsPercentage.enable(enable);
            _this.brokerFields.$brokerTdsAmt.enable(enable);
        }
    };
    _this.subBrokerFields = {
        $subBrokerPaise: null,
        $subBrokerPaiseAmt: null,
        $subBrokerCommAmt: null,
        $subBrokerTdsPercentage: null,
        $subBrokerTdsAmt: null,
        enable: function (enable) {
            _this.subBrokerFields.$subBrokerPaise.enable(enable);
            _this.subBrokerFields.$subBrokerPaiseAmt.enable(enable);
            _this.subBrokerFields.$subBrokerCommAmt.enable(enable);
            _this.subBrokerFields.$subBrokerTdsPercentage.enable(enable);
            _this.subBrokerFields.$subBrokerTdsAmt.enable(enable);
        }
    };

    _this.initializeFields = function () {
        _this.$currencyName = _this.$root.find(settings.currencyNameSelector);
        _this.$currencyNote = _this.$root.find(settings.currencyNoteSelector);
        _this.$quantity = _this.$root.find(settings.quantitySelector);
        _this.$rate = _this.$root.find(settings.rateSelector);
        _this.$grossAmt = _this.$root.find(settings.grossAmtSelector);
        _this.$calculatedGross = _this.$root.find(settings.calculatedGrossSelector);
        _this.brokerFields.$brokerPaise = _this.$root.find(settings.brokerPaiseSelector);
        _this.brokerFields.$brokerPaiseAmt = _this.$root.find(settings.brokerPaiseAmtSelector);
        _this.brokerFields.$brokerCommAmt = _this.$root.find(settings.brokerCommAmtSelector);
        _this.brokerFields.$brokerTdsPercentage = _this.$root.find(settings.brokerTdsPercentageSelector);
        _this.brokerFields.$brokerTdsAmt = _this.$root.find(settings.brokerTdsAmtSelector);
        _this.subBrokerFields.$subBrokerPaise = _this.$root.find(settings.subBrokerPaiseSelector);
        _this.subBrokerFields.$subBrokerPaiseAmt = _this.$root.find(settings.subBrokerPaiseAmtSelector);
        _this.subBrokerFields.$subBrokerCommAmt = _this.$root.find(settings.subBrokerCommAmtSelector);
        _this.subBrokerFields.$subBrokerTdsPercentage = _this.$root.find(settings.subBrokerTdsPercentageSelector);
        _this.subBrokerFields.$subBrokerTdsAmt = _this.$root.find(settings.subBrokerTdsAmtSelector);
    }

    _this.initialize = function () {
        _this.initializeFields();
    }
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

    _this.initializePageEvents = function (settings) {
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
    }

    _this.initializeForexEvents = function (settings) {
        bulkPurchasePage.forex.commandPanel.on("command.mode.none", function () {
            bulkPurchasePage.forex.form.enable(false);
        });

        bulkPurchasePage.forex.commandPanel.on("command.mode.view", function () {
            bulkPurchasePage.forex.form.enable(false);
        });

        // On Forex row select, load the details for selected record
        bulkPurchasePage.forex.dataTable.on("table.row.select", function (eventArgs) {
            if (bulkPurchasePage.forex.commandPanel.isViewMode()) {
                bulkPurchasePage.forex.form.loadEditView(settings.forexDetailsSettings.editUrl, eventArgs, function () {
                    // We will need to disable the form and set the command mode to view, in order to get
                    // the desired behaviour
                    bulkPurchasePage.forex.form.enable(false);
                    bulkPurchasePage.forex.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
                });
            }
        });
    
        // On Forex add click, get add form from ajax
        bulkPurchasePage.forex.commandPanel.on("command.add", function () {
            bulkPurchasePage.forex.form.loadAddView(settings.forexDetailsSettings.addUrl);
        });

        let forexAction = null;
        // On Forex form set to Add mode
        bulkPurchasePage.forex.form.on("form.add.success", function () {
            forexAction = "Add";
            bulkPurchasePage.forex.form.initializeFields();
            bulkPurchasePage.forex.form.enable(true);
            bulkPurchasePage.forex.commandPanel.initializeCommandButtons();
            bulkPurchasePage.forex.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Add);
        });

        // On Forex edit click, get edit form from ajax
        bulkPurchasePage.forex.commandPanel.on("command.edit", function () {
            let selectedData = bulkPurchasePage.forex.dataTable.getSelectedRowData();
            bulkPurchasePage.forex.form.loadEditView(settings.forexDetailsSettings.editUrl, selectedData);
        });

        // On Forex form set to Edit mode
        bulkPurchasePage.forex.form.on("form.edit.success", function () {
            forexAction = "Edit";
            bulkPurchasePage.forex.form.initializeFields();
            bulkPurchasePage.forex.form.enable(true);
            // Since the Save and Cancel buttons are part of the form, we will need to re-fetch the controls,
            // so as to maintian uniformity in command events. We are also setting the command mode.
            bulkPurchasePage.forex.commandPanel.initializeCommandButtons();
            bulkPurchasePage.forex.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Edit);
        });

        // On Forex delete click, delete record via ajax call
        bulkPurchasePage.forex.commandPanel.on("command.delete", function () {
            bulkPurchasePage.forex.form.deleteRecord(settings.forexDetailsSettings.deleteUrl);
        });

        // On Record successful delete
        bulkPurchasePage.forex.form.on("form.delete.success", function () {
            bulkPurchasePage.forex.dataTable.reloadTable();
            // The below has been written, to select the first record post delete.
            // In case no records are left, then we reset the form to show empty fields.
            let selectFirstRowOnDraw = function () {
                if (bulkPurchasePage.forex.dataTable.getRowCount() > 0) {
                    bulkPurchasePage.forex.dataTable.selectRow(0);
                }
                else {
                    bulkPurchasePage.forex.form.loadAddView(settings.forexDetailsSettings.addUrl, function () {
                        // We will need to disable the form and set the command mode to view, in order to get
                        // the desired behaviour
                        bulkPurchasePage.forex.form.enable(false);
                        bulkPurchasePage.forex.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
                    });
                }
                bulkPurchasePage.forex.dataTable.off("table.draw", selectFirstRowOnDraw);
            }
            bulkPurchasePage.forex.dataTable.on("table.draw", selectFirstRowOnDraw);
        });

        // On Forex save click, save data via ajax call
        bulkPurchasePage.forex.commandPanel.on("command.save", function () {
            bulkPurchasePage.forex.form.postSaveData(settings.forexDetailsSettings.saveUrl, { action: forexAction });
        });

        // On Forex form save, reload table and disable form
        bulkPurchasePage.forex.form.on("form.save.success", function (savedData) {
            bulkPurchasePage.forex.dataTable.reloadTable();
            bulkPurchasePage.forex.form.enable(false);
            bulkPurchasePage.forex.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
            forexAction = null;

            // The below code will execute only once, after a data has been successfully saved
            // The code has been written here, since the savedData is accessible in this scope
            let selectRowByIdOnDraw = function () {
                bulkPurchasePage.forex.dataTable.selectRowById("Id", savedData.Id);
                bulkPurchasePage.forex.dataTable.off("table.draw", selectRowByIdOnDraw);
            }
            bulkPurchasePage.forex.dataTable.on("table.draw", selectRowByIdOnDraw);
        });

        // On Forex cancel click, restore the Form view
        bulkPurchasePage.forex.commandPanel.on("command.cancel", function () {
            bulkPurchasePage.forex.form.cancelSave();
            bulkPurchasePage.payment.form.enable(false);
        });

        bulkPurchasePage.forex.form.on("form.cancel", function () {
            bulkPurchasePage.forex.dataTable.reloadTable();
            bulkPurchasePage.forex.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
            forexAction = null;
        });
    }

    _this.initializePaymentEvents = function (settings) {
        bulkPurchasePage.payment.commandPanel.on("command.mode.none", function () {
            bulkPurchasePage.payment.form.enable(false);
        });

        bulkPurchasePage.payment.commandPanel.on("command.mode.view", function () {
            bulkPurchasePage.payment.form.enable(false);
        });

        // On Payment row select, load the details for selected record
        bulkPurchasePage.payment.dataTable.on("table.row.select", function (eventArgs) {
            if (bulkPurchasePage.payment.commandPanel.isViewMode()) {
                bulkPurchasePage.payment.form.loadEditView(settings.paymentDetailsSettings.editUrl, eventArgs, function () {
                    // We will need to disable the form and set the command mode to view, in order to get
                    // the desired behaviour
                    bulkPurchasePage.payment.form.enable(false);
                    bulkPurchasePage.payment.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
                });
            }
        });
    
        // On Payment add click, get add form from ajax
        bulkPurchasePage.payment.commandPanel.on("command.add", function () {
            bulkPurchasePage.payment.form.loadAddView(settings.paymentDetailsSettings.addUrl);
        });

        let paymentAction = null;
        // On Payment form set to Add mode
        bulkPurchasePage.payment.form.on("form.add.success", function () {
            paymentAction = "Add";
            bulkPurchasePage.payment.form.initializeFields();
            bulkPurchasePage.payment.form.enable(true);
            bulkPurchasePage.payment.commandPanel.initializeCommandButtons();
            bulkPurchasePage.payment.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Add);
        });

        // On Payment edit click, get edit form from ajax
        bulkPurchasePage.payment.commandPanel.on("command.edit", function () {
            let selectedData = bulkPurchasePage.payment.dataTable.getSelectedRowData();
            bulkPurchasePage.payment.form.loadEditView(settings.paymentDetailsSettings.editUrl, selectedData);
        });

        // On Payment form set to Edit mode
        bulkPurchasePage.payment.form.on("form.edit.success", function () {
            paymentAction = "Edit";
            bulkPurchasePage.payment.form.initializeFields();
            bulkPurchasePage.payment.form.enable(true);
            // Since the Save and Cancel buttons are part of the form, we will need to re-fetch the controls,
            // so as to maintian uniformity in command events. We are also setting the command mode.
            bulkPurchasePage.payment.commandPanel.initializeCommandButtons();
            bulkPurchasePage.payment.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Edit);
        });

        // On Payment delete click, delete record via ajax call
        bulkPurchasePage.payment.commandPanel.on("command.delete", function () {
            bulkPurchasePage.payment.form.deleteRecord(settings.paymentDetailsSettings.deleteUrl);
        });

        // On Record successful delete
        bulkPurchasePage.payment.form.on("form.delete.success", function () {
            bulkPurchasePage.payment.dataTable.reloadTable();
            // The below has been written, to select the first record post delete.
            // In case no records are left, then we reset the form to show empty fields.
            let selectFirstRowOnDraw = function () {
                if (bulkPurchasePage.payment.dataTable.getRowCount() > 0) {
                    bulkPurchasePage.payment.dataTable.selectRow(0);
                }
                else {
                    bulkPurchasePage.payment.form.loadAddView(settings.paymentDetailsSettings.addUrl, function () {
                        // We will need to disable the form and set the command mode to view, in order to get
                        // the desired behaviour
                        bulkPurchasePage.payment.form.enable(false);
                        bulkPurchasePage.payment.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
                    });
                }
                bulkPurchasePage.payment.dataTable.off("table.draw", selectFirstRowOnDraw);
            }
            bulkPurchasePage.payment.dataTable.on("table.draw", selectFirstRowOnDraw);
        });

        // On Payment save click, save data via ajax call
        bulkPurchasePage.payment.commandPanel.on("command.save", function () {
            bulkPurchasePage.payment.form.postSaveData(settings.paymentDetailsSettings.saveUrl, { action: paymentAction });
        });

        // On Payment form save, reload table and disable form
        bulkPurchasePage.payment.form.on("form.save.success", function (savedData) {
            bulkPurchasePage.payment.dataTable.reloadTable();
            bulkPurchasePage.payment.form.enable(false);
            bulkPurchasePage.payment.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
            paymentAction = null;

            // The below code will execute only once, after a data has been successfully saved
            // The code has been written here, since the savedData is accessible in this scope
            let selectRowByIdOnDraw = function () {
                bulkPurchasePage.payment.dataTable.selectRowById("Id", savedData.Id);
                bulkPurchasePage.payment.dataTable.off("table.draw", selectRowByIdOnDraw);
            }
            bulkPurchasePage.payment.dataTable.on("table.draw", selectRowByIdOnDraw);
        });

        // On Payment cancel click, restore the Form view
        bulkPurchasePage.payment.commandPanel.on("command.cancel", function () {
            bulkPurchasePage.payment.form.cancelSave();
            bulkPurchasePage.payment.form.enable(false);
        });

        bulkPurchasePage.payment.form.on("form.cancel", function () {
            bulkPurchasePage.payment.dataTable.reloadTable();
            bulkPurchasePage.payment.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
            paymentAction = null;
        });
    }

    _this.initialize = function () {
        let _settings = bulkPurchasePage.settings();
        _this.initializePageEvents(_settings);
        _this.initializeForexEvents(_settings);
        _this.initializePaymentEvents(_settings);
    }
}