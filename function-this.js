function a() {
    console.log(this); //global var
}

var b = function() {
    console.log(this); //global var
}

// a();
// b();

var c = {
    name: "Naveen",
    log: function() {
        this.name = "Kumar";
        console.log(this);
        let change = function() {
            this.name = "Gandhi";
            console.log(arguments); //global var
        }
        change();
        console.log(this); //this => points to current object
    }
}

c.log();