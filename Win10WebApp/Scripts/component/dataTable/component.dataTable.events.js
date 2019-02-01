var component = component || {};
component.DataTable.EventHandlers = function (dataTableComponent) {
    let _this = this;

    dataTableComponent.on("table.init.complete", function () {
        if (dataTableComponent.getRowCount() > 0) {
            dataTableComponent.selectRow(0);
        }
    });

    dataTableComponent.dataTable.on("draw", function () {
        dataTableComponent.$root.find(".editor_edit").off("click").on("click", rowEditEventHandler);
        dataTableComponent.$root.find(".editor_delete").off("click").on("click", rowDeleteEventHandler);
        dataTableComponent.emit("table.draw");
    });

    dataTableComponent.$root.on("click", "tr", function () {
        let row = this;
        let tableRows = dataTableComponent.$root.find("tbody tr").toArray();
        let rowIndex = tableRows.indexOf(row);
        dataTableComponent.selectRow(rowIndex);
    });

    dataTableComponent.dataTable.on("select", function (e, dt, type, indexes) {
        if (type === "row") {
            var data = dataTableComponent.dataTable.rows(indexes).data();
            console.log(data);
        }
    });

    let rowEditEventHandler = function (ev) {
        dataTableComponent.emit("row.edit");
    }

    let rowDeleteEventHandler = function (ev) {
        dataTableComponent.emit("row.delete")
    }
}