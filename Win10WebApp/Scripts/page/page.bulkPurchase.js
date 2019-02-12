//#region Type Definitions
/**
 * A json configuration object to hold Billing Form's element selectors and other settings
 * @typedef {Object} BillingFormSettings
 * @property {string} ffmcSelector - Selector pointing to the ffmc field
 * @property {string} deliveredInSelector - Selector pointing to the deliveredin field
 * @property {string} brokerSelector - Selector pointing to the broker field
 * @property {string} dateSelector - Selector pointing to the date field
 * @property {string} quotaSelector - Selector pointing to the quota field
 * @property {string} remarkSelector - Selector pointing to the remark field
 * @property {string} subBrokerSelector - Selector pointing to the subbroker field
 * @property {string} costCentreSelector - Selector pointing to the costcentre field
 */
/**
 * A json configuration object to hold Forex Tab's element selectors and other settings
 * @typedef {Object} ForexDetailsSettings
 * @property {string} dataTableSelector - Selector pointing to the forex datatable element
 * @property {Object} tableSettings - Settings for initializing the jQuery DataTable control
 * @property {string} summaryFormSelector - Selector pointing to the forex summary form
 * @property {ForexSummaryFormSettings} summaryFormSettings - Settings related to the forex summary form
 * @property {string} detailsFormSelector - Selector pointing to the forex details form
 * @property {ForexDetailsFormSettings} detailsFormSettings - Settings related to the forex details form
 * @property {string} commandPanelSelector - Selector pointing to the forex command panel container
 * @property {CommandPanelSettings} commandPanelSettings - Settings related to the forex command panel component
 * @property {string} addUrl - The add ajax url
 * @property {string} editUrl - The edit ajax url
 * @property {string} deleteUrl - The delete ajax url
 * @property {string} saveUrl - The save ajax url
 */
/**
 * A json configuration object to hold Forex Summary Form's element selectors and other settings
 * @typedef {Object} ForexSummaryFormSettings
 * @property {string} grossAmtSelector - Selector pointing to the GrossAmt field
 * @property {string} fxGstSelector - Selector pointing to the FxGST field
 * @property {string} tcCardChrgSelector - Selector pointing to the TCCardChrg field
 * @property {string} srvChrgSelector - Selector pointing to the SrvChrg field
 * @property {string} srvChrgAmtSelector - Selector pointing to the SrvChrgAmt field
 * @property {string} stxPercentageSelector - Selector pointing to the STXPercentage field
 * @property {string} stxAmtSelector - Selector pointing to the STXAmt field
 * @property {string} chargesTaxSelector - Selector pointing to the ChargesTax field
 * @property {string} roundOffSelector - Selector pointing to the RoundOff field
 * @property {string} netPayableSelector - Selector pointing to the NetPayable field
 */
/**
 * A json configuration object to hold Payment Tab's element selectors and other settings
 * @typedef {Object} PaymentDetailsSettings
 * @property {string} dataTableSelector - Selector pointing to the payment datatable element
 * @property {Object} tableSettings - Settings for initializing the jQuery DataTable control
 * @property {string} detailsFormSelector - Selector pointing to the payment details form
 * @property {PaymentDetailsFormSettings} detailsFormSettings - Settings related to the payment details form
 * @property {string} commandPanelSelector - Selector pointing to the payment command panel container
 * @property {CommandPanelSettings} commandPanelSettings - Settings related to the payment command panel component
 * @property {string} addUrl - The add ajax url
 * @property {string} editUrl - The edit ajax url
 * @property {string} deleteUrl - The delete ajax url
 * @property {string} saveUrl - The save ajax url
 */
/**
 * A json configuration objec to hold Payment Detals Form's element selectors and other settings
 * @typedef {Object} PaymentDetailsFormSettings
 * @property {string} cashBankSelector - Selector pointing to the CashBank field
 * @property {string} typeSelector - Selector pointing to the Type field
 * @property {string} chequeNoSelector - Selector pointing to the ChequeNo field
 * @property {string} chequeDateSelector - Selector pointing to the ChequeDate field
 * @property {string} amountSelector - Selector pointing to the Amount field
 * @property {string} remarkSelector - Selector pointing to the Remark field
 * @property {string} bankSelector - Selector pointing to the Bank field
 * @property {string} dateSelector - Selector pointing to the Date field
 * @property {string} netPayableSelector - Selector pointing to the NetPayable field
 * @property {string} totalPendingAmountSelector - Selector pointing to the TotalPendingAmount field
 * @property {string} balanceAmountSelector - Selector pointing to the BalanceAmount field
 */
/**
 * A json configuration object to hold Command panel's element selectors and other settings
 * @typedef {Object} CommandPanelSettings
 * @property {string} addCommandButtonSelector - Selector pointing to the Add command button
 * @property {string} editCommandButtonSelector - Selector pointing to the Edit command button
 * @property {string} deleteCommandButtonSelector - Selector pointing to the Delete command button
 * @property {string} saveCommandButtonSelector - Selector pointing to the Save command button
 * @property {string} cancelCommandButtonSelector - Selector pointing to the Cancel command button
 */
