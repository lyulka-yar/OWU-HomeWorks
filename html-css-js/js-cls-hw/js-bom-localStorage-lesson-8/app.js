// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время,
//     введенный текст остался в textarea.
//
// let textArea = document.getElementById('field');
// textArea.oninput = () => {
//     localStorage.setItem('user text',textArea.value);
// }
// textArea.value = localStorage.getItem('user text');
//
// let input = document.getElementById('vasya');
// input.oninput = () => {
//     localStorage.setItem('vasya name',input.value);
// }
// input.value = localStorage.getItem('vasya name');

// РАЗОБРАТЬСЯ- Дана форма с инпутами, текстареа, чекбоксами,
// радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает
//     страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу
// введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
// const rad1 = document.getElementById('radio1');
// const rad2 = document.getElementById('radio2');
// const ch1 = document.getElementById('check1');
// const ch2 = document.getElementById('check2');
// const txt1 = document.getElementById('name');
// const txt2 = document.getElementById('surname');
// const select = document.getElementById('years');
//
// const form = document.getElementById('formID');
//
// getFormDataInfo(form);
//
// function saveFormInfo(t) {
//     setFormData(t);
// }
//
// function setFormData(tag) { // ФОРМА
//
//     for (let i = 0; i < tag.length; i++) {
//         const tagElement = tag[i];
//
//         if (tagElement.type === 'checkbox' || tagElement.type === 'radio')
//             tagElement.checked
//                 ? tagElement.value = true
//                 : tagElement.value = false
//
//         localStorage.setItem(tagElement.id, tagElement.value);
//     }
// }
//
// function getFormDataInfo(tag) {
//
//     for (let i = 0; i < tag.children.length; i++) {
//
//         if (localStorage.hasOwnProperty(tag.children[i].id)) {
//             tag.children[i].value = localStorage.getItem(tag.children[i].id);
//
//             if (tag.children[i].value === 'true') {
//                 tag.children[i].setAttribute('checked', 'checked');
//             }
//         }
//
//     }
// }
// Вариант №2
// const forms = document.forms.forma;
// const obj = JSON.parse(localStorage.getItem('form'));
// for (let key in obj) {
//     if (obj.hasOwnProperty(key)){
//         obj[key].value = obj[key].name;
//     }
//
// }
// forms.onchange = () => {
//     const obj = {};
//
//     for (let item of forms) {
//         if (item.name === 'radio' || item.name === 'checkbox') {
//             if (item.checked) {
//                 obj[item.name] = item.value;
//             }
//         } else {
//             obj[item.name] = item.value;
//         }
//     }
//     localStorage.setItem('form', JSON.stringify(obj));
// };

//РАЗОБРАТЬСЯ -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются"
// (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться
// по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
// const form = document.getElementById('field');
// const left = document.getElementById('left');
// const right = document.getElementById('right');
// const save = document.getElementById('save');
//
// save.onclick = () => {
//     localStorage.setItem(localStorage.length+1,form.value);
// };
//
// left.onclick = () => {
//     right.style.visibility = 'visible';
//    let index;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)){
//             if (localStorage.getItem(key) === form.value) {
//                 index = key;
//             }
//         }
//     }
//
//     if (index === '1') {
//         left.style.visibility = 'hidden';
//         return;
//     }
//     form.value = localStorage.getItem(index - 1);
// };
//
// right.onclick = () => {
//     left.style.visibility = 'visible';
//     let index;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)){
//             if (localStorage.getItem(key) === form.value) {
//                 index = key;
//             }
//         }
//     }
//
//     if (index === localStorage.length.toString()) {
//         right.style.visibility = 'hidden';
//         return;
//     }
//     form.value = localStorage.getItem(+index + 1);
// };

