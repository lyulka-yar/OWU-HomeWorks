// Callback HELL MDFK
//
// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані
//     успішні та не успішні
//     варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//     Якщо щось пішло не так (нема шо їсти), то має бути викинута
//     помилка і решта функцій
//     виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою.
//
let i = 0;
// Основна функція
function awake(cb) {
    console.log('Доброго ранку, треба  збиратись на роботу');
// що будемо робити
    setTimeout(() => {
        i = Math.random();
        if (i > 0.5) {
// ПРАВИЛО Error First DATA last
            cb('ПРОСПАВ, знову будильник не задзвонив!!!!!!!!', null);
            return;
        }
        cb(null, 'Гарний ранок, піду вмиватись')
    }, 1500);
}
// ПРАВИЛО Error First DATA last
function toothBrush(cb) {
    setTimeout(() => {
// ПРАВИЛО Error First DATA last
        i = Math.random();
        if (i <= 0.5) {
            cb('закінчилась паста, як так можна, теба бути більш уважним при складанні списку покупок', null);
            return;
        }
        cb(null, 'Почистив зуби, можна й поснідати');
    }, 1000)
}
function goToWork(cb) {
    setTimeout(() => {
        i = Math.random();
        if (i > 0.5) {
            cb('ПРОСПАВ, знову будильник не задзвонив!!!!!!!!', null);
            return;
        }
        cb(null, 'Добре що я ліг раніше, та прокинувся раніше будильнику, можна спокійно потрапити на роботу')
    }, 2100);
}
function makeBreakfast(cb) {
    setTimeout(() => {
        i = Math.random();
        if (i > 0.5) {
            cb('Блін спалив сніданок, в мене немає вже часу зробити щось інше, піду голодним...', null);
            return;
        }
        cb(null, ' Це найсмачніша яєчня в моєму житті, треба було йти на кухаря....')

    }, 2400);
}
function tripToWork(cb) {
    setTimeout(() => {
        i = Math.random();
        if (i > 0.5) {
            cb('не встиг на маршрутку, прийдеться йти пішки....влетить від шефа(((', null)
            return;
        }
        cb(null, 'Як добре, що на машині товариш забрав - проїудсь з вітерцем)))')
    }, 1200);
}
function paperWork(cb) {
    setTimeout(() => {
        i = Math.random();
        if (i > 0.5) {
            cb('Знову робити протоколи за робітниками, коли вони вже стануть самостійними....і як зазвичай все терміново!!', null);
            return;
        }
        cb(null, 'Нарешті!!! вони робітники виросли в моїх очах як спеціалісти - я був не правий, піду попрошу пробачення та докину премії!');
    }, 1000);
}
function eatLunch(cb) {
    setTimeout(() => {
        i = Math.random();
        if (i > 0.5) {
            cb('Нюх-ню...здається я отруївся, не вартувало їсти той чебурєк', null);
            return;
        }
        cb(null, 'прекрасний обід, салат з овочей та качки - belissimo!!');
    }, 1300);
}
function askAboutSallary(cb) {
    setTimeout(() => {
        i = Math.random();
        if (i > 0.5) {
            cb('Чорт..не те що зарплатню не підвищили, так і преміюзменшили - гади', null);
            return;
        }
        cb(null, 'УРААА....нам підіймуть зарплатню на 35%, піду розкажу начальнику гарну новину!');
    }, 1000);
}
function finishTask(cb) {
    setTimeout(() => {
        i = Math.random();
        if (i > 0.5) {
            cb('Щось не можу вирішити це завдання. треба трохи почитати документацію...', null);
            return;
        }
        cb(null, 'Чудово, закінчик зі звітами, можна тепер виконати оптимізацію системи виконнання планових робіт!');
    }, 1100);
}

// Cинхронізація функцій

