// //----------------------------------------------------1-------------------------------------------------------
//
// let users = {
//     developer: {
//         name: 'Nasya',
//         age: 21,
//         isMaried: false,
//         car: true
//     }, driver: {
//         house: undefined,
//         credit: 2921,
//         dog: true,
//     }, arkitech: {
//         expirience: `${4} years`,
//         child: 2,
//         bike: false,
//         health: 'bad'
//     }
// };
//
// //----------------------------------------------------2-------------------------------------------------------
//
// let usersDiff = {
//     developer: {
//         name: 'Nasya',
//         age: 21,
//         isMaried: false,
//         car: true
//     }, driver: {
//         house: undefined,
//         credit: 2921,
//         dog: true,
//     }, arkitech: {
//         expirience: `${4} years`,
//         child: 2,
//         bike: false,
//         health: 'bad'
//     }, fireWorker: {
//         expirience: [`${14} years`, works = {first: 'Ohripko LTD', second: 'Roga & сopita',}],
//         child: false,
//         bike: {
//             model: 'fazer',
//             power: 300
//
//         },
//         health: 'bad'
//     }, programmer: {
//         expirience: `${12} years`,
//         childs: {
//             psc: 2,
//             sara: ['1st child', 'age', 4, hobbie = {
//                 dance: 'hip-hop'
//             }]
//         },
//         bike: false,
//         health: 'bad'
//     }
// }
// // console.log(usersDiff)
//
// //----------------------------------------------------3-------------------------------------------------------
// // for (const usersKey in users) {
// //     console.log(usersKey);
// // }
//
// // for (const usersElem in usersDiff) {
// //     // console.log(usersElem)
// //     for (const usersElemKey in usersElem) {
// //         console.log('number of elem',usersElemKey)
// //     }
// //
// // }
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// // console.log(Object.keys(usersDiff.fireWorker))
// //----------------------------------------------------4-------------------------------------------------------
//
// let carArr = [
//     bmw = {
//         model: 'm3',
//         year: 2003,
//         color: 'grey',
//         horsePower: 300
//     }, tesla = {
//         model: 'S',
//         year: 2012,
//         color: 'dark-grey',
//         horsePower: 800
//     }, reno = {
//         model: 'm3',
//         year: 2007,
//         color: 'green',
//         horsePower: 200
//     }, fiat = {
//         model: 'doblo 4',
//         year: 2000,
//         color: 'white',
//         horsePower: 95
//     }, wolksvagen = {
//         model: 'golf 4',
//         year: 2013,
//         color: 'dark blue',
//         horsePower: 102
//     },
//
// ];
// //
// // for (const carArrElement of carArr) {
// //     console.log('car model',carArrElement);
// //     for (const carArrElementElement in carArrElement) {
// //         // console.log(carArrElementElement);
// //     }
// // }
// // console.log(carArr);
// //----------------------------------------------------5-------------------------------------------------------
// let carArrDr = [
//     bmw = {
//         model: 'm3',
//         year: 2003,
//         color: 'grey',
//         horsePower: 300,
//         driver: {
//             name: 'Erica',
//             expirience: `${4} years`,
//             age: 24
//         }
//     }, tesla = {
//         model: 'S',
//         year: 2012,
//         color: 'dark-grey',
//         horsePower: 800,
//         driver: {
//             name: 'Bovadwq',
//             expirience: `${41} years`,
//             age: 64
//         }
//     }, reno = {
//         model: 'm3',
//         year: 2007,
//         color: 'green',
//         horsePower: 200,
//         driver: {
//             name: 'Bibo',
//             expirience: `${6} years`,
//             age: 34
//         }
//     }, fiat = {
//         model: 'doblo 4',
//         year: 2000,
//         color: 'white',
//         horsePower: 95
//     }, wolksvagen = {
//         model: 'golf 4',
//         year: 2013,
//         color: 'dark blue',
//         horsePower: 102,
//         driver: {
//             name: 'Patrik',
//             expirience: `${6} years`,
//             age: 44
//         }
//     },
// ];
// // console.log(carArrDr)
// //----------------------------------------------------6-------------------------------------------------------
// // arrays of tasks
//
// // carArrDr
// // carArr
//
//
// let i = 0;
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// ------------while---for----for-of---------
// let newArrCar = [];
// while (i < carArr.length) {
//
//     newArrCar = carArr[i];
//     i++;
// }
// // console.log(newArrCar);
//
// let newArrCarDr = [];
// while (i < carArrDr.length) {
//
//     newArrCarDr = carArrDr[i];
//     i++;
// }
// // console.log(newArrCarDr);
//
// let carArrNew = [];
// for (let j = 0; j < carArr.length; j++) {
//     carArrNew.push(carArr[j])
// }
// // console.log(carArrNew)
//
// let carArrNewDr = [];
// for (let k = 0; k < carArr.length; k++) {
//     carArrNewDr.push(carArrDr[k])
// }
// // console.log(carArrNewDr)
//
//
// for (const carArrNewDrElement of carArrDr) {
//     // console.log(carArrNewDrElement)
// }
// for (const carArrElement of carArr) {
//     // console.log(carArrElement)
// }
//
// //-------JSON Stringify--JSON Parse--------------------------------7-------------------------------------------------------
//- взять объекты из задания 1 и превратить каждый в json.
// - взять json из задания 11 и превратить их обратно в объекты.
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу
// скоприовать в новый массив.
// let newJson = (JSON.stringify(users));
// let rightJson;
//
// rightJson = JSON.parse(newJson);
//
// // console.log(newJson);
// // console.log(rightJson);
//
// let usersDiffJson = (JSON.stringify(usersDiff));
// // console.log(usersDiffJson);
// let rightUsersDiffJson;
// // console.log(rightUsersDiffJson = JSON.parse(usersDiffJson));
//
// for (const carArrNewDrElement of carArr) {
//     let carJson = JSON.stringify(carArrNewDrElement);
//     // console.log(carJson)
// }
// for (const carArrNewDr of carArrDr) {
//     let carJsonDr = JSON.stringify(carArrNewDr);
//     // console.log(carJsonDr)
// }
// //----------------------------------------------------8-------------------------------------------------------
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое
// является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills
// которое является массивом. Проитерировать массив пользователей и в каждом пользователе
// проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let usersApi = [
//     user1 = {
//         name: 'Oleh Vinnik',
//         age: 24,
//         male: 'man',
//         exp: `${3} eyars`,
//         skills: ['java', 'paskall', 'delphi']
//     },
//     user2 = {
//         name: 'Oleh Marat',
//         age: 24,
//         male: 'man',
//         exp: `${3} eyars`,
//         skills: ['CodePen', 'klkylator', 'mashinka']
//     },
//     user3 = {
//         name: 'Kaka Kykinyo',
//         age: 22,
//         male: 'man',
//         exp: `${3} eyars`,
//         skills: ['python', 'PHP', 'elwprbench']
//     },
//     user4 = {
//         name: 'Taras Hmarko',
//         age: 34,
//         male: 'man',
//         exp: `${3} eyars`,
//         skills: ['java', 'C++', 'JavaScript']
//     },
//     user5 = {
//         name: 'Itarovet Itaros',
//         age: 44,
//         male: 'man',
//         exp: `${3} eyars`,
//         skills: ['java', 'ruby', 'c#']
//     }
// ]
//
// let arrOfSkills = [];
// for (const usersApiElement of usersApi) {
//     // console.log('*****************************************');
//     // console.log(usersApiElement.name);
//     // console.log('*****************************************');
//     for (const usersApiElementElement of usersApiElement.skills) {
//         // console.log(usersApiElementElement)
//         arrOfSkills.push(usersApiElementElement)
//
//     }
// }
// // console.log(JSON.stringify(arrOfSkills))
//
// let usersNew = [{
//     name: 'vasya', age: 31, status: false, skills: ['java', 'js']
// },
//     {   name: 'petya',
//         age: 30,
//         status: true,
//         skills: ['java', 'js', 'html']
//     },
//     {   name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']
//     },
//     {   name: 'olya',
//         age: 28,
//         status: false,
//         skills: ['java', 'js']
//     }, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
//
//- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// for (const usersNewElement of usersNew) {
//     // console.log('---------------------------------------')
//     // console.log('users',usersNewElement)
//     for (const allSkills of usersNewElement.skills) {
//         // console.log('skills',allSkills)
//     }
// }
// let arrSkill = [];
// for (const usersNewElement of usersNew) {
//     // console.log('---------------------------------------')
//     // console.log('users',usersNewElement)
//     for (const allSkills of usersNewElement.skills) {
//         arrSkill.push(allSkills);
//     }}
// // console.log('skills',arrSkill)
// //----------------------------------------------------9-------------------------------------------------------
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати)
// їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
// за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
// за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
// за допомоги document.createElement, розділивши всі властивості по своїм блокам ,
// блок з адресою зробити окремим блоком, з блоками для кожної властивості

