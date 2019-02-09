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
        if (settings.addCommandButtonSelector || null !== null) {
            var $el = _this.$root.find(settings.addCommandButtonSelector);
            if ($el.length > 0) {
                return $el;
            }
        }
        return $("<button></button>");
    }

    let getEditCommandButton = function () {
        if  (settings.editCommandButtonSelector || null !== null) {
            var $el = _this.$root.find(settings.editCommandButtonSelector);
            if ($el.length > 0) {
                return $el;
            }
        }
        return $("<button></button>");
    }

    let getDeleteCommandButton = function () {
        if (settings.deleteCommandButtonSelector || null !== null) {
            var $el = _this.$root.find(settings.deleteCommandButtonSelector);
            if ($el.length > 0) {
                return $el;
            }
        }
        return $("<button></button>");
    }

    let getSaveCommandButton = function () {
        if (settings.saveCommandButtonSelector || null !== null) {
            var $el = _this.$root.find(settings.saveCommandButtonSelector);
            if ($el.length > 0) {
                return $el;
            }
        }
        return $("<button></button>");
    }

    let getCancelCommandButton = function () {
        if (settings.cancelCommandButtonSelector || null !== null) {
            var $el = _this.$root.find(settings.cancelCommandButtonSelector);
            if ($el.length > 0) {
                return $el;
            }
        }
        return $("<button></button>");
    }

    _this.initializeCommandButtons = function () {
        _this.getRootElement();
        _this.$addCommandButton = getAddCommandButton();
        _this.$editCommandButton = getEditCommandButton();
        _this.$deleteCommandButton = getDeleteCommandButton();
        _this.$saveCommandButton = getSaveCommandButton();
        _this.$cancelCommandButton = getCancelCommandButton();
        _this.handlers = new component.CommandPanel.EventHandlers(_this);
    }

    _this.initialize = function () {
        _this.initializeCommandButtons();
        _this.setCommandMode(component.CommandPanel.CommandMode.None);
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

    _this.enableViewCommands = function (enable) {
        _this.$addCommandButton.enable(enable);
        _this.$editCommandButton.enable(enable);
        _this.$deleteCommandButton.enable(enable);
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

    _this.enableAddEditCommands = function (enable) {
        _this.$saveCommandButton.enable(enable);
        _this.$cancelCommandButton.enable(enable);
    }

    _this.enable = function (enable) {
        _this.enableViewCommands(enable);
        _this.enableAddEditCommands(enable);
    }

    _this.enableRoot = function (enable) {
        _this.$root.enable(enable, false);
    }

    _this.setCommandModeToView = function () {
        _this.enableViewCommands(true);
        _this.toggleViewCommands(true);
        _this.enableAddEditCommands(false);
        _this.toggleAddEditCommands(false);
        _this.emit("command.mode.view");
    }

    _this.setCommandModeToAdd = function () {
        _this.enableViewCommands(false);
        _this.toggleViewCommands(true);
        _this.enableAddEditCommands(true);
        _this.toggleAddEditCommands(true);
        _this.emit("command.mode.add");
    }

    _this.setCommandModeToEdit = function () {
        _this.enableViewCommands(false);
        _this.toggleViewCommands(true);
        _this.enableAddEditCommands(true);
        _this.toggleAddEditCommands(true);
        _this.emit("command.mode.edit");
    }

    _this.setCommandModeToNone = function () {
        _this.enableViewCommands(false);
        _this.toggleViewCommands(false);
        _this.enableAddEditCommands(false);
        _this.toggleAddEditCommands(false);
        _this.emit("command.mode.none");
    }

    let _commandMode = null;
    _this.setCommandMode = function (commandMode) {
        _commandMode = commandMode;
        switch (commandMode) {
            // Show only Add, Edit and Delete buttons
            case component.CommandPanel.CommandMode.View:
                _this.setCommandModeToView();
            break;
            // Show Add, Edit and Delete buttons in disabled mode
            // Show Save and Cancel in enabled mode
            case component.CommandPanel.CommandMode.Add:
                _this.setCommandModeToAdd();
            break;
            // Show Add, Edit and Delete buttons in disabled mode
            // Show Save and Cancel in enabled mode
            case component.CommandPanel.CommandMode.Edit:
                _this.setCommandModeToEdit();
            break;
            // Hide all the command buttons
            case component.CommandPanel.CommandMode.None:
                _this.setCommandModeToNone();
            break;
            default:
                throw "Invalid command mode."
        }
    }
    _this.isAddMode = function () {
        return _commandMode == component.CommandPanel.CommandMode.Add;
    }
    _this.isEditMode = function () {
        return _commandMode == component.CommandPanel.CommandMode.Edit;
    }
    _this.isViewMode = function () {
        return _commandMode == component.CommandPanel.CommandMode.View;
    }
    _this.isNoneMode = function () {
        return _commandMode == component.CommandPanel.CommandMode.None;
    }
}

component.CommandPanel.CommandMode = {
    None: 0,
    Add: 1,
    Edit: 2,
    View: 3
};