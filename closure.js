// Example 1
function greet(saythis) {
    return function(name) {
        saythis = "Hola";
        console.log(`${saythis} ${name}`);
    }
}

greet("Hello")("Jack");

////////////////////////////////////////////////////////////////////////////////////////////////
// Example 2

function buildFunction() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(function() {
            console.log(i);
        })
    }
    return arr;
}

let f = buildFunction();

f[0](); // return 3
f[1](); // return 3
f[2](); // return 3


///////////////////////////////////////////////////////////////////////////////////////////////
//Return 0,1,2 using IIFE
function buildFunction1() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            }(i))
        )
    }
    return arr;
}

let f1 = buildFunction1();

f1[0](); // return 0
f1[1](); // return 1
f1[2](); // return 2


///////////////////////////////////////////////////////////////////////////////////////////////
//Return 0,1,2 using let
function buildFunction2() {
    var arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(j);
            }
        )
    }
    return arr;
}

let f2 = buildFunction1();
f2[0](); // return 0
f2[1](); // return 1
f2[2](); // return 2