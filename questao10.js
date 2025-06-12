function inverterString(str) {
  return str.split('').reverse().join('');
}

let texto = prompt("Digite uma palavra ou frase:");
console.log("String invertida:", inverterString(texto));