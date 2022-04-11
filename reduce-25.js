let arrays = [1,2,3,4,5,6,7,8,9,10,11];

//reduce arrays: 
//có một giá trị cho trước loop qua arr và dựa vào callback để thây đổi giá trị cho trước đó.
//callback của reduce cung cấp các acuments: giá trị ban đầu(init), this[i], i, this;
//trường hợp người dùng không nhập giá trị ban đầu: init, thì dùng arguments của chính reduce làm điều kiện xét (<2);
Array.prototype.reduce2 = function (callback, init) {
    let arrayLength = this.length;
    if (arguments.length<2){init = 0}
    for(let i = 0; i < arrayLength; i++){
        init = callback(init, this[i], i, this);
    }
    return init;
}//
let result = arrays.reduce2(function (init, i) {return init += i;},);


//example
//Reduce thay thế Reverse(result2)
// lưu ý: reduce k thể sử dụng: push,shift,.... trong callback vì các method này trả về các new length(nếu cố gắn giá trị của hàm push cho mảng);
let result2 = arrays.reduce2((init, i) => {return [i,...init]},[]);

//reduce thay thế map(result3) or filter(result4)
let result3 = arrays.reduce2((init, i) => [...init, i+1] ,[]);
let result4 = arrays.reduce2((init, i) => {if(i%2==0){init = [...init,i]} return init} ,[]);

// reduce thay thế cho some(result5) or every(result6)
let result5 = arrays.reduce2((init, i) => {if(i%2 ==0){init = true} return init} ,false)
let result6 = arrays.reduce2((init, i) => {if(i%2 !=0){init = false} return init} ,true)

// chunk array
//?????????
let result7

//

console.log('reduce2: ' +result6);