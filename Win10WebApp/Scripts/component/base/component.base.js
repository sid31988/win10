var component;
if (component === undefined || component === null) {
    component = {};
}

component.Base = function (rootSelector, settingsOrFactory) {
    let _this = this;
    let _events = {};
    let _channels = {};

    _this.$root = $(rootSelector);

    let _settings = null;
    _this.settings = function () {
        if (_settings !== undefined && _settings !== null) return _settings;
        if (typeof settingsOrFactory === "function") {
            _settings = settingsOrFactory();
        }
        else {
            _settings = settingsOrFactory;
        }
        return _settings;
    }
    _this.initialze = function () { }
    _this.bindTo = function (channelId, anotherComponent, channel, ...args) {
        if (_channels[channelId] !== undefined && _channels[channelId] !== undefined) {
            throw "Channel '" + channelId + "' already exists."
        }
        channel[channelId] = new channel(_this, anotherComponent, ...args);
        return channel[channelId];
    }
    let getOrCreateEvent = function (eventName) {
        if (_events[eventName] === undefined || _events[eventName] === null) {
            _events[eventName] = new lib.EventEmitter(eventName);
        }
        return _events[eventName];
    }
    _this.on = function (eventName, eventListener) {
        if (typeof eventName === "string") {
            let event = getOrCreateEvent(eventName);
            event.addEventListener(eventListener);
        }
        else {
            for (let i = 0; i < eventName.length; i++) {
                let event = getOrCreateEvent(eventName[i]);
                event.addEventListener(eventListener);
            }
        }
        return this;
    }
    _this.emit = function (eventName, eventArgs) {
        let event = getOrCreateEvent(eventName);
        console.log(eventName + " event fired.");
        event.dispatchEvent(eventArgs);
        return this;
    }
    _this.off = function (eventName, eventListener) {
        let event = getOrCreateEvent(eventName);
        event.removeEventListener(eventListener);
        return this;
    }
    let _enable = true;
    _this.enable = function (toggle) {
        if (toggle === undefined || toggle === null) {
            return _enable;
        }
        _enable = toggle;
        _this.$root.enable(toggle);
    }
}