function contarVogais(str) {
  const vogais = 'aeiouAEIOU';
  return [...str].filter(char => vogais.includes(char)).length;
}

let texto = prompt("Digite uma frase:");
console.log(`Quantidade de vogais:`, contarVogais(texto));