//
// let usersLoc = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];


// let usersAdress = [];
// for (const usersLocElement of usersLoc) {
//     usersAdress = usersLocElement.address
//     console.log(usersAdress);
// }

// for (let i = 0; i < usersLoc.length; i++) {
//     const locElement = usersLoc[i];
//     // console.log(locElement)
//     let address = '';
//     for (const addressUs in locElement.address) {
//         address = address + locElement.address[addressUs];
//     }
//     const div = document.createElement('div');
//     div.innerText = `${locElement.name} ${locElement.status} ${locElement.age} ${address}`
//     document.body.appendChild(div);
// }

// for (let i = 0; i < usersLoc.length; i++) {
//     const userDiv = usersLoc[i];
//     const elementDiv = document.createElement('div');
//     const elementP1 = document.createElement('p1');
//     const elementP2 = document.createElement('p2');
//     const elementH3 = document.createElement('h3');
//     let addressKey = '';
//     for (const userDivKey in userDiv.address) {
//         addressKey = addressKey + '  ' + userDiv.address[userDivKey];
//     }
//     elementH3.innerHTML = userDiv.name;
//     elementP1.innerHTML = userDiv.age;
//     elementP2.innerHTML = addressKey;
//
//     elementDiv.appendChild(elementH3);
//     elementDiv.appendChild(elementP1);
//     elementDiv.appendChild(elementP2);
//    document.body.appendChild(elementDiv);
// } // ПЛОХО

