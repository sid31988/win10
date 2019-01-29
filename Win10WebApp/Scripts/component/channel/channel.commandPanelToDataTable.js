var component = component || {};
component.channel = component.channel || {};
component.channel.CommandPanelToDataTable = function (sourceCommandPanel, targetDataTable, addUrl, editUrl, deleteUrl, saveUrl) {
    component.channel.Base.call(this, sourceCommandPanel, targetDataTable);

    let _this = this;
    sourceCommandPanel.on("command.add", function (eventArgs) {

    });

    sourceCommandPanel.on("command.edit", function (eventArgs) {

    });

    sourceCommandPanel.on("command.delete", function (eventArgs) {

    });

    sourceCommandPanel.on("command.save", function (eventArgs) {

    });

    sourceCommandPanel.on("command.cancel", function (eventArgs) {

    });
}