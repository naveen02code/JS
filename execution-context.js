function a () {
    // runs under a() execution context
  b() // a->undefined a, b->function, c-> not available
  var a = 'a' // a->undefined a, b->function, c-> not available
    // a->a a, b->function, c-> not available
}

function b () {
    // runs under b() execution context
  var b = 'b' // a->not available a, b->undefined, c-> not available
    // a->not available a, b->b, c-> not available
}

// runs under global execution context
a() // a->function a, b->function, c-> undefined
var c = 'c' // a->function a, b->function, c-> undefined
// a->function a, b->function, c-> c
