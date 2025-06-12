function maiorNumero(arr) {
  return Math.max(...arr);
}

let entrada = prompt("Digite números separados por vírgula:");
let array = entrada.split(',').map(Number);
console.log("O maior número é:", maiorNumero(array));