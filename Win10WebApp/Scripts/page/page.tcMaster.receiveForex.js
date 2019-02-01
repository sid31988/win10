var page = page || {};
page.tcMaster = page.tcMaster || {};
page.tcMaster.ReceiveForex = function (rootSelector, settings) {
    page.tcMaster.Base.call(this, rootSelector, settings);
    let _this = this;
    _this.pageName = "Receive Forex";
}
page.tcMaster.ReceiveForex.prototype.__proto__ = page.tcMaster.Base.prototype;