var component = component || {};
component.channel = component.channel || {};
component.channel.CommandPanelToForm = function (sourceCommandPanel, targetForm, addUrl, editUrl, deleteUrl, saveUrl) {
    component.channel.Base.call(this, sourceCommandPanel, targetForm);

    let _this = this;
    sourceCommandPanel.on("command.add", function (eventArgs) {
        targetForm.loadAddView(addUrl);
    });

    sourceCommandPanel.on("command.edit", function (eventArgs) {
        targetForm.enable(true);
        sourceCommandPanel.toggleAddEditCommands(true);
        sourceCommandPanel.toggleViewCommands(false);
    });

    sourceCommandPanel.on("command.delete", function (eventArgs) {
        targetForm.deleteRecord(deleteUrl);
    });

    sourceCommandPanel.on("command.save", function (eventArgs) {
        targetForm.postSaveData(saveUrl);
    });

    sourceCommandPanel.on("command.cancel", function (eventArgs) {
        targetForm.cancelSave();
    });
}