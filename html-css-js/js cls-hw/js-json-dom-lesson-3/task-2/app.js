// - создать 5 объектов. В каждом объекте не менее 3х полей.
//     Все объекты разные по набору полей. (Т.е поле name  должно присутствовать
// только task-1 раз в одном объекте )
// let man = {
//     health: undefined,
//     hair: null,
//     pet: 'dog',
//     name: 'Valera'
// }
// let dog = {
//     height: `${50} sm`,
//     age: 5,
//     weight: `${5} kg`,
//     psiho: 'holeric'
// }
// let car = {
//     brand: 'toyota',
//     year: 1991,
//     color: 'grey',
//     hoursePower: 276
// }
// let chikenn = {
//     flavor: 'taysty',
//     origin: 'dorf',
//     pesticidse: undefined,
//     txt: 'exr'
// }
// let toy = {
//     usage: '0-3 ages',
//     dangerLvl: 4,
//     electric: null,
//     material: 'wood'
// }
// - создать 5 объектов с полностью разным набором полей.
//     В каждом объекте должен присутсвовать массив и внутренний объект.
//     Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos',
//     skills : ['java','js'] , wife: { name: 'cherry' } };
// let man = {
//     health: undefined,
//     hair: {
//         type: [task-1, 4, 5, '214aiafi'],
//         ahf: {
//             name: 123,
//             color: {
//                 aligator: "tipin"
//             }
//         }
//     },
//     pet: 'dog',
//     name: 'Valera'
// }
// let dog = {
//     height: `${50} sm`,
//     age: {
//         old: 123,
//         wise: 14141,
//         olegagaga: 'faohafhkafh'
//     },
//     weight: `${5} kg`,
//     psiho: 'holeric'
// }
// let car = {
//     brand: 'toyota',
//     year: 1991,
//     colors: ['grey', 'purple', {gradient: 'blue-gray'},
//         {kitty: "kapibara"},
//         ['oleg', 'marat',
//             {giena: 'kievskaya'}]],
//     hoursePower: 276,
// }
// let chikenn = {
//     flavor: 'taysty',
//     origin: 'dorf',
//     pesticides: {
//         valera: 'priyshov tviy chas',
//         hello: 114141,
//         olerg: ['fahahk']
//     }
// }
// let toy = {
//     usage: '0-3 ages',
//     dangerLvl: 4,
//     electric: {jello: 'null', trte: 2141, sara: ['adada', 1231]},
//     material: 'wood'
// };


//task-1 - При помощи for in вывести все ключи всех объектов из задания task-1 и task-2
//
// - При помощи Object.keys вывести все ключи всех объектов из задания task-1 и task-2
//     - При помощи for in вывести все ключи всех объектов из задания task-1 и task-2
//
// - При помощи Object.keys вывести все ключи всех объектов из задания task-1 и task-2

// let array = [toy, chikenn, car, dog, man]; // task-1 and task-2 TASKS
//
// task-1 task
// for (const arrayElement in array) {
//     // console.log('Key first',arrayElement);
//     for (const arrayElementKey in array[arrayElement]) {
//         console.log(arrayElementKey)
//     }
// };

//task-2 task
// for (const arrayElem in array) {
//     console.log(arrayElem)
//     for (const arrayElemKey in array[arrayElem]) {
//         console.log(arrayElemKey);
//     }
// }
//3 task

// for (const arrayKey in array) {
//     console.log(Object(array[arrayKey]));
// }

// - Создать массив объектов cars и заполнить его машинами с полями модель,
//     год выпуска, мощность, цвет, водитель.
//
//     Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
//  - взять объекты из задания 1 и превратить каждый в json.
// - взять json из задания 11 и превратить их обратно в объекты.
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json
// и сразу скоприовать в новый массив.
// - Создать массив пользователей. У каждого пользователя обязательно должено быть
// поле skills которое является массивом. Проитерировать массив пользователей и в
// каждом пользователе проитерировать его массив skills
// - Создать массив пользователей. У каждого пользователя обязательно должено быть
// поле skills которое является массивом. Проитерировать массив пользователей и в
// каждом пользователе проитерировать его массив skills. Скопировать все skills всех
// пользователей в отедльный массив


let driversOfCar = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        },
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        }
    }
}
console.log(driversOfCar);

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

// for (const user of users) {
//     console.log(user.name)
//
//     for (const userSkills of user.skills) {
//         console.log(userSkills);
//     }console.log('----------------')
// }

//
////////////////////////////////////////////////////////////////
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: task-1}
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
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: task-1}
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


// - З масиву users за допомогою циклу витягнути адреси користувачів і записати
// (скопіювати) їх в інший порожній масив.

// let usersLocAdress = [];
// for (const user of users) {
//     console.log(user.name);
//     for (const userlocation in user.address) {
//         usersLocAdress = user.address[userlocation];
//         console.log(usersLocAdress)
//     }
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй
// блок за допомоги document.createElement. Всі данні в одному блоці.

// for (const user of users) {
//    let divka = document.createElement('div');
//
//      divka.innerText=user.name;
//      document.body.appendChild(divka);
// }

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки
// (h2) характеризують тему контенту яка вказана в параграфі.
//створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з
// них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.


const titleAll = document.getElementsByTagName('h2');
const wrapCont = document.getElementById('content');
wrapCont.createElement('ul');





//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та
// робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в
// свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці
// wrap файла rule.html

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
//     },
//
// ];
//
// for (const rule of rules) {
//     console.log()
// }