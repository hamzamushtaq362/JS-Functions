{
    function get(value1) {
      console.log(value1);
    }
  
    function get(value1, value2) {
      console.log(value1, value2);
    }
  
    // get("Hamza");
    //output:  Hamza Undefined
}

{
    function main() {
        // Using if..else Statement
        if (arguments.length == 1) {
            console.log(arguments[0]);
        } else if (arguments.length == 2) {
            console.log(arguments[0], arguments[1]);
        } else if (arguments.length > 2) {
            for(let item in arguments){
                console.log(arguments[item]);
            }
        } else if (arguments.length == 0) {
            console.log("please Provide Parameters");
        }
    }

    // main("Hamza","ali","ahmed");
    /**
     * output:  
     * Hamza
     * ali
     * ahmed
     */
}

{
    function main() {
        // Using Switch Statement
        switch (arguments.length) {
            case 1:
                console.log(arguments[0]);
                break;
            case 2:
                console.log(arguments[0], arguments[1]);
                break;
            default:
                for (let item in arguments) {
                    console.log(arguments[item]);
                }
                break;
        }
    }

    main("Hamza");
    //output:  Hamza
}