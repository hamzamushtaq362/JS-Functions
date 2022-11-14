const c=console.log.bind(document);
{
    // const n = 10;
    const nmb=[0,1,2,3,4,5,6,7,8,9,10];
    const calc = [];

    const arr=[3,4];

    arr.map(multiplay);
    arr.map(getTable);

    function multiplay(item1){
        calc[item1] = [];
        // c(calc[item1]);
        nmb.map(secondMap);

        function secondMap(item2){
            calc[item1][item2] = item1*item2;
            // calc[item1][item2] =(item1 + 1) + ' * ' + (item2 + 1) + ' = ' + (item1 + 1) * (item2 + 1);
            // c(item1-1);
            // c(item2);
        }
        // for(let k = 0; k < n; k++){
        //     calc[item1][k] = (item1 + 1) + ' * ' + (k + 1) + ' = ' + (item1 + 1) * (k + 1);
        // }
    }

    function getTable(item){
        console.log(calc[item]);
    }


    // for(let i = 0; i < n; i++){
    //     calc[i] = [];
        
    // }

    // for(let i = 0; i < calc.length; i++){
    //     console.log(String(calc[i]).replaceAll(',', ' | '));
    // }
}