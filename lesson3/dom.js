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


// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення


// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
//                                                                 - взять объекты из задания 1 и превратить каждый в json.
// - взять json из задания 11 и превратить их обратно в объекты.
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
//
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
//
//
//
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
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
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
//
//
//
//
//
// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
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