var component = component || {};
component.channel = component.channel || {};
component.channel.Base = function (sourceComponent, targetComponent) {
    let _this = this;
    _this.sourceComponent = sourceComponent;
    _this.targetComponent = targetComponent;
}