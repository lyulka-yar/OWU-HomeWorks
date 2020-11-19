// - Создать произвольный елемент с id = text.
//     Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// const div = document.createElement('div');
// const p = document.createElement('p');
// document.body.appendChild(div);
// p.setAttribute('id','text');
//
// div.appendChild(p);
// div.style.backgroundColor='lightblue';
// p.innerText = 'Hello world';
// p.style.cursor='pointer';
// const text = document.getElementById('text');
// text.onclick =() => {
//     text.style.display='none';
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// const divElement = document.createElement("div");
// const button = document.createElement('button');
// button.setAttribute('id','button')
//
// button.onclick = () => {
//     button.style.visibility='hidden';
// }
//
// document.body.appendChild(divElement);
// divElement.appendChild(button);
// button.innerText='click';

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//  const btn = document.getElementById('btn');
// const form = document.getElementById('form');
//
// btn.addEventListener('click', check);
//
// function check () {
//     if (form.value < 18) {
//         alert('go home')
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике
//
// const btn = document.getElementById('btn-green');
// const menu = document.getElementById('menu');
// const div = document.getElementById('green');
//
//     let isActive = false;
// btn.onclick = (e) => {
//     if (isActive) {
//         menu.style.display='block';
//         isActive = false;
//         div.style.height='300px';
//
//     } else {
//         menu.style.display='none';
//         isActive = true;
//         div.style.height='0';
//     }
// }