// for (const element of usersLoc) {
//     let div = document.createElement('div');
//     div.innerHTML = `<div>${element.name}</div>
//     <div>${element.age}</div>
//     <div>${element.status}</div>
//     <div>
//         <div>${element.address.city}</div>
//         <div>${element.address.country}</div>
//         <div>${element.address.street}</div>
//         <div>${element.address.houseNumber}</div>
//     </div>`;
//     document.body.appendChild(div);
// } //ОЧЕНЬ ХОРОШО

//----------------------------------------------------10-------------------------------------------------------
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив

// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {
//     id: 2,
//     name: 'petya',
//     age: 30,
//     status: true
// }, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {
//     user_id: 1,
//     country: 'Ukraine',
//     city: 'Ternopil'
// }, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
//
// let newArrUser = [];
// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if (user.id === city.user_id) {
//             newArrUser.push(user.address = city);
//         }
//     }
// }console.log(newArrUser)


// - створити розмітці блок з id, class та текстом в середені.
// `1читати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
//

// const div = document.createElement('div');
// document.body.appendChild(div);
// div.setAttribute('id', 'block');
// div.classList.add('block_style');
// div.innerText = 'Test message';
//
// const idBlock = document.getElementById('block');
// idBlock.style.fontSize = '50px';
// const classBlock = document.getElementsByClassName('block_style');
// for (const classBlockElement of classBlock) {
//     classBlockElement.style.width = '300px';
//     classBlockElement.style.backgroundColor = 'red';
// }
//
// const tagStyle = document.getElementsByTagName('div');
// for (const tagStyleElement of tagStyle) {
//     tagStyleElement.style.height = '50px';
// }
//
// // - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
//
const tableElement = document.createElement('table');
document.body.appendChild(tableElement);
// tableElement.innerHTML = `${'<tr>'} <td>hello</td> <td>i am</td> <td>table with 3 col</td> ${'</tr>'}`;
// tableElement.style.border='1px dashed red';
//
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків
// з трьома ячейками всередені

for (let i = 10; i > tableElement.length; i--) {
    for (const tableElementKey in tableElement) {
        let m = prompt('number of colls');
        let n = prompt('number of rows');tableElement.innerHTML =
            `${'<tr>'} ${'</tr>'}*${3}`;


    }
}















