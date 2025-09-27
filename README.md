# codetalk

🚀 A fun and lightweight npm package that explains JavaScript code in plain English.

---

## Features
- Explains JavaScript functions and variables in plain English
- Detects function calls
- Lightweight and easy to integrate in Node.js projects
- Perfect for beginners and developers exploring legacy code

---

## Installation
```bash
npm install codetalk-js
```
const codetalk = require("codetalk-js");

const code = `
function greet(name) {
  return "Hello " + name;
}

const result = greet("Prem");
`;

console.log(codetalk(code));
// Output:
// This function "greet" takes name. It defines a variable "result". It calls the function "greet".



