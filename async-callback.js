function wait() {
    console.log('wait started...')
    let d = (new Date()).getTime() + 3000
    while (new Date() < d) {
        console.log(new Date() < d)
    }
    console.log('wait end...')
}

function show(name) {
    console.log(`Hello ${name}`)
}

show("1");
wait();
show(2);