let arrays = [1,2,3,4,5,6,7,8,9,10,11];

// let arrays = ['hieu','quoc']
// số lập phương: 
let result = arrays.reduce((initial, array) => {
    if (array%2==0){
        initial.push(array)
    }
    return initial;
},[])


let obj = {
    a: 1,
    constent: function(){

    }
}


let [a,b,c ,d,e,f,g,h,...rec] = arrays
