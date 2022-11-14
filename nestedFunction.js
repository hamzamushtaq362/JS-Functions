// Call function inside outer function
{
    function Hi(firstName, lastName) {

        // helper nested function to use below
        function FullName() {
          return firstName + " " + lastName;
        }
        // Calling Function
        console.log( "My name is " + FullName() );
      }

    // Calling Function
    // Hi("Hamza","Mushtaq");
}

// 
{
    function count() {
        let count = 0;

        // Calling Function
        return function () {
            return count++;
        };
    }
      
      let c = count(); 
    // Calling Function
    // console.log( c() );
    // console.log( c() );
    // console.log( c() );
}

// function inside another function
{
    function getAge(name, age) {
        console.log(name + " " + age);
    }

    function getName(name, age) {
        console.log(name);
        // calling child function inside another function
        getAge(name, age);
    }

    // getName("Hamza",23);
    // getAge("Hamza",23);
}

// anonymous function
{
    function sumOuter(a){
        return function sumInner(b){
            return a+b;
        }
    }

    // first call outer function and store it inside variable.
    // let get=(sumOuter(2));
    // Then call outer function and store it inside variable.
    // console.log(get(3));
}

// Variable Scope
{
    var m = 10;
    function parent(p, q)
    {
        var a = 6;
        function child() {
            var b = 8;
            console.log(p);
            console.log(q);
            console.log(a);
            console.log(b);
            console.log(m);
        }
        child();
    }
    parent(2, 4);
}