var page;
if (page === undefined || page === null) {
    page = {};
}

page.ReceiverTrustMaster = function(rootSelector, receiverTrustTableSelector, dateFormat, editDeleteCommandTemplateSelector, addEditFormSelector, saveButtonSelector, cancelButtonSelector, dataMode) {
    page.Base.call(this, rootSelector, dateFormat);
    let _this = this;
    _this.name = "ReceiverTrustMaster";
    _this.reciverTrustTable = _this.registerDataTable(_this.name, rootSelector, receiverTrustTableSelector, editDeleteCommandTemplateSelector, addEditFormSelector, saveButtonSelector, cancelButtonSelector, dataMode);

    this.initReceiverTrustDataTable = function (columnSettings, ajaxUrl) {
        _this.initDataTable(_this.name, columnSettings, ajaxUrl);
    }
}

page.ReceiverTrustMaster.prototype.__proto__ = page.Base.prototype;