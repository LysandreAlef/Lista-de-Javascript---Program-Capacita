function areaCirculo(raio) {
  return Math.PI * raio * raio;
}

let raio = parseFloat(prompt("Digite o raio do círculo:"));
console.log(`A área do círculo é:`, areaCirculo(raio).toFixed(2));