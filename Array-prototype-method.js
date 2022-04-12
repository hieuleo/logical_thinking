let html 
let arys = ['nguyen', 'quoc','hieu','quoc','hue','lan'];

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

//forEach prototype
// hàm forEach prototype đơn giản là lập qua một arr và callback cung cấp các acuments như sau : element, i, thisArray
Array.prototype.forEach2 = function(callback){
    let arrayLength = this.length;
    for(let i = 0; i < arrayLength; i++){
        callback(this[i], i, this);
    }
}

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

//fill
//giong filter nhung chi tra ve gia tri dau tim tim thay.
Array.prototype.find2 = function(callback){
    let output, arrayLength = this.length;
    for(let i = 0; i < arrayLength; i++){
        let result = callback(this[i], i, this);
        if(result){output = this[i];}
    }return output;
}

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

//include:
//trả về true//false
Array.prototype.include2 = function(item, fromIndex){
    if(arguments.length < 2){fromIndex = 0}
    let output = false;
    for(fromIndex; fromIndex < this.length; fromIndex++){
        if (this[fromIndex] === item){
            output = true;
        }
    }
    return output;
}

// slice prototype:
// cắt phần tử của mảng tạo ra mảng mới
Array.prototype.slice2 = function(start, end){
    let output = [];
    if(arguments.length<2){end = this.length};
    if(arguments.length<1){start = 0; end = this.length}
    for(let i = start; i < end; i++){output.push(this[i]);}
    return output;
}

// fill prototype:
// lấp đầy các phần tử của arr bằng một giá trị giống nhau. cung cấp: value, start, end.
Array.prototype.fill2 = function(value, start, end){
    let output = [];
    if(arguments.length<3){end = this.length};
    if(arguments.length<2){start = 0; end = this.length};
    for(let i=start; i<end; i++){output.push(value)}
    return output;
}

// indexOf
// return về vị trí của element trong arr.
Array.prototype.indexOf2 = function(value, start){
    let output = -1, arrlenght =this.length;
    if(arguments.length<2){start = 0};
    for(let i=start; i<arrlenght; i++){if(this[i]==value){output = i}};
    return output;
}

//reverse
// đảo ngược
Array.prototype.reverse2 = function(){
    let output = [], arrlenght = this.length;
    for(let i=0; i<arrlenght; i++){
        output = [this[i], ...output];
    }
    return output;
}



// splice
// thay the mot phan tu cua mang bang 1 hoac nhieu tpu kha: argument:start, deleteCount, item1, item2, itemN
Array.prototype.splice2 = function(start, deleteCount,...args){
    let output = [], arrlenght = this.length;
}

// shift push unshift pop, thây đổi độ dài của mảng và khi cố gắn nó cho một biến(mảng) nó ghi đè(k trả về mảng) mà trả về độ dài của mảng.
// shift loại bỏ phần tử đầu tiên 

//sort: sap xep
Array.prototype.sort2 = function() {
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

// reduce method prototype
// trong reduce-25.js
arys = ['v','f','g','r','u','r'];
console.log(arys.sort2());
