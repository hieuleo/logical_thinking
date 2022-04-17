
// sử lý bất đồng bộ khi call API 
// process 1 : get all data users  to API.
// process 2 : fill data users by id.
// cả 2 điều là tiến trình sử lý bất đồng bộ.

//giả lập data được trả về qua api bằng setTimeout.
function dataUsersApi(){
    let users = [];
    setTimeout(() => {
        users = [
            {id:1 , name:'hieu'},
            {id:2 , name:'vy'}
        ];
    }, 1000);
    return users;
};
// lấy ra user qua id:
function getUserById(id){   
    const users = dataUsersApi();
    const user = users.find(user => user.id === id);
    return user;
}
// console.log(getUserById(1));
// kết quả trả về undefined.
// vì setTimeout chạy cuối cùng nên chưa có data mà getUserById đã phải chạy nên ==> undefined ************************************************************************************************

// sử lý 
// cần có tham số callback để quản lý bất đồng bộ xem data đã trả về hay chưa.
// hàm dataUsersApi2(với callback) là hàm xử lý bất đồng bộ.
function dataUsersApi2(callback) {
    if (typeof callback !== 'function') {
        return [];
    }
    setTimeout(() => {
        callback([
            {id:1 , name: 'hieu'},
            {id:2 , name: 'vy'},
        ])
    }, 1000);
};
// lấy ra user qua id:
function getUserById2(id, fn){      
   if (typeof fn !== 'function') {
       return null;
   }
   dataUsersApi2(users =>{ //hàm callback
       let user = users.find( u => u.id === id);
       fn(user);
   })
}
// getUserById2(1, console.log);
// ý nghĩa: hàm callback trong dataUsersApi2 chỉ chạy sau khi dataUsersApi2 chạy song hoàn toàn do đó hàm getUserById2 không bị lỗi khi setTimeout chưa chạy.
// thay vì chạy riêng biêt khi settimeout chưa chạy thì giờ code được đưa vào settimeout ==> khi đó đã có data ==> có result trả về****************************************************************
// callback hell
function doTasks() {
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    console.log('stack 4');
                },0)
                console.log('stack 3');
            },0)
            console.log('stack 2');
        },0)
        console.log('stack 1');
    }, 0);
}
  

// promise 
// như trên nếu get data thành công trả về resolve// thất bại reject// giả sử flagcheck là điều kiện tcông hoặc thất bại.
function getAllUsers(){
    return new Promise(function(resolve, reject){
        let flagCheck = true;
        if (flagCheck){
            resolve([
                {id:1 , name: 'hieu'},
                {id:2 , name: 'vy'},
            ])
        }else{
            reject('can\'t get users')
        }
    });
}//getAllUsers trả về 1 promise.
// dùng .then lấy về dữ liệu take từ promise.
getAllUsers()
    .then(users => {
        let user = users.find(u=>u.id === 1);
        console.log(user);
    })
    .catch(err => {console.error(err)})
    .finally(() => {console.log('done');})

    
//promise hell: 
// get username by name
function getUserByName(nameU) {
    return new Promise(function(resolve, reject) {
        let listUsers = [
            {id:1 , name: 'Hieu', username:'hieu dt'},
            {id:1 , name: 'Vy',username:'vy dt'}
        ];
        setTimeout(function() {
            let user = listUsers.find( u => u.name === nameU);
            if (user !== undefined) {
                resolve({cod: 200, data: user});
            }else{
                reject({cod: 404, data:'not found userName: '+nameU})
            }
        },1000)
    })
}
// get post by username
function getPostByusername(username){
    return new Promise((resolve, reject) =>{
        let listPost = [
            {id: 1, name:'hieu dt', title:'first post'},
            {id: 2, name:'hieu dt', title:'second post'},
            {id: 3, name:'hieu dt', title:'hello'},
            {id: 3, name:'vy dt', title:'ola'},
        ];
        let postData = listPost.filter(p => p.name === username);
        if (postData.length> 0) {
            resolve({cod: 200, data: postData});
        }else{
            resolve({cod: 404, data:'undifine'});
        }
    })

}
// ket quA getUserByName() la tham so cua getPostByusername
getUserByName('Hieu')
    .then(result => getPostByusername(result.data.username))
    .then(result =>console.log(result))
    .catch(err => console.log(err))