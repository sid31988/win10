var dataTable;
if(dataTable === undefined || dataTable === null) {
    dataTable = {};
}

dataTable.Editor = function (rootSelector, saveButtonSelector, cancelButtonSelector, dataMode, saveUrl) {
    control.ViewableControl.call(this, rootSelector);

    let _this = this;
    _this.$root = $(rootSelector);
    _this.$saveButton = null;
    _this.$cancelButton = null;
    _this.dataMode = dataMode;
    _this.onSave = new lib.EventEmitter("dataTable.editor.save");
    _this.onCancel = new lib.EventEmitter("dataTable.editor.cancel");

    _this.setDataMode = function (dataMode) {
        _this.dataMode = dataMode;
    }

    let bindAddEditCommandEvents = function () {
        let $saveButton = _this.$root.find(saveButtonSelector);
        let $cancelButton = _this.$root.find(cancelButtonSelector);
        $saveButton.off("click").on("click", _this.saveClickEventHandler);
        $cancelButton.off("click").on("click", _this.cancelClickEventHandler);
    }

    _this.loadPartialViewSuccessEventHandler = function (succesResult) {
        bindAddEditCommandEvents();
    }

    _this.saveClickEventHandler = function (clickEvent) {
        let formData = _this.$root.serializeJson();
        lib.invokeAction(saveUrl, "POST", formData, function (saveResponse) {
            _this.onSave.dispatchEvent(saveResponse);
        });
    }

    _this.cancelClickEventHandler = function (clickEvent) {
        _this.onCancel.dispatchEvent();
    }
}

dataTable.Editor.prototype.__proto__ = control.ViewableControl.prototype;