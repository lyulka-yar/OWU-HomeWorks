//------------------------1---------------------------------------------
// - создать 5 объектов. В каждом объекте не менее 3х полей.
//     Все объекты разные по набору полей. (Т.е поле name  должно присутствовать
// только 1 раз в одном объекте )
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
//         usage: '0-3 ages',
//         dangerLvl: 4,
//         electric: null,
//         material: 'wood'
//     }
//------------------------2---------------------------------------------
//     создать 5 объектов с полностью разным набором полей.
// В каждом объекте должен присутсвовать массив и внутренний объект.
// Опишите что угодно, машину, картину, болт...Пример: let man = {
//     name: 'kokos',
//     skills: ['java', 'js'],
//     wife: { name: 'cherry' }
// };

//------------------------3---------------------------------------------

//При помощи for in вывести все ключи всех объектов из задания task-1 и task-2


// let array = [toy, chikenn, car, dog, man];
//
// task-1 task
// for (const arrayElement in array) {
//     // console.log('Key first',arrayElement);
//     for (const arrayElementKey in array[arrayElement]) {
//         console.log(arrayElementKey)
//     }
// };

//------------------------4---------------------------------------------

// - При помощи Object.keys вывести все ключи всех объектов из задания task-1 и task-2

// console.log(Object.keys(array));

//------------------------5---------------------------------------------

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель,
// год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

// let arrCars = [tesla = {
//     model: 'S',
//     color: 'grey',
//     power: `${800} hourse power`,
//     yearOfCr: 2012
// }, ford = {
//     model: 'tesla',
//     color: 'yellow',
//     power: `${300} hourse power`,
//     yearOfCr: 1964
// }, bmw = {
//     model: 'm3',
//     color: 'brown',
//     power: `${480} hourse power`,
//     yearOfCr: 1998
// }, car4 = {
//     model: 'wolksvagen',
//     color: 'red',
//     power: `${230} hourse power`,
//     yearOfCr: 2003
// }]
// console.log(arrCars);

//------------------------6---------------------------------------------

// Создать массив объектов cities и заполнить его объектами с полями название,
// популяция, страна, регион.(Значаения полей могу быть выдуманными)

// let cities = [
//     city1 = {
//         name: 'kharkiv',
//         population: 'very bad',
//         country: 'ukraine',
//         region: 'pupivka'
//     },
//     city2 = {
//         name: 'paris',
//         population: 'not bad',
//         country: 'france',
//         region: 'baragit'
//     },
//     city3 = {
//         name: 'zimbabve',
//         population: 'very very bad',
//         country: 'aragauga',
//         region: 'zlafjg'
//     },
//     city4 = {
//         name: 'odessa',
//         population: 'normal',
//         country: 'ukraine',
//         region: 'pahlave4na'
//     }
// ]
// console.log(cities);

//------------------------7---------------------------------------------

// Создать массив объектов cars и заполнить его машинами с полями модель,
// год выпуска, мощность, цвет, водитель.
//
let arrCarsDrivers = [tesla = {
    model: 'S',
    color: 'grey',
    power: `${800} hourse power`,
    yearOfCr: 2012,
    driver: {
        name: 'Petro',
        expirience: `${4} years`,
        age: 34,
        male: 'man'
    }
}, ford = {
    model: 'scorpio',
    color: 'yellow',
    power: `${300} hourse power`,
    yearOfCr: 1964,
    driver: {
        name: 'Vasya',
        expirience: `${20} years`,
        age: 46,
        male: 'man'
    }
}, bmw = {
    model: 'm3',
    color: 'brown',
    power: `${480} hourse power`,
    yearOfCr: 1998,
    driver: {
        name: 'Oleh',
        expirience: `${10} years`,
        age: 30,
        male: 'man'
    }
}, wolksvagen = {
    model: 'golf-4',
    color: 'red',
    power: `${230} hourse power`,
    yearOfCr: 2003,
    driver: {
        name: 'Liza',
        expirience: `${2} years`,
        age: 25,
        male: 'woman',
        friends: undefined,
        husband: null
    }
}];
// console.log(arrCarsDrivers);

// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// i = 0;
// let driversCount = '';
// while (i < arrCarsDrivers.length) {
//      driversCount = arrCarsDrivers[i];
//     i++;
//     console.log(driversCount);
// }
//
// - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (let j = 0; j < arrCarsDrivers.length; j++) {
//     const driversCountElement = arrCarsDrivers[j];
//     console.log(driversCountElement)
// }
//
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (const arrCarsDriver of arrCarsDrivers) {
//     let driversAll = arrCarsDriver;
//     console.log(driversAll);
// }

// - взять объекты из задания 1 и превратить каждый в json.
// let strJson = JSON.stringify(arrCarsDrivers)
// let rightObj = JSON.parse(strJson);
// console.log(strJson);
// console.log(rightObj);

    // - взять json из задания 11 и превратить их обратно в объекты.

// newRigthobj = JSON.parse(strJson);
// console.log(strJson);
// console.log(newRigthobj);

// взять массив из задания 5,в цикле перебрать его объекты превратив их в json\

// for (const arrCarsDriver of arrCarsDrivers) {
//     let greaterJson = JSON.stringify(arrCarsDriver);
//
//     console.log(greaterJson);
// }

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу
// скоприовать в новый массив.

const wrapContent = document.getElementById('content');
const  allRules = document.getElementsByClassName("rules");

for (const classRules of allRules) {
    const titleAll = document.getElementsByTagName('h2');
    // console.log(classRules);
 for (const innerContentUl of  wrapContent) {
     document.createElement('ul');
     innerContentUl.innerText('titleAll');
 }

}

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
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з
// них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.


// const wrapContent = document.getElementById('content');
// const  allRules = document.getElementsByClassName("rules");
//
// for (const classRules of allRules) {
//     const titleAll = document.getElementsByTagName('h2');
//     // console.log(classRules);
//  for (const innerContentUl of  wrapContent) {
//      document.createElement('ul');
//      innerContentUl.innerText('titleAll');
//  }
//
// }


//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та
// робить кожне правило в окремому блоці.
//При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці
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