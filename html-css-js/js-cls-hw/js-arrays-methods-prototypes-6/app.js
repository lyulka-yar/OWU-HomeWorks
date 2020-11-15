// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// - создать массив с 20 числами.
// let arrNum = [12, 4535, 123, 210, 45, 6, 256, 76, 88, 32, 650, 1234, 75, 234, 235, 70, 878, 326, 33, 20];

// 1. передать в map vfccbd
// 2. поместои в переменную результат перебора;
// 3. кажлое значеиемасива увеличить в 3 раза
// 4. записать результат в масив
// 5. вывести результат програмы в консоль

// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
//
// const sort = arrNum.sort((a, b) => {
//         if (a < b) {
//             return 1;
//         }
//         return -1;
//         return 0;
//         }) console.log(sort);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
//  const map1 = arrNum.map(value=> value *3);
// console.log(map1);
//
// -- при помощи filter получить числа кратные 3
// const result = arrNum.filter((a,index)=> {
//         if (a%3 === 0 ) {
//         // return `${item} + index${index}`;
//         return 'bla bla';
//         }
//         console.log(`${a}  № ${index}`); });
// console.log(result);

// -- при помощи filter получить числа кратные 10
//
// const result = arrNum.filter((a)=>{
//     if (a%10 === 0) {
//         return a;
//     }
// });console.log(result)

// -- перебрать (проитерировать) массив при помощи foreach()
// arrNum.forEach(value => console.log(value))

// - создать массив со словами на 15-20 элементов.
//
// let words = ['algebra','eclipse', 'round','Around', 'circle', 'square', 'triangle', 'Elipse', 'parabola', 'geomitric phigure', 'phisics',
//     'chimes', 'art', 'math', 'geography', 'Biology', 'Frd', 'culture', 'languages', 'table-tennis', 'soccer', 'horeografy', 'false', 'item', 'abc'];

// -- отсортировать его по алфавиту в восходящем порядке.
// const sort = words.sort((a,b)=> {
//     if (a.toLowerCase() < b.toLowerCase()) return -1;
//     if (a.toLowerCase() > b.toLowerCase()) return 1;
//     return 0;
//     });
// console.log(words)
// console.log(sort)
// console.log('-------------------')

// -- отсортировать его по алфавиту  в нисходящем порядке.
// const sort2 = words.sort((a,b)=> {
//     if (a.toLowerCase() < b.toLowerCase()) return 1;
//     if (a.toLowerCase() > b.toLowerCase()) return -1;
//     return 0;
// });
//
// console.log(words)
// console.log(sort2)

// -- отфильтровать слова длиной менее 4х символов
// const arr = words.filter(value => value.length < 4)
// console.log(arr);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения
// будут со знаком "!" в конце
//
// let words2 = ['algebra!','eclipse', 'round!','Around', 'circle', 'square', 'triangle!', 'languages',
//     'table-tennis', 'soccer', 'horeografy', 'false!', 'item', 'abc'];
// let newArr = words2.map(value => {
//     value += '!';
//     return value;
// });
// console.log(newArr)

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//     let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором

//МАСИВ
// let users = [{name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {
//     name: 'kolya',
//     age: 29,
//     status: true
// }, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {
//     name: 'anya',
//     age: 31,
//     status: false
// }, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {
//     name: 'masha',
//     age: 30,
//     status: true
// }, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true}];

//
//- відсортувати його за  віком (зростання , а потім окремо спадання)
//                                                                           (b.age - a.age)
// const sort = JSON.parse(JSON.stringify(users.sort((a,b)=> a.age - b.age))); //json не помогает с устранением мутации
// console.log(users)
// console.log(sort)

//- відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//
// const sort = users.sort((a,b)=> b.name.length - a.name.length); //json не помогает с устранением мутации
// console.log(users)
// console.log(sort)

//- пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
//
// let newArray = JSON.parse(JSON.stringify(users));
//
// let result = newArray.map((user, index) => {
//     user.id = Math.floor(Math.random() * 50) * index;
//     return user;
// });
//
// result.sort(((a, b) => a.id - b.id))
// console.log(users)
// console.log(result)

