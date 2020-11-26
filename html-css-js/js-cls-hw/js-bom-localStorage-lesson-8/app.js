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
const forms = document.forms.forma;
const obj = JSON.parse(localStorage.getItem('form'));
for (let key in obj) {
    if (obj.hasOwnProperty(key)){
        obj[key].value = obj[key].name;
    }

}
forms.onchange = () => {
    const obj = {};

    for (let item of forms) {
        if (item.name === 'radio' || item.name === 'checkbox') {
            if (item.checked) {
                obj[item.name] = item.value;
            }
        } else {
            obj[item.name] = item.value;
        }
    }
    localStorage.setItem('form', JSON.stringify(obj));
};

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются"
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













