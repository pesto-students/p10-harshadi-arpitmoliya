async function doTask1() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 1 completed.");
    }, 1000);
  });
  const response = await promise;
  console.log(response);
}

async function doTask2() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 2 completed.");
    }, 5000);
  });
  const response = await promise;
  console.log(response);
}

async function doTask3() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 3 completed.");
    }, 3000);
  });
  const response = await promise;
  console.log(response);
}

async function allTask() {
  await doTask1();
  await doTask2();
  await doTask3();
}

function* genFunc() {
  yield doTask1();
  yield doTask2();
  yield doTask3();
  return 0;
}

//   allTask();
console.log("This is print by genrator function");
const genTaskFunc = genFunc();
console.log(genTaskFunc.next());
console.log(genTaskFunc.next());
console.log(genTaskFunc.next());
