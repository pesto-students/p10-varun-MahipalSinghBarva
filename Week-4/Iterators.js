function* fibonacci() {
  let prev = 0, curr = 1;
  yield prev;
  while (curr < 9) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

const fib = fibonacci();
for (let num of fib) {
  console.log(num);
}