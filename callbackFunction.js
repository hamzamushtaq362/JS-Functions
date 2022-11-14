{
    function name(n,func){
        console.log(n);
        func();
    }

    function age(){
        console.log("My age is 23");
    }

    // name('Hamza',age);
}

// Without callback function
// 2nd function will not wait for execution of first function
{
    function name(n) {
        console.log("Name? " + n);
    }

    function age() {
        console.log("My age is 23");
    }

    // setTimeout(name, 2000,);
    // age();
}

// With callback function
// 2nd function will wait for execution of first function
{
    function name(n, func) {
        console.log("Name? " + n);
        func();
    }

    function age() {
        console.log("My age is 23");
    }

    // setTimeout(name, 2000,"hamza",age);
}

// With callback function
// 2nd function will wait for execution of first function
{
    function get(value) {
        console.log(value);
    }

    function sum(n1, n2, func) {
        let sum = n1 + n2;
        func(sum);
    }

    // sum(5, 5, get);
}

{
    setTimeout(function () {
        console.log("Anonymous");
    }, 2000);
}

{
    (() => {
        console.log("Anonymous Self invoking Arrow Function");
    })();
}