// let cars = [
//     {
//         manufacturer: "subaru",
//         model: "wrx",
//         year: 2010,
//         color: "blue",
//         type: "sedan",
//         engine: "ej204x",
//         volume: 2,
//         power: 400
//     },
//     {
//         manufacturer: "subaru",
//         model: "legacy",
//         year: 2007,
//         color: "silver",
//         type: "sedan",
//         engine: "ez30",
//         volume: 3,
//         power: 250
//     },
//     {
//         manufacturer: "subaru",
//         model: "tribeca",
//         year: 2011,
//         color: "white",
//         type: "jeep",
//         engine: "ej20",
//         volume: 2,
//         power: 300
//     },
//     {
//         manufacturer: "subaru",
//         model: "leone",
//         year: 1998,
//         color: "yellow",
//         type: "sedan",
//         engine: "ez20x",
//         volume: 2,
//         power: 140
//     },
//     {
//         manufacturer: "subaru",
//         model: "impreza",
//         year: 2014,
//         color: "red",
//         type: "sedan",
//         engine: "ej204x",
//         volume: 2,
//         power: 200
//     },
//     {
//         manufacturer: "subaru",
//         model: "outback",
//         year: 2014,
//         color: "red",
//         type: "hachback",
//         engine: "ej204",
//         volume: 2,
//         power: 165
//     },
//     {
//         manufacturer: "bmw",
//         model: "115",
//         year: 2013,
//         color: "red",
//         type: "hachback",
//         engine: "f15",
//         volume: 1.5,
//         power: 120
//     },
//     {
//         manufacturer: "bmw",
//         model: "315",
//         year: 2010,
//         color: "white",
//         type: "sedan",
//         engine: "f15",
//         volume: 1.5,
//         power: 120
//     },
//     {
//         manufacturer: "bmw",
//
//         model: "650",
//         year: 2009,
//         color: "black",
//         type: "coupe",
//         engine: "f60",
//         volume: 6,
//         power: 350
//     },
//     {
//         manufacturer: "bmw",
//
//         model: "320",
//         year: 2012,
//         color: "red",
//         type: "sedan",
//         engine: "f20",
//         volume: 2,
//         power: 180
//     },
//     {
//         manufacturer: "mercedes",
//         model: "e200",
//         year: 1990,
//         color: "silver",
//         type: "sedan",
//         engine: "eng200",
//         volume: 2,
//         power: 180
//     },
//     {
//         manufacturer: "mercedes",
//         model: "e63",
//         year: 2017,
//         color: "yellow",
//         type: "sedan",
//         engine: "amg63",
//         volume: 3,
//         power: 400
//     },
//     {
//         manufacturer: "mercedes",
//         model: "c250",
//         year: 2017,
//         color: "red",
//         type: "sedan",
//         engine: "eng25",
//         volume: 2.5,
//         power: 230
//     }
// ];

