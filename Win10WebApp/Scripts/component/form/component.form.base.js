var component = component || {};
component.Form = function (rootSelector, settings) {
    component.ViewableControl.call(this, rootSelector, settings);
    let _this = this;
    let base = {};

    _this.handlers = new component.Form.Events(_this);
    _this.writeMode = component.Form.WriteMode.None;

    let defaultSettings = {
    };

    base.settings = _this.settings;
    _this.settings = function () {
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

    let loadAddViewSuccessHandler = function (newHtml) {
        _addViewHtml = newHtml;
        _this.writeMode = component.Form.WriteMode.Add;
        _this.enable(true);
        _this.emit("form.add.success");
        _this.focusOnFirstControl();
    }

    _this.focusOnFirstControl = function () {
        _this.$root.find("input:visible:eq(0)").focus();
    }

    _this.loadAddView = function (addUrl, success, error) {
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
    _this.loadEditView = function (editUrl, data, success, error) {
        let _editUrl = lib.replaceTokens(editUrl, data);
        _this.loadPartialView(_editUrl, null, function (successData) {
            _editViewHtml = successData;
            _this.writeMode = component.Form.WriteMode.Edit;
            _this.enable(false);
            _this.emit("form.edit.success");
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

    _this.prepareFormData = function (additionalData) {
        let wasEnabled = _this.enable();
        if (wasEnabled === false) _this.enable(true);
        let formData = _this.$root.serializeJson();
        if (wasEnabled === false) _this.enable(false);
        additionalData = additionalData || {};
        for (var key in formData) {
            additionalData[key] = formData[key];
        }
        return additionalData;
    }

    _this.postSaveData = function (saveUrl, data, success, error) {
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

    _this.deleteRecord = function (deleteUrl, data, success, error) {
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

    _this.cancelSave = function () {
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

    _this.initialize = function () {

    }
}

component.Form.WriteMode = {
    None: 0,
    Add: 1,
    Edit: 2
};