//РАЗОБРАТЬСЯ - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответствующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактирования. При нажати на нее появляется форма,
//     в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
//
// const form = document.forms.forma;
// const ARRAY_USER = 'ARRAY_USER';
// const content = document.getElementById('content');
// let tempUser = {};
//
// // внесення запису до localstorage по натисканні на кнопку через звернення до функції
// form.submit.onclick = ev => {
//     // ev.preventDefault();
//     let person = {...tempUser};
//     tempUser = {};
//     for (let i = 0; i < form.children.length; i++) {
//         const user = form.children[i];
//         if (user.name && user.type !== 'button') {
//             person[user.name] = user.value;
//         }
//     }
//     console.log(person);
//
//     if (!person.id) {
//         person.id = new Date().getTime();
//     }
//     saveUser(person)
//     location.reload();
// }
//
// // ==================================================================================
// function saveUser(user) {
//     if (localStorage.hasOwnProperty(ARRAY_USER)) {
//         const arrayUsers = JSON.parse(localStorage.getItem(ARRAY_USER));
//         const findUser = arrayUsers.find(value => value.id === user.id);
//         if (findUser) {
//             const filterUsers = arrayUsers.filter(value => value.id !== user.id);
//             filterUsers.push(user);
//             localStorage.setItem(ARRAY_USER, JSON.stringify(filterUsers));
//             console.log(filterUsers)
//         } else {
//             arrayUsers.push(user);
//             localStorage.setItem(ARRAY_USER, JSON.stringify(arrayUsers));
//         }
//     } else {
//         localStorage.setItem(ARRAY_USER, JSON.stringify([user]))
//     }
// }
//
// // внесення запису до localstorage по натисканні на кнопку через звернення до функції
//
// // Отримання актуального масиву карток юзерів з подальним створенням нових карток та редагування
// function getDataFormLocalStorage() {
//     if (localStorage.hasOwnProperty(ARRAY_USER)) {
//         const arrUser = JSON.parse(localStorage.getItem(ARRAY_USER));
//         for (const user of arrUser) {
//             content.appendChild(createUserDiv(user))
//         }
//     }
// }
//
// getDataFormLocalStorage()
//
// function createUserDiv(user) {
//     const main = document.createElement('div');
//     let flag = true;
//     for (const key in user) {
//         if (flag) {
//             flag = false;
//             const h3 = document.createElement('h3');
//             h3.innerText = key + " : " + user[key];
//             main.appendChild(h3);
//         } else {
//             const p = document.createElement('p');
//             p.innerText = key + " : " + user[key];
//             main.appendChild(p);
//         }
//     }
//
//     main.style = `
//      background-color: #3d83d9;
//      min-width: 250px;
//      margin: 15px;
//      text-align: center;
//      color: black;
//      padding: 10px;`
//
//     const edit = document.createElement('button');
//     const del = document.createElement('button');
//
//     edit.innerText = 'Edit'
//     del.innerText = 'Delete'
//
// // редагування
//     edit.onclick = () => {
//         editUser(user.id);
//     }
//
//     del.onclick = () => {
//         deleteUser(user.id);
//     }
// // редагування
//
//     main.appendChild(edit);
//     main.appendChild(del);
//     return main;
// }
//
// // редагування юзера з перезаписом без створення нового об`єкту
// function editUser(id) {
//     const getUserId = JSON.parse(localStorage.getItem(ARRAY_USER));
//     const user = getUserId.find(user => user.id === id);
//
//     for (let i = 0; i < form.children.length; i++) {
//         const users = form.children[i];
//         if (users.name && users.type !=='button') {
//             for (const key in user) {
//                 if (users.name === key) {
//                     users.value = user[key];
//                 }
//             }
//         }
//     }
//     tempUser = user;
// }
//
// // редагування юзера з перезаписом без створення нового об`єкту
//
// // видалення юзера
// function deleteUser(id) {
//     const getUserId = JSON.parse(localStorage.getItem(ARRAY_USER));
//     const filterDeletedUser = getUserId.filter(user => user.id !== id);
//     localStorage.setItem(ARRAY_USER, JSON.stringify(filterDeletedUser));
//     location.reload();
// }
// // видалення юзера
//
// // Отримання актуального масиву карток юзерів з подальним створенням нових карток


//ПОПРОВОБАВЬ САМОМУ другой вариант выполнения
// const text = document.getElementById('text');
// text.value = localStorage.getItem('text')
// text.oninput = () => {
//     localStorage.setItem('text', text.value)
// }
// //////////////////////////////////////////////////////////////
//
// const forms = document.forms.forma
// const obj = JSON.parse(localStorage.getItem('form'));
// for (let key in obj) {
//     forms[key].value = obj[key]
// }
// forms.onchange = () => {
//     const obj = {}
//     for (let item of forms) {
//         if (item.name === 'radio' || ) {
//             if (item.checked) {
//                 obj[item.name] = item.value
//             }
//         } else {
//             obj[item.name] = item.value
//         }
//     }
//
//     localStorage.setItem('form', JSON.stringify(obj))
// }
// ///////////////////////////////////////////////////////////////////
// const store = document.getElementById('store');
// const arr = JSON.parse(localStorage.getItem('store')) || [];
// let index = arr.length - 1;
// store.value = arr[index] || ''
// document.getElementById('minus').onclick = () => {
//     const arr = JSON.parse(localStorage.getItem('store')) || [];
//     index--
//     if (arr[index]) {
//         store.value = arr[index]
//
//     } else {
//         index++
//         store.value = arr[0] || ''
//     }
// }
// document.getElementById('plus').onclick = () => {
//     const arr = JSON.parse(localStorage.getItem('store')) || [];
//     index++
//     if (arr[index]) {
//         store.value = arr[index]
//     } else {
//         index--
//         store.value = arr[arr.length - 1] || ''
//     }
// }
//
//
// document.getElementById('save').onclick = () => {
//     const fromStorage = JSON.parse(localStorage.getItem('store')) || []
//     fromStorage.push(store.value)
//     index = fromStorage.length - 1;
//     localStorage.setItem('store', JSON.stringify(fromStorage))
//
// }
// //////////////////////////////////////////////////////////////////////////////
//
// const users = document.getElementById('users');
// const form = document.forms.user;
// const showUsers = () => {
//     users.innerText = null
//     const arrUser = JSON.parse(localStorage.getItem('users')) || [];
//     arrUser.forEach((value, index) => {
//         const div = document.createElement('div');
//         const user = document.createElement('div');
//         user.innerText = JSON.stringify(value)
//         div.appendChild(user)
//         const button = document.createElement('button');
//         button.innerText = 'edit'
//         button.onclick = function () {
//             const objUser = JSON.parse(this.parentElement.firstElementChild.innerHTML);
//             const arr = JSON.parse(localStorage.getItem('users'));
//             arr.splice(index, 1)
//             localStorage.setItem('users', JSON.stringify(arr))
//             for (let key in objUser) {
//                 form[key].value = objUser[key]
//             }
//
//         }
//         const del = document.createElement('button');
//         del.innerText = 'del'
//         del.onclick = () => {
//             const arr = JSON.parse(localStorage.getItem('users'));
//             arr.splice(index, 1)
//             localStorage.setItem('users', JSON.stringify(arr))
//             showUsers()
//         }
//
//         div.appendChild(button)
//         div.appendChild(del)
//         users.appendChild(div)
//     })
// }
// showUsers()
// document.getElementById('btn').onclick = () => {
//     const arr = JSON.parse(localStorage.getItem('users')) || []
//     const obj = {}
//     for (let item of form) {
//         obj[item.name] = item.value
//     }
//     arr.push(obj)
//     localStorage.setItem('users', JSON.stringify(arr))
//     form.reset()
//     showUsers()
// }