/**
 * A json configuration object to hold Forex Details Form's element selectors and other settings
 * @typedef {Object} ForexDetailsFormSettings
 * @property {string} currencyNameSelector - Selector pointing to the CurrencyName field
 * @property {string} currencyNoteSelector - Selector pointing to the CurrencyNote field
 * @property {string} quantitySelector - Selector pointing to the Quantity field
 * @property {string} rateSelector - Selector pointing to the Rate field
 * @property {string} grossAmtSelector - Selector pointing to the GrossAmt field
 * @property {string} calculatedGrossSelector - Selector pointing to the CalculaatedGross field
 * @property {ForexDetailsBrokerFieldsGroup} brokerFields - A grouping for holding selector references of all the broker fields
 * @property {ForexDetailsSubBrokerFieldsGroup} subBrokerFields - A grouping for holding selector references of all the subbroker fields
 */
/**
 * A json configuration object to hold the Forex Broker Fields' selector
 * @typedef {Object} ForexDetailsBrokerFieldsGroup
 * @property {string} brokerPaiseSelector - Selector pointing to the BrokerPaise field
 * @property {string} brokerPaiseAmtSelector - Selector pointing to the BrokerPaiseAmt field
 * @property {string} brokerCommAmtSelector - Selector pointing to the BrokerCommAmt field
 * @property {string} brokerTdsPercentageSelector - Selector pointing to the BrokerTdsPercentage field
 * @property {string} brokerTdsAmtSelector - Selector pointing to the BrokerTdsAmt field
 */
/**
 * A json configuration object to hold the Forex Broker Fields' selector
 * @typedef {Object} ForexDetailsSubBrokerFieldsGroup
 * @property {string} subBrokerPaiseSelector - Selector pointing to the SubBrokerPaise field
 * @property {string} subBrokerPaiseAmtSelector - Selector pointing to the SubBrokerPaiseAmt field
 * @property {string} subBrokerCommAmtSelector - Selector pointing to the SubBrokerCommAmt field
 * @property {string} subBrokerTdsPercentageSelector - Selector pointing to the SubBrokerTdsPercentage field
 * @property {string} subBrokerTdsAmtSelector - Selector pointing to the SubBrokerTdsAmt field
 */
 /**
 * The page level settings used to instantiate the BulkPurchasePage object.
 * @typedef {Object} BulkPurchaseSettings
 * @property {string} billingFormSelector - Selector pointing to the billing form element
 * @property {BillingFormSettings} billingFormSettings - Settings related to the billing form component
 * @property {ForexDetailsSettings} forexDetailsSettings - Settings related to the forex form component
 * @property {PaymentDetailsSettings} paymentDetailsSettings - Settings related to the payment form component
 * @property {CommandPanelSettings} commandPanelSettings - Settings related to the main command panel component
 * @property {string} addUrl - The add ajax url
 * @property {string} editUrl - The edit ajax url
 * @property {string} deleteUrl - The delete ajax url
 * @property {string} saveUrl - The save ajax url
 * @property {string} cancelUrl - The cancel ajax url
 */
//#endregion

/** The component namespace */
var component;
/** The page namespace */
var page = page || {};

/**
 * Payment Type enum
 * @enum
 */
const PaymentTypes = {
    /** Payment - 84 */
    Payment: 84,
    /** Receipt - 85 */
    Receipt: 85
};

/**
 * A prototype to represent the BulkPurchase page ui.
 * @extends {component.page}
 * @type BulkPurchasePage
 */
