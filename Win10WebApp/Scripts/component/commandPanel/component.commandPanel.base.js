var component = component || {};

component.CommandPanel = function (rootSelector, settings) {
    component.Base.call(this, rootSelector, settings);
    let _this = this;
    let base = {};

    _this.$addCommandButton = null;
    _this.$editCommandButton = null;
    _this.$deleteCommandButton = null;
    _this.$saveCommandButton = null;
    _this.$cancelCommandButton = null;
    _this.handlers = null;

    let defaultSettings = {
        addCommandButtonSelector: "button.editor_add",
        editCommandButtonSelector: "button.editor_edit",
        deleteCommandButtonSelector: "button.editor_delete",
        saveCommandButtonSelector: "button.editor_save",
        cancelCommandButtonSelector: "button.editor_cancel"
    };

    base.settings = _this.settings;
    _this.settings = function () {
        let settings = base.settings();
        settings = lib.getOrDefault(settings, defaultSettings);
        return settings;
    }

    let getAddCommandButton = function () {
        if (settings.addCommandButtonSelector === null) {
            throw "Missing add command button selector";
        }
        else {
            var $el = _this.$root.find(settings.addCommandButtonSelector);
            if ($el.length === 0) {
                throw "Unable to find element '" + settings.addCommandButtonSelector + "'"
            }
            return $el;
        }
    }

    let getEditCommandButton = function () {
        if  (settings.editCommandButtonSelector === null) {
            throw "Missing edit command button selector";
        }
        else {
            var $el = _this.$root.find(settings.editCommandButtonSelector);
            if ($el.length === 0) {
                throw "Unable to find element '" + settings.editCommandButtonSelector + "'"
            }
            return $el;
        }
    }

    let getDeleteCommandButton = function () {
        if (settings.deleteCommandButtonSelector == null) {
            throw "Missing delete command button selector";
        }
        else {
            var $el = _this.$root.find(settings.deleteCommandButtonSelector);
            if ($el.length === 0) {
                throw "Unable to find element '" + settings.deleteCommandButtonSelector + "'"
            }
            return $el;
        }
    }

    let getSaveCommandButton = function () {
        if (settings.saveCommandButtonSelector == null) {
            throw "Missing save command button selector";
        }
        else {
            var $el = _this.$root.find(settings.saveCommandButtonSelector);
            if ($el.length === 0) {
                throw "Unable to find element '" + settings.saveCommandButtonSelector + "'"
            }
            return $el;
        }
    }

    let getCancelCommandButton = function () {
        if (settings.cancelCommandButtonSelector == null) {
            throw "Missing cancel command button selector";
        }
        else {
            var $el = _this.$root.find(settings.cancelCommandButtonSelector);
            if ($el.length === 0) {
                throw "Unable to find element '" + settings.cancelCommandButtonSelector + "'"
            }
            return $el;
        }
    }

    _this.initialize = function () {
        _this.$addCommandButton = getAddCommandButton();
        _this.$editCommandButton = getEditCommandButton();
        _this.$deleteCommandButton = getDeleteCommandButton();
        _this.$saveCommandButton = getSaveCommandButton();
        _this.$cancelCommandButton = getCancelCommandButton();
        _this.handlers = new component.CommandPanel.EventHandlers(_this);
    }

    _this.toggleViewCommands = function (toggle) {
        if (toggle) {
            _this.$addCommandButton.show();
            _this.$editCommandButton.show();
            _this.$deleteCommandButton.show();
        }
        else {
            _this.$addCommandButton.hide();
            _this.$editCommandButton.hide();
            _this.$deleteCommandButton.hide();
        }
    }

    _this.toggleAddEditCommands = function (toggle) {
        if (toggle) {
            _this.$saveCommandButton.show();
            _this.$cancelCommandButton.show();
        }
        else {
            _this.$saveCommandButton.hide();
            _this.$cancelCommandButton.hide();
        }
    }
}