var component = component || {};
component.Page = function (rootSelector, settings) {
    component.ViewableControl.call(this, rootSelector, settings);

    let _this = this;
    let base = {};
 
    let defaultSettings = {
    };

    base.settings = _this.settings;
    _this.settings = function () {
        let settings = base.settings();
        settings = lib.getOrDefault(settings, defaultSettings);
        return settings;
    }
}