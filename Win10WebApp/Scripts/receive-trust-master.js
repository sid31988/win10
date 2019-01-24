$.fn.serializeJson = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

function PageBase(rootSelector, dateFormat, editDeleteCommandTemplateSelector, dataMode) {
    let _this = this;

    _this.$root = $(rootSelector);
    _this.dataTableHelper = new DataTableHelper(dateFormat, editDeleteCommandTemplateSelector);
    _this.dataMode = dataMode;

    _this.setDataMode = function (dataMode) {
        _this.dataMode = dataMode;
        _this.$root.attr("data-mode", _this.dataMode);
    }

    _this.log = function (message, ...otherArgs) {
        console.log(message, ...otherArgs);
    }

    _this.invokeAction = function (actionUrl, type, data, onSuccess, onError) {
        $.ajax({
            url: actionUrl,
            type: type,
            cache: false,
            data: data,
            success: function (result) {
                if (onSuccess !== undefined) onSuccess(result);
            },
            error: function (xhr, status, ex) {
                _this.log(ex);
                if (onError !== undefined) onError({ error: ex });
            }
        });
    }

    _this.loadPartialView = function (actionUrl, data, targetSelector, onSuccess, onError) {
        let $target = $(targetSelector);
        $.ajax({
            url: actionUrl,
            type: "GET",
            cache: false,
            data: data,
            success: function (result) {
                $target.html(result);
                if (onSuccess !== undefined) onSuccess({ html: result });
            },
            error: function (xhr, status, ex) {
                _this.log(ex);
                if (onError !== undefined) onError({ error: ex });
            }
        });
    }

    _this.getBaseUrl = function (url) {
        let urlParts = url.split("/");
        urlParts.pop();
        return urlParts.join("/");
    }
}

const lib = {
    formatDateString: function (date, format) {
        var monthFullNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var dateComponents = {};
        dateComponents.dd = date.getDate();
        dateComponents.MMMM = monthFullNames[date.getMonth()];
        dateComponents.MMM = monthShortNames[date.getMonth()];
        dateComponents.MM = date.getMonth() + 1;
        if (dateComponents.MM.toString().length == 1)
            dateComponents.MM = "0" + dateComponents.MM.toString();
        dateComponents.yyyy = date.getFullYear();
        dateComponents.yy = dateComponents.yyyy.toString().substring(2);
        dateComponents.hh = date.getHours();
        dateComponents.ss = date.getSeconds();
        dateComponents.mm = date.getMilliseconds();

        for (var key in dateComponents) {
            format = replaceAll(format, key, dateComponents[key]);
        }
        return format;
    },
    replaceAll: function (str, oldText, newText) {
        return str.split(oldText).join(newText);
    },
    replaceTokens: function (str, tokenData) {
        if (tokenData === undefined || tokenData === null) return str;
        for (var x in tokenData) {
            replaceAll(str, "[" + x + "]", tokenData[x]);
        }
    },

};

function DataTableHelper(dateFormat, editDeleteCommandTemplateSelector) {
    let _this = this;

    _this.dateFormat = dateFormat;
    _this.$editDeleteCommandTemplate = $(editDeleteCommandTemplateSelector);

    _this.renderDate = function (data, type, row, meta) {
        return data.length > 0 ? lib.formatDateString(new Date(parseInt(data.replace("/Date(", "").replace(")/", ""), 10)), _this.dateFormat) : data;
    }

    _this.renderEditDeleteCommands = function (data, type, row, meta) {
        if (type !== "display") return "";
        var templateHtml = _this.$editDeleteCommandTemplate.html();
        templateHtml = replaceAll(templateHtml, "[key]", row.Id);
        return templateHtml;
    }
}

