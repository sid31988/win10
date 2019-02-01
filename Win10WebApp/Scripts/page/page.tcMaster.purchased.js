var page = page || {};
page.tcMaster = page.tcMaster || {};
page.tcMaster.Purchased = function (rootSelector, settings) {
    page.tcMaster.Base.call(this, rootSelector, settings);
    let _this = this;
    _this.pageName = "Purchased";
}
page.tcMaster.Purchased.prototype.__proto__ = page.tcMaster.Base.prototype;