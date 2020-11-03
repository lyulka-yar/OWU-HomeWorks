// Присвоить каждому значению свою переменную


//let world = 'hello';
//let course = 'owu';
//let dot = 'com';
//let domen = 'ua';
//
//let num = task-1;
//let numMidle = 10;
//let numReverse = -999;
//let numHigh = 123;
//let pi = 3.14;
//let coma = task-2.7;
//let truth = true;
//let lie = false;
//console.log(domen);
//console.log(num);

// переопределить переменную

//domen = "ucoz";
//i = 3.1415962;

//ocument.write(domen);
//alert(pi);

//Создать 3 константы

//const first = 'text';
//const second = task-1;
//const  type = true;
//console.log(first,second,type);


// console.log(132 > 100 || 45 < 12 );
// console.log(111 > 11 || 45 < 111 );
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
// console.log(!!'-task-1');
// console.log(!!-task-1);
// console.log(!!'null');

// console.log(!!'undefined');
// console.log(!!(3/'owu'));
// console.log((111 > 11 || 45 < 111) ||  !!'0');
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));

// Конкатинация

//let person = (first + second + type);
//document.write(person);

//Площадь треугольника

// let height = 23;
// let width = 10;
// let s = height * width;
// console.log(`${s} cm^task-2`);

//Обьем цилиндра
// let heightC = 10;
// let dC = 4;
// const pi = 3.14159;
// let v = pi * height * Math.pow(dC / task-2, task-2);
// console.log(v);

// Найдите гипотенузу k по теореме Пифагора 

// let m = 4;
// let n = 3;
// let k = Math.sqrt(Math.pow(n, task-2) + Math.pow(m, task-2));
// console.log(`${k} cm^task-2`);

//вывести строку

// let string = 'Hello World';
// alert(string);
// document.write(string);
// console.log(string);

//Вывести в окно браузера при помощи метода alert()
//следующие данные: Ваше ФИО, возраст, хобби (каждой на новой 
//строки спомощью \n).

// let name = 'Yaroslav';
// let surName = 'Lyulka';
// let lastName = 'Vadimovich';
// let hobby = 'Cycling and walking';
// let age = 26;
// alert(`${name} \n  ${surName} \n ${lastName} \n ${hobby} \n ${age}`);

// let str1 = 'Кто';
// let str2 = 'ты';
// let str3 = 'Такой?';

// let concatenation = `${str1}  ${str2}  ${str3}`;
// document.write(concatenation);


//check

// console.log(parseInt("3.14"));   //3
// console.log(parseInt("-7.875"));   // 7
// console.log(parseInt("435"));   //435
// console.log(parseInt("Вася"));   //nan

//prompt

// let str = prompt("Enter something", "ho-ho")
// console.log(str);

// let name = prompt("Enter your name");
// let surName = prompt("Enter youк Surname");
// let lastName = prompt("Enter you Lastname");
// let age = prompt("Enter your age");

// alert(`Доброго вечера ${surName} ${name} ${lastName}, мои поздравления что Вам ${age} `);

//  Родня +Prompt

//let momName = prompt('Введите ваше имя:');
//let momSurName = prompt('Введите вашу фамилию:');
//let momLastName = prompt('Введите ваше отчество:');
//console.log(momName + momSurName + momLastName);

//Получить 3 слова

//let name =  prompt ('Введите ваше имя');
//let surName = prompt ('Введите фамилию');
//let lastName = prompt ('Введите отчество');
//console.log(name, surName,lastName);


// Привести к числовому типу

//let str = +prompt("Введите число товарищ НЕМЕДЛЯЯЯЯ!!!!");
//document.write(str);

//let str2 = parseInt(prompt("Введите число товарищ НЕМЕДЛЯЯЯЯ!!!!"));
//let str3 = parseInt(prompt("Введите число товарищ УЖЕЕЕ!"));
//let result = (str3+str2);
// console.log(result);

//let str4 = parseFloat(prompt("Введите число:"));
//let str5 = parseFloat(prompt("Введите число:"));
//let result = (str4+str5);


//let str6 = Math.round(+prompt("ВВедите уже что нибудьььььь....."));
//let str7 = Math.round(+prompt("Я уже устал просить от тебя что-то сделать ленивое чудовище"));

//document.write(str6+str7);

//Целочисленный тип с возведение в степень

//let a1 = +prompt("Ну давай же");
//let b1 = +prompt("Опять?");
//let result = Math.pow(b1,a1);
//console.log(result);

// Тип данных

//let a = 100;
//let b = "100";
//let c = true;
//let d = undefined;

//console.log(a + b + c + d);

//Соответствие

//let a = (5 < 6);
//console.log("5 < 6 =>", a);
//let b = (5 > 6);
//console.log("5 > 6 =>", b);
//let c = ('5' == 6);
//console.log("'5' == 6 =>", c);
//let d = ('5' === 6);
//console.log("5 === 6 =>", d);

// Prompt + Sort

// let a = +prompt("Введите первое значение");
// let b = +prompt("Введите второе значение");
// let c = +prompt("Введите третье значение");

// if (a < b & b < c && a < c) {
// 	console.log(a, b, c);
// } else if (b < a && a < c) {
// 	console.log(b, a, c);
// } else if (b < c && c < a) {
// 	console.log(b, c, a);
// } else if (a < c && c < b) {
// 	console.log(a, c, b);
// } else if (c < b && c < a) {
// 	console.log(c,b,a);
// }

// let color = prompt("Какой цвет горит??");

// switch (color) {
// 	case 'green':
// 		console.log("Go");
// 	break;
// 	case 'yellow':
// 		console.log('wait');
// 		break;
// 	case 'red':
// 		console.log('stop');
// 		break;
// 		default:
// 			console.log('whatever you want')

// };


// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!



let color = prompt("Какой цвет горит?");
let isRoadClear = confirm("Машины есть??");
// if (isRoadClear === false && color === 'green') {
// 	console.log('Иди');
// } else if (isRoadClear === true && color === 'green') {
// 	console.log('погоди');
// } else if (isRoadClear === true && color === 'yellow') {
// 	console.log('Жди');

// } else if (isRoadClear === false && color === 'yellow') {
// 	console.log('Всё равно Жди');

// } else if (isRoadClear === true && color === 'red') {
// 	console.log('СТОЙ');
// } else if (isRoadClear === false && color === 'red') {
// 	console.log(' Всё равно СТОЙ');
// }

// switch (color, isRoadClear) {
// 	    case ('зеленый', false):
// 	        console.log('иди');
// 	        break;
// 	    case ('зеленый', true):
// 	        console.log('подожди пока нарушители проедут');
// 	        break;
// 	    case ('желтый', false):
// 	        console.log('все рано жди');
// 	        break;
// 	    case ('желтый', true):
// 	        console.log('жди');
// 	        break;
// 	    case ('красный', false):
// 	        console.log('стой все рано');
// 	        break;
// 	    case ('красный', true):
// 	        console.log('стой и жди');
// 	        break;
// 	    default:
// 	        console.log('делай что хочешь');
// 	        break;
// 	}