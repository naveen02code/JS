(function greet(name) {
    console.log(`Hello ${name}`);
})("Jerry");


var say = function(greet) {
    console.log(greet);
}("Hi!");
// say("Hola!");