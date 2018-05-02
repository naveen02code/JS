//function borrowing

var person = {
    firstname: 'Naveen',
    lastname: 'Kumar',
    getFullName: function() {
        return `${this.firstname} ${this.lastname}`
    }
}

function logger(params1, params2) {
    console.log(`Logged: ${this.getFullName()}`);
    console.log(params1, params2);
}


//Bind
//creates a copy of logger function and points this to person object
console.log('===============> bind');
let logPerson = logger.bind(person, 'value1');
logPerson('value2');

// call
// bind this to person and calls that function
console.log('===============> call');
logger.call(person, 'one', 'two');

// apply
//same as call, arguments passed in array form
console.log('===============> apply');
logger.apply(person, ['one1', 'two2']); // bind this to person and calls that function



// function currying

function multiply(a, b) {
    return a * b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(4));

console.log(multiply(4, 5));