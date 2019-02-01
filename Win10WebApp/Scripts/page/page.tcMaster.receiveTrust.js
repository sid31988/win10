var page = page || {};
page.tcMaster = page.tcMaster || {};
page.tcMaster.ReceiveTrust = function (rootSelector, settings) {
    page.tcMaster.Base.call(this, rootSelector, settings);
    let _this = this;
    _this.pageName = "Receive Trust Master";
}
page.tcMaster.ReceiveTrust.prototype.__proto__ = page.tcMaster.Base.prototype;