// const carVolume3 = cars.filter((carEng) => carEng.volume >= 3);
// console.log(carVolume3);
// console.log('-------------------------------------------');
// const carVolume2 = cars.filter((carEng) => carEng.volume === 2);
// console.log(carVolume2);
// console.log('-------------------------------------------');
// const carManufacturer = cars.filter((item) => item.manufacturer === 'mercedes');
// console.log(carManufacturer);
// console.log('-------------------------------------------');
// const carManufacturerVolumeSub = cars.filter((item) => item.manufacturer === 'subaru' && item.volume >= 2);
// console.log(carManufacturerVolumeSub);
// console.log('-------------------------------------------');
// const carManufacturerVolumeMers = cars.filter((item) => item.manufacturer === 'mercedes' && item.volume >= 2);
// console.log(carManufacturerVolumeMers);
// console.log('-------------------------------------------');
// const carManufacturerPower = cars.filter((item) => item.power > 300);
// console.log(carManufacturerPower);
// console.log('-------------------------------------------');
// const carManufacturerPower = cars.filter((item) => item.power > 300 && item.manufacturer === 'subaru');
// console.log(carManufacturerPower);
// console.log('-------------------------------------------');
// const carManufacturerPower = cars.filter((item) => item.engine.includes('ej'));
// console.log(carManufacturerPower);
// console.log('-------------------------------------------');
// const carManufacturerPower = cars.filter((item) =>
//     item.power >300 &&
//     item.manufacturer === 'subaru' &&
//     item.engine.includes('ej'));
// console.log(carManufacturerPower);
// console.log('-------------------------------------------');
// const carManufacturerPower = cars.filter((item) => item.volume <=3 && item.manufacturer === 'mercedes' );
// console.log(carManufacturerPower);
// console.log('-------------------------------------------');
// const carManufacturerPower = cars.filter((item) => item.volume <=2 && item.power > 250 );
// console.log(carManufacturerPower);
// console.log('-------------------------------------------');
// const carManufacturerPower = cars.filter((item) => item.power >250 && item.manufacturer === 'bmw' );
// console.log(carManufacturerPower);

// -взять слeдующий массив
//
// let usersWithAddress = [
//     {
//         id: 1,
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {city: 'Lviv', street: 'Vovchok', number: 16}
//     },
//     {
//         id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Rudenka', number: 1}
//     },
//     {
//         id: 3,
//         name: 'kolya',
//         age: 29,
//         status: true,
//         address: {
//             city: 'Lviv', street: 'Zozulinukh', number: 121
//         }
//     },
//     {
//         id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Yaroshenkiv', number: 90}
//     },
//     {
//         id: 5,
//         name: 'max',
//         age: 30,
//         status: true,
//         address: {city: 'Lviv', street: 'Mironenka', number: 115}
//     },
//     {
//         id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Fialkovich', number: 2}
//     },
//     {
//         id: 7,
//         name: 'oleg',
//         age: 28,
//         status: false,
//         address: {city: 'Lviv', street: 'Adryhenko', number: 22}
//     },
//     {
//         id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Kylikovskih', number: 43}
//     },
//     {
//         id: 9,
//         name: 'masha',
//         age: 30,
//         status: true,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 12}
//     },
//     {
//         id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}
//     },
//     {
//         id: 11,
//         name: 'max',
//         age: 31,
//         status: true,
//         address: {city: 'Lviv', street: 'Ioana-Pavla', number: 121}
//     }
//     ];

// -- отсортировать его по id пользователей
//
// let sorted = usersWithAddress.sort((a, b)=> a.id - b.id)
// console.log(sorted)

// -- отсортировать его по id пользователей в обратном опрядке
//
// let sorted = usersWithAddress.sort((a, b)=> b.id - a.id)
// console.log(sorted)

// -- отсортировать его по возрасту пользователей
//
// let sorted = usersWithAddress.sort((a, b)=> a.age - b.age)
// console.log(sorted)

// -- отсортировать его по возрасту пользователей в обратном порядке
// //
// let sorted = usersWithAddress.sort((a, b)=> b.age - a.age)
// console.log(sorted)

// -- отсортировать его по имени пользователей
//
// let sorted = usersWithAddress.sort((a, b)=>{
//     if ( a.name.toLowerCase() > b.name.toLowerCase()) return 1;
//     if ( a.name.toLowerCase() < b.name.toLowerCase()) return -1;
//     return 0;
// }); console.log(sorted);

// -- отсортировать его по имени пользователей в обратном порядке
//
// let sorted = usersWithAddress.sort((a, b)=>{
//     if ( a.name.toLowerCase() > b.name.toLowerCase()) return -1;
//     if ( a.name.toLowerCase() < b.name.toLowerCase()) return 1;
//     return 0;
// }); console.log(sorted);

// -- отсортировать его по названию улицы  в алфавитном порядке
// let sorted = usersWithAddress.sort((a, b)=>{
//     if ( a.address.street.toLowerCase() > b.address.street.toLowerCase()) return 1;
//     if ( a.address.street.toLowerCase() < b.address.street.toLowerCase()) return -1;
//     return 0;
// })
// console.log(sorted)

