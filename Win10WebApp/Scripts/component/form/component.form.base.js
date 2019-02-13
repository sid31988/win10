/**
 * The component namespace
 */
var component = component || {};
/**
 * The form component constructor function
 * @constructor
 * @extends component.ViewableControl
 * @param rootSelector {string} The root element jQuery selector
 * @param settings {Object} The component level settings
 */
component.Form = function Form(rootSelector, settings) {
    component.ViewableControl.call(this, rootSelector, settings);
    /**
     * A closure variable to hold the object scope reference.
     * @type component.Form
     */
    let _this = this;

    /**
     * A closure variable to host the base class functionality
     * @type component.ViewableControl
     */
    let base = {};

    /**
     * The component event handler
     * @type component.Form.Events
     */
    this.handlers = new component.Form.Events(this);

    /**
     * The form component status i.e. None, Add and Edit
     * @type component.Form.WriteMode
     */
    this.writeMode = component.Form.WriteMode.None;

    /**
     * The component level default settings
     * @type Object
     */
    let defaultSettings = { };

    base.settings = this.settings;
    this.settings = function () {
        let settings = base.settings();
        settings = lib.getOrDefault(settings, defaultSettings);
        return settings;
    }

    let _viewBeforeAdd = null;
    let backupViewBeforeAdd = function () {
        _viewBeforeAdd = _this.$root.html();
    }
    let restoreViewBeforeAdd = function() {
        _this.$root.html(_viewBeforeAdd);
    }

    let _addViewHtml = null;

    let loadAddViewSuccessHandler = function (newHtml, htmlOnly) {
        _addViewHtml = newHtml;
        if (!htmlOnly) {
            _this.enable(true);
            _this.writeMode = component.Form.WriteMode.Add;
            _this.emit("form.add.success");
            _this.focusOnFirstControl();
        }
    }

    /**
     * Sets focus on the first visible and enabled form field
     */
    this.focusOnFirstControl = function focusOnFirstControl() {
        _this.$root.find("select:visible,input:visible,textarea:visible").first().focus();
    }

    /**
     * The ajax success callback
     * @param successData {string} The ajax response
     */
    function success(successData) { }
    /**
     * The ajax error callback
     * @param xhr {XmlHttpResponse} The error response
     * @param status {string} The error resposne status
     * @param ex {Error} The error or exception object
     */
    function error(xhr, status, ex) { }

    /**
     * Makes an ajax call to load the add view i.e. empty form
     * @param addUrl {string} The add ajax url
     * @param data {Object} The data to be passed along with the ajax request
     * @param success {success} The callback that handles the ajax success response
     * @param error {error} The callback that handles the ajax error response
     * @param htmlOnly {boolean} true to render only the html and false to render the html and raise the event
     */
    this.loadAddView = function loadAddView(addUrl, success, error, htmlOnly) {
        htmlOnly = htmlOnly === null || htmlOnly === undefined ? false : htmlOnly;
        try {
            backupViewBeforeAdd();
            if (_addViewHtml == null) {
                _this.loadPartialView(addUrl, null, function (newHtml) {
                    loadAddViewSuccessHandler(newHtml);
                    if (typeof success === "function") {
                        success(_addViewHtml);
                    }
                }, function (xhr, status, ex) {
                    _this.emit("form.add.error", ex);
                    if (typeof error === "function") {
                        error(xhr, status, ex);
                    }
                });
            }
            else {
                _this.$root.html(_addViewHtml);
                loadAddViewSuccessHandler(_addViewHtml);
                if (typeof success === "function") {
                    success(_addViewHtml);
                }
            }
        }
        catch (ex) {
            if (typeof error === "function") {
                error(ex);
            }
            else {
                throw ex;
            }
        }
    }

    let _editViewHtml = null;
    /**
     * Makes an ajax call to load the edit view for a data record
     * @param editUrl {string} The edit ajax url
     * @param data {Object} The data to be passed along with the ajax request
     * @param success {success} The callback that handles the ajax success response
     * @param error {error} The callback that handles the ajax error response
     * @param htmlOnly {boolean} true to render only the html and false to render the html and raise the event
     */
    this.loadEditView = function loadEditView(editUrl, data, success, error, htmlOnly) {
        htmlOnly = htmlOnly === null || htmlOnly === undefined ? false : htmlOnly;
        let _editUrl = lib.replaceTokens(editUrl, data);
        _this.loadPartialView(_editUrl, null, function (successData) {
            _editViewHtml = successData;
            _this.enable(false);
            if (!htmlOnly) {
                _this.writeMode = component.Form.WriteMode.Edit;
                _this.emit("form.edit.success");
            }
            if (typeof success === "function") {
                success(successData);
            }
        }, function (xhr, status, ex) {
            _this.emit("form.edit.error", ex);
            if (typeof error === "function") {
                error(xhr, status, ex);
            }
        });
    }

    /**
     * Gets a json representation of the form fields
     * @param additionalData {Object} This json object will be merged with the final output
     */
    this.prepareFormData = function prepareFormData(additionalData) {
        //let wasEnabled = _this.enable();
        //if (wasEnabled === false) _this.enable(true);
        let formData = _this.$root.serializeJson();
        //if (wasEnabled === false) _this.enable(false);
        additionalData = additionalData || {};
        for (var key in formData) {
            additionalData[key] = formData[key];
        }
        return additionalData;
    }

    /**
     * Makes an ajax call to save the form data
     * @param saveUrl {string} The save ajax url
     * @param data {Object} The data to be passed along with the ajax request
     * @param success {success} The callback that handles the ajax success response
     * @param error {error} The callback that handles the ajax error response
     */
    this.postSaveData = function postSaveData(saveUrl, data, success, error) {
        let postData = _this.prepareFormData(data);
        let _saveUrl = lib.replaceTokens(saveUrl, postData);
        lib.invokeAction(_saveUrl, "POST", postData, function (successData) {
            _this.enable(false);
            _this.writeMode = component.Form.WriteMode.None;
            _this.emit("form.save.success", successData.data);
            if (typeof success === "function") {
                success(successData);
            }
        }, function (xhr, status, ex) {
            _this.emit("form.save.error", ex);
            if (typeof error === "function") {
                error(xhr, status, ex);
            }
        });
    }

    /**
     * Makes an ajax call to delete the form data
     * @param deleteUrl {string} The delete ajax url
     * @param data {Object} The data to be passed along with the ajax request
     * @param success {success} The callback that handles the ajax success response
     * @param error {error} The callback that handles the ajax error response
     */
    this.deleteRecord = function deleteRecord(deleteUrl, data, success, error) {
        let postData = _this.prepareFormData(data);
        let _deleteUrl = lib.replaceTokens(deleteUrl, postData);
        lib.invokeAction(_deleteUrl, "POST", postData, function (successData) {
            _this.emit("form.delete.success");
            if (typeof success === "function") {
                success(successData);
            }
        }, function (xhr, status, ex) {
            _this.emit("form.delete.error", ex);
            if (typeof error === "function") {
                error(xhr, status, ex);
            }
        });
    }

    /**
     * Cancels the form activity and restores the previous state
     */
    this.cancelSave = function cancelSave() {
        switch(_this.writeMode) {
            case component.Form.WriteMode.Add:
                //_this.$root.html(_addViewHtml);
                restoreViewBeforeAdd();
                _this.enable(false);
            break;
            case component.Form.WriteMode.Edit:
                _this.$root.html(_editViewHtml);
                _this.enable(false);
            break;
            default:
            break;
        }
        _this.writeMode = component.Form.WriteMode.None;
        _this.emit("form.cancel");
    }

    this.raiseChange = function () {
        let newFormData = _this.prepareFormData();
        _this.emit("form.change", newFormData);
    }

    this.trackChanges = function () {
        try {
            _this.trackChanges.lock = _this.trackChanges.lock || false;
            if (!_this.trackChanges.lock) {
                _this.trackChanges.formData = _this.trackChanges.formData || _this.prepareFormData();
                let newFormData = _this.prepareFormData();
                let oldDataJsonStr = JSON.stringify(_this.trackChanges.formData);
                let newDataJsonStr = JSON.stringify(newFormData);
                if (oldDataJsonStr !== newDataJsonStr) {
                    _this.trackChanges.formData = newFormData;
                    _this.emit("form.change", newFormData);
                }
                _this.trackChanges.lock = false;
                _this.trackChanges.timeoutId = _this.trackChanges.timeoutId || 0;
                clearTimeout(_this.trackChanges.timeoutId);
                _this.trackChanges.timeoutId = setTimeout(function () {
                    _this.trackChanges();
                }, 500);
            }
        }
        catch (ex) {
            // No error messages
        }
    }

    //this.trackChanges();

    /**
     * Initializes the component, inner elements and other settings
     */
    this.initialize = function initialize() {
    }

    /**
     * Resets the form fields
     * @returns {void} void
     */
    this.reset = function reset() {
        let formFields = this.$root.formFields();
        setTimeout(function() {
            for(var i = 0; i < formFields.length; i++) {
                switch (formFields[i].tagName.toLowerCase()) {
                    case "input":
                        $(formFields[i]).val("");
                        break;
                    case "select":
                        let $firstOption = $(formFields[i]).find("option:eq(0)");
                        $(formFields[i]).val($firstOption.val());
                        break;
                    case "textarea":
                        $(formFields[i]).val("");
                        break;
                }
            }
        }, 0);
    }
}

component.Form.WriteMode = {
    None: 0,
    Add: 1,
    Edit: 2
};