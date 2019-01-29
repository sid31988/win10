var component = component || {};
component.channel = component.channel || {};
component.channel.FormToCommandPanel = function (sourceForm, targetCommandPanel) {
    let _this = this;

    sourceForm.on("form.add.success", function () {
        targetCommandPanel.toggleAddEditCommands(true);
        targetCommandPanel.toggleViewCommands(false);
    });

    sourceForm.on("form.edit.success", function () {
        targetCommandPanel.toggleViewCommands(true);
        targetCommandPanel.toggleAddEditCommands(false);
    });

    sourceForm.on("form.save.success", function () {
        targetCommandPanel.toggleViewCommands(true);
        targetCommandPanel.toggleAddEditCommands(false);
    });
}