// -- отсортировать его по номеру дома по возрастанию
//
// let sorted = usersWithAddress.sort((a, b)=> a.address.number - b.address.number)
// console.log(sorted)

// -- отфильтровать (оставить) тех кто младше 30
// //
// let filtered = usersWithAddress.filter((user)=> user.age <= 30);
// console.log(filtered);

// -- отфильтровать (оставить) тех у кого отрицательный статус
// let filtered = usersWithAddress.filter((user) => !user.status);
// console.log(filtered);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
//
// let filtered = usersWithAddress.filter((user)=> !user.status && user.age <= 30);
// console.log(filtered);

// -- отфильтровать (оставить) тех у кого номер дома четный
// let filtered = usersWithAddress.filter((user)=> (user.address.number % 2) === 0 );
// console.log(filtered);
// ==============================================
// ДОДАТКОВО
//===============================================

// {
//     manufacturer: "subaru",
//     model: "wrx",
//     year: 2010,
//     cost: `${3000}$`,
//     power: 400,
//     owner: {
//         name: 'Erick',
//         age: 33,
//         experience: 10
//     }
// },
// {
//     manufacturer: "subaru",
//     model: "legacy",
//     year: 2007,
//     cost: `${3000}$`,
//     power: 250,
//     owner: {
//         name: 'David',
//         age: 45,
//         experience: 25
//     }
// },
// {
//     manufacturer: "subaru",
//     model: "tribeca",
//     year: 2011,
//     cost: `${4000}$`,
//     power: 300,
//     owner: {
//         name: 'Rosa',
//         age: 28,
//         experience: 5
//     }
// },
// {
//     manufacturer: "subaru",
//     model: "leone",
//     year: 1998,
//     cost: `${4000}$`,
//     power: 140,
//     owner: {
//         name: 'Lori',
//         age: 55,
//         experience: 30
//     }
// },
// {
//     manufacturer: "subaru",
//     model: "impreza",
//     year: 2014,
//     cost: `${3500}$`,
//     power: 200,
//     owner: {
//         name: 'Djosi',
//         age: 32,
//         experience: 10
//     }
// },
// {
//     manufacturer: "subaru",
//     model: "outback",
//     year: 2014,
//     cost: `${6000}$`,
//     power: 165,
//     owner: {
//         name: 'Karina',
//         age: 16,
//         experience: 1
//     }
// },
// {
//     manufacturer: "bmw",
//     model: "115",
//     year: 2013,
//     cost: `${4500}$`,
//     power: 120,
//     owner: {
//         name: 'Marianna',
//         age: 22,
//         experience: 3
//     }
// },
// {
//     manufacturer: "bmw",
//     model: "315",
//     year: 2010,
//     cost: `${4000}$`,
//     power: 120,
//     owner: {
//         name: 'Olya',
//         age: 33,
//         experience: 4
//     }
// },
// {
//     manufacturer: "bmw",
//     model: "650",
//     year: 2009,
//     cost: `${5000}$`,
//     power: 350,
//     owner: {
//         name: 'Piter',
//         age: 20,
//         experience: 5
//     }
// },
// {
//     manufacturer: "bmw",
//     model: "320",
//     year: 2012,
//     cost: `${3500}$`,
//     power: 180,
//     owner: {
//         name: 'Alex',
//         age: 34,
//         experience: 3
//     }
// },
// {
//     manufacturer: "mercedes",
//     model: "e200",
//     year: 1990,
//     cost: `${3000}$`,
//     power: 180,
//     owner: {
//         name: 'Kirk',
//         age: 35,
//         experience: 7
//     }
// },
// {
//     manufacturer: "mercedes",
//     model: "e63",
//     year: 2017,
//     cost: `${4000}$`,
//     power: 400,
//     owner: {
//         name: 'Oleh',
//         age: 40,
//         experience: 4
//     }
// },
// {
//     manufacturer: "mercedes",
//     model: "c250",
//     year: 2017,
//     cost: `${2500}$`,
//     power: 230,
//     owner: {
//         name: 'Viktor',
//         age: 32,
//         experience: 10
//     }
// }


