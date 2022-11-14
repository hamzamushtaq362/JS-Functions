// console.log();
const c=console.log.bind(document);

{
    // Self-Invoke Function
    (function () {
        console.log("self Invoked");
      })();
}

{
    // Self-Invoke Function
    (function (value) {
        console.log(value);
    })("self Invoked, Passing parameters");
}

{
    // Self-Invoke Function
    (function () {
        date = new Date();
        c(date);
    })();

    // Normal Function call
    function dateSample() {
        date = new Date();
        c(date);
    }

    dateSample();
}

{
    let name = "Hamza";
    // Self-Invoke Function
    (function (name) {
        function display(name) {
            c(name);
        }
        // calling nested function
        display(name);
    })(name);
}