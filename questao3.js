function fatorial(n) {
  if (n < 0) return "Não existe fatorial de número negativo!";
  let fat = 1;
  for (let i = 2; i <= n; i++) {
    fat *= i;
  }
  return fat;
}

let num = parseInt(prompt("Digite um número para calcular o fatorial:"));
console.log(`O fatorial de ${num} é`, fatorial(num));