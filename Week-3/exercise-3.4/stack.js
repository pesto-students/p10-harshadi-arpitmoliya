/* Refactor the above stack implementation, using the concept of closure, 
such that there is no way to access items array outside of createStack() function scope */

function createStack() {
  const items = [];

  function push(item) {
    this.items.push(item);
  }
  function pop() {
    return this.items.pop();
  }
  //console.log(items);
  return items;
}

const stack = createStack();
stack.push(10); //item added: 10
stack.push(5); //item added: 5
stack.pop(); // //item removed: 5
console.log(stack.items); //undefined- items not accessible outside CreateStack due to closure
