// --створити масив та вивести його в консоль:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// -- Створити пустий масив. Наповнити його будь-якими
// значеннями звертаючись до конкретного індексу.
// Вивести в консоль

// const myArrayNum = [task-1, task-2, 4, 213, 522];
// const myArrayStr = ['Hello', 'My', 'Native',
// 'Yong', 'World'];
// const saltArr = ['bee', true, 24, 'strawberry',
// false, 431, 'Sherman', true, 26,'Anakonda', false,
//     1561, 'smell', true, 112515];
// const emptyArr = [];
// emptyArr[task-2]=14;
// emptyArr[15]=11241;
// emptyArr[5]='Uncle of Jacky';
// emptyArr[33]='Recognition of text';
// emptyArr[21]=true;
// console.log(emptyArr, myArrayNum,myArrayStr,saltArr);

// - За допомогою циклу for і document.write()
// вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write()
// вивести 10 блоків div
// з довільним текстом і індексом всередині

// for (let i=0; i<10; i++ ) {
//     document.write('<div style="color: red">
//     Hello world it`s me Hello</div>')
//     };

// for (let i = 0; i < 10; i++) {
//     document.write("<div>" + i + " день на карантині " + "</div>");
//     console.log(i);};

//  c довільним текстом всередині.
//  - За допомогою циклу while вивести в документ 20 блоків h1
//  c довільним текстом і індексом всередині.
//
//  let i =0;
//  while (i<20) {
//   document.write('<h1>'"some fish text"'</h1>');
//   i++;
//  console.log('i.length');
//  };
//  let i =0;
//  while (i<20) {
//  document.write(`${'<h1>'} ${i} Днів без мозку ${'</h1>'}`);
//  i++; console.log(i) };

// - Створити масив з 10 числових елементів.
// Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів.
// Вивести в консоль всі його елементи в циклі.

// let arrNum = [12,235,124,1645,124,1562,15151,63,3,676];
// let arrWrd = ['Strong','smile','mouse','nba',
// 'balalaika','vodka','array','smell','orange+10','Bibo'];
//
// console.log(arrNum,arrWrd);

// - Створити масив з 10 елементів будь-якого типу.
// Вивести в консоль всі його елементи в циклі.
//
// let array1 = [1414,'hello', false, 'fish', null, 'obj',
// true, 'story', 115151, false, 'woman'];
// for (let i = 0; i<array1.length; i++) {
//      console.log(array1[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового
// і булевого типу. За допомогою if та
// typeof вивести тільки булеві елементи

// let array1 = [1414, 'hello', false, 'fish', null,
// 'obj', true, 'story', 115151, false, 'woman',
// 1414, 'hello', false,
//     'fish', null, 'obj', true, 'story', 115151,
//     false, 'woman', false];
// for (let i = 0; i < array1.length; i++) {
//     if (typeof array1[i] === "boolean") {
//
//         console.log(array1[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і
// булевого типу. За допомогою if та
// typeof вивести тільки числові елементи
//
// let array1 = [1414, 'hello', false, 'fish', null, 'obj',
// true, 'story', 115151, false, 'woman',
// 1414, 'hello', false,
//     'fish', null, 'obj', true, 'story', 115151, false,
//     'woman', false];
//
// for (let i = 0; i < array1.length; i++) {
//     if (typeof(array1[i]) === 'number') {
//         console.log(array1[i]);
//     }
//// }

// - Створити масив з 10 елементів числового,
// стрічкового і булевого типу. За допомогою if та
// typeof вивести тільки рядкові елементи

// let array1 = [1414, 'hello', false, 'fish', null,
// 'obj', true, 'story', 115151, false,
// 'woman', 1414, 'hello', false,
//     'fish', null, 'obj', true, 'story', 115151,
//     false, 'woman', false];
// for (let i = 0; i < array1.length; i++) {
//     const array1Element = array1[i];
//     if (typeof array1Element === 'string') {
//         console.log(array1Element);
//     }
// }

// - Створити порожній масив.
// Наповнити його 10 елементами (різними за типами) через звернення
// до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

