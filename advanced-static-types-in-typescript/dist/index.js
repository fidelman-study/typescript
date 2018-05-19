"use strict";
// if add const before enum the insertion will be replaced by a value
// in config add preserveConstEnum and the enum will be visible but not replaced
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["JSON"] = "application/json";
})(MediaTypes || (MediaTypes = {}));
fetch('https://example/api', {
    headers: {
        Accept: MediaTypes.JSON
    }
}).then(function (response) {
});
