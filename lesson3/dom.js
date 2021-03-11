//
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
// let obj = {
//     dog: [{
//         name: 'bobik',
//         age: 3,
//         breed: 'dvorterjer',
//         color: 'red',
//         high: 30
//     }],
//     human: [{
//         sex: 'man',
//         name: 'nikolia',
//         age: 34,
//         high: 187,
//         mass: 93
//     }],
//     car: [{
//         model: 'volga',
//         color: 'black',
//         speed: '300',
//         type: 'sport',
//         new: false
//     }],
//     apartment: [{
//         number: 33,
//         rooms: 4,
//         floor: 10,
//         washroom: true,
//         kitchen: false
//     }],
//     book: [{
//         author: 'Ray Bradbury',
//         title: 'Fahrenheit 451',
//         price: 350,
//         type: 'paper',
//         pages: 240
//     }]
// }

//
// // Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// // - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// // - статус Андрія
// console.log(users[7].status)
// // - статус Максима
// console.log(users[4].status)
// // - ім'я передостаннього об'єкту
// console.log(users[users.length -1].age)
// // - ім'я третього об'єкта
// console.log(users[2].name)
// // - вік Олега
// console.log(users[6].age)
// // - вік Олі
// console.log(users[3].age)
// // - вік + ім'я 5го об'єкта
// console.log(users[4].name + ' ' + users[4].age)
// // - вік + сатус Анни
// console.log(users[5].status + ' ' + users[5].age)
// // Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
//


// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// let idContent = document.getElementById("content");
// idContent.style.backgroundColor = 'pink';
// idContent.style.height = '1000px';
//
//
// let title1 = document.getElementById("title")
// idContent.appendChild(title1)
// // - отримує текст з блоку з id "rules"
// let rules = document.getElementById("wrap");
// idContent.appendChild(rules);


// - замініть текст параграфа з id 'content' на будь-який інший
// document.body.innerText = "ніщо не істинно, все дозволено";

// - замініть текст параграфа з id 'wrap' на будь-який інший
// rules.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis dignissimos dolores est" +
//     " eum facere impedit ipsum nam quidem similique, voluptas voluptatem voluptatum. Ad, consequatur iste nisi voluptas " +
//     "voluptates voluptatum";


// - змініть кожному елементу колір фону на червоний
// let allClass = document.getElementsByClassName("rules");
// for (let i = 0; i < allClass.length; i++) {
//     const allClass1 = allClass[i];
//     allClass[i].style.backgroundColor = 'red';
//     allClass[i].style.color = 'blue';
// }

// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// console.log(allClass)

// - отримати всі елементи з класом fc_rules!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let allRules = document.getElementsByClassName("rules");
// console.log(allRules)
// // - поміняти колір тексту у всіх елементів fc_rules на червоний
// for (let i = 0; i < allRules.length; i++) {
//     allRules[i].style.color = "red";
// }


