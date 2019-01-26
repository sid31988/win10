var page;
if (page === undefined || page === null) {
    page = {};
}

page.Base = function (rootSelector, dateFormat) {
    let _this = this;

    _this.$root = $(rootSelector);

    _this.dtContainers = {};

    _this.registerDataTable = function (name, containerSelector, dataTableSelector, editDeleteCommandTemplateSelector, addEditFormSelector, saveButtonSelector, cancelButtonSelector, dataMode) {
        let dtContainer = new Container(containerSelector, dataTableSelector, dateFormat, editDeleteCommandTemplateSelector, addEditFormSelector, saveButtonSelector, cancelButtonSelector, dataMode);
        _this.dtContainers[name] = dtContainer;
        return dtContainer;
    }

    _this.initDataTable = function (name, columnSettings, ajaxUrl) {
        let dtContainer = _this.dtContainers[name];
        dtContainer.initDataTable(columnSettings, ajaxUrl);
        return dtContainer;
    }
}