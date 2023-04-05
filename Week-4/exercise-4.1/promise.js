/*Implement a function named getNumber which generates a random number.
 If random Number is divisible by 5 it will reject the promise else it will resolve the promise. 
Let’s also keep the promise resolution/rejection time as a variable. 
*/

class MyPromise {
  resolvedData = null;
  rejectedData = null;

  onFulfilled = null;
  onReject = null;

  isFulfilled = false;
  isRejected = false;

  constructor(executor) {
    const resolve = (value) => {
      this.resolvedData = value;
      this.isFulfilled = true;
      if (this.onFulfilled) {
        this.onFulfilled(this.resolvedData);
      }
    };

    const reject = (value) => {
      this.rejectedData = value;
      this.isRejected = true;
      if (this.onReject) {
        this.onReject(this.rejectedData);
      }
    };

    executor(resolve, reject);
  }

  then(fn) {
    this.onFulfilled = fn;
    if (this.isFulfilled) {
      this.onFulfilled(this.resolvedData);
    }
    return this;
  }

  catch(fn) {
    this.onReject = fn;
    if (this.isRejected) {
      this.onReject(this.rejectedData);
    }
    return this;
  }
}

function getNumber() {
  return Math.round(Math.random() * 1000);
}

const result = new MyPromise((resolve, reject) => {
  const number = getNumber();

  if (number % 5 === 0) {
    reject("You got reject for this number" + " " + number);
  } else {
    resolve("Promise is resolved for this number" + " " + number);
  }
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
