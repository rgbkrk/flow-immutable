// @flow
// @format

console.log("one day I hope immutable and flow are stable");

const Immutable = require("immutable");

let config: Immutable.Map<*, *>;

config = Immutable.Map({
  theme: "light"
});