// let arr = [task-1, task-2, 3, 4, 6, '14141', {name: 'Vasya'}, true];
// arr[task-2] = 'Petro';
// arr[5] = 242;
// arr[6] = {
//     name: 'Siza',
//     age: 23,
//     car: {
//         model: 'tesla',
//         type:'s',
//         range: '100d'
//     },
//     wife: true,
//     child: false,
//     house: false
// }
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }

// - Створити цикл for на 10  ітерацій з кроком task-1.
// Вивести поточний номер кроку через console.log
// та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// - Створити цикл for на 100 ітерацій з кроком task-1.
// Вивести поточний номер кроку через console.log
// та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }

// - Створити цикл for на 100 ітерацій з кроком task-2.
// Вивести поточний номер кроку через console.log
// та document.write

// for (let i = 0; i < 200; i+=task-2) {
//     console.log(i);
// }

// - Створити цикл for на 100 ітерацій.
// Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (!(i % task-2)) {
//         console.log(i);
//     }
// }

//// - Створити цикл for на 100 ітерацій.
// Вивести тільки непарні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if (!!(i % task-2)) {
//         console.log(i);
//     }
// }

// - Відтворити роботу годинника,
// відрахувавши task-2 хвилини (task-2 цикли! 1й - хвилини, 2й - секунди)

// let time = task-2;
// for (let min = 0; min < 3; min++) {
//     let sec = 0;
//     for (; sec < 60; sec++) {
//         console.log(`0${min} min ${sec} sec`);
//         if (time === min) {
//             break;} } };

// - Відтворити роботу годинника, відрахувавши  task-2 години 20 хвилини
// (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// Додатково

// - Дано масив: [ 'a', 'b', 'c'] .
// За допомогою циклу for зібрати всі букви в слово.

// let word = "";
// const array = ['a', 'b', 'c'];
// for (let i = 0; i < array.length; i++) {
//   word = word + array[i];
// } console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] .
// За допомогою циклу while зібрати всі букви в слово.

// let word = "";
// let i = 0;
// const array = ['a', 'b', 'c'];
// while (i<array.length)
// {
//   word = word + array[i];
// i++; }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] .
// За допомогою циклу for of зібрати всі букви в слово.

// let i =0;
// let word = '';
// for (const string of array) {
//     word = word + string;
// }console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] .
// За допомогою циклу for in зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c'];
// let i = 0;
// let word = '';
// for (const i in array) {
//     word = word + array[i];
// }console.log(word);

// =================
// - Дан масив ['a', 'b', 'c'].
// Додайте йому в кінець елементи task-1, task-2, 3 за допомогою циклу.

// let strings = [ 'a', 'b', 'c'];
// for (let i = task-1; i <= 3; i++) {
//    strings.push(i);
//        strings.unshift(i);
//    strings.shift(i);
//        strings.pop(i);
// }  console.log(strings);
// let hello = {name:123131};
// let strings = [ 'a', 'b', 'c'];
//  for (let i = task-1; i <= 3; i++) {
//     // strings[strings.length] = i;
//     //  } console.log(strings);
//  }
// console.log([...strings,hello]);

// - Дан масив [task-1, task-2, 3]. Зробіть з нього новий масив [3, task-2, task-1].
// let arr = [task-1, task-2, 3];
//let emptyArray = arr.reverse();
//     console.log(arr);

// let arr = [task-1,task-2,3];
// for (let i = 3; i <arr.length; i++) {
//     arr.unshift(i);
// }console.log(arr);
// let arr = [task-1, task-2, 3];
// arr[0] = 3;
// arr[task-1] = task-2;
// arr[task-2] = task-1;
// console.log(arr);

// - Дан масив [task-1, task-2, 3].
// Додайте йому в кінець елементи 4, 5, 6.\

// let arr = [task-1, task-2, 3];
// for (let i = 4; i <= 6; i++) {
//     arr.push(i);
// } console.log(arr);

// - Дан масив [task-1, task-2, 3].
// Додайте йому в початок елементи 4, 5, 6.
// let arr = [task-1, task-2, 3];
// for (let i = 6; i >= 4; i--) {
//     arr.unshift([i]);
// } console.log(arr);

// - Дан масив ['js', 'css', 'jq'].
// Виведіть на екран перший елемент за допомогою shift()
// let arr = ['js', 'css', 'jq'];
// console.log(arr);
// let first = arr.shift([]);
// console.log('first', first);
// console.log(arr);
// // - Дан масив ['js', 'css', 'jq']. Виведіть на екран
// останній елемент за допомогою pop()
// let last = arr.pop([]);
// console.log('last', last);

