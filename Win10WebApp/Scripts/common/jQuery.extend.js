/**
 * Toggles accessibility of the jquery control and its inner control(s) recursively
 * @callback enableCallback
 * @param {boolean} toggle - true to enable and false to disable
 * @param {boolean} recursive - true to enable/disable the inner elements and false to exclude them
 * @returns {void} void
 *//**
 * Gets the input fields' data in a json format of { name: value } pair
 * @callback serializeJsonCallback
 * @returns {Object} Object
 *//**
 * The ajax load success callback
 * @callback ajaxLoadSucccessCallback
 * @param {string} data The inner html
 * @returns {void} void
 *//**
 * The ajax load error callback
 * @callback ajaxLoadErrorCallback
 * @param {XmlHttpRequest} xhr The error response
 * @param {string} status The error status text
 * @param {Error} ex The error object
 * @returns {void} void
 *//**
 * Sets the html of the container control, using the response fetched from the XmlHttpRequest or AJAX call
 * @callback ajaxLoadCallback
 * @param {string} actionUrl - The ajax url for getting the inner html
 * @param {Object} data - A json data to be sent or posted along with the XmlHttpRequest or AJAX request
 * @param {ajaxLoadSucccessCallback} onSuccess - The success callback
 * @param {ajaxLoadErrorCallback} onError - The error callback
 * @returns {void} void
 *//**
 * Toggles the readonly attribute of input elements
 * @callback readonlyCallback
 * @param {boolean} [readonly=true] - true to mark as readonly and false to remove the flag. Default true.
 * @returns {void} void
 *//**
 * Gets an array of form field elements contained
 * @callback formFieldsCallback
 * @returns {Array<HTMLElement>} HTMLElement[]
 *//**
 * Gets an array of option values from the select element
 * @callback optionValuesCallback
 * @returns {Array<{key: string, value: string}>} {key: string, value: string}[]
 *//**
 * The extended JQuery
 * @typedef {Object} JQueryStaticExtend
 * @property {enableCallback} enable - Toggles accessibility of the jquery control and its inner control(s) recursively
 * @property {serializeJsonCallback} serializeJson - Gets the input fields' data in a json format of { name: value } pair
 * @property {ajaxLoadCallback} ajaxLoad - Sets the html of the container control, using the response fetched from the XmlHttpRequest or AJAX call
 * @property {readonlyCallback} readonly - Toggles the readonly attribute of input elements
 * @property {formFieldsCallback} formFields - Toggles the readonly attribute of input elements
 * @property {optionValuesCallback} optionValues - Gets an array of option values from the select element
 */

/**
 * @type {formFieldsCallback}
 */
$.fn.formFields = function formFields() {
    return this.find("input,select,textarea").toArray();
};

/**
 * @type {serializeJsonCallback}
 */
$.fn.serializeJson = function serializeJson() {
    let formElements = this.formFields();
    let formData = formElements.map(x => { let data = {}; data.name = x.name; data.value = x.value; return data; });
    var formJson = {};
    for (let i = 0; i < formData.length; i++) {
        let key = formData[i].name;
        let value = formData[i].value;
        if (key !== null && key !== undefined && value !== null && value !== undefined) {
            formJson[key] = value;
        }
    }
    return formJson;
};

/**
 * @type {ajaxLoadCallback}
 */
$.fn.ajaxLoad = function (actionUrl, data, onSuccess, onError) {
    let _this = this;
    lib.invokeAction(actionUrl, "GET", data, function(result) {
        _this.html(result);
        if (onSuccess !== undefined) onSuccess(result);
    }, function (xhr, status, ex) {
        if (onError !== undefined) onError(xhr, status, ex);
    });
}

/**
 * @type {enableCallback}
 */
$.fn.enable = function enable(toggle, recursive) {
    recursive = recursive === undefined || recursive === null ? true : recursive;
    if (toggle) {
        this.removeAttr("disabled");
        if (recursive) this.find("*").removeAttr("disabled");
    }
    else {
        this.attr("disabled", "disabled");
        this.find("*").attr("disabled", "disabled");
    }
}

/**
 * @type {readonlyCallback}
 */
$.fn.readonly = function readonly(readonly) {
    readonly = readonly === null || readonly === undefined ? true : readonly;
    if (readonly) {
        this.attr("readonly", "readonly");
    }
    else {
        this.removeAttr("readonly");
    }
}

/**
 * @type {optionValuesCallback}
 */
$.fn.optionValues = function optionValues() {
    let options = this.find("[value]").toArray();
    let brokerOptions = options.map(x => {
        let obj = {};
        obj[x.value] = x.innerHTML;
        return obj;
    }).reduce((prev, cur) => {
        for(var key in cur) {
            prev[key] = cur[key];
        }
        return prev;
    });
    return brokerOptions;
}