// - Создать список комментариев , пример объекта коментария -
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let comments = [
//     {
//         title: 'apple',
//         body: 'it`s great fruit which taste very well'
//     },
//     {
//         title: 'peach',
//         body: 'it`s great fruit which taste very well'
//     },
//     {
//         title: 'grape',
//         body: 'it`s great fruit which taste very well'
//     },
//     {
//         title: 'coconut',
//         body: 'it`s great fruit which taste very well'
//     },
//     {
//         title: 'pamelo',
//         body: 'it`s great fruit which taste very well'
//     },
//     {
//         title: 'annanas',
//         body: 'it`s great fruit which taste very well'
//     }
//
// ]
// const content = document.getElementById('comments-block');
//
// comments.forEach(element => {
//     const div = document.createElement('div');
//     const h3 = document.createElement('h3');
//     const p = document.createElement('p');
//     const btn = document.createElement('btn');
//     div.style.border='1px dashed brown';
//     div.style.padding='0 5px';
//     div.style.marginBottom='5px';
//     content.style.border = '2px solid red';
//     content.style.padding = '15px';
//     content.style.backgroundColor = '#5669c3';
//     btn.style.backgroundColor = '#d01313';
//     btn.style.padding = '3px 15px';
//     btn.style.cursor = 'pointer';
//     btn.innerText = 'X';
//     btn.style.color = 'white';
//     h3.style.display='flex';
//     h3.style.justifyContent='space-between';
//     h3.style.textTransform='uppercase';
//     h3.innerText = element.title;
//     p.innerText = element.body;
//     p.style.color = 'white';
//
//     btn.onclick = () => {
//         p.hidden
//             ? p.hidden = false
//             : p.hidden = true
//     }
//
//     div.appendChild(h3);
//     h3.appendChild(btn);
//     div.appendChild(p);
//     content.appendChild(div);
//     document.body.appendChild(content);
// })

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться в консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let test = document.forms.form.text;
// console.log(test)
// const btn = document.createElement('button');
// const inp1 = document.getElementById('input-1');
// const inp11 = document.getElementById('input-1-1');
// const inp21 = document.getElementById('input-2-1');
// const inp22 = document.getElementById('input-2-2');
// let inputs = [inp1,inp11,inp21,inp22];
// btn.onclick = ev => {
//    // inputs.forEach(input => console.log(input.value))
//
// }
//
// document.body.appendChild(btn);
// btn.innerText='CHECK';

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// const wrap = document.getElementById('content');
//
// function createTabs (rows,cols,wrap) {
//     const table = document.createElement('table');
//     for (let i = 0; i < rows; i++) {
//         const rows = document.createElement('tr');
//
//     table.appendChild(rows);
//         for (let j = 0; j < cols; j++) {
//             const cols = document.createElement('td');
//             cols.innerText=i+''+j;
//
//         rows.appendChild(cols);
//
//         }
//     }
//     wrap.appendChild(table);
// }
// createTabs(10,10,wrap);

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//
// const content = document.getElementById('content');
// const btn = document.getElementById('btn');
// const inp1 = document.getElementById('nb-1');
// const inp2 = document.getElementById('nb-2');
// const inp3 = document.getElementById('txtId');
//
// btn.onclick = (ev => {
//     createTable(inp1.value, inp2.value, inp3.value, content);
// })
//
//
// function createTable(row, cols, text, content) {
//     const table = document.createElement('table');
//     for (let i = 0; i < row; i++) {
//         const rows = document.createElement('tr');
//         table.appendChild(rows);
//         for (let j = 0; j < cols; j++) {
//             const cols = document.createElement('td');
//             rows.appendChild(cols);
//             cols.innerText = inp3.value;
//         }
//     }
//     content.appendChild(table)
// }
//
// createTable(inp1.value, inp2.value, inp3.value, content);

// НЕ СДЕЛАНО (Додатковачастина для завдання)
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки. /

//РАЗОБРАТЬСЯ - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві
//     не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// const inputTxt = document.createElement('input');
// const div = document.createElement('div');
// const btn = document.createElement('input');
// let badWords = ['ajax', 'var', 'pascal', 'strong', 'c#', 'ruby', 'ecma3']
// // кнопка атрибуты (просто для тренировки)
// btn.setAttribute('id', 'check');
// btn.setAttribute('type', 'button');
// btn.setAttribute('value', 'check');
// // проверка+ивент
// let compare;
// btn.onclick = ev => {
//     badWords.forEach(word => {
//             if (word === inputTxt.value) {
//                 compare = word;
//             }
//         },
//         compare ? console.log('Good job') : console.log('need to learn')
//     )
// }
// // добавление на страницу
// document.body.appendChild(div);
// div.appendChild(inputTxt);
// div.appendChild(btn);

// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];

let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

// const ch1 = document.getElementById('item_1');
// const ch2 = document.getElementById('item_2');
// const ch3 = document.getElementById('item_3');
// const wrap = document.createElement('div');
// wrap.setAttribute('id','wrap');
// let arr = [ch1, ch2, ch3];
//
// arr.forEach(input => {
//     input.onchange = ev => {
//         usersWithAddress.filter(user => {
//             const h2 = document.createElement('h2');
//             const p = document.createElement('p');
//             const div = document.createElement('div');
//
//             if (ch1.checked  && !(user.status)) {
//                 h2.innerText = user.name;
//                 p.innerText = user.status;
//             }
//             if (ch2.checked  && user.age >= 29) {
//                 h2.innerText = user.name;
//                 p.innerText = user.age;
//
//             }
//             if (ch3.checked  && user.address.city === 'Kyiv') {
//                 h2.innerText = user.name;
//                 p.innerText = user.address.city;
//             }
//             // console.log(ch1.checked)
//             div.appendChild(h2);
//             div.appendChild(p);
//             wrap.appendChild(div);
//         });
//     }
// })
//
// document.body.appendChild(wrap);


// let isActive = false;
// btn.onclick = (e) => {
//     if (isActive) {
//         menu.style.display='block';
//         isActive = false;
//         div.style.height='300px';
//
//     } else {
//         menu.style.display='none';
//         isActive = true;
//         div.style.height='0';
//     }
// }
let in1 = document.getElementById('in1');
let in2 = document.getElementById('in2');
let in3 = document.getElementById('in3');

function funIn1 () {


    if (in1.checked) {

        let filterIn1 = usersWithAddress.filter(value => value.status === false);
        console.log(filterIn1);
    } else
        console.clear()
}

function funIn2 () {

    if (in2.checked) {

        let filterIn2 = usersWithAddress.filter(value => value.age >= 29);
        console.log(filterIn2);
    } else
        console.clear()
}

function funIn3 () {


    if (in3.checked) {

        let filterIn3 = usersWithAddress.filter(value => value.address.city === 'Lviv')
        console.log(filterIn3);
    } else
        console.clear()
}




