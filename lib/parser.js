const acorn = require("acorn");

function parseCode(code) {
  return acorn.parse(code, { ecmaVersion: "latest" });
}

module.exports = { parseCode };
