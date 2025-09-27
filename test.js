const codetalk = require("./index");

const code = `
function greet(name) {
  return "Hello " + name;
}

greet("doe");
`;

console.log(codetalk(code));
