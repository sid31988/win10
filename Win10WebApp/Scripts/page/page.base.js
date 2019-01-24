var page;
if (page === undefined || page === null) {
    page = {};
}

page.Base = function (rootSelector, dateFormat) {
    let _this = this;

    _this.$root = $(rootSelector);

    _this.dtContainers = {};

    _this.registerDataTable = function (name, containerSelector, dataTableSelector, editDeleteCommandTemplateSelector, addEditFormSelector, saveButtonSelector, cancelButtonSelector, dataMode) {
        let dtContainer = new dataTable.Container(containerSelector, dataTableSelector, dateFormat, editDeleteCommandTemplateSelector, addEditFormSelector, saveButtonSelector, cancelButtonSelector, dataMode);
        _this.dtContainers[name] = dtContainer;
        return dtContainer;
    }

    let formatColumnSettings = function (columnSettings, dtContainer) {
        for(let i = 0; i < columnSettings.length; i++) {
            let columnSetting = columnSettings[i];
            for(let key in columnSetting) {
                if (key === "render") {
                    let value = columnSetting[key];
                    let valueParts = value.split(".");
                    if(valueParts[0] === "$dt") {
                        if (valueParts[1] === "helper") {
                            if (typeof valueParts[2] === "string" && valueParts[2].length > 0) {
                                let newValue = dtContainer.helper[valueParts[2]];
                                if (newValue !== undefined) {
                                    columnSetting[key] = newValue;
                                }
                                else {
                                    throw "Invalid render method: " + valueParts[2];
                                }
                            }
                        }
                    }
                }
            }
        }
        return columnSettings;
    }

    _this.initDataTable = function (name, columnSettings, ajaxUrl) {
        let dtContainer = _this.dtContainers[name];
        formatColumnSettings(columnSettings, dtContainer);
        dtContainer.initDataTable(columnSettings, ajaxUrl);
        return dtContainer;
    }
}