awake((err, succ) => {

    console.log('-------------------------');
    if (err) {
        console.log(err);
        console.log('-------------------------');
        console.log('THE END');
        return;
    }
    console.log(succ);
    console.log('-------------------------');

    toothBrush((err, succ) => {
        if (err) {
            console.log(err);
            console.log('-------------------------');
            console.log('THE END');
            return;
        }
        console.log(succ);
        console.log('-------------------------');

        makeBreakfast((err, succ) => {
            if (err) {
                console.log(err);
                console.log('-------------------------');
                console.log('THE END');
                return;
            }
            console.log(succ);
            console.log('-------------------------');

            goToWork((err, succ) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(succ);
                console.log('-------------------------');

                tripToWork((err, succ) => {
                    if (err) {
                        console.log(err);
                        console.log('THE END');
                    }
                    console.log(succ);
                    console.log('-------------------------');

                    paperWork((err, succ) => {
                        if (err) {
                            console.log(err);
                            console.log('THE END');
                            return;
                        }
                        console.log(succ);
                        console.log('-------------------------');

                        eatLunch((err, succ) => {
                            if (err) {
                                console.log(err);
                                console.log('THE END');
                                return;
                            }
                            console.log(succ);
                            console.log('-------------------------');

                            askAboutSallary((err, succ) => {
                                if (err) {
                                    console.log(err);
                                    console.log('THE END');
                                    return;
                                }
                                console.log(succ);
                                console.log('-------------------------');
                                finishTask((err, succ) => {
                                    if (err) {
                                        console.log(err);
                                        console.log('THE END');
                                        return;
                                    }
                                    console.log(succ);
                                    console.log('-------------------------');

                                });
                            });
                        });
                    });
                });
            });
        });
    });
});


//Promise THeN
// let i = Math.random();
//
// function awake() {
//
//     return new Promise((resolve,reject) => {
//         console.log('Доброго ранку, треба  піти вмитись');
//
// // що будемо робити
//
//         setTimeout(() => {
//             if (i > 0.5) {
//                 resolve( 'Гарний ранок, буду pбиратись на роботу');
//             }
//             reject('Труби прорвало! Викликай сантехніка')
//         }, 1500);
//     })
//
// }
// function awake2() {
//
//     return new Promise((resolve,reject) => {
//         console.log('Доброго ранку, треба  піти вмитись2');
//
// // що будемо робити
//
//         setTimeout(() => {
//             if (i > 0.5) {
//                 resolve( 'Гарний ранок, буду pбиратись на роботу2');
//             }
//             reject('Труби прорвало! Викликай сантехніка2')
//         }, 1500);
//     })
//
// }
//
// awake()
//     .then(value => {
//     console.log(value);
//
//     return awake2();
//
//
// })
//     .then(value => {
//
//         console.log(value);
//     })
//     .catch(err => {
//         console.log(err)
//     })

// Async AWAIT
// let i = Math.random();
//
// function awake() {
//
//     return new Promise((resolve, reject) => {
//         console.log('Доброго ранку, треба  піти вмитись');
//
// // що будемо робити
//
//         setTimeout(() => {
//             if (i > 0.5) {
//                 resolve('Гарний ранок, буду pбиратись на роботу');
//             }
//             reject('Труби прорвало! Викликай сантехніка')
//         }, 1500);
//     })
//
// }
//
// function awake2() {
//
//     return new Promise((resolve, reject) => {
//         console.log('Доброго ранку, сьогодні пя`тниця?');
//
// // що будемо робити
//
//         setTimeout(() => {
//             if (i > 0.5) {
//                 resolve('Ураааа, вихідні скоро');
//             }
//             reject('Поїду на покатушки')
//         }, 1500);
//     })
//
// }
//
//
// async function start() {
//     try {
//         const end = await awake();
//         console.log(end);
//         const fun = await awake2();
//         console.log(fun);
//     } catch (err) {
//         console.log(err)
//     } finally {
//         console.log('Валерчик прийшов твій час');
//     }
// } start();


