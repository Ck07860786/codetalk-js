function generateExplanation(ast) {
  let output = [];

  ast.body.forEach(node => {
    switch (node.type) {
      case "FunctionDeclaration":
        const name = node.id.name;
        const params = node.params.map(p => p.name).join(", ");
        output.push(`This function "${name}" takes ${params || "no parameters"}.`);
        break;

      case "VariableDeclaration":
        node.declarations.forEach(d => {
          output.push(`It defines a variable "${d.id.name}".`);
        });
        break;

      case "ExpressionStatement":
        if (node.expression.type === "CallExpression") {
          output.push(`It calls the function "${node.expression.callee.name}".`);
        }
        break;
    }
  });

  return output.join(" ");
}

module.exports = { generateExplanation };
