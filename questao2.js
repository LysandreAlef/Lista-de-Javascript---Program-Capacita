function potencia(base, expoente) {
  return Math.pow(base, expoente);
}

let base = parseFloat(prompt("Digite a base:"));
let expoente = parseFloat(prompt("Digite o expoente:"));
console.log(`${base} elevado a ${expoente} é igual a`, potencia(base, expoente));