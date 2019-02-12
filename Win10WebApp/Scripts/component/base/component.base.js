/**
 * The component namespace
 * @namespace component
 */
var component = component || {};

/**
 * The base component class
 * @class
 * @name component.Base
 * @param rootSelector {string} The component element selector
 * @param settingsOrFactory {"Object"|"() => Object"} A json object or a json factory function, representing the component level settings
 */
component.Base = function Base(rootSelector, settingsOrFactory) {
    let _this = this;
    let _events = {};
    let _channels = {};

    /**
     * The Html equivalent of component, representing the component visually.
     */
    this.$root = null;

    /**
     * Set the $root variable
     * @returns {JQuery} JQuery<HtmlElement>
     */
    this.getRootElement = function () {
        return _this.$root = $(rootSelector);
    }

    this.getRootElement();

    let _settings = null;
    /**
     * A json object or a json factory function, which contains component level settings.
     * @returns {Object} Object
     */
    this.settings = function () {
        if (_settings !== undefined && _settings !== null) return _settings;
        if (typeof settingsOrFactory === "function") {
            _settings = settingsOrFactory();
        }
        else {
            _settings = settingsOrFactory;
        }
        return _settings;
    }

    /**
     * Initializes the component
     * @return {void} void
     */
    this.initialze = function () { }

    let getOrCreateEvent = function (eventName) {
        if (_events[eventName] === undefined || _events[eventName] === null) {
            _events[eventName] = new lib.EventEmitter(eventName);
        }
        return _events[eventName];
    }

    /**
     * Registers an event handler to designated event
     * @param eventName {string} The name of event
     * @param eventListener {(eventArgs) => {}} A handler function
     */
    this.on = function (eventName, eventListener) {
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

    /**
     * Dispatches or emits the designated event
     * @param eventName {string} The event name
     * @param eventArgs {Object} A value type or ref type parameter denoting the event argument
     */
    this.emit = function (eventName, eventArgs) {
        let event = getOrCreateEvent(eventName);
        console.log(eventName + " event fired.");
        event.dispatchEvent(eventArgs);
        return this;
    }

    /**
     * Unregisters an event handler from the designated event
     * @param eventName {string} The name of event
     * @param eventListener {(eventArgs) => {}} A handler function
     */
    this.off = function (eventName, eventListener) {
        let event = getOrCreateEvent(eventName);
        event.removeEventListener(eventListener);
        return this;
    }

    let _enable = true;

    /**
     * Enables/Disables the html equivalent element
     * @param toggle true to enable and false to disable
     */
    this.enable = function (toggle) {
        if (toggle === undefined || toggle === null) {
            return _enable;
        }
        _enable = toggle;
        _this.$root.enable(toggle);
    }
}