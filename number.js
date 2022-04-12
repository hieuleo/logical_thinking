let arrays = [1,2,3,4,5,6,7,8,9,10,11];

function tong(arrays) {
    let output = [], arrlenght = arrays.length, flag;
    for (let i = 0; i < arrlenght; i++) {
        flag = arrays[i];
        for (let j = i+1; j < arrlenght; j++) {
            if(flag<arrays[j]){
                flag = arrays[j];
            }
        }
        let flag2 = arrays.indexOf(flag);
        arrays.splice(flag2,1)
        output.push(flag);
        // if (flag != this[i]){i = };
    } 
    return output;
}

console.log(tong(arrays))
