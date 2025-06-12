function calcular(a, b, operador) {
  switch (operador) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Divisão por zero é baitolagem';
    default: return 'Operador inválido';
  }
}

let a = parseFloat(prompt("Digite o primeiro número:"));
let b = parseFloat(prompt("Digite o segundo número:"));
let op = prompt("Digite o operador (+, -, *, /):");

console.log("Resultado:", calcular(a, b, op));
