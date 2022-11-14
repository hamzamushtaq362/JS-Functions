/**
 * When a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.
 */
const c=console.log.bind(document);
{
    function currying(f) {
        return (a) => {
            c("Function a running");
            return (b) => {
                c("Function b running");
                return f(a, b); //sum function call
            }
        }

    }

    function sum(a, b) {
        return a + b;
    }

    // let res = currying(sum);
    // c(res(1)(2));
}

{
    function Myfunction(a) {
        return (b) => {
            return (c) => {
                return a * b * c;
            }
        }
    }

    // let res = Myfunction(1)(2)(3);
    // c(res);
}

{
    function concati(a) {
        return (b) => {
            return a + " " + b;
        }
    }

    // let res = concati("Hamza")("Mushtaq");
    // c(res);
}