page.BulkPurchase = function BulkPurchasePage (rootSelector, settings) {
    component.Page.call(this, rootSelector, settings);

    /**
     * A closure variable to hold reference for the execution context of instance
     * @type page.BulkPurchase
     */
    let _this = this;

    /**
     * A closure variable to imitate the super class mechanism, so as to hold older functionality,
     * before overriding the method
     * @type component.Page
     */
    let base = {};

    //#region "Settings: The default settings provision."
    /**
     * The default settings used to override the null settings injected via constructor function
     * @type BulkPurchaseSettings
     */
    let defaultSettings = {
        billingFormSelector: null,
        billingFormSettings: {
            ffmcSelector: null,
            deliveredInSelector: null,
            brokerSelector: null,
            dateSelector: null,
            quotaSelector: null,
            remarkSelector: null,
            referenceSelector: null,
            subBrokerSelector: null,
            costCentreSelector: null
        },
        forexDetailsSettings: {
            dataTableSelector: null,
            tableSettings: null,
            summaryFormSelector: null,
            summaryFormSettings: {
                grossAmtSelector: null,
                fxGstSelector: null,
                tcCardChrgSelector: null,
                srvChrgSelector: null,
                srvChrgAmtSelector: null,
                stxPercentageSelector: null,
                stxAmtSelector: null,
                chargesTaxSelector: null,
                roundOffSelector: null,
                netPayableSelector: null
            },
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
            detailsFormSettings: {
                cashBankSelector: null,
                typeSelector: null,
                chequeNoSelector: null,
                chequeDateSelector: null,
                amountSelector: null,
                remarkSelector: null,
                bankSelector: null,
                dateSelector: null,
                netPayableSelector: null,
                totalPendingAmountSelector: null,
                balanceAmountSelector: null
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
        saveUrl: null,
        cancelUrl: null
    };

    base.settings = _this.settings;
    let _settings = null;
    /**
     * Gets the component level settings (either json or a factory method) and compares with the default settings, for getting the final settings object.
     * @returns {BulkPurchaseSettings}
     */
    this.settings = function settings () {
        if (_settings === null) {
            _settings = base.settings();
            _settings = lib.getOrDefault(_settings, defaultSettings);
        }
        return _settings;
    }
    //#endregion

    //#region "Page components"
    /**
     * The billing form component
     * @type {page.BulkPurchase.BillingForm}
     */
    this.billingForm = null;
    this.forex = {
        dataTable: null,
        form: null,
        summaryForm: null,
        commandPanel: null
    };
    this.payment = {
        dataTable: null,
        form: null,
        commandPanel: null
    }
    this.commandPanel = null;
    this.eventHandlers = null;
    //#endregion

    /**
     * Initializes all the internal components of the Bulk Purchase Page.
     * @returns void
     */
    this.initialize = function initialize () {
        let settings = _this.settings();
        _this.billingForm = new page.BulkPurchase.BillingForm(settings.billingFormSelector, settings.billingFormSettings);
        _this.forex.dataTable = new component.DataTable(settings.forexDetailsSettings.dataTableSelector, settings.forexDetailsSettings.tableSettings);
        let forexDataTableHelper = new page.BulkPurchase.ForexDataTableHelper(_this);
        _this.forex.form = new page.BulkPurchase.ForexDetailsForm(settings.forexDetailsSettings.detailsFormSelector, settings.forexDetailsSettings.detailsFormSettings);
        _this.forex.summaryForm = new page.BulkPurchase.ForexSummaryForm(settings.forexDetailsSettings.summaryFormSelector, settings.forexDetailsSettings.summaryFormSettings);
        _this.forex.commandPanel = new page.BulkPurchase.ForexCommandPanel(settings.forexDetailsSettings.commandPanelSelector, settings.forexDetailsSettings.commandPanelSettings);
        _this.payment.dataTable = new component.DataTable(settings.paymentDetailsSettings.dataTableSelector, settings.paymentDetailsSettings.tableSettings);
        let paymentDataTableHelper = new page.BulkPurchase.PaymentDataTableHelper(_this);
        _this.payment.form = new page.BulkPurchase.PaymentDetailsForm(settings.paymentDetailsSettings.detailsFormSelector, settings.paymentDetailsSettings.detailsFormSettings);
        _this.payment.commandPanel = new page.BulkPurchase.PaymentCommandPanel(settings.paymentDetailsSettings.commandPanelSelector, settings.paymentDetailsSettings.commandPanelSettings);
        _this.commandPanel = new page.BulkPurchase.MainCommandPanel(settings.commandPanelSelector, settings.commandPanelSettings);
        _this.eventHandlers = new page.BulkPurchase.Events(_this);
        _this.eventHandlers.initialize();

        _this.billingForm.initialize();
        _this.forex.dataTable.initialize(forexDataTableHelper);
        _this.forex.form.initialize();
        _this.forex.summaryForm.initialize();
        _this.forex.commandPanel.initialize();
        _this.payment.dataTable.initialize(paymentDataTableHelper);
        _this.payment.form.initialize();
        _this.payment.commandPanel.initialize();
        _this.commandPanel.initialize();
        _this.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);

        _this.calculateAmounts();
        // Disable the main forms and the inner forms i.e. forex and payment
        _this.enableForms(false, false, false, false);
        _this.payment.commandPanel.enable(false);
    }

    _this.calculateAmounts = function () {
        let netPayable = _this.forex.summaryForm.getNetPayable();
        let paymentData = _this.payment.dataTable.data();
        let paymentAmounts = paymentData.filter(x => x.Type == PaymentTypes.Payment).map(x => x.Amount);
        let receiptAmounts = paymentData.filter(x => x.Type == PaymentTypes.Receipt).map(x => x.Amount);
        let totalPaymentAmount = paymentAmounts.length > 0 ? paymentAmounts.reduce((a, b) => a + b) : 0;
        let totalReceiptAmount = receiptAmounts.length > 0 ? receiptAmounts.reduce((a, b) => a + b) : 0;
        _this.payment.form.calculateAmounts(netPayable, totalPaymentAmount, totalReceiptAmount);
    }

    /**
     * Toggles the accessibility of the both the main forms (outer panel) and inner forms (forex and payment)
     * @param billingForm {boolean} true to enable the billing form and false to disable the billing form
     * @param forexForm {boolean} true to enable the forex form and false to disable the forex form
     * @param forexSummaryForm {boolean} true to enable the forex summary form and false to disable the forex summary form
     * @param paymentForm {boolean} true to enable the payment form and false to disable the payment form
     * @returns void
     */
    _this.enableForms = function enableForms (billingForm, forexForm, forexSummaryForm, paymentForm) {
        billingForm = billingForm || false;
        forexForm = forexForm || false;
        forexSummaryForm = forexSummaryForm || false;
        paymentForm = paymentForm || false;
        _this.billingForm.enable(billingForm);
        _this.forex.form.enable(forexForm);
        _this.forex.summaryForm.enable(forexSummaryForm);
        _this.payment.form.enable(paymentForm);
    }

    _this.setBrokerFields = function () {
        _this.forex.form.brokerFields.enable(_this.billingForm.getBrokerValue() !== null);
        _this.forex.form.subBrokerFields.enable(_this.billingForm.getSubBrokerValue() !== null);
    }
}

//#region Custom Forms and Panels
/**
 * The Billing form
 * @constructor
 * @param rootSelector {string} The form element selector
 * @param settings {"Object"|"()=>Object"} The settings json object or settings json factory function
 * @extends component.Form
 */
page.BulkPurchase.BillingForm = function BillingForm (rootSelector, settings) {
    component.Form.call(this, rootSelector, settings);
    let base = {};
    let _this = this;
    this.$ffmc = null;
    this.$deliveredIn = null;
    this.$broker = null;
    this.$date = null;
    this.$quota = null;
    this.$remark = null;
    this.$reference = null;
    this.$subBroker = null;
    this.$costCentre = null;

    this.initializeFields = function () {
        let settings = _this.settings();
        _this.$ffmc = _this.$root.find(settings.ffmcSelector);
        _this.$deliveredIn = _this.$root.find(settings.deliveredInSelector);
        _this.$broker = _this.$root.find(settings.brokerSelector);
        _this.$date = _this.$root.find(settings.dateSelector);
        _this.$quota = _this.$root.find(settings.quotaSelector);
        _this.$remark = _this.$root.find(settings.remarkSelector);
        _this.$reference = _this.$root.find(settings.referenceSelector);
        _this.$subBroker = _this.$root.find(settings.subBrokerSelector);
        _this.$costCentre = _this.$root.find(settings.costCentreSelector);
    }

    this.initialize = function () {
        _this.initializeFields();
        _this.initializeEvents();
    }

    this.initializeEvents = function () {
        _this.$broker.off("change").on("change", function () {
            _this.emit("billingform.broker.change", _this.getBrokerValue());
        });
        _this.$subBroker.off("change").on("change", function () {
            _this.emit("billingform.subbroker.change", _this.getSubBrokerValue());
        });
    }

    this.getBrokerValue = function () {
        let firstOption = _this.$broker.find("option").first();
        let broker = _this.$broker[0];
        if ((firstOption.attr("value") || null) === null) {
            return broker && broker.value.toLowerCase() != firstOption.html().toLowerCase() || null;
        }
        else {
            return broker.value || null;
        }
    }

    this.getSubBrokerValue = function () {
        let firstOption = _this.$subBroker.find("option").first();
        let subBroker = _this.$subBroker[0];
        if ((firstOption.attr("value") || null) === null) {
            return subBroker && subBroker.value.toLowerCase() != firstOption.html().toLowerCase() || null;
        }
        else {
            return subBroker.value || null;
        }
    }

    base.cancelSave = this.cancelSave;
    /**
     * The outer or main cancel ajax implementation. Clears the session data for forex and payment.
     * @param cancelUrl {string} The cancel ajax url
     * @returns {void} void
     */
    this.cancelSave = function (cancelUrl) {
        base.cancelSave();
    }
}

/**
 * The Forex Details form
 * @constructor
 * @param rootSelector {string} The form element selector
 * @param settings {"Object"|"()=>Object"} The settings json object or settings json factory function
 * @extends component.Form
 */
page.BulkPurchase.ForexDetailsForm = function ForexDetailsForm(rootSelector, settings) {
    component.Form.call(this, rootSelector, settings);
    /**
     * A closure variable to hold reference to the base class
     * @type {component.Form}
     */
    let base = {};
    /**
     * A closure variable to hold reference to the ForexDetailsForm instance scope
     * @type {page.BulkPurchase.ForexDetailsForm} ForexDetailsForm
     */
    let _this = this;
    /**
     * The CurrencyName field
     * @type {JQueryStaticExtend}
     */
    this.$currencyName = null;
    /**
     * The CurrencyName field
     * @type {JQueryStaticExtend}
     */
    this.$currencyNote = null;
    /**
     * The Quantity field
     * @type {JQueryStaticExtend}
     */
    this.$quantity = null;
    /**
     * The Rate field
     * @type {JQueryStaticExtend}
     */
    this.$rate = null;
    /**
     * The GrossAmt field
     * @type {JQueryStaticExtend}
     */
    this.$grossAmt = null;
    /**
     * The CalculatedGross field
     * @type {JQueryStaticExtend}
     */
    this.$calculatedGross = null;
    
    /**
     * Method to toggle accessbility of the broker fields
     * @callback enableBrokerFieldsCallback
     * @param {boolean} enable - true to enable the fields and false to disable the fields
     * @returns {void} void
     *//**
     * A set of fields related to broker
     * @typedef {Object} BrokerFieldsSet
     * @property {JQueryStaticExtend} $brokerPaise - The BrokerPaise field
     * @property {JQueryStaticExtend} $brokerPaiseAmt - The BrokerPaiseAmt field
     * @property {JQueryStaticExtend} $brokerCommAmt - The BrokerCommAmt field
     * @property {JQueryStaticExtend} $brokerTdsPercentage - The BrokerTdsPercentage field
     * @property {JQueryStaticExtend} $brokerTdsAmt - The BrokerTdsAmt field
     * @property {enableBrokerFieldsCallback} enable - Toggles the accessibility of the broker fields
     *//**
     * A set of fields related to broker
     * @type {BrokerFieldsSet}
     */
    this.brokerFields = {
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
    
    /**
     * Method to toggle accessbility of the subBroker fields
     * @callback enableSubBrokerFieldsCallback
     * @param {boolean} enable - true to enable the fields and false to disable the fields
     * @returns {void} void
     *//**
     * A set of fields related to subBroker
     * @typedef {Object} SubBrokerFieldsSet
     * @property {JQueryStaticExtend} $subBrokerPaise - The SubBrokerPaise field
     * @property {JQueryStaticExtend} $subBrokerPaiseAmt - The SubBrokerPaiseAmt field
     * @property {JQueryStaticExtend} $subBrokerCommAmt - The SubBrokerCommAmt field
     * @property {JQueryStaticExtend} $subBrokerTdsPercentage - The SubBrokerTdsPercentage field
     * @property {JQueryStaticExtend} $subBrokerTdsAmt - The SubBrokerTdsAmt field
     * @property {enableSubBrokerFieldsCallback} enable - Toggles the accessibility of the subBroker fields
     *//**
     * A set of fields related to subBroker
     * @type {SubBrokerFieldsSet}
     */
    this.subBrokerFields = {
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

    /**
     * Initializes the inner fields and their events
     * @returns {void} void
     */
    this.initializeFields = function () {
        this.$currencyName = this.$root.find(settings.currencyNameSelector);
        this.$currencyNote = this.$root.find(settings.currencyNoteSelector);
        this.$quantity = this.$root.find(settings.quantitySelector);
        this.$rate = this.$root.find(settings.rateSelector);
        this.$grossAmt = this.$root.find(settings.grossAmtSelector);
        this.$calculatedGross = this.$root.find(settings.calculatedGrossSelector);
        this.brokerFields.$brokerPaise = this.$root.find(settings.brokerFields.brokerPaiseSelector);
        this.brokerFields.$brokerPaiseAmt = this.$root.find(settings.brokerFields.brokerPaiseAmtSelector);
        this.brokerFields.$brokerCommAmt = this.$root.find(settings.brokerFields.brokerCommAmtSelector);
        this.brokerFields.$brokerTdsPercentage = this.$root.find(settings.brokerFields.brokerTdsPercentageSelector);
        this.brokerFields.$brokerTdsAmt = this.$root.find(settings.brokerFields.brokerTdsAmtSelector);
        this.subBrokerFields.$subBrokerPaise = this.$root.find(settings.subBrokerFields.subBrokerPaiseSelector);
        this.subBrokerFields.$subBrokerPaiseAmt = this.$root.find(settings.subBrokerFields.subBrokerPaiseAmtSelector);
        this.subBrokerFields.$subBrokerCommAmt = this.$root.find(settings.subBrokerFields.subBrokerCommAmtSelector);
        this.subBrokerFields.$subBrokerTdsPercentage = this.$root.find(settings.subBrokerFields.subBrokerTdsPercentageSelector);
        this.subBrokerFields.$subBrokerTdsAmt = this.$root.find(settings.subBrokerFields.subBrokerTdsAmtSelector);

        this.$rate.off("change").on("change", function () {
            _this.calculateGrossAmount();
        })
        this.$quantity.off("change").on("change", function () {
            _this.calculateGrossAmount();
        })
    }

    base.enable = this.enable;
    /**
     * Toggles accessibility of the element and inner elements
     */
    this.enable = function enable(toggle) {
        base.enable(toggle);
        // Readonly elements
        this.$calculatedGross.enable(false);
        this.$grossAmt.enable(false);
    }

    this.calculateGrossAmount = function () {
        let rate = parseFloat(this.$rate.val()) || 0;
        let quantity = parseFloat(this.$quantity.val()) || 0;
        let grossAmount = rate * quantity;
        this.$grossAmt.val(grossAmount);
        this.$calculatedGross.val(grossAmount);
    }

    this.initialize = function () {
        this.initializeFields();
    }
}

/**
 * The Forex Summary form
 * @constructor
 * @param rootSelector {string} The form element selector
 * @param settings {"Object"|"()=>Object"} The settings json object or settings json factory function
 * @extends component.Form
 */
page.BulkPurchase.ForexSummaryForm = function (rootSelector, settings) {
    component.Form.call(this, rootSelector, settings);
    let base = {};
    let _this = this;
    this.$grossAmt = null;
    this.$fxGst = null;
    this.$tcCardChrg = null;
    this.$srvChrg = null;
    this.$srvChrgAmt = null;
    this.$stxPercentage = null;
    this.$stxAmt = null;
    this.$chargesTax = null;
    this.$roundOff = null;
    this.$netPayable = null;
    
    this.initializeFields = function initializeFields() {
        let settings = _this.settings();
        _this.$grossAmt = _this.$root.find(settings.grossAmtSelector);
        _this.$fxGst = _this.$root.find(settings.fxGstSelector);
        _this.$tcCardChrg = _this.$root.find(settings.tcCardChrgSelector);
        _this.$srvChrg = _this.$root.find(settings.srvChrgSelector);
        _this.$srvChrgAmt = _this.$root.find(settings.srvChrgAmtSelector);
        _this.$stxPercentage = _this.$root.find(settings.stxPercentageSelector);
        _this.$stxAmt = _this.$root.find(settings.stxAmtSelector);
        _this.$chargesTax = _this.$root.find(settings.chargesTaxSelector);
        _this.$roundOff = _this.$root.find(settings.roundOffSelector);
        _this.$netPayable = _this.$root.find(settings.netPayableSelector);
    }

    this.initialize = function initialize() {
        _this.initializeFields();
    }

    base.enable = this.enable;
    this.enable = function enable(enable) {
        base.enable(enable);
        // Readonly fields
        _this.$grossAmt.enable(false);
        _this.$netPayable.enable(false);
    }

    this.setGrossAmount = function (grossAmount) {
        grossAmount = grossAmount || 0;
        _this.$grossAmt.val(grossAmount);
        _this.$netPayable.val(grossAmount);
        _this.raiseChange();
    }

    this.getNetPayable = function () {
        return parseFloat(_this.$netPayable.val()) || 0;
    }
}

/**
 * The Payment Details form
 * @constructor
 * @param rootSelector {string} The form element selector
 * @param settings {"Object"|"()=>Object"} The settings json object or settings json factory function
 * @extends component.Form
 */
page.BulkPurchase.PaymentDetailsForm = function PaymentDetailsForm (rootSelector, settings) {
    component.Form.call(this, rootSelector, settings);
    let base = {};
    let _this = this;
    this.$cashBank = null;
    this.$type = null;
    this.$chequeNo = null;
    this.$chequeDate = null;
    this.$amount = null;
    this.$remark = null;
    this.$bank = null;
    this.$date = null;
    this.$netPayable = null;
    this.$totalPendingAmount = null;
    this.$balanceAmount = null;

    this.initializeFields = function initializeFields() {
        let settings = _this.settings();
        _this.$cashBank = _this.$root.find(settings.cashBankSelector);
        _this.$type = _this.$root.find(settings.typeSelector);
        _this.$chequeNo = _this.$root.find(settings.chequeNoSelector);
        _this.$chequeDate = _this.$root.find(settings.chequeDateSelector);
        _this.$amount = _this.$root.find(settings.amountSelector);
        _this.$remark = _this.$root.find(settings.remarkSelector);
        _this.$bank = _this.$root.find(settings.bankSelector);
        _this.$date = _this.$root.find(settings.dateSelector);
        _this.$netPayable = _this.$root.find(settings.netPayableSelector);
        _this.$totalPendingAmount = _this.$root.find(settings.totalPendingAmountSelector);
        _this.$balanceAmount = _this.$root.find(settings.balanceAmountSelector);
        _this.emit("payment.fields.init");
    }

    this.initialize = function () {
        _this.initializeFields();
    }

    base.enable = this.enable;
    this.enable = function enable(enable) {
        base.enable(enable);
        // Readonly fields
        _this.$netPayable.enable(false);
        _this.$totalPendingAmount.enable(false);
        _this.$balanceAmount.enable(false);
    }

    let _netPayable = 0;
    this.setNetPayable = function (value) {
        _netPayable = value;
        this.$netPayable.val(value);
    }
    this.getNetPayable = function () {
        return _netPayable;
    }

    let _totalPendingAmount = 0;
    this.setTotalPendingAmount = function (value) {
        _totalPendingAmount = value;
        this.$totalPendingAmount.val(value);
    }
    this.getTotalPendingAmount = function () {
        return _totalPendingAmount;
    }

    let _balanceAmount = 0;
    this.setBalanceAmount = function (value) {
        _balanceAmount = value;
        this.$balanceAmount.val(value);
    }
    this.getBalanceAmount = function () {
        return _balanceAmount;
    }

    this.calculateAmounts = function (netPayable, totalPaymentAmount, totalReceiptAmount) {
        totalPaymentAmount = totalPaymentAmount || 0;
        totalReceiptAmount = totalReceiptAmount || 0;
        let totalPendingAmount = totalPaymentAmount - totalReceiptAmount;
        let balanceAmount = netPayable - totalPendingAmount;

        this.setNetPayable(netPayable);
        this.setTotalPendingAmount(totalPendingAmount);
        this.setBalanceAmount(balanceAmount);
    }
}

/**
 * The main command panel
 * @constructor
 * @param rootSelector {string} The command panel element selector
 * @param settings {"Object"|"()=>Object"} The settings json object or settings json factory function
 * @extends component.Form
 */
page.BulkPurchase.MainCommandPanel = function (rootSelector, settings) {
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

/**
 * The forex command panel
 * @constructor
 * @param rootSelector {string} The command panel element selector
 * @param settings {"Object"|"()=>Object"} The settings json object or settings json factory function
 * @extends component.Form
 */
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

/**
 * The payment command panel
 * @constructor
 * @param rootSelector {string} The command panel element selector
 * @param settings {"Object"|"()=>Object"} The settings json object or settings json factory function
 * @extends component.Form
 */
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
//#endregion

/**
 * A prototype for event handling mechanism for the BulkPurchase Page
 * @param bulkPurchasePage {page.BulkPurchase} The page instance
 */
page.BulkPurchase.Events = function BulkPurchaseEvents (bulkPurchasePage) {

    /**
     * A closure variable to hold reference for the execution context of instance
     * @type page.BulkPurchase.Events
     */
    let _this = this;

    /**
     * Initializes the page level event mechanism
     * @param settings {BulkPurchaseSettings} The page settings
     */
    this.initializePageEvents = function initializePageEvents(settings) {
        // On change event of the broker dropdown from billing form.
        bulkPurchasePage.billingForm.on("billingform.broker.change", function (selectedValue) {
            if (bulkPurchasePage.forex.commandPanel.isAddMode() || bulkPurchasePage.forex.commandPanel.isEditMode()) {
                bulkPurchasePage.forex.form.brokerFields.enable(selectedValue !== null);
            }
        });

        // On change event of the sub-broker dropdown from billing form
        bulkPurchasePage.billingForm.on("billingform.subbroker.change", function (selectedValue) {
            if (bulkPurchasePage.forex.commandPanel.isAddMode() || bulkPurchasePage.forex.commandPanel.isEditMode()) {
                bulkPurchasePage.forex.form.subBrokerFields.enable(selectedValue !== null);
            }
        });

        // On main add click
        bulkPurchasePage.commandPanel.on("command.add", function () {
            // Toggle command button appearance
            bulkPurchasePage.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Add);
            bulkPurchasePage.forex.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
            if (bulkPurchasePage.forex.summaryForm.getNetPayable() > 0) {
                bulkPurchasePage.payment.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
            }
            else {
                bulkPurchasePage.payment.commandPanel.setCommandMode(component.CommandPanel.CommandMode.None);
            }
            bulkPurchasePage.forex.dataTable.reloadTable();
            bulkPurchasePage.payment.dataTable.reloadTable();

            // Enable the main forms and disable the inner forms i.e. forex and payment
            bulkPurchasePage.enableForms(true, false, true, false);
        });

        // On main edit click
        bulkPurchasePage.commandPanel.on("command.edit", function () {
            // Toggle command button appearance
            bulkPurchasePage.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Edit);
            bulkPurchasePage.forex.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
            bulkPurchasePage.payment.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);

            // Enable the main forms and disable the inner forms i.e. forex and payment
            bulkPurchasePage.enableForms(true, false, true, false);
        });

        // On main delete click
        bulkPurchasePage.commandPanel.on("command.delete", function () {
        });

        // On main save click
        bulkPurchasePage.commandPanel.on("command.save", function () {
            let summaryFormData = bulkPurchasePage.forex.summaryForm.prepareFormData();
            bulkPurchasePage.billingForm.postSaveData(settings.saveUrl, summaryFormData);
        });

        // On main cancel click
        bulkPurchasePage.commandPanel.on("command.cancel", function () {
            bulkPurchasePage.billingForm.cancelSave(settings.cancelUrl);
            bulkPurchasePage.forex.summaryForm.cancelSave();
        });

        // On form successful save and cancel
        bulkPurchasePage.billingForm.on(["form.save.success", "form.cancel"], function () {
            bulkPurchasePage.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
            bulkPurchasePage.forex.commandPanel.setCommandMode(component.CommandPanel.CommandMode.None);
            bulkPurchasePage.payment.commandPanel.setCommandMode(component.CommandPanel.CommandMode.None);

            // Disable the main forms and the inner forms i.e. forex and payment
            bulkPurchasePage.enableForms(false, false, false, false);
        });
    }

    /**
     * Initializes the forex tab level event mechanism
     * @param settings {Object} The page settings
     */
    this.initializeForexEvents = function initializeForexEvents(settings) {
        bulkPurchasePage.forex.commandPanel.on("command.mode.none", function () {
            bulkPurchasePage.forex.form.enable(false);
        });

        bulkPurchasePage.forex.commandPanel.on("command.mode.view", function () {
            bulkPurchasePage.forex.form.enable(false);
        });

        // On Forex row select, load the details for selected record
        bulkPurchasePage.forex.dataTable.on("table.row.select", function (eventArgs) {
            bulkPurchasePage.forex.form.loadEditView(settings.forexDetailsSettings.editUrl, eventArgs, function () {
                // We will need to disable the form and set the command mode to view, in order to get
                // the desired behaviour
                if (bulkPurchasePage.forex.commandPanel.isViewMode()) {
                    bulkPurchasePage.forex.form.enable(false);
                    bulkPurchasePage.forex.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
                }
            }, null, true);
        });
    
        bulkPurchasePage.forex.dataTable.on("table.xhr", function (eventArgs) {
            let grossAmounts = eventArgs.data.map(x => x.Rate * x.Quantity);
            if ((grossAmounts || false) && grossAmounts.length > 0) {
                let totalGrossAmount = grossAmounts.reduce((a, b) => a + b) || 0;
                bulkPurchasePage.forex.summaryForm.setGrossAmount(totalGrossAmount);
            }
        });

        // On Forex add click, get add form from ajax
        bulkPurchasePage.forex.commandPanel.on("command.add", function () {
            bulkPurchasePage.forex.form.loadAddView(settings.forexDetailsSettings.addUrl);
        });

        bulkPurchasePage.forex.summaryForm.on("form.change", function () {
            let netPayable = bulkPurchasePage.forex.summaryForm.getNetPayable();
            if (netPayable > 0) {
                bulkPurchasePage.payment.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
            }
            else {
                bulkPurchasePage.payment.commandPanel.setCommandMode(component.CommandPanel.CommandMode.None);
            }
            bulkPurchasePage.calculateAmounts();
        });

        let forexAction = null;
        // On Forex form set to Add mode
        bulkPurchasePage.forex.form.on("form.add.success", function () {
            forexAction = "Add";
            bulkPurchasePage.forex.form.initializeFields();
            bulkPurchasePage.forex.form.enable(true);
            bulkPurchasePage.setBrokerFields();
            bulkPurchasePage.forex.commandPanel.initializeCommandButtons();
            bulkPurchasePage.forex.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Add);

            bulkPurchasePage.commandPanel.enableRoot(false);
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
            bulkPurchasePage.setBrokerFields();
            // Since the Save and Cancel buttons are part of the form, we will need to re-fetch the controls,
            // so as to maintian uniformity in command events. We are also setting the command mode.
            bulkPurchasePage.forex.commandPanel.initializeCommandButtons();
            bulkPurchasePage.forex.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Edit);

            bulkPurchasePage.commandPanel.enableRoot(false);
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
            if (bulkPurchasePage.commandPanel.isAddMode()) {
                bulkPurchasePage.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Add);
            }
            else if (bulkPurchasePage.commandPanel.isEditMode()) {
                bulkPurchasePage.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Edit);
            }
            bulkPurchasePage.commandPanel.enableRoot(true);
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
            if (bulkPurchasePage.commandPanel.isAddMode()) {
                bulkPurchasePage.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Add);
            }
            else if (bulkPurchasePage.commandPanel.isEditMode()) {
                bulkPurchasePage.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Edit);
            }
            bulkPurchasePage.commandPanel.enableRoot(true);
            forexAction = null;
        });
    }

    /**
     * Initializes the payment tab level event mechanism
     * @param settings {Object} The page settings
     */
    this.initializePaymentEvents = function initializePaymentEvents(settings) {
        bulkPurchasePage.payment.commandPanel.on("command.mode.none", function () {
            bulkPurchasePage.payment.form.enable(false);
        });

        bulkPurchasePage.payment.commandPanel.on("command.mode.view", function () {
            bulkPurchasePage.payment.form.enable(false);
        });

        // This event will fire only one time, when the DataTable control is initialized
        bulkPurchasePage.payment.dataTable.on("table.init.complete", function () {
            bulkPurchasePage.payment.dataTable.$root.css({ "width": "100%" });
        });
    
        bulkPurchasePage.payment.dataTable.on("table.xhr", function (eventArgs) {
            bulkPurchasePage.calculateAmounts();
        });

        // On Payment row select, load the details for selected record
        bulkPurchasePage.payment.dataTable.on("table.row.select", function (eventArgs) {
            bulkPurchasePage.payment.form.loadEditView(settings.paymentDetailsSettings.editUrl, eventArgs, function () {
                // We will need to disable the form and set the command mode to view, in order to get
                // the desired behaviour
                if (bulkPurchasePage.payment.commandPanel.isViewMode()) {
                    bulkPurchasePage.payment.form.enable(false);
                    bulkPurchasePage.payment.commandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
                    bulkPurchasePage.payment.form.initializeFields();
                }
            }, null, true);
        });
    
        // On Payment add click, get add form from ajax
        bulkPurchasePage.payment.commandPanel.on("command.add", function () {
            bulkPurchasePage.payment.form.loadAddView(settings.paymentDetailsSettings.addUrl);
        });

        bulkPurchasePage.payment.form.on("payment.fields.init", function () {
            bulkPurchasePage.calculateAmounts();
        });

        let paymentAction = null;
        // On Payment form set to Add mode
        bulkPurchasePage.payment.form.on("form.add.success", function () {
            paymentAction = "Add";
            bulkPurchasePage.payment.form.initializeFields();
            bulkPurchasePage.payment.form.enable(true);
            bulkPurchasePage.payment.commandPanel.initializeCommandButtons();
            bulkPurchasePage.payment.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Add);

            bulkPurchasePage.commandPanel.enableRoot(false);
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

            bulkPurchasePage.commandPanel.enableRoot(false);
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
            if (bulkPurchasePage.commandPanel.isAddMode()) {
                bulkPurchasePage.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Add);
            }
            else if (bulkPurchasePage.commandPanel.isEditMode()) {
                bulkPurchasePage.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Edit);
            }
            bulkPurchasePage.commandPanel.enableRoot(true);
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
            if (bulkPurchasePage.commandPanel.isAddMode()) {
                bulkPurchasePage.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Add);
            }
            else if (bulkPurchasePage.commandPanel.isEditMode()) {
                bulkPurchasePage.commandPanel.setCommandMode(component.CommandPanel.CommandMode.Edit);
            }
            bulkPurchasePage.commandPanel.enableRoot(true);
            paymentAction = null;
        });
    }

    /**
     * Initializes the internal components
     * @returns void
     */
    this.initialize = function initialize() {
        let settings = bulkPurchasePage.settings();
        _this.initializePageEvents(settings);
        _this.initializeForexEvents(settings);
        _this.initializePaymentEvents(settings);
    }
}

