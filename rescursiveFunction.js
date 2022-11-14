const c=console.log.bind(document);
{
    function getNum(value){
        if(value>0){
            console.log(value);
            value--;
            getNum(value);
        }
    }

    // getNum(4);
}

// sum all numbers from user using recursion
// 2nd Way
{
    let arr = [4, 2, 6, 8, 2];
    function sum(arr) {
        let result = 0;
        function inn() {
            if (arr.length > 0) {
                result = result + arr.pop();
                inn();
            }
        }
        inn();
        c(result);
    }

    // sum(arr);
}

// sum all numbers from user using recursion
// 1st Way
{
    let arr = [4, 2, 6, 8, 2];
    let result = 0;
    function sum(arr) {
        if (arr.length > 0) {
            result = result + arr.pop();
            sum(arr);
        } else {
            c(result);
        }
    }

    // sum(arr);
}