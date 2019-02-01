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
            str = replaceAll(str, "[" + x + "]", tokenData[x]);
        }
        return str;
    },
    EventEmitter: function (eventName) {
        let _this = this;

        _this.listeners = {};

        _this.addEventListener = function (handler) {
            if(handler === undefined && handler === null) return;
            _this.listeners[handler] = handler;
        }

        _this.removeEventListener = function (handler) {
            if(handler === undefined && handler === null) return;
            delete _this.listeners[handler];
        }

        _this.dispatchEvent = function (eventArgs) {
            for(var key in _this.listeners) {
                let handler = _this.listeners[key];
                if (typeof handler === "function") {
                    handler(eventArgs);
                }
            }
        }
    },
    log: function (message, ...otherArgs) {
        console.log(message, ...otherArgs);
    },
    invokeAction: function (actionUrl, type, data, onSuccess, onError) {
        $.ajax({
            url: actionUrl,
            type: type,
            cache: false,
            data: data,
            success: function (result) {
                if (onSuccess !== undefined) onSuccess(result);
            },
            error: function (xhr, status, ex) {
                lib.log(ex);
                if (onError !== undefined) onError({ error: ex });
            }
        });
    },
    getBaseUrl: function (url) {
        let urlParts = url.split("/");
        urlParts.pop();
        return urlParts.join("/");
    },
    ObjectType: function (name, type, argumentFactory) {
        let _this = this;
    
        _this.name = name;
        _this.type = type;
        _this.argumentFactory = argumentFactory;
    
        _this.create = function () {
            let newObj = {};
            _this.type.call(newObj, _this.argumentFactory());
            newObj.prototype = Object.create(_this.type.prototype);
            return newObj;
        }
    },
    getOrDefault: function (obj, defaultObj) {
        obj = obj || defaultObj;
        for (var key in defaultObj) {
            if (obj[key] === undefined || obj[key] === null)
                obj[key] = defaultObj[key];
            else if (typeof obj[key] === "object")
                obj[key] = lib.getOrDefault(obj[key], defaultObj[key]);
        }
        return obj;
    }
};
