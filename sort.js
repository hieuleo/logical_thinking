//sort: sap xep
Array.prototype.sort2 = function(a,b) {
    let output = [], arrlenght = this.length, flag;
    for (let i = 0; i < arrlenght; i++) {
        flag = this[i];
        for (let j = i+1; j < arrlenght; j++) {
            if(flag<this[j]){
                flag = this[j];
            }
        }
        let flag2 = this.indexOf(flag);
        this.splice(flag2,1);
        arrlenght = this.length;
        i = i - 1;
        output.unshift(flag);
    } 
    this.push(...output);
    return this;
}
arys = [1,4,5,8,2,4,5,2,7,6,2,9,2,8,2,4,'a','z','t'];

// sort thường dùng cho các table để sort dữ liệu rander
//sort example:
/*
    arr.sort(function(a,b){return...});
    if sort function 
        return a values < 0             // nếu giá trị trả về nhỏ hơn 0 thì a nằm trước b
            a will come before b

        return a values > 0
            a will come after b

        return 0
            a and b will stay unchanged 
*/

let a = arys.sort((a,b)=> a - b);
let b  = arys.sort((a,b)=> b - a);
console.log(a)
console.log(b)

// sort use Api ?
var ApiName = [
    {name: 'hieu', age: '18'},
    {name: 'vy', age: '17'},
    {name: 'y', age: '16'},
];

// theo thứ tự tuổi nhỏ --> cao 
ApiName.sort(function(a,b){
    // nho-> lon => return: <0 => a -b;
    return a.age - b.age;
})
console.log(ApiName)