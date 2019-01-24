var dataTable;
if(dataTable === undefined || dataTable === null) {
    dataTable = {};
}

dataTable.Container = function (rootSelector, dataTableSelector, dateFormat, editDeleteCommandTemplateSelector, addEditFormSelector, saveButtonSelector, cancelButtonSelector, dataMode) {
    let _this = this;

    _this.$root = $(rootSelector);
    _this.$dataTable = $(dataTableSelector);
    _this.dataTable = null;
    _this.baseUrl = null;
    _this.addUrl = null;
    _this.editUrlFormat = null;
    _this.deleteUrlFormat = null;
    _this.saveUrl = null;

    _this.helper = new dataTable.Helper(dateFormat, editDeleteCommandTemplateSelector);

    let initEditor = function () {
        _this.editor = new dataTable.Editor(addEditFormSelector, saveButtonSelector, cancelButtonSelector, dataMode, _this.saveUrl);
        _this.editor.onSave.addEventListener(_this.editorSaveEventHandler);
        _this.editor.onCancel.addEventListener(_this.editorCancelEventHandler);
    }

    _this.initDataTable = function (columnSettings, ajaxUrl) {
        _this.dataTable = _this.$dataTable.DataTable({
            columns: columnSettings,
            ajax: ajaxUrl,
            dom: "Bfrtip",
            buttons: [
                {
                    text: "Add new",
                    action: _this.addClickEventHandler
                }
            ]
        });
        _this.dataTable.on("draw", _this.dataTableDrawEventHandler);
        _this.baseUrl = lib.getBaseUrl(ajaxUrl);
        _this.addUrl = _this.baseUrl + "/Add";
        _this.editUrlFormat = _this.baseUrl + "/Edit/[id]";
        _this.deleteUrlFormat = _this.baseUrl + "/Delete/[id]";
        _this.saveUrl = _this.baseUrl + "/Save";

        initEditor();
    }

    _this.reloadTable = function () {
        _this.dataTable.ajax.reload();
        _this.dataTable.draw(false);
    }

    _this.dataTableDrawEventHandler = function () {
        $(".editor_edit").off("click").on("click", _this.editClickEventHandler);
        $(".editor_delete").off("click").on("click", _this.deleteClickEventHandler);
    }

    _this.setDataMode = function (dataMode) {
        _this.editor.setDataMode(dataMode);
        _this.$root.attr("data-mode", dataMode);
    }

    _this.addClickEventHandler = function (clickEvent, dt, node, config) {
        _this.editor.loadPartialView(_this.addUrl, null, function (ev) {
            _this.setDataMode("add");
        });
    }

    _this.editClickEventHandler = function (clickEvent) {
        let $eventTarget = $(clickEvent.target);
        let key = $eventTarget.data("key");
        let editUrl = replaceAll(_this.editUrlFormat, "[id]", key);
        _this.editor.loadPartialView(editUrl, null, function (ev) {
            _this.setDataMode("edit");
        });
    }

    _this.deleteClickEventHandler = function (clickEvent) {
        let $eventTarget = $(clickEvent.target);
        let key = $eventTarget.data("key");
        let deleteUrl = replaceAll(_this.deleteUrlFormat, "[id]", key);
        lib.invokeAction(deleteUrl, "GET", null, function (ev) {
            _this.reloadTable();
        });
    }

    _this.editorSaveEventHandler = function (saveResponse) {
        if (saveResponse.status == true) {
            _this.setDataMode("view");
            _this.reloadTable();
        }
        else {
            throw "Validation Error not handled!";
        }
    }

    _this.editorCancelEventHandler = function (clickEvent) {
        _this.setDataMode("view");
    }
}