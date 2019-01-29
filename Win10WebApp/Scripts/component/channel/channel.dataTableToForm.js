var component = component || {};
component.channel = component.channel || {};
component.channel.DataTableToForm = function (sourceDataTable, targetForm, addUrl, editUrl, deleteUrl, saveUrl) {
    component.channel.Base.call(this, sourceDataTable, targetForm);
    let _this = this;

    sourceDataTable.on("table.row.select", function (eventArgs) {
        targetForm.loadEditView(editUrl, eventArgs);
        targetForm.enable(false);
    });
}