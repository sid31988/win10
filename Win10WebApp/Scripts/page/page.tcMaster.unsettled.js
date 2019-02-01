var page = page || {};
page.tcMaster = page.tcMaster || {};
page.tcMaster.Unsettled = function (rootSelector, settings) {
    page.tcMaster.Base.call(this, rootSelector, settings);
    let _this = this;
    _this.pageName = "Unsettled";
}
page.tcMaster.Unsettled.prototype.__proto__ = page.tcMaster.Base.prototype;