//
// ====================
// ====================
// ====================
//
// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// let mainHeader = document.getElementById('main_header');
// mainHeader.style.color = 'red';
//
// // -- робить шириниу елементу ul 400 пікселів
// let ulTag = document.getElementsByTagName('ul');
// for (let i = 0; i < ulTag.length; i++) {
//     ulTag[i].style.width = '400px';
//     ulTag[i].style.backgroundColor = 'silver';
// }
// console.log(ulTag);
//
// // -- робить шириниу всіх елементів з класом linkList шириною 50%
// let linkL = document.getElementsByClassName('linkList');
// for (let i = 0; i < linkL.length; i++) {
//     linkL[i].style.width = '50%';
//     linkL[i].style.backgroundColor = 'yellow'
// }
// // -- отримує текст який зберігається в елементі з класом listElement2
// let listE2 = document.getElementsByClassName('listElement2');
// for (let i = 0; i < listE2.length; i++) {
//     console.log(listE2)
// }
//
// // -- отримує всі елементи li та змінює ім колір фону на сірий
// let allLi = document.getElementsByTagName('li');
// for (let i = 0; i < allLi.length; i++) {
//     allLi[i].style.backgroundColor = 'gray';
// }
//
// // -- отримує всі елементи 'a' та додає їм клас anchor
// let allA = document.getElementsByTagName('a');
// for (let i = 0; i < allA.length; i++) {
//     allA[i].classList.add('anchor')
//     // allA[i].style.backgroundColor = 'pink';
// }
//
// // -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// for (let i = 0; i < allA.length; i++) {
//     if (allA[i].innerText === 'link3') {
//         allA[i].style.fontSize = '40px'
//     }
// }
//
// // -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// for (let i = 0; i < allA.length; i++) {
//     allA[i].classList.add('element_XXX');
//     allA[i].innerText = 'XXX';
//
// }

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let allElementSubHeader = document.getElementsByClassName('sub-header');
// let color = prompt('enter color: yellow, green, blue or red', 'silver');
// for (let i = 0; i < allElementSubHeader.length; i++) {
//     if (color === 'yellow') {
//         allElementSubHeader[i].style.backgroundColor = 'yellow'
//     } else
//         if (color === 'green') {
//             allElementSubHeader[i].style.backgroundColor = 'green'
//         } else
//             if (color === 'blue') {
//             allElementSubHeader[i].style.backgroundColor = 'blue'
//         } else
//             if (color === 'red') {
//                 allElementSubHeader[i].style.backgroundColor = 'red'
//             } else
//             if (color === 'silver') {
//                 allElementSubHeader[i].style.backgroundColor = 'silver'
//             }
// }

// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let subHeader = document.getElementsByClassName('sub-header');
// let fontColor = prompt('enter color; green, yellow, pink', 'silver')
// for (let i = 0; i < fontColor.length; i++) {
//     if (fontColor === 'green' ) {
//         subHeader[i].style.color = 'green'
//     } else
//         if (fontColor === 'yellow') {
//             subHeader[i].style.color = 'yellow'
//         } else
//             if (fontColor === 'pink') {
//                 subHeader[i].style.color = 'pink'
//             } else
//                 if (fontColor === 'silver') {
//                     subHeader[i].style.color = 'silver'
//                 }
// }

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let classContent = document.querySelectorAll('div.content_1');
// let anotherText = prompt('enter your text');
// for (let i = 0; i < classContent.length; i++) {
//     classContent[i].innerText = anotherText
// }


// -- отримати елементи p та змінити їм paddin на довільне значення
// let pElement = document.querySelectorAll('p');
// for (let i = 0; i < pElement.length; i++) {
//     const pElementElement = pElement[i];
//     pElementElement.style.padding = '30px'
// }


// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
// let elementText2 = document.querySelectorAll('p.text2');
// for (let i = 0; i < elementText2.length; i++) {
//     const elementText2Element = elementText2[i];
//     elementText2Element.innerText = 'я вісьолий апільсін'
// }


// // - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект.
// // Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let man = {name: 'kokos', skills: ['java', 'js'], wife: {name: 'cherry'}};
// let car = {
//     model: 'bmw',
//     color: ['red', 'black'],
//     speed: {
//         min: 40,
//         max: 300
//     }
// };
// let zodiac = {
//     quantity: 12,
//     list: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra',
//         'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
//     Aquarius: {
//         begin: '21 January',
//         end: '19 February'
//     }
// }
//
//
// // - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (let key in man) {
//     console.log(key)
// }
//
// console.log('--------------------');
//
// for (let key in car) {
//     console.log(key);
// }
//
// console.log('-------------------');
//
// for (let key in zodiac) {
//     console.log(key);
// }
//
//
// // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(man), Object.keys(car), Object.keys(zodiac));

// // - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let cars = [
//     {
//         car01: {
//             model: 'audi',
//             year: 2000,
//             power: 150,
//             color: 'red'
//         }
//     },
//     {
//         car02: {
//             model: 'fiat',
//             year: 2007,
//             power: 100,
//             color: 'yellow'
//         }
//     },
//     {
//         car03: {
//             model: 'bentley',
//             year: 2003,
//             power: 130,
//             color: 'green'
//         }
//     },
//     {
//         car04: {
//             model: 'bugatti',
//             year: 2019,
//             power: 250,
//             color: 'darkblue'
//         }
//     },
//     {
//         car05: {
//             model: "chery",
//             year: 2015,
//             power: 110,
//             color: 'silver'
//         }
//     },
//     {
//         car06: {
//             model: 'chevrolet',
//             year: 2009,
//             power: 189,
//             color: 'pink'
//         }
//     },
//     {
//         car07: {
//             model: 'citroen',
//             year: 2011,
//             power: 111,
//             color: 'blue'
//         }
//     },
//     {
//         car08: {
//             model: 'daewoo',
//             year: 2002,
//             power: 99,
//             color: 'violet'
//         }
//     },
//     {
//         car09: {
//             model: 'datsun',
//             year: 2020,
//             power: 199,
//             color: 'red'
//         }
//     },
//     {
//         car10: {
//             model: 'ford',
//             year: 2017,
//             power: 189,
//             color: 'black'
//         }
//     }
// ]

// // - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [
//     {
//         citi01: {
//             name: 'Lviv',
//             population: 600000,
//             country: 'Ukraine',
//             region: 'Europe'
//         }
//     },
//     {
//         citi02: {
//             name: 'Toronto',
//             population: 800000,
//             country: 'Canada',
//             region: 'North America'
//         }
//     },
//     {
//         citi03: {
//             name: 'Tokyo',
//             population: 100000,
//             country: 'Japan',
//             region: 'Asia'
//         }
//     },
//     {
//         citi04: {
//             name: 'Sydney',
//             population: 120000,
//             country: 'Australia',
//             region: 'Australia'
//         }
//     },
//     {
//         citi05: {
//             name: 'Lima',
//             population: 900000,
//             country: 'Peru',
//             region: 'South America'
//         }
//     }
// ]
// // console.log(cars);
// // console.log(cities)


// // - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let carsWithDrivers = [
//     {
//         car1: {
//             model: 'foton',
//             year: 2016,
//             power: 100,
//             color: 'red',
//             driver: {
//                 name: 'Vasia',
//                 age: 20,
//                 sex: 'male',
//                 experience: 2
//             }
//         }
//     },
//     {
//         car2: {
//             model: 'GAC',
//             year: 2017,
//             power: 110,
//             color: 'orange',
//             driver: {
//                 name: 'Ruslan',
//                 age: 25,
//                 sex: 'male',
//                 experience: 5
//             }
//         }
//     },
//     {
//         car3: {
//             model: 'GAZ',
//             year: 2018,
//             power: 130,
//             color: 'yellow',
//             driver: {
//                 name: 'Olia',
//                 age: 23,
//                 sex: 'female',
//                 experience: 4
//             }
//         }
//     },
//     {
//         car4: {
//             model: 'google',
//             year: 2020,
//             power: 140,
//             color: 'green',
//             driver: {
//                 name: 'Liena',
//                 age: 23,
//                 sex: 'male',
//                 experience: 1
//             }
//         }
//     },
//     {
//         car5: {
//             model: 'tesla',
//             year: 2019,
//             power: 150,
//             color: 'blue',
//             driver: {
//                 name: 'Dima',
//                 age: 29,
//                 sex: 'female',
//                 experience: 11
//             }
//         }
//     }
// ]
// // console.log(carsWithDrivers);


// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// console.log('-----------------------')
// console.log('cars')
// let i = 0;
// while (i < cars.length) {
//     console.log(cars[i]);
//     i++
// }

// console.log('-----------------------')
// console.log('cities')
// let i = 0;
// while (i < cities.length) {
//     console.log(cities[i]);
//     i++
// }
//
// console.log('-----------------------')
// console.log('carsWithDrivers');
// let i = 0;
// while (i < carsWithDrivers.length) {
//     console.log(carsWithDrivers[i]);
//     i++
// }


// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// console.log('-----------------------')
// console.log('cars')
// for (let i = 0; i < cars.length; i++) {
//     const onlyCars = cars[i];
//     console.log(onlyCars)
// }
//
//
// console.log('-----------------------')
// console.log('cities')
// for (let i = 0; i < cities.length; i++) {
//     const citi = cities[i];
//     console.log(citi)
// }
//
//
// console.log('-----------------------')
// console.log('carsWithDrivers');
// for (let i = 0; i < carsWithDrivers.length; i++) {
//     const carsWithDriver = carsWithDrivers[i];
//     console.log(carsWithDriver)
//
// }


// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// console.log('-----------------------')
// console.log('cars')
// for (const car of cars) {
//     console.log(car)
// }
//
// console.log('-----------------------')
// console.log('cities')
// for (const city of cities) {
//     console.log(city)
// }
//
//
// console.log('-----------------------')
// console.log('carsWithDrivers');
// for (const carsWithDriver of carsWithDrivers) {
//     console.log(carsWithDriver)
// }


// // - взять объекты из задания 1 и превратить каждый в json.
// let jsonCars = JSON.stringify(cars);
// console.log(jsonCars)
//
// // - взять json из задания 11 и превратить их обратно в объекты.
// let parsedCars = JSON.parse(jsonCars);
// console.log(parsedCars)
//
// // - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (let i = 0; i < parsedCars.length; i++) {
//     const parsedCar = parsedCars[i];
//     let jsonCarInLoop = JSON.stringify(parsedCar);
//     console.log(jsonCarInLoop)
// }
//
// // - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// console.log('----------------------------');
// let newArray = [];
// // console.log(carsWithDrivers);
// for (let i = 0; i < carsWithDrivers.length; i++) {
//     const carsWithDriversI = carsWithDrivers[i];
//     let jsonCarsWithDrivers = JSON.stringify(carsWithDriversI);
//     // console.log(jsonCarsWithDrivers);
//     newArray.push(jsonCarsWithDrivers);
// }
// console.log(newArray)


// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users = [
//     {
//             name: 'Alex',
//             englishSkills: {
//                 reading: true,
//                 writing: false,
//                 speaking: true
//         }
//     },
//         {
//             name: 'Olia',
//             englishSkills: {
//                 reading: true,
//                 writing: true,
//                 speaking: true
//         }
//     },
//         {
//             name: 'Dima',
//             englishSkills: {
//                 reading: false,
//                 writing: false,
//                 speaking: false
//         }
//     },
//         {
//             name: 'Svitlana',
//             englishSkills: {
//                 reading: false,
//                 writing: false,
//                 speaking: true
//         }
//     },
//         {
//             name: 'Katia',
//             englishSkills: {
//                 reading: false,
//                 writing: false,
//                 speaking: false
//         }
//     },
// ]
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     console.log(user);
//     console.log(user.englishSkills);
// }


// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills
// всех пользователей в отедльный массив

// let emptyArr = [];
// let usersArr = [
//     {
//         name: 'Alex',
//         skills: ['js', 'angular', 'node js', 'sql']
//     },
//     {
//         name: 'Olia',
//         skills: ['english', 'polish', 'ukrainian']
//     },
//     {
//         name: 'Dima',
//         skills: ['driving', 'swimming', 'flay']
//     },
//     {
//         name: 'Svitlana',
//         skills: ['communication', 'psychology', 'management']
//     },
//     {
//         name: 'Katia',
//         skills: ['work with wood', 'work with metal']
//     },
// ]
//
//
// for (let i = 0; i < usersArr.length; i++) {
//     const usersArrElement = usersArr[i];
//     console.log(usersArrElement);
//     console.log(usersArrElement.skills);
//     emptyArr.push(usersArrElement.skills);
// }
// console.log(emptyArr)


// // - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
//     ];
//
// // for (const user of users) {
// //     console.log(user);
// //     console.log(user.skills);
// //     console.log('_______________________________')
// // }
//
// let i = 0;
// while (i < users.length) {
//     let user = users[i];
//     console.log(user);
//     console.log(user.skills);
//     console.log('-----------------------------------');
//     i++
// }


//
//
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
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
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
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
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let userAddress = [];
// for (const user of users) {
//     userAddress.push(user.address)
// }
// console.log(userAddress)


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
// let gren = Math.random() * 255;
// let reed = Math.random() * 255;
// let blue = Math.random() * 255;
//
// for (const user of users) {
//     let divElement = document.createElement('div');
//     document.body.appendChild(divElement);
//     divElement.style.backgroundColor = `rgb(${gren}, ${reed}, ${blue})`;
//     divElement.style.width = '50%';
//     divElement.style.height = '100px';
//     divElement.style.border = '2px solid black'
//     divElement.innerHTML = user.name + '<br>' + user.age + '<br>' + user.status + '<br>' + user.address.country + ', '
//         + user.address.city + ', ' + user.address.street + ', ' + user.address.houseNumber;
//
// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
//

// let container = document.querySelector('.container');
//
// for (const user of users) {
//     const userContainer = document.createElement('div')
//
//     const userName = document.createElement('div');
//     userName.style.backgroundColor = 'silver';
//     userName.style.width = '100%';
//     userName.style.height = '15px';
//     userName.innerText = user.name;
//     userContainer.append(userName);
//
//     const userAge = document.createElement('div');
//     userAge.style.backgroundColor = 'red';
//     userAge.style.width = '100%';
//     userAge.style.height = '15px';
//     userAge.innerText = user.age;
//     userContainer.append(userAge);
//
//     const userStatus = document.createElement('div');
//     userStatus.style.backgroundColor = 'yellow';
//     userStatus.style.width = '100%';
//     userStatus.style.height = '15px';
//     userStatus.innerText = user.status;
//     userContainer.append(userStatus);
//
//     const userAddress = document.createElement('div');
//
//
//     for (key in user.address) {
//         const valuesContainer = document.createElement('div');
//         valuesContainer.style.backgroundColor = 'pink';
//         valuesContainer.style.width = '100%';
//         valuesContainer.style.height = '15px';
//         valuesContainer.innerText = user.address[key];
//         userAddress.append(valuesContainer)
//     }
//     userContainer.append(userAddress);
//     userContainer.style.border = '5px solid black'
//     container.append(userContainer)
// }


//
//
// // - Дано 2 масиви з рівною кількістю об'єктів.
// // Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
//
// let citiesWithId = [
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
//
// for (let i = 0; i < usersWithId.length; i++) {
//     const usersWithIdElement = usersWithId[i];
//     for (let i = 0; i < citiesWithId.length; i++) {
//         const citiesWithIdElement = citiesWithId[i];
//         usersWithIdElement.address = citiesWithIdElement;
//     }
//     ;
// }
// ;
//
// console.log(usersWithId);
//
//
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// //     Записати цей об'єкт в новий масив
// // Частковий приклад реультату:
// //     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]


//
//
// // - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
//
// let getDivEl = document.body.querySelector('div');
// console.log(getDivEl);
//
// let getIdEl = document.body.querySelector('#sound_1');
// console.log(getIdEl);
//
// let getClassEl = document.body.querySelector('.skriabin_sounds');
// console.log(getClassEl);
//
//
// // - змінити цей текст використовуючи селектори id, class,  tag
// getIdEl.innerHTML = 'visiolyi apielsin';
//
// getClassEl.innerHTML = 'ababagalamaga';
//
// getDivEl.innerText = 'plachiet apilsin';
//
//
// // -!!!!!!!!-ID нє работаєт змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// getDivEl.style.height = '100px';
// getDivEl.style.width = '300px';
// getDivEl.style.backgroundColor = 'pink';
//
// getClassEl.style.height = '200px';
// getClassEl.style.width = '600px';
// getClassEl.style.backgroundColor = 'red';
//
// getIdEl.style.height = '300px';
// getIdEl.style.width = '900px';
// getIdEl.style.backgroundColor = 'yellow';!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
let tableEl = document.createElement('table');
let tBody =



// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
//
// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
//     - знайти всі div та змінити ім колір на червоний
//
// ============
// ====class===
//     ============
//
//     - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
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
//
//
//
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту