var component = component || {};
component.channel = component.channel || {};
component.channel.FormToDataTable = function (sourceForm, targetDataTable) {
    let _this = this;

    sourceForm.on("form.save.success", function (successData) {
        targetDataTable.reloadTable();
    });

    sourceForm.on("form.delete.success", function (successData) {
        targetDataTable.reloadTable();
    });
}