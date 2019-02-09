var component = component || {};
component.DataTable.CellFormatHelper = function (dataTableComponent) {
    if (dataTableComponent === undefined || dataTableComponent === null)
        throw "Null value found for the source datatable component."

    let _this = this;

    _this.renderDate = function (data, type, row, meta) {
        let dateFormat = dataTableComponent.settings().dateFormat;
        return data.length > 0 ? lib.formatDateString(new Date(parseInt(data.replace("/Date(", "").replace(")/", ""), 10)), dateFormat) : data;
    }

    _this.renderEditDeleteCommands = function (data, type, row, meta) {
        if (type !== "display") return "";
        var templateHtml = dataTableComponent.$editDeleteCommandTemplate.html();
        templateHtml = replaceAll(templateHtml, "[key]", row.Id);
        return templateHtml;
    }

    let rowCount = 0;
    let rowNos = {};
    _this.renderRowNo = function (data, type, row, meta) {
        let rowKey = JSON.stringify(row);
        rowNos[rowKey] = rowNos[rowKey] || ++rowCount;
        return rowNos[rowKey];
    }

    dataTableComponent.on("table.draw", function () {
        rowCount = 0;
        rowNos = {};
    });
}