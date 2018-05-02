// open to timing attack
function comparePassword (pass1, pass2) {
  return pass1 === pass2
}

console.time('comparePassword')
comparePassword('jhkhrhackhjhkjaehkjhlkjhnjakf', ',hrkcakjhkfhnjhasfhxkjxhfkhk')
console.timeEnd('comparePassword')

// prevent timing attack
let cryptiles = require('cryptiles')

function comparePasswordFiedTime (apiKeyFromDb, apiKeyReceived) {
  return cryptiles.fixedTimeComparison(apiKeyFromDb, apiKeyReceived)
}

console.time('comparePasswordFiedTime')
comparePasswordFiedTime('jhkhrhackhjhkjaehkjhlkjhnjakf', ',hrkcakjhkfhnjhasfhxkjxhfkhk')
console.timeEnd('comparePasswordFiedTime')
