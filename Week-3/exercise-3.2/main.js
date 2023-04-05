// Use of bind,call and apply function

//.bind function

function sum(a, b) {
  return this.a + this.b;
}

const sumB = sum.bind({ a: 10, b: 20 });
const sumC = sumB.bind({ a: 30, b: 30 });

/* As we can see first we bind the value with 10 and 20 then we bind the value with 30 and 30 
but we get output in both cases is 30 so .bind function is bind the argument permanently so it can not be changed.*/

console.log(sumB()); // output: 30
console.log(sumC()); // output: 30

// .call function

console.log(sum.call({ a: 20, b: 30 })); // Output: 50

/* .call function is very similar to bind function 
but difference is that .call function is replace 
the object with another object in argument */

// .apply function

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

/* Sometimes we get arguments as array 
then we have to find max number from that array
 then we simply call MAth.max but max method does not take array as argument 
 but using .apply method it can passes arguments as positional arguments from array
 and we get output. */

console.log(max); // Output: 7
