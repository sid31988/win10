var dataTable;
if(dataTable === undefined || dataTable === null) {
    dataTable = {};
}

dataTable.Helper = function (dateFormat, editDeleteCommandTemplateSelector) {
    let _this = this;

    _this.dateFormat = dateFormat;
    _this.$editDeleteCommandTemplate = $(editDeleteCommandTemplateSelector);

    _this.renderDate = function (data, type, row, meta) {
        return data.length > 0 ? lib.formatDateString(new Date(parseInt(data.replace("/Date(", "").replace(")/", ""), 10)), _this.dateFormat) : data;
    }

    _this.renderEditDeleteCommands = function (data, type, row, meta) {
        if (type !== "display") return "";
        var templateHtml = _this.$editDeleteCommandTemplate.html();
        templateHtml = replaceAll(templateHtml, "[key]", row.Id);
        return templateHtml;
    }
}