function Manufacturer(manufacturer, model, year, cost, power, owner) {
    this.manufacture = manufacturer;
    this.model = model;
    this.year = year;
    this.price = cost;
    this.hoursePower = power;
    this.owner = owner;

    // this.engineRepair = function (newPower) {
    //     this.hoursePower = Math.round(this.hoursePower * newPower);
    // }
    // this.addPrice = function (growPrice) {
    //     this.price *= growPrice;
    // }
    // this.newOwner = function (ownerName,ownerAge,ownerExpr){
    //     this.owner = ownerName;
    //     this.owner = ownerAge;
    //     this.owner = ownerExpr;
}

let wrx = new Manufacturer('subaru', 'wrx', 2010, 3000, 400,
    {
        name: 'Erick',
        age: 33,
        experience: 10
    });
let legacy = new Manufacturer('subaru', 'legacy', 2007, 3000, 250,
    {
        name: 'David',
        age: 45,
        experience: 25
    });
let tribeca = new Manufacturer('subaru', 'tribeca', 2011, 4000, 300,
    {
        name: 'Rosa',
        age: 28,
        experience: 5
    });
let leone = new Manufacturer('subaru', 'leone', 1998, 4000, 140,
    {
        name: 'Lori',
        age: 55,
        experience: 30
    });
let impreza = new Manufacturer('subaru', 'impreza', 2014, 3500, 200,
    {
        name: 'Djosi',
        age: 32,
        experience: 10
    });
let outback = new Manufacturer('subaru', 'outback', 2014, 6000, 165,
    {
        name: 'Karina',
        age: 16,
        experience: 1
    });
let m115 = new Manufacturer('bmw', '115', 2013, 4500, 120,
    {
        name: 'Marianna',
        age: 22,
        experience: 3
    });
let m315 = new Manufacturer('bmw', '315', 2010, 4000, 120,
    {
        name: 'Olya',
        age: 33,
        experience: 4
    });
let m650 = new Manufacturer('bmw', '650', 2009, 5000, 350,
    {
        name: 'Piter',
        age: 20,
        experience: 5
    });
let m320 = new Manufacturer('bmw', '320', 2012, 3500, 180,
    {
        name: 'Alex',
        age: 34,
        experience: 3
    });
let e200 = new Manufacturer('mercedes', 'e200', 1990, 3000, 180,
    {
        name: 'Kirk',
        age: 35,
        experience: 7
    });
let e63 = new Manufacturer('mercedes', 'e63', 2017, 4000, 400,
    {
        name: 'Oleh',
        age: 40,
        experience: 4
    });
let c250 = new Manufacturer('mercedes', 'c250', 2017, 2500, 230,
    {
        name: 'Viktor',
        age: 32,
        experience: 10
    });

let carArr = [e63, c250, e200, impreza, legacy, leone, m115, m315, m320, m650, outback, tribeca, wrx]
let newOwners = [
    {name: 'Masha', age: 26, experience: 2},
    {name: 'Dasha', age: 35, experience: 7},
    {name: 'Glasha', age: 30, experience: 3},
    {name: 'Anasha', age: 37, experience: 10},
    {name: 'Pagasha', age: 29, experience: 5},
    {name: 'Akaha', age: 37, experience: 17},
    {name: 'Alasha', age: 31, experience: 1},
];

let upgratedCars;

upgratedCars = JSON.parse(JSON.stringify(carArr)).filter((car, index) => !(index % 2));
upgratedCars.forEach((car, index) => {
    car.hoursePower = Math.round(car.hoursePower * 1.1);
    car.owner = newOwners[index];
    if (car.owner.experience <= 5 && car.owner.age > 25) {
        console.log(`Need go to driving school ${car.owner.name}'!'`)
        car.owner.experience ++;
    }
});
console.log(upgratedCars)
