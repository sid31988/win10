var control;
if (control === undefined || control === null) {
    control = {};
}

control.ViewableControl = function (rootSelector) {
    let _this = this;

    _this.root = $(rootSelector);

    _this.loadPartialViewSuccessEventHandler = function (successResult) { }

    _this.loadPartialView = function (actionUrl, data, onSuccess, onError) {
        _this.root.ajaxLoad(actionUrl, data, function (successResult) {
            _this.loadPartialViewSuccessEventHandler(successResult);
            if(onSuccess !== undefined && onSuccess !== null) {
                onSuccess(successResult);
            }
        }, onError);
    }
}