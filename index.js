const { parseCode } = require("./lib/parser");
const { generateExplanation } = require("./lib/explain");

function codetalk(code) {
  const ast = parseCode(code);
  return generateExplanation(ast);
}

module.exports = codetalk;
