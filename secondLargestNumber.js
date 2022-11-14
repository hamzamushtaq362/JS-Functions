const c=console.log.bind(document);
{
    const arr=[3,5,8,2,4,6,0];

    // arr.sort();
    // c(arr[arr.length-2]);
}

{
    let arr=[3,5,8,2,4,6,0,9,9];
    let array = [...new Set(arr)];

    // let arr=[];
    // let totalValues=prompt("enter Total size of input values");
    // // console.log(totalValues);
    // for(let i=0;i<totalValues;i++){
    //   arr.push(prompt("Enter values to Divide"));
    // }

    // arr.sort((a, b)=>{return a-b});
    let tempArray=[];
    let temp=arr[0];

    function second(...array){
        let arr2=array;
        // c(arr2);
        
        if(arr2.length > 0){
            arr2.shift();
            // c("Temp "+temp);
            if(temp<arr2[0]){
                temp=arr2[0];
                tempArray.push(arr2[0]);
                // c(temp);
            }
            second(...arr2);
        }
        // c(temp);
    }

    // second(...array);
    // c(temp);
    // c(array);
    // c(tempArray[tempArray.length-2]);

}

{
    let arr=[3,5,8,2,4,6,0,9,9];

    let tempArray=[];
    let temp=arr[0];

    function second(...array){
        let arr2=array;
        // c(arr2);
        
        if(arr2.length > 0){
            arr2.shift();
            // c("Temp "+temp);
            if(temp<arr2[0]){
                temp=arr2[0];
                tempArray.push(arr2[0]);
                // c(temp);
            }
            second(...arr2);
        }
        // c(temp);
    }

    second(...arr);
    // c(temp);
    c("2nd largest number in array is "+tempArray[tempArray.length-2]);

}