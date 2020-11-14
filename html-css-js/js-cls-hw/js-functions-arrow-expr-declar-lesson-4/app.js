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
//     }];

// - створити функцію яка виводить масив
//
// function f(arr) {
//     console.log(arr);
// for (const arrayElement of arr) {
// console.log(arrayElement);
// }
// }
// f(array);

// - створити функцію яка заповнює масив
// рандомними числами та виводить його.
// Для виведення використати попвередню функцію.
//
//  function rand (length,max,min) {
//  let arrRand =[];
//      for (let i = 0; i <length; i++) {
//          arrRand.push(Math.floor(Math.random()*(max-min)+min));
//      }
//      return arrRand;
//  }
//  const vars = rand(15,7145,182);
// f (vars);

// - створити функцію яка приймає три числа та виводить
// та повертає найменьше.
//
// function minThreeVals(length,a, b, c) {
//     let minVal = Math.min(a,b,c);
//     // if (a <= b && a <= c) min = a;
//     // if (b <= a && b <= c) min = b;
//     // if (c <= b && c <= a) min = c;
//     console.log('минимальное: ', minVal);
//     console.log('--------------------');
//     return minVal;}
// const minValue = minThreeVals(1,12, 54, 26661);
// console.log(minValue)

// - створити функцію яка приймає три числа та виводить
// та повертає найбільше.
//
// function maxThreeVals (length,a,b,c) {
//
//     let result = Math.max(a,b,c);
//     console.log('максимальное',result)
//     return result;
// }
//  const maxVal = maxThreeVals(1,1512,51,2314);
// console.log('________')
// console.log(maxVal)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
//а виводить найбільше
// function anyLength() {
//     let min = arguments[0];
//     let max = arguments[0];
//
//     for (const value of arguments) {
//         if (max > value) max = value;
//         if (min < value) min = value;
//     }
// console.log(max);
// return min;
// }
// const returnMinLogMax = anyLength(1, 2, 4, 3, 56, 6, 7, 3245, 23, 12, 54, 76, 3, 7, 4, 3, 2, 98);
// console.log('--------------------------');
// console.log(returnMinLogMax)
//

// -створити функцію яка виводить масив
//
// const numbers = [1, 2, 3, 44, 5, 6, 12, 64];
//
// function logNum(num) {
//     for (let number of numbers) {
//         console.log(number)
//     }
//     return num;
// }
// logNum();

// - створити функцію яка повертає найбільше число з масиву
//
// const numbers = [1, 2, 3, 44, 5, 6, 12, 64];
//
// function logMax (numbers) {
//     let max = numbers[0];
//     for (const number of numbers) {
//         if (max < number) max = number;
//     }
//     return max;
// }
//  const number = logMax(numbers);
// console.log('max:',number);

// - створити функцію яка повертає найменьше число з масиву
//
// const numbers = [500, 22, 35, 44, 2, 6, 12, 64];
// const logMinNumber = (numbers) => {
//     let min = numbers[0];
//     for (const number of numbers) {
//         if (min > number) min = number;
//     }
//     return min;
// }
// const min = logMinNumber(numbers);
// console.log(min)

// - створити функцію яка приймає масив чисел та складає значення
// елементів масиву та повертає його.
// - створити функцію яка приймає масив чисел та повертає середнє
// арифметичне його значень.
//
// const numbers = [500, 22, 35, 44, 2, 6, 12, 64];
// const multi = (numbers) => {
//
//     let result = 0;
//     for (const number of numbers) {
//       result+=number;
//     }
//     console.log('total sum:',result)
//     return result/numbers.length;
// }
// const result = multi(numbers);
// console.log('_______________')
// console.log('average:',result)

// - Створити функцію яка приймає масив будь яких объектів,
//та повертає значення кількості об'єктів в масиві
//
// let arrObj = [
//     {
//         first: 1,
//         second: 2,
//         theThird: 3
//     },
//     {
//         first: 'first',
//         second: 'second',
//         theThird: 'third'
//     },
//     {
//         typeT: true,
//         typeF: false
//     },
//     141,
//     'hello',
//     false,
//     null,
//     undefined
// ]
// // const counterOfObj = (arrObj) => {
// //     let count = 0;
// //     for (const obj of arrObj) {
// //         if (typeof obj === "object" && !Array.isArray(obj)) {
// //             count++;
// //         }
// //
// //     } console.log(count) ;
// //     return count;
// // }
// // const counter = counterOfObj(arrObj);
// const counterOfObj = (arrObj) => {
//     let count = 0;
//
//     for (const obj of arrObj) {
//         if (typeof obj === "object" && !Array.isArray(obj)) {
//
//             for (const keys in obj) {
//                 count++;
//             } }
//
//     } console.log(count) ;
//     return count;
// }
// const counter = counterOfObj(arrObj);

