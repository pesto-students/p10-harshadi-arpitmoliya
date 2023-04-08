/*Implement Fibonacci Series with Iterators Sample */

function fibonacci(n) {
  return {
    [Symbol.iterator]() {
      let i = 0;
      let a = 0;
      let b = 0;
      return {
        next() {
          const temp = b;
          b = a + b || 1;
          a = temp;

          return { value: a, done: i++ > n };
        },
      };
    },
  };
}

// Printing thr fibonacci series

for (const el of fibonacci(6)) {
  console.log(el);
}
