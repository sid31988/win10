var component = component || {};
component.DataTable.EventHandlers = function (dataTableComponent) {
    let _this = this;

    dataTableComponent.dataTable.on("draw", function () {
        dataTableComponent.$root.find(".editor_edit").off("click").on("click", rowEditEventHandler);
        dataTableComponent.$root.find(".editor_delete").off("click").on("click", rowDeleteEventHandler);
        dataTableComponent.emit("table.draw");
    });

    dataTableComponent.$root.on("click", "tr", function () {
        let row = this;
        let $row = $(this);
        let tableRows = dataTableComponent.$root.find("tbody tr").toArray();
        let rowIndex = tableRows.indexOf(row);
        let $selectedRow = dataTableComponent.$root.find("tr.selected");
        if (!$row.hasClass("selected")) {
            $selectedRow.removeClass("selected");
            $row.addClass("selected");
            var data = dataTableComponent.dataTable.rows(rowIndex).data()[0];
            if (data !== undefined && data !== null) {
                dataTableComponent.emit("table.row.select", data);
            }
        }
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