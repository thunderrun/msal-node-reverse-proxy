const { Store } = require("fs-json-store");
const store = new Store({ file: "pathRoleSettings.json" });

module.exports = store;