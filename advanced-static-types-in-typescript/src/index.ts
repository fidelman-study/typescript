// if add const before enum the insertion will be replaced by a value
// in config add preserveConstEnum and the enum will be visible but not replaced
enum MediaTypes {
  JSON = 'application/json'
}

fetch('https://example/api', {
  headers: {
    Accept: MediaTypes.JSON
  }
}).then((response) => {

});