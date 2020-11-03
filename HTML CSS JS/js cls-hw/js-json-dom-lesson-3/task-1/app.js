//
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу1
// const dog = {
//     name: 'Patrick',
//     breed: 'Retriver',
//     hColor: 'brovn',
//     age: `${4} years`,
//     weight: `${12} kg`,
//     food: 'meat and vegetables'
// }
// const human = {
//     name: 'Ihor',
//     language: 'english',
//     hColor: 'white',
//     age: `${32} years`,
//     health: undefined,
//     prefFood: {fruits:['apple','peach','orange','grape']}
// }
// const car= {
//     brand: 'toyota',
//     model: 'camry',
//     color: 'purple',
//     age: `${10} years`,
//     weight: `${1865} kg`,
//     hP: 286
// }
// const flat = {
//     floor: 4,
//     number: 75,
//     typeOfBuild: 'Hrushevka',
//     age: `${65} years`,
//     status: 'needs repair'
// };

// -- Створити масив та вивести його в консоль:
// const dogs = ['collie','bulldog','frenchterier','chiuaua','germanOvcharka'];
// const users = ['Piter','Patrik','Erika','Dani','Sasha'];
// const cars = ['ford','bmw','ferarri','lincoln','tesla'];
// console.log(dogs,users,cars);

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок // - водій // - іграшку  // - стіл // - сумка

// const someThing = {
//     house: 'big',
//     driver: ['expirienced', 'careful', 'patiently'],
//     toy: {funny: 'intresting',},
//     color: 'yellow',
//     table: strong,
//     bag: 'expencive'
// };
//
// Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і ' +
// 'вивести'+' в консольх наступне
// - статус Андрія - статус Максима
// - ім'я передостаннього об'єкту - ім'я третього об'єкта
// - вік Олега - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name).
//     Будьте уважні! 4й об'єкт має індес 3!
//

// let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
//
// console.log(users[4].status);
// console.log(users[7].status);
// console.log(users[3].name);
// console.log(users[9].name);
// console.log(users[3].age);
// console.log(users[6].age);
// console.log(users[5].age,users[5].name);
// console.log(users[5].age,users[5].status);


// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або
// document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний


// let contentElem = document.getElementById('content');
// let contentRules = document.getElementById('rules');
// let allClassElem = document.getElementsByClassName('rules');
// let fcRules = document.getElementsByClassName('fc_rules');
// console.log(allClassElem);
// contentElem.innerText = 'Hello hellom this is intro title for all! ';
// contentRules.innerText = 'Hello hellom this is intro title for all!Hello hellom ' +
//     'this is intro title for all!Hello hellom this is intro title for all! ';
//
// for (const contentRul in contentRules) {
//     contentRules.style.backgroundColor='red';
//     contentRules.style.color='blue';}
// for (const contentEl in contentElem) {
//     contentElem.style.backgroundColor='red';
//     contentElem.style.color='blue';
// }
// console.log(fcRules);
// for (let i = 0; i < fcRules.length; i++) {
//     fcRules[i].style.color='red';}



////////////////////////////////////////////////////////////////////////////


// const headerMain = document.getElementById('main_header');
// const ulElem = document.getElementsByTagName('ul');
// const lList = document.getElementsByClassName('linkList');
// const listElem = document.getElementsByClassName('listElement22');
// const subHeader = document.getElementsByClassName('sub-header');
// const contentElem = document.getElementsByClassName('content_1');
// const txtElem = document.getElementsByClassName('text2');
// const liElem = document.getElementsByTagName('li');
// const pElem = document.getElementsByTagName('p');
// let aElem = document.getElementsByTagName('a');


// headerMain.style.color='green';
//
// for (const ulItem of ulElem )
// {
//     ulItem.style.border="1px solid red";
//     ulItem.style.width="400px";
//     console.log(ulItem);
// }
//
// for (const linkItem of lList) {
//     linkItem.style.border='50%';
// }
// console.log(listElem);
//
// for (const liItem of liElem) {
//     liItem.style.backgroundColor="grey";
// }
// for (const aItem of aElem) {
//     aItem.classList.add('anchor');
// }
//
// for (const aItemAll of aElem) {
//     if (aItemAll.innerText === 'link3') {
//         aItemAll.style.fontSize='40px';
//     };
// }
//
// for (const aElemItem of aElem) {
//     aElemItem.classList.add('element_XXX');
//     aElemItem.innerText='XXX';
// }
//
//
// for (const subHeaderElement of subHeader) {
//     if (subHeaderElement.style.backgroundColor=prompt("type a color")) {
//     }
// }
// for (const contentItem of contentElem) {
//     contentItem.innerText=prompt("type a text");
// };
//
// for (const pItem of pElem) {
//   pItem.style.padding='5px'
// }
//
// for (const txtElemElement of txtElem) {
//     txtElemElement.style.fontSize="28px";
// }
