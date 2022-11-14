const c=console.log.bind(document);
{
    const arr = [
        {name: 'Tom'},
        {name: 'Tom'},
        {name: 'Nick'},
        {name: 'Nick'},
      ];
      let temp=arr[0].name;
      let tempA=[];
    //   c(arr);

      const result =arr.filter((value)=>{
        // c(value.name==temp);
        if(value.name==temp){
            tempA.push(value.name = value.name + " " + Math.floor(Math.random() * 10));
        }
        // c(temp);
      })

    //   c(result);
    //   c(tempA);

}

{
    {
        const arr = [
            {name: 'Tom',rollNo:1},
            {name: 'Tom',rollNo:2},
            {name: 'Nick',rollNo:1},
            {name: 'Nick',rollNo:2},
          ];
          let tempA=[];
        //   c(arr);
    
          const result =arr.filter((value)=>{
            const isDuplicate = tempA.includes(value.name);
            
            if (!isDuplicate) {
                tempA.push(value.name);
              }else{
                tempA.push(value.name = value.name + " " + Math.random().toString(36).substring(2,7));
                // toString(36) method, 36 represents base 36. The toString(36) represents digits beyond 9 by letters.
                // substring(2, 7) method returns five characters
              }
          })
    
          // c(result);
          // c(tempA);
    
    }
}

{
  {
    const arr = [
      { name: 'Tom', rollNo: 1 },
      { name: 'Tom', rollNo: 2 },
      { name: 'Nick', rollNo: 1 },
      { name: 'Nick', rollNo: 2 },
    ];
    let tempA = [];
    //   c(arr);

    const result = arr.filter((value) => {
      const isDuplicate = tempA.includes(value.name);
      const isDuplicateNo = tempA.includes(value.rollNo);
      let obj2 = {};

      if (!isDuplicate) {
        obj2.name = value.name;
        // c(!isDuplicateNo);
        if (!isDuplicateNo) {
          obj2.rollNo = value.rollNo;
        } else {
          obj2.rollNo = Math.random() * 10;
        }
        // tempA.push(value.name);
        tempA.push(obj2);
        c(obj2);
      } else {
        tempA.push(value.name = value.name + " " + Math.random().toString(36).substring(2, 7));

      }
    })

    // c(result);
    // c(tempA);

  }
}