// - Дан масив [task-1, task-2, 3, 4, 5]. За допомогою методу/функції
// slice перетворіть масив в [4, 5].
// const array = [task-1, task-2, 3, 4, 5];
//  let nano =  array.slice(-task-2);
// console.log(nano);

// - Дан масив [task-1, task-2, 3, 4, 5]. За допомогою методу/функції
// slice перетворіть масив в [task-1,task-2].
//
// const array1 = [task-1,task-2,3,4,5];
// let nino = array1.slice(0,task-2);
// console.log(nino);

// - Дан масив [task-1, task-2, 3, 4, 5]. За допомогою методу/функції
// splice перетворіть
// масив в [task-1, 4, 5].
//
// const array = [task-1, task-2, 3, 4, 5];
// array.splice (task-1, task-2);
// console.log(array);
//
// const array2 = [task-1, task-2, 3, 4, 5,634,12313,51351,513,51,125,154];
// array2.splice (4, task-2,'hello', 'man');
// array2.splice (8, task-1,'wtgs');
// console.log(array2);

// - Дан масив [task-1, task-2, 3, 4, 5]. За допомогою методу/функції
// splice зробіть
// з нього масив
// [task-1, task-2, 3, 'a', 'b', 'c', 4, 5].

// const array = [task-1,task-2,3,4,5];
//     array.splice(3,0,'a');
//     array.splice(4,0,'b');
//     array.splice(5,0,'c');
// console.log(array);

// - Дан масив [task-1, task-2, 3, 4, 5]. За допомогою методу/функції
// splice зробіть з нього масив
// [task-1, 'a', 'b', task-2, 3, 4, 'c', 5, 'e'];
// const array = [task-1,task-2,3,4,5];
//
// array.splice(task-1,0,'a');
// array.splice(task-2,0,'b');
// array.splice(6,0,'c');
// array.splice(8,0,'e');
// console.log(array);

// - Взяти масив з 10 чисел або створити його.
// Вивести в консоль тільки ті елементи,
// значення яких є парними.
//
// const arrayNum = [123, 23457, 151, 1300, 60,
// 152, 12, 736, 87,
// 1234, 67, task-1];

// for (let i = 0; i <arrayNum.length; i++) {
//     if (arrayNum[i]%task-2===0){
//         console.log(arrayNum[i]); }
// }

// - Взяти масив з 10 чисел або створити його.
// Створити 2й порожній масив.
// За допомогою будь-якого циклу та push () скопіювати значення
// одного масиву в інший

const array1 = [1, 2, 3, 7, 11, 12, 4, 5, 141, 52];
//
// for (let i = 0; i < array1.length; i++) {
//     let newArray1[i] = array1.push([i]);
//     console.log(newArray1[i]);
// }

// let i = 0;
// let number = [];
// for (const string of array1) {
//     number = string;
//     console.log(number);}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let newArray1 =[];
// for (let i = 0; i < array1.length; i++) {
//    newArray1[i] = array1[i];
// }console.log(newArray1);

// ============

// зробити масив з 10 чисел [task-2,17,13,6,22,31,45,66,100,-18]та:
//task-1. перебрати його циклом while

// let i =0;
// while (i<array1.length) {
//   console.log(array1[i]);
// i++;}
//task-2. перебрати його циклом for

// for (let i = 0; i < array1.length; i++) {
// console.log(array1[i]);}

// 3. перебрати циклом while та вивести  числа тільки з
// непарним індексом