// - створити функцію  яка скаладає значення елементів з
// однаковими індексами та повертає новий результуючий масив.
//
// let firstArr = [1, 8, 4, 2, 5, 123];
// let secondArr = [12, 38, 54, 12, 45, 5123];
// const compareAndSum = (arr1, arr2) => {
//     let arrNew = [];
//     for (let i = 0; i < arr1.length; i++) {
//         arrNew.push(arr1[i] + arr2[i])
//     }
//     return arrNew;
// }
// const result = compareAndSum(firstArr, secondArr)
// console.log(result)

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в
//  індексі "i" на "i+1"
// let arr = [124, 21, 523, 124, 24, 4512, 124, 1, 541, 55, 7, 56];
// const getIndexAndArray = (arr, index) => {
//  let array = [...arr];
//  if (index < array.length-3) {
//      let temp = array[index];
//      array[index] = array[index+2];
//      array[index+3]= temp;
//  }
//     return array;
// }
// const indexAndArray = getIndexAndArray(arr, 5);
// console.log(arr)
// console.log(indexAndArray);

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
//     Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// Приклад
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]
//
// const zeroToEnd = (arr) => {
//     let zero = [];
//     let number = [];
//     for (const item of arr) {
//         if (item === 0) {
//             zero.push(0);
//         } else {
//             number.push(item);
//         }
//     }
// return number.concat(zero);
// }
//
// console.log(zeroToEnd([1, 0, 6, 0, 3]));
// console.log('------------------------------');
// console.log(zeroToEnd([0, 1, 2, 3, 4]));
// console.log('-----------------------------');
// console.log(zeroToEnd([0, 0, 1, 0]));

// Створити функцію яка :
//     - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом .
//     Тип елементу та текст отримати через аргументи
// const divBlock = document.createElement('div');
// const pBlock = document.createElement('p');
// const container = document.createElement('div');
// let a = document.createElement('a');
//
//
// const textBody = () => {
//
//     pBlock.innerText = ('Hello owu');
//     divBlock.appendChild(pBlock);
//     container.appendChild(divBlock);
//     container.style.margin = '0 auto';
//     container.style.width = '600px';
//     document.body.style.backgroundColor = 'lightblue';
//     container.appendChild(a);
//     a.innerText='link';
//     document.body.appendChild(container);
//
//     return container;
// };
// textBody(container, divBlock, pBlock, a);
//
//

// - приймає масив автомобілів (можна взяти з попередніх дз ),
// та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//
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
//     },
//     tesla = {
//         model: 'S',
//         year: 2012,
//         color: 'dark-grey',
//         horsePower: 800,
//         driver: {
//             name: 'Bovadwq',
//             expirience: `${41} years`,
//             age: 64
//         }
//     },
//     reno = {
//         model: 'm3',
//         year: 2007,
//         color: 'green',
//         horsePower: 200,
//         driver: {
//             name: 'Bibo',
//             expirience: `${6} years`,
//             age: 34
//         }
//     },
//     fiat = {
//         model: 'doblo 4',
//         year: 2000,
//         color: 'white',
//         horsePower: 95
//     },
//     wolksvagen = {
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
//
// const cars = (cars) => {
//
//     const ul = document.createElement('ul');
//         ul.id = 'wrap';
//     for (let i = 0; i < cars.length; i++) {
//         const li = document.createElement('li');
//
//         li.innerHTML = `${cars[i].model} ${cars[i].color} ${cars[i].horsePower}`;
//         ul.appendChild(li);
//        if (cars[i].driver) {
//           li.innerHTML=`${cars[i].model} ${cars[i].color} ${cars[i].horsePower}` + ` ${cars[i].driver.name}`;
//        }
//     }
//
//     document.body.appendChild(ul);
// }
// cars(carArrDr);

// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true}, {
//         id: 3, name: 'kolya',
//         age: 29, status: true
//     }, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {
//         user_id: 2,
//         country: 'Poland', city: 'Krakow'
//     }, {user_id: 4, country: 'USA', city: 'Miami'},];
//
// const b = (users, cities) => {
//     let userCityId = [];
//
//     for (const usersId of users) {
//         for (const cityId of cities) {
//             if (usersId.id === cityId.user_id) {
//                 userCityId.push(Object.assign(usersId, cityId));
//             }
//         }
//     }
//     return userCityId;
// }
// const b1 = b(usersWithId, citiesWithId);
// console.log(b1)

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив,
// та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок,
// текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура
//     яка міститься в блоці wrap файла rule.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     }];

//1. Cоздать функцию которая принимает в себя заголовок и текс
//2. получить блок контент с body? создать цикл и проитерировать  масив
// с правилами и занестих их в отдельный блок  с номером правила
// тоже в отдельном блоке
//3.
//// <div class="rules rule1">-->
// //   <h2>Первое правило Бойцовского клуба.</h2>
// //   <p>Никому не рассказывать о Бойцовском клубе.</p>
// //</div>
// //
// const createStructure = () => {
//     const wrap = document.getElementById('content');
//     for (let i =0; i<rules.length; i++) {
//         const div = document.createElement('div');
//         const h2 = document.createElement('h2');
//         const p = document.createElement('p');
//         const span = document.createElement('span');
//         const rule = rules[i];
//
//         div.className=(`rules`);
//         span.innerText= `${[i+1]}`;
//         h2.innerText = rule.title;
//         p.innerText = rule.body;
//
//         div.appendChild(span);
//         div.appendChild(h2);
//         div.appendChild(p);
//
//     wrap.appendChild(div);
//     }
//     return div;
// }
// createStructure();

// ===========додаткове від Віктора========

// Вирівняти багаторівневий масив в однорівневий
// let req = []
// const arr = [1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9];
// 3) Flat
//
//
//     [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] ->
//     [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
//
// const arrDepth = arr.flat(10);
// console.log(arrDepth)
//
// 1) Точная степень двійки.
//     Дано натуральное число N.
//     Виведіть слово YES, якщо число N являєтся точною степенюю двійки,
//     або слово NO в поганому випадку.
//     Операцією піднесення в степінь користуватись не можна!
//
// let n = 0;
// n = prompt('type a number');
// while (n >= 2) {
//     n = n / 2;
//     if (1 === n) {
//         console.log("YES")
//     }   console.log("NO");
// }


























