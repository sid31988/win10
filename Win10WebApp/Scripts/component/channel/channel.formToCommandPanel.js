var component = component || {};
component.channel = component.channel || {};
component.channel.FormToCommandPanel = function (sourceForm, targetCommandPanel) {
    let _this = this;

    sourceForm.on("form.add.success", function () {
        targetCommandPanel.setCommandMode(component.CommandPanel.CommandMode.Add);
    });

    sourceForm.on("form.edit.success", function () {
        targetCommandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
    });

    sourceForm.on("form.save.success", function () {
        targetCommandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
    });

    sourceForm.on("form.cancel", function () {
        targetCommandPanel.setCommandMode(component.CommandPanel.CommandMode.View);
    });
}