{
    // alert("Hello");

    // overriding the JavaScript alert method
    function alert(msg) {
      console.log(msg);
    };
    // alert("Overriding alert.");
}

{
    var date = new Date();
    // console.log(date);

    // overriding the JavaScript Date() method
    function Date() {
        this.date = "This method overrides the default constructor of Date class.";
    };

    var date2 = new Date();
    // console.log(date2);
}

{
    /**
     * overriding the JavaScript Functions.
     * Javascript doesn't support over loading, so lastest function will be executed.
     */

    function get(value1) {
    //   console.log(value1);
    }
  
    function get(value1, value2) {
    //   console.log(value1, value2);
    }
  
    get("Hamza");
    // Hamza Undefined
}

{
    class Person {
        Intro() {
            console.log("Hello. I am a person.");
        };
    }

    //the child class
    class Employee extends Person {
        Intro() {
            //calling parent class method using super.
            // super.Intro();
            console.log("Hello. I am an employee.");
        }
    }

    let obj1 = new Person(); 
    let obj2 = new Employee();
    obj1.Intro();
    obj2.Intro();
}

