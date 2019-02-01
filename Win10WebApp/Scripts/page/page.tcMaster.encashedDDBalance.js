var page = page || {};
page.tcMaster = page.tcMaster || {};
page.tcMaster.EncashedDDBalance = function (rootSelector, settings) {
    page.tcMaster.Base.call(this, rootSelector, settings);
    let _this = this;
    _this.pageName = "Encashed DD Balance";
}
page.tcMaster.EncashedDDBalance.prototype.__proto__ = page.tcMaster.Base.prototype;