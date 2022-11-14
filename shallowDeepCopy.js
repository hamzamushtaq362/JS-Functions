const c=console.log.bind(document);

// Shallow copy
{
    let arr=[1,2,3];
    let b=arr;

    // b.push(4);
    // c(arr);
}

// Deep copy
{
    let arr=[1,2,3];
    let b=[];
    for(let item in arr){
        b.push(arr[item]);
    }

    b.push(4);
    // c(arr);
}

// Shallow copy
{
    let obj1={
        name:"Hamza",
        age:23,
    };
    let obj2=obj1;

    obj2.age=40;
    c(obj1);
}

// Deep copy
{
    let obj1={
        name:"Hamza",
        age:23,
    };
    let obj2=JSON.parse(JSON.stringify(obj1));

    // obj2.age=40;
    // c(obj1);
}