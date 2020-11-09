// let array = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     },
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             }
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//         }
//     } ];

// - створити функцію яка виводить масив
//
// function f (array) {
//     console.log(array);
//     // for (const arrayElement of array) {
//     // console.log(arrayElement);
//     // }
// }
// f(array);

// - створити функцію яка заповнює масив
// рандомними числами та виводить його.
//  let arrRand =[];
//  function rand () {
//      for (let i = 0; i <10; i++) {
//          let a = Math.floor(Math.random()*(150-15)+15);
//          arrRand.push(a);
//      }
//  }
// rand ();
// console.log(arrRand)
// Для виведення використати попвередню функцію.
// - створити функцію яка приймає три числа та виводить
// та повертає найменьше.
// - створити функцію яка приймає три числа та виводить
// та повертає найбільше.
// - створити функцію яка приймає будь-яку кількість чисел,
//     повертає найменьше, а виводить найбільше

let a = prompt('type 1st number');
let b = prompt('type 2d number');
let c = prompt('type 3d number');

 function min (a,b,c) {
    if (a<b&&a<c){
        console.log(a)
    } else if (b<a&&b<c){
        console.log(b)
    } else if (c<a&&c<b) {
        console.log(c)
    }
     return result;
 }
min (a,b,c);