/**
 * A class for containing datatable cell rendering logic for BulkPurchasePage Forex tab
 * @constructor
 * @param bulkPurchasePage {page.BulkPurchase} The page instance
 */
page.BulkPurchase.ForexDataTableHelper = function ForexDataTableHelper (bulkPurchasePage) {
    component.DataTable.CellFormatHelper.call(this, bulkPurchasePage.forex.dataTable);

    /**
     * A closure variable for holding a reference to the DataTableHelper class
     * @type page.BulkPurchase.DataTableHelper
     */
    let _this = this;

    this.renderCurrencyName = function (data, type, row, meta) {
        let currencyNames = bulkPurchasePage.forex.form.$currencyName.optionValues();
        return currencyNames[data];
    }

    this.renderCurrencyNote = function (data, type, row, meta) {
        let currencyNotes = bulkPurchasePage.forex.form.$currencyNote.optionValues();
        return currencyNotes[data];
    }
}
page.BulkPurchase.ForexDataTableHelper.prototype.__proto__ = component.DataTable.CellFormatHelper.prototype;

/**
 * A class for containing datatable cell rendering logic for BulkPurchasePage Payment tab
 * @constructor
 * @param bulkPurchasePage {page.BulkPurchase} The page instance
 */
page.BulkPurchase.PaymentDataTableHelper = function PaymentDataTableHelper (bulkPurchasePage) {
    component.DataTable.CellFormatHelper.call(this, bulkPurchasePage.payment.dataTable);

    /**
     * A closure variable for holding a reference to the DataTableHelper class
     * @type page.BulkPurchase.DataTableHelper
     */
    let _this = this;

    this.renderCashBank = function (data, type, row, meta) {
        let cashBankValues = bulkPurchasePage.payment.form.$cashBank.optionValues();
        return cashBankValues[data];
    }

    this.renderType = function (data, type, row, meta) {
        let typeValues = bulkPurchasePage.payment.form.$type.optionValues();
        return typeValues[data];
    }
}

page.BulkPurchase.PaymentDataTableHelper.prototype.__proto__ = component.DataTable.CellFormatHelper.prototype;