//
// let i = 0;
// function dayFedenko(wakeUp) {
//     console.log('В даний момент я ще сплю...ZzZ');
//     setTimeout(() => {
//         i = Math.random();
//         if (i > 0.05) {
//             wakeUp(null, 'Добреньке утречко! Я прокинувся.');
//             return;
//         }
//         wakeUp('Сорі, ще посплю. До ранку робив таски.', null);
//     }, 1000);
// }
//
// function breakfest(cb) {
//     console.log('________');
//     console.log('Йду снідати...');
//     setTimeout(() => {
//         i = Math.random();
//         if (i > 0.05) {
//             cb(null, 'ммм.. Дуже смачна перловка!');
//             return;
//         }
//         cb('Не знайшов тарілку..(((', null);
//     }, 1500);
// }
//
// function brushMyTeeth(cb) {
//     console.log('________');
//     console.log('потрібно почистити зуби ...');
//     setTimeout(() => {
//         i = Math.random();
//         if (i > 0.1) {
//             cb(null, 'Почистив.');
//             return;
//         }
//         cb('Закінчилася паста,', null);
//     }, 1000);
// }
//
// function closeMyApartament(cb) {
//     console.log('________');
//     console.log('Збираюся на роботу...');
//     setTimeout(() => {
//         i = Math.random();
//         if (i > 0.08) {
//             cb(null, 'Чудовий сьогодні деньок..');
//             return;
//         }
//         cb('Не знайшов ключі.. Доведеться залишитись вдома((', null);
//     }, 1000);
// }
//
// function ariveToWork(cb) {
//     console.log('________');
//     console.log('Пригнув в тачку, їду на роботу...');
//     setTimeout(() => {
//         i = Math.random();
//         if (i > 0.1) {
//             cb(null, 'Доїхав, кльова в мене тачка!');
//             return;
//         }
//         cb('Зламалась моя малишка, потрібно купувати нове авто((', null);
//     }, 2000);
// }
//
// function askForRaise(cb) {
//     console.log('________');
//     console.log('Здається бос сьогодні в гарному настрої, попрошу підвищення.');
//     setTimeout(() => {
//         i = Math.random();
//         if (i > 0.1) {
//             cb(null, 'УРА, підвищили!');
//             return;
//         }
//         cb('Мене звільнили(((', null);
//     }, 1000);
// }
//
// function celebrateWithFriends(cb) {
//     console.log('________');
//     console.log('Запропоную друзям відсвяткувати підвищення в барі...');
//     setTimeout(() => {
//         i = Math.random();
//         if (i > 0.15) {
//             cb(null, 'Згодні, зустрінемося на вихідних.');
//             return;
//         }
//         cb('Які гульки, КАРАНТИН (((', null);
//     }, 1500);
// }
//
// function endWork(cb) {
//     console.log('________');
//     console.log('Закінчується робочий день, пора збиратись ...');
//     setTimeout(() => {
//         i = Math.random();
//         if (i > 0.3) {
//             cb(null, 'Вийшов з роботи, все гуд!');
//             return;
//         }
//         cb('Бос  Г І В Н Ю К,  повісив ще одну таску (((', null);
//     }, 1000);
// }
//
// function backToHome(cb) {
//     console.log('________');
//     console.log('Пригнув в тачку, їду в мій дворець ...');
//     setTimeout(() => {
//         i = Math.random();
//         if (i > 0.2) {
//             cb(null, 'Вже вдома.');
//             return;
//         }
//         cb('Зламалась моя малишка, потрібно купувати нове авто((', null);
//     }, 2000);
// }
//
// function theEnd() {
//     console.log('-----  T H E   E N D  -----');
// }
//
//
// dayFedenko((error, success) => {
//     if (error) {
//         console.log(error);
//         theEnd();
//         return;
//     }
//     console.log(success);
//     breakfest((err, succ) => {
//         if (err) {
//             console.log(err);
//             theEnd();
//             return;
//         }
//         console.log(succ);
//         brushMyTeeth((err, succ) => {
//             if (err) {
//                 console.log(err);
//                 theEnd();
//                 return;
//             }
//             console.log(succ);
//             closeMyApartament((err, succ) => {
//                 if (err) {
//                     console.log(err);
//                     theEnd();
//                     return;
//                 }
//                 console.log(succ);
//                 ariveToWork((err, succ) => {
//                     if (err) {
//                         console.log(err);
//                         theEnd();
//                     }
//                     console.log(succ);
//                     askForRaise((err, succ) => {
//                         if (err) {
//                             console.log(err);
//                             theEnd();
//                             return;
//                         }
//                         console.log(succ);
//                         celebrateWithFriends((err, succ) => {
//                             if (err) {
//                                 console.log(err);
//                                 theEnd();
//                                 return;
//                             }
//                             console.log(succ);
//                             endWork((err, succ) => {
//                                 if (err) {
//                                     console.log(err);
//                                     theEnd();
//                                     return;
//                                 }
//                                 console.log(succ);
//
//                                 backToHome((err, succ) => {
//                                     if (err) {
//                                         console.log(err);
//                                         theEnd();
//                                         return;
//                                     }
//                                     console.log(succ);
//                                     theEnd();
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });









