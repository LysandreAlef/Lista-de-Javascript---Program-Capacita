function cronometro(segundos) {
  let contador = 0;
  const intervalo = setInterval(() => {
    console.log(`${contador} segundo(s)`);
    contador++;
    if (contador > segundos) {
      clearInterval(intervalo);
      console.log('⏱️ Fim do cronômetro!');
    }
  }, 1000);
}

let segundos = parseInt(prompt("Digite quantos segundos o cronômetro deve contar:"));
cronometro(segundos);
