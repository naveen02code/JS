'use Sstrict'

function a () {
  let myVar = 2
  console.log(myVar)
  b(); {
    let newVar = 'new var'
  }
    // console.log(newVar);
};

function b () {
  console.log(myVar)
};

let myVar = 3
a()
var isDone = true

// var d;
// console.log(d);
// d = 'Hello';
// console.log(d);
