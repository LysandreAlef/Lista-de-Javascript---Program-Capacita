function maior(a, b) {
  return a > b ? a : b;
}

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
console.log("O maior número é:", maior(num1, num2));