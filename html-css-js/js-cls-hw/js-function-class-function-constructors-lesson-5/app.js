//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
// function DescriptorOfTags(titleOfTag, action, attrs) {
//
//     this.title = titleOfTag || 'no title';
//     this.action = action || 'no action';
//     this.attr = attrs || [];
//
//
// }
//
// let a = new DescriptorOfTags('<a>','это ссылка',
//     [{name: 'blablalba',ananan:'asdf'},
//         {name2: 'blablalba',ananan2:'asdf'},
//         {name3: 'blablalba',ananan3:'asdf'}
//     ]);
// let div = new DescriptorOfTags('<div>','это дивка',
//     [{name1: 'bl1515151515ablalba',ananan1:'asdf'},
//     {name2: 'bl1515151515ablalba',ananan2:'asdf'},
//     {name3: 'bl1515151515ablalba',ananan3:'asdf'}]);
// let h1 = new DescriptorOfTags('<div>', 'это заголовок',
//     [{name1: 'bl1515151515ablalba', ananan1: 'asdf'},
//         {name2: 'bl1515151515ablalba', ananan2: 'asdf'},
//         {name3: 'bl1515151515ablalba', ananan3: 'asdf'}]);
// let span = new DescriptorOfTags('<div>', 'это спан',
//     [{name1: 'bl1515151515ablalba', ananan1: 'asdf'},
//         {name2: 'bl1515151515ablalba', ananan2: 'asdf'},
//         {name3: 'bl1515151515ablalba', ananan3: 'asdf'}]);
//
// console.log(a,div,span,h1);

//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
//     об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і доавляет його в поточний об'єкт car
// ==============================================
//
// let car = {
//     model: 'Y',
//     plan: 'TESLA',
//     year: 2012,
//     maxSpeed: 250,
//     engCapacity: 'electrical only',
//     drive: function () {
//         console.log('Їдемо зі швидкстю ' + this.maxSpeed + ' на годину')
//     },
//     info: function info() {
//         if (car.driver){
//             console.log(`
//             model: ${car.model}
//             manuafcturer: ${car.plan} ${car.year}
//             maxSpeed:${car.maxSpeed}
//             drive:${car.engCapacity}
//             drivers:
//                     drivers Name: ${car.driver.name}
//                     drivers Age:  ${car.driver.age}
//                     drivers Experience:${car.driver.expr}`)
//         } else {
//         console.log(`
//             model: ${car.model}
//             manuafcturer: ${car.plan} ${car.year}
//             maxSpeed:${car.maxSpeed}
//             drive:${car.engCapacity}`
//         )}
//     },
//     increaseMaxSpeed: function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     },
//     changeYear: function (newYear) {
//         this.year = newYear;
//     },
//     addDrivers:function (drivers) {
//         this.driver = drivers;
//     }
// }
// let drivers = {
//     name: 'Oleh Marat',
//     age: 23,
//     expr: 5
// }
// // console.group('carChanges')
// // car.drive();
// // car.info();
// // car.increaseMaxSpeed(Math.round(Math.random()*(80-10)+10))
// // car.drive();
// // car.changeYear(Math.round(Math.random()*(2050-1999)+1999));
// // car.addDrivers(drivers);
// // car.info();
// // console.groupEnd();