// const arrayNum =
//     [123, 23457, 151, 1300, 60,
//     152, 12, 736, 87, 1234, 67, task-1];
// let i = 0;
// while (i < arrayNum.length) {
//     if (i % task-2 === task-1) {
//         console.log(` ${i} індекс  ${arrayNum[i]}`);
//     } i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arrayNum = [task-1,4,124,51,521,551,5,145,152,13]
// for (let j = 0; j <arrayNum.length; j++) {
//     if (j % task-2 === task-1) {
//         console.log(`${j} індекс ${arrayNum[j]}`)
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// const arrayNum =
//     [123, 23400, 151, 1300, 60,
//         152, 12, 736, 87, 1234, 67, task-1];
// let i = 0;
//
// while (i<arrayNum.length){
//     if (arrayNum[i]%task-2 === 0) {
//         console.log('step: ' + arrayNum[i]);
//     }i++;
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < arrayNum.length; i+=task-2) {
//     console.log(arrayNum[i]);
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < arrayNum.length; i++) {
//     if (arrayNum[i] % 3 === 0) {
//         arrayNum[i]='okten';
//     }
// }console.log(arrayNum);
//

// let arrayNum = [255,1243,555,350,2500,12331,5555,600]
// for (let i = 0; i < arrayNum.length; i++) {
//     if (arrayNum[i] % 5 === 0) {
//         arrayNum[i]='test';
//     }
// }console.log(arrayNum.reverse());

// 8. вивести масив в зворотньому порядку.

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10 створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.
//
//
// task-1
// створити пустий масив та :
//     task-1. заповнити його 50 парними числами за допомоги циклу.

// let emptyArray = [];
// for (let i = 0; i <= 100 ; i++) {
//     if (i%task-2 ===0){
//         console.log(i);
//     }};
// task-2. заповнити його 50 непарними числами за допомоги циклу.
//     let emptyArray = [];
// for (let i = 0; i < 100 ; i++) {
//     if (i%task-2 === task-1){
//         console.log(i);
//     }};

// 3. используя Math.random заполнить массив из ???(сколько хотите)
// элементов. диапазон рандома 8 до 732.
// (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// task-2. вывести на консоль  каждый третий елемент
// 3. вывести на консоль  каждый второй елемент
// но при условии что его значение является парным.

// let array = [];
// for (let i = 0; i < 200; i++) {
//     array.push(Math.random());
//     console.log(array[i]);
// }

// let array = [];
// for (let i = 0; i < 200; i++) {
//     array.push(parseInt(Math.random()*(1234-333)*333));
//     for (let j = 0; j < array.length; j+=3) {
//         break;
//     }
//     console.log(array.sort()[i]);
// };
// let array = [];
// for (let i = 0; i < 200; i++) {
//     array.push(Math.round(Math.random() * (234 - 10) * 10));
//     if (array[i]%task-2 ===0) {
//         console.log(array[i]);
//     }};

// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.
//
//     let array = [];
//     let arrayNew = [];
// for (let i = 0; i < 200; i++) {
//     array.push(Math.round(Math.random() * (234 - 10) * 10));
//     if (array[i]%3 === 0) {
//
//         arrayNew = array.push(i);
//         console.log(arrayNew);
//     }};

// 5. Вывести каждый елемент массива у которого соседний с
// права элемент - парный

// let arrSquare = [task-1, task-2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arrSquare.length; i++) {
//     let a = arrSquare[i + task-1];
//     if (a % task-2 === 0)
//         console.log(arrSquare[i]);
// }
// let arrSquare = [task-1, task-2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arrSquare.length; i++) {
//     let a = arrSquare[i + task-1];
//     if (a % task-2 === task-1)
//         console.log(arrSquare[i]);
// }

// 6. масив з числами [100,250,50,168,120,345,188],
// Які характеризують вартість окремої покупки. обрахувати середній чек.

// let arrCash = [100, 250, 50, 168, 120, 345, 188];
// let average= 0;
// for (let i = 0; i < arrCash.length; i++) {
//    average = average + arrCash[i];
// } console.log(average/arrCash.length);

// 7. створити масив з рандомними значеннями, помножити всі його елементи
// помножити на 5 та перемістити їх в інший масив.

// let arrayRand = [];
// let newArray = [];
// for (let i = 0; i < 10; i++) {
//     arrayRand = Math.round(Math.random()*(142-4)*4)*5;
//     newArray.push(arrayRand);
//     console.log(arrayRand);
// }console.log(newArray);


// 8. створити масив з будь якими значеннями (стрінги, числа, і тд...).
// пройтись по ньому, і якщо об'єкт є числом, додати його в інший масив.

// let arrayMix = ['hello',4,true,null,53,'world',41,null,12414]
// for (let i = 0; i < arrayMix.length; i++) {
//     if (typeof arrayMix[i] === 'number') {
//         console.log(arrayMix[i]);
//     }
// }



