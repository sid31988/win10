var component = component || {};
component.CommandPanel.EventHandlers = function (commandPanelComponent) {
    let _this = this;
    
    commandPanelComponent.$addCommandButton.off("click").on("click", function (ev) {
        commandPanelComponent.emit("command.add");
    });
    commandPanelComponent.$editCommandButton.off("click").on("click", function (ev) {
        commandPanelComponent.emit("command.edit");
    });
    commandPanelComponent.$deleteCommandButton.off("click").on("click", function (ev) {
        commandPanelComponent.emit("command.delete");
    });
    commandPanelComponent.$saveCommandButton.off("click").on("click", function (ev) {
        commandPanelComponent.emit("command.save");
    });
    commandPanelComponent.$cancelCommandButton.off("click").on("click", function (ev) {
        commandPanelComponent.emit("command.cancel");
    });
}