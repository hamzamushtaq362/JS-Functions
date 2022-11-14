const c=console.log.bind(document);
{
    let words = ("My name is Hamza");

    const animateAll = (words) => {
        const arr=words.split(" ");

        // first timeout
        setTimeout(() => {
            c(arr[0]);

            // 2nd timeout
            setTimeout(() => {
                c(arr[1]);

                // 3rd timeout
                setTimeout(() => {
                    c(arr[2]);

                    // 4th timeout
                    setTimeout(() => {
                        c(arr[3]);
                    }, 1000)

                }, 1000)

            }, 1000)

        }, 1000)
    }

    // animateAll(words);
}

{
    const get=()=>{
        setTimeout(()=>{
            const arr=[1,2,3,4,5];
            // console.log(arr);

            setTimeout((value)=>{
                const obj={
                    name:"Hamza",
                    age: 23,
                }
                console.log(`My name is ${obj.name} and my rollno is ${value}`);

                setTimeout((gender)=>{
                    console.log(`My name is ${obj.name} and my gender is ${gender}`);
                },2000,obj.name)
            },2000,arr[1])

        },2000)
    }

    get();
}