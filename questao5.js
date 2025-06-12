function numerosPares(arr) {
  return arr.filter(num => num % 2 === 0);
}

let entrada = prompt("Digite números separados por vírgula:");
let array = entrada.split(',').map(Number);
console.log("Números pares:", numerosPares(array));