//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
function CarsManufactures(model, plan, year, maxSpeed, engCapacity) {
    this.model = model;
    this.plan = plan;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engCapacity = engCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    this.info = function () {
        console.log(`
        model:${this.model}
        manufacturer: ${this.plan}
        year: ${this.year}
        type of drive: ${this.engCapacity}`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;

    }
    this.changeYear = function (newYear) {
        this.year = newYear;

    }
    this.adDriver = function (drivers) {
        this.driver = drivers;
        if (this.driver) {
            console.log(`
        model:${this.model}
        manufacturer: ${this.plan}
        year: ${this.year}
        type of drive: ${this.engCapacity}
        drivers Name: ${this.driver.name}
        drivers Age: ${this.driver.age}
        drivers experience: ${this.driver.expr}`)
        } else {
            console.log(`
        model:${this.model}
        manufacturer: ${this.plan}
        year: ${this.year}
        type of drive: ${this.engCapacity}`)
        }
    }
}
let drivers = {
    driver_1: {
        name: 'Piter Parker',
        age: 43,
        expr: 10
    },
    driver_2:{
        name:'Alisa Milanor',
        age: 23,
        expr: 2
    }
}
let tesla = new CarsManufactures(
    'Y',
    'Tesla',
    2017,
    270,
    'electrical drive');
let bmw = new CarsManufactures(
    'm3',
    'BMW',
    2020,
    230,
    'Enginge with insides burnings');
//
console.group('Function Constructor')
console.log('---------------------------------')
tesla.drive();
bmw.drive();
console.log('---------------------------------')

tesla.increaseMaxSpeed(Math.floor(Math.random() * (180 - 35) + 35));
bmw.increaseMaxSpeed(Math.floor(Math.random() * (100 - 55) + 55));
console.log('---------------------------------')
//
bmw.info();
tesla.info();
console.log('---------------------------------')
//
tesla.changeYear(Math.floor(Math.random() * (2045 - 25) + 25));
bmw.changeYear(Math.floor(Math.random() * (2045 - 25) + 25));
console.log('---------------------------------')

tesla.adDriver(drivers.driver_1);
bmw.adDriver(drivers.driver_2);
console.log('---------------------------------')

tesla.color = 'purple';
bmw.ABS = true;
console.log(tesla);
console.log(bmw);
console.log('---------------------------------')
console.groupEnd();

//     - Створити класс який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// class Cars {
//     constructor(model, plan, year, maxSpeed, engCapacity) {
//         this.model = model;
//         this.plan = plan;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engCapacity = engCapacity;
//
//     }
//
// }
// let tesla = new Cars(
//     'Y',
//     'Tesla',
//     2017,
//     270,
//     'electrical drive');
// let bmw = new Cars(
//     'm3',
//     'BMW',
//     2020,
//     230,
//     'Enginge with insides burnings');
//
// let drivers = {
//     driver_1: {
//         name: 'Piter Parker',
//         age: 43,
//         expr: 10
//     },
//     driver_2:{
//         name:'Alisa Milanor',
//         age: 23,
//         expr: 2
//     }
// }
// console.group('Class counstructor')
// console.log('---------------------------------')
// tesla.drive();
// bmw.drive();
// console.log('---------------------------------')
//
// tesla.increaseMaxSpeed(Math.floor(Math.random() * (180 - 35) + 35));
// bmw.increaseMaxSpeed(Math.floor(Math.random() * (100 - 55) + 55));
// console.log('---------------------------------')
//
// bmw.info();
// tesla.info();
// console.log('---------------------------------')
//
// tesla.changeYear(Math.floor(Math.random() * (2045 - 25) + 25));
// bmw.changeYear(Math.floor(Math.random() * (2045 - 25) + 25));
// console.log('---------------------------------')
//
// tesla.adDriver(drivers.driver_1);
// bmw.adDriver(drivers.driver_2);
// console.log('---------------------------------')
// tesla.color = 'purple';
// bmw.ABS = true;
// console.log(tesla);
// console.log(bmw);
// console.log('---------------------------------')
// console.groupEnd()

//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
//
// class Cinderella {
//     constructor(name, age, feetSize) {
//         this.name = name;
//         this.age = age;
//         this.slipper = feetSize;
//     }
// }
//
// let anna = new Cinderella('Anna', '23', 34);
// let olya = new Cinderella('Olya', '27', 32);
// let karina = new Cinderella('Karina', '20', 30);
// let vasilisa = new Cinderella('Vasilisa', '18', 28);
// let paraska = new Cinderella('Paraska', '26', 36);
// let sasha = new Cinderella('Sasha', '31', 37);
// let mariya = new Cinderella('Mariya', '29', 33);
// let rita = new Cinderella('Rita', '30', 35);
// let ququmber = new Cinderella('Ququmber', '22', 29);
// let oggy = new Cinderella('Oggy', '21', 31);
//
// const awesomeGirls = [anna, vasilisa, karina, mariya, oggy, olya, paraska, ququmber, rita, sasha];
//
// class Prince {
//     constructor(name, age, foundedSlipper) {
//         this.name = name;
//         this.age = age;
//         this.slipper = foundedSlipper;
//     }
//
//     findMyPrincess = function (girls) {
//
//         let myGirl;
//         for (let i = 0; i < girls.length; i++) {
//             const girl = girls[i];
//             if (this.slipper === girl.slipper) {
//                 myGirl = 'At last!!! I found you ' + girl.name + ', my darling! <3';
//             }
//         }
//         if (myGirl) {
//             console.log(myGirl);
//         } else {
//             console.log('Maybe next time i`ll be more lucky');
//         }
//
//     }
// }
//
// let prince = new Prince('Philip Bedrosovich Khirkoroff',
//     21, Math.round(Math.random() * (40 - 28) + 28));
// console.log(prince)
// prince.findMyPrincess(awesomeGirls);

//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
//
// function Cinderella(name, age, feetSize) {
//     this.name = name;
//     this.age = age;
//     this.feetSize = feetSize;
// }
// //
// let anna = new Cinderella('Anna', '23', 34);
// let olya = new Cinderella('Olya', '27', 32);
// let karina = new Cinderella('Karina', '20', 30);
// let vasilisa = new Cinderella('Vasilisa', '18', 28);
// let paraska = new Cinderella('Paraska', '26', 36);
// let sasha = new Cinderella('Sasha', '31', 37);
// let mariya = new Cinderella('Mariya', '29', 33);
// let rita = new Cinderella('Rita', '30', 35);
// let ququmber = new Cinderella('Ququmber', '22', 29);
// let oggy = new Cinderella('Oggy', '21', 31);
// //
// const awesomeGirls = [anna, vasilisa, karina, mariya, oggy, olya, paraska, ququmber, rita, sasha];
// //
// class Prince {
//     constructor(name, age, foundedSlipper) {
//         this.name = name;
//         this.age = age;
//         this.slipper = foundedSlipper;
//
//     }
// //
//     findMyPrincess = function (girls) {
//         let myGirl;
//         for (let i = 0; i < girls.length; i++) {
//             const girl = girls[i];
//
//             if (this.slipper === girl.feetSize) {
//                 myGirl = 'At last!!! I found you ' + girl.name + ', my darling! <3';
//             }
//         } if (myGirl) {
//             console.log(myGirl)
//         } else {
//             console.log('Maybe next time i`ll be more lucky');
//         }
//     }
// //
// }
//
// let max = 40;
// let min = 28;
// let prince = new Prince('Philip Bedrosovich Khirkoroff',
//     21, Math.round(Math.random() * (max - min) + min));
// prince.findMyPrincess(awesomeGirls);
