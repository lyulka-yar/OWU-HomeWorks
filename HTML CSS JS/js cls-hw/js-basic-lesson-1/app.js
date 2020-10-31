// Присвоить каждому значению свою переменную


//let world = 'hello';
//let course = 'owu';
//let dot = 'com';
//let domen = 'ua';
//
//let num = 1;
//let numMidle = 10;
//let numReverse = -999;
//let numHigh = 123;
//let pi = 3.14;
//let coma = 2.7;
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
//const second = 1;
//const  type = true;
//console.log(first,second,type);

// Конкатинацыя

//let person = (first + second + type);
//document.write(person);

//  Родня +Prompt


//let momName = prompt('Введите ваше имя:');
//let momSurName = prompt('Введите вашу фамилию:');
//let momLastName = prompt('Введите ваше отчество:');
//console.log(momName + momSurName + momLastName);

//Получить 3 слова

//let name =  prompt ('Введите вашу');
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

let a = +prompt("Введите первое значение");
let b = +prompt("Введите второе значение");
let c = +prompt("Введите третье значение");

if (a < b && a < c && (b < c)) {
	console.log(a, b, c);
} else if (b < a && b < c) {
	console.log(b, a, c);
} else if (c<a&&c<b) {
	console.log(c,b,a);
}

