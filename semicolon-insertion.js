// Semicolon is optional in JS but not truely optional. 
// i.e. JS syntax parser insert semicolon where it expect one.

function getPerson1() {
    return //syntax parser expect ";" after "return"'s carriage return (enter pressed) So it insert ";" after "return".

    {
        name: 'Jack1'
    }
}

console.log(getPerson1()); // return ubdefined

//Solution
function getPerson2() {
    return {
        name: 'Jack2'
    }
}

console.log(getPerson2()); // return { name: 'Jack' }