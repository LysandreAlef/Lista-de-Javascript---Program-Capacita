function parOuImpar(num) {
  return num % 2 === 0 ? 'Par' : 'Ímpar';
}

let numero = parseInt(prompt("Digite um número:"));
console.log(`O número é:`, parOuImpar(numero));