function ReceiverTrustMasterPage(rootSelector, receiverTrustTableSelector, dateFormat, editDeleteCommandTemplateSelector, addEditFormSelector, saveButtonSelector, cancelButtonSelector, dataMode) {
    let _this = this;

    PageBase.call(_this, rootSelector, dateFormat, editDeleteCommandTemplateSelector, dataMode);

    _this.$root = $(rootSelector)
    _this.$receiverTrustTable = $(receiverTrustTableSelector);

    _this.addEditFormSelector = addEditFormSelector;
    _this.$addEditForm = $(_this.addEditFormSelector);
    _this.saveButtonSelector = saveButtonSelector;
    _this.cancelButtonSelector = cancelButtonSelector;

    _this.baseUrl = null;
    _this.addUrl = null;
    _this.editUrlFormat = null;
    _this.deleteUrlFormat = null;
    _this.saveUrl = null;
    _this.receiverTrustDataTable = null;

    _this.createDataTable = function (columnSettings, findUrl) {
        _this.receiverTrustDataTable = _this.$receiverTrustTable.DataTable({
            columns: columnSettings,
            ajax: findUrl,
            dom: "Bfrtip",
            buttons: [
                {
                    text: "Add new",
                    action: _this.addClickEventHandler
                }
            ]
        });
        _this.receiverTrustDataTable.on("draw", _this.dataTableDrawEventHandler);
        _this.baseUrl = _this.getBaseUrl(findUrl);
        _this.addUrl = _this.baseUrl + "/Add";
        _this.editUrlFormat = _this.baseUrl + "/Edit/[id]";
        _this.deleteUrlFormat = _this.baseUrl + "/Delete/[id]";
        _this.saveUrl = _this.baseUrl + "/Save";
    }

    _this.dataTableDrawEventHandler = function () {
        $(".editor_edit").off("click").on("click", _this.editClickEventHandler);
        $(".editor_delete").off("click").on("click", _this.deleteClickEventHandler);

    }

    _this.addClickEventHandler = function (clickEvent, dt, node, config) {
        //_this.loadAddEditForm(_this.addUrl);
        _this.loadPartialView(_this.addUrl, null, _this.addEditFormSelector, function (ev) {
            _this.setDataMode("add");
            bindAddEditCommandEvents();
        });
    }

    let bindAddEditCommandEvents = function () {
        let $saveButton = _this.$addEditForm.find(_this.saveButtonSelector);
        let $cancelButton = _this.$addEditForm.find(_this.cancelButtonSelector);
        $saveButton.off("click").on("click", _this.saveClickEventHandler);
        $cancelButton.off("click").on("click", _this.cancelButtonSelector);
    }

    _this.editClickEventHandler = function (clickEvent) {
        let $eventTarget = $(clickEvent.target);
        let key = $eventTarget.data("key");
        let editUrl = replaceAll(_this.editUrlFormat, "[id]", key);
        _this.loadPartialView(editUrl, null, _this.addEditFormSelector, function (ev) {
            _this.setDataMode("edit");
            bindAddEditCommandEvents();
        });
    }

    _this.saveClickEventHandler = function (clickEvent) {
        let formData = _this.$addEditForm.serializeJson();
        _this.invokeAction(_this.saveUrl, "POST", formData, function (saveResponse) {
            if (saveResponse.status == true) {
                _this.setDataMode("view");
                _this.receiverTrustDataTable.ajax.reload();
                _this.receiverTrustDataTable.draw(false);
            }
            else {
                debugger;
            }
        });
    }

    _this.cancelClickEventHandler = function (clickEvent) {
        _this.setDataMode("view");
    }

    _this.deleteClickEventHandler = function (clickEvent) {
        let $eventTarget = $(clickEvent.target);
        let key = $eventTarget.data("key");
        let deleteUrl = replaceAll(_this.deleteUrlFormat, "[id]", key);
        _this.invokeAction(deleteUrl, "GET", null, function (ev) {
            _this.receiverTrustDataTable.ajax.reload();
            _this.receiverTrustDataTable.draw(false);
        });
    }
}

ReceiverTrustMasterPage.prototype.__proto__ = PageBase.prototype;