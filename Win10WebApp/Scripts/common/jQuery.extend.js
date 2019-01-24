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

$.fn.ajaxLoad = function (actionUrl, data, onSuccess, onError) {
    let _this = this;
    lib.invokeAction(actionUrl, "GET", data, function(result) {
        _this.html(result);
        if (onSuccess !== undefined) onSuccess({ html: result });
    }, function (xhr, status, ex) {
        _this.log(ex);
        if (onError !== undefined) onError({ error: ex });
    });
}