// let arr = [
//     {
//         userName: 'Dilbek',
//         surName: 'Shermatov',
//         phoneNumber: '900090909',
//         isMarried: false,
//         age: '16',
//         email: 'dilbekpamidor@gmail.com',
//         address: 'Toshkent viloyati Toshkent Tumani madaniyat',
//         job: 'student'
//     }, {
//         userName: 'Behruz',
//         surName: 'Rahimjonov',
//         phoneNumber: '900090909',
//         isMarried: false,
//         age: '16',
//         email: 'dilbekpamidor@gmail.com',
//         address: 'Toshkent viloyati Toshkent Tumani madaniyat',
//         job: 'student'
//     }, {
//         userName: 'Ulugbak',
//         surName: 'Ismoilov',
//         phoneNumber: '900090909',
//         isMarried: false,
//         age: '16',
//         email: 'dilbekpamidor@gmail.com',
//         address: 'Toshkent viloyati Toshkent Tumani madaniyat',
//         job: 'student'
//     }
// ]

// let prompt1 = prompt('Write username')
// let prompt2 = prompt('write surName')

// let res = arr.filter((v, i) => {
//     if (prompt1 == v.userName && prompt2 == v.surName) {

//         console.log('Bunday username mavjud');
//     }

//     else if (prompt1 !== v.userName && prompt2 !== v.surName) {
//         console.log('like this username and surname do not found');
//     }
// })



let name = prompt('Write your name')

let id = +prompt('Write your spaceid')

let password = +prompt('Write your spacepassword')

console.log(`userName:${name}\nspaceid:${id}\nspacepassword:${password}`);
