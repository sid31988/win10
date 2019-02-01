var page = page || {};
page.tcMaster = page.tcMaster || {};
page.tcMaster.UnsettledForexCard = function (rootSelector, settings) {
    page.tcMaster.Base.call(this, rootSelector, settings);
    let _this = this;
    _this.pageName = "Unsettled Forex Card";
}
page.tcMaster.UnsettledForexCard.prototype.__proto__ = page.tcMaster.Base.prototype;