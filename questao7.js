function fibonacci(n) {
  const seq = [];
  for (let i = 0; i < n; i++) {
    if (i < 2) seq.push(i);
    else seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
}

let n = parseInt(prompt("Quantos números da sequência de Fibonacci você quer?"));
console.log(`Sequência de Fibonacci com ${n} números:`, fibonacci(n));