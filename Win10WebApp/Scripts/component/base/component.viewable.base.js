var component = component || {};
component.ViewableControl = function (rootSelector, settings) {
    component.Base.call(this, rootSelector, settings);

    let _this = this;
    let base = {};

    _this.loadPartialViewSuccessEventHandler = function (successResult) { }

    let defaultSettings = {
    };

    base.settings = _this.settings;

    /**
     * A json object or a json factory function, which contains component level settings.
     * @override component.Base.settings
     * @returns {Object} Object
     */
    this.settings = function () {
        let settings = base.settings();
        settings = lib.getOrDefault(settings, defaultSettings);
        return settings;
    }

    _this.loadPartialView = function (actionUrl, data, onSuccess, onError) {
        _this.$root.ajaxLoad(actionUrl, data, function (successResult) {
            _this.loadPartialViewSuccessEventHandler(successResult);
            if(onSuccess !== undefined && onSuccess !== null) {
                onSuccess(successResult);
            }
        }, onError);
    }
}