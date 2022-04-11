let html 
let arys = ['nguyen', 'quoc','hieu'];

// map prototype 
// map tạo ra arr mới bằng cách lập quá arr được gọi và hàm callback của nó cung cấp 3 thông số (element, i, thisArray- chính nó)
Array.prototype.map2 = function(callback){
    let arrayLength = this.length, output = [];
    for(let i = 0; i < arrayLength; i++){
        let result = callback(this[i], i, this);
        output.push(result);
    }
    return output;
}
html = arys.map2(function(arr, i, isThis){
    return arr,i,isThis
})


//forEach prototype
// hàm forEach prototype đơn giản là lập qua một arr và callback cung cấp các acuments như sau : element, i, thisArray
Array.prototype.forEach2 = function(callback){
    let arrayLength = this.length;
    for(let i = 0; i < arrayLength; i++){
        callback(this[i], i, this);
    }
}
arys.forEach2(function(arr, i, isThis){
    // console.log(arr, i, isThis)
})


//filter prototype
// hàm cung cấp method tạo ra một array với tất cả các element pass qua được bộ lọc được cung cấp (ví dụ filter để tìm những element có trên 5 ký tự)
// filter cung cấp : element, index, thisArray.
// giải thích: resturn = true tức là lần lập filer = true tức là điều kiện return typeof array === 'string' là true.
Array.prototype.filter2 = function(callback){
    let arrayLength = this.length, output = [];
    for(let i=0; i<arrayLength; i++){
        let result = callback(this[i], i, this);
        if (result){
            output.push(this[i]);
        }
    }
    return output;
}
html = arys.filter2(function(array){
    return typeof array === 'string';
});


// some prototype
// trả về true//false nếu ít nhất một element đúng/sai với điều kiện cần tìm.// nó cung cấp: element, index, thisArray.
Array.prototype.some2 = function(callback) {
    let arrayLength = this.length;
    for(let i = 0; i < arrayLength; i++) {
        let result = callback(this[i],i,this)
        if (result){
            return true;
        }
    }
}
html = arys.some2(function(array){
    return typeof array === 'string';
});


// every method prototype
// trả về true//false nếu tất cả element đúng/sai với điều kiện cần tìm.// nó cung cấp: element, index, thisArray.
Array.prototype.every2 = function(callback) {
    let flag = true;
    let arrayLength = this.length;
    for(let i = 0; i < arrayLength; i++){
        let result = callback(this[i],i,this)
        if (!result){
            flag = false;
            break;
        }else{
            continue;
        }
    }
    return flag;
}
html = arys.every2(function(array){
    return typeof array === 'string';
});


// reduce method prototype