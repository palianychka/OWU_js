// // - присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7,
// // 16, true, false Вывести каждую при помощи console.log , alert, document.write
// let word1 = 'hello';
// console.log(word1);
// document.write(word1);
// alert(word1);
// document.write('<br>');
//
// let word2 = 'owu';
// console.log(word2);
// document.write(word2);
// alert(word2);
// document.write('<br>');
//
// let word3 = 'com';
// console.log(word3);
// document.write(word3);
// alert(word3);
// document.write('<br>');
//
// let word4 = 'ua';
// console.log(word4);
// document.write(word4);
// document.write('<br>');
// alert(word4);
//
// let number1 = 1;
// console.log(number1);
// document.write(number1);
// document.write('<br>');
// alert(number1);
//
// let number2 = 10;
// console.log(number2);
// document.write(number2);
// document.write('<br>');
// alert(number2);
//
// let number3 = -999;
// console.log(number3);
// document.write(number3);
// document.write('<br>');
// alert(number3);
//
// let number4 = 123;
// console.log(number4);
// document.write(number4);
// document.write('<br>');
// alert(number4);
//
// let number5 = 3.14;
// console.log(number5);
// document.write(number5);
// document.write('<br>');
// alert(number5);
//
// let number6 = 2.7;
// console.log(number6);
// document.write(number6);
// document.write('<br>');
// alert(number6);
//
// let number7 = 16;
// console.log(number7);
// document.write(number7);
// document.write('<br>');
// alert(number7);
//
// let boolean01 = true;
// console.log(boolean01);
// document.write(boolean01);
// document.write('<br>');
// alert(boolean01);
//
// let boolean00 = false;
// console.log(boolean00);
// document.write(boolean00);
// document.write('<br>');
// alert(boolean00);
//
// // - переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log ,
// // alert, document.write
//
// word1 = 'I';
// word2 = 'love';
// word3 = 'my';
// word4 = 'lepTop';
// console.log(word1, word2, word3, word4);

// // - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
// let n1 = 1;
// let n2 = 2;
// let n3 = 3;
// console.log(n1);
// console.log(n2);
// console.log(n3);
//
// let s1 = '1';
// let s2 = '2';
// let s3 = '3';
// console.log(s1);
// console.log(s2);
// console.log(s3);

// - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать
// разные переменные. Вывести каждую при помощи console.log , alert, document.write
// let name = 'введіть ваше імя';
// let surname = 'введіть ваше прізвище';
// let fatherName = 'введіть як вас по батюшкє';
// console.log(prompt(name));
// console.log(prompt(surname));
// console.log(prompt(fatherName));
// document.write(prompt(name));
// document.write(prompt(surname));
// document.write(prompt(fatherName));
// alert(prompt(surname) + ' ' + prompt(name) + ' ' + prompt(fatherName));
// alert(prompt(surname));
// alert(prompt(fatherName));

// - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
// let name = 'введіть ваше імя';
// let surname = 'введіть ваше прізвище';
// let fatherName = 'введіть як вас по батюшкє';
// let person = prompt(surname) + ' ' + prompt(name) + ' ' + prompt(fatherName);
// console.log(person);

// - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.

// - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
// let number1 = prompt('введіть число 1');
// let number2 = prompt('введіть число 2');
// let number3 = prompt('введіть число 3');
// console.log(+number1);
// console.log(+number2);
// console.log(+number3);

// - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой з
// аписав результат в переменную result и вывести в консоль браузера
// let number1 = prompt('enter number 1');
// let number2 = prompt('enter number 2');
// let number3 = prompt('enter number 3');
// let number4 = prompt('enter number 4');
// let result = parseInt(number4) + parseInt(number3) + parseInt(number2) +parseInt(number1);
// console.log(result);

// - при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему
// типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// let number1 = prompt('enter number 1');
// let number2 = prompt('enter number 2');
// let number3 = prompt('enter number 3');
// let result = parseFloat(number1) + parseFloat(number2) + parseFloat(number3);
// console.log(result);

// - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между
// собой записав результат в переменную  и вывести в консоль браузера
// let n1 = prompt('enter number 1');
// let n2 = prompt('enter number 2');
// let n3 = prompt('enter number 3');
// let result = Math.round(n1) + Math.round(n2) + Math.round(n3);
// console.log(result);

// - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое
// будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое
// число в степень второго числа.
// let n1 = prompt('enter number 1');
// let n2 = prompt('enter number 2');
// let round1 = Math.round(n1);
// let round2 = Math.round(n2);
// console.log(Math.pow(round1, round2));

// - При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль
// let a = 100;
// let b = '100';
// let c = true;
// let d = undefined;
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));

// - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//     В одинаковых выражениях в задании не использовать два одинаковых оператора.
//     Каждое выражение вложить в свою переменную
// 5 !== 6 -> true
// 5 == 6 -> false
// 5 > 6 -> false
// 5 <= 6 -> false
// 10 == 10 -> true
// 10 === 10 -> true
// 10 > 10 -> false
// 10 < 10 -> false
// 10 !== 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true
//
// Дополнительно:
//     - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(132 > 100 && 45 < 12 ); -> false
// console.log(34 > 33 && 23 < 90 ); -> true
// console.log(99 > 100 && 45 > 12 ); -> false
// console.log(132 > 100 || 45 < 12 ); -> true
// console.log(111 > 11 || 45 < 111 ); -> true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); -> true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); -> true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); -> false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); -> true
// console.log(!!'-1'); -> true
// console.log(!!-1); -> true
// console.log(!!'0'); -> true
// console.log(!!'null'); -> true
// console.log(!!'undefined'); -> true
// console.log(!!(3/'owu')); -> false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); -> true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); -> false


// CLASS


// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
// let str = 'hallo';
// let num = 123;
// let flag = true;
// let txt = 'true';
// if (typeof str === "string") {
//     console.log(str)
// };
// if (typeof num === "number") {
//     console.log(num)
// };
// if (typeof flag === "boolean") {
//     console.log(flag)
// };
// if (typeof txt === "boolean") {
//     console.log(txt)
// } else console.log('error');

//
// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.)
// найдите значения выражений:
// let a1 = 5 + 3;
// console.log(a1);
// let a2 = 5 - 3;
// let a3 = 5 * 3;
// let a4 = 5 / 3;
// let a5 = 5 % 3;
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.


// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a0 = 75 + 'кг';
// console.log(a6);
// console.log(a7);
// console.log(a8);
// console.log(a9);
// console.log(a0);

// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
// let height = 23;
// let width = 10;
// let s = height * width;
// console.log(s);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
// let heightC = 10;
// let dC = 4;
// let rC = dC / 2;
// let p = 3.14;
// let v = p * Math.pow(rC,2) * heightC;
// console.log(v);
// console.log(rC)

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения
// в степень ** ).
// let n = 3;
// let m = 4;
// let kx = (n ** 2) + (m ** 2);
// let k = Math.sqrt(kx);
// console.log(k)

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert
// и console.log
// let str = 'hello world';
// console.log(str);
// document.write(str);
// alert(str);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой
// строки спомощью \n).
// alert('my name is alex\ni am 28 old\ni like to sleeping');
// let name = 'my name is alex';
// let age = 'i am 28 old';
// let hobby = 'i like to sleeping';
// alert(`${name}\n${age}\n${hobby}`);

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write
// let str1 = 'who';
// let str2 = 'are';
// let str3 = 'you?';
// let concatenation = str1 + ' ' + str2 + ' ' + str3;
// document.write(concatenation);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>"); // + зчитується як конкатинація, всі інші - як логічні оператори

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
// console.log(parseInt("3.14"));
// console.log(parseInt("-7.875"));
// console.log(parseInt("435"));
// console.log(parseInt("Вася"));

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться
// далее, повторите код ниже
// let str = prompt("Enter something", "ho-ho")
// console.log(str);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи
// метода alert
// let n1 = +prompt('enter first number', 4);
// let n2 = +prompt('enter second number', 6);
// alert(n1 + n2);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст,
// а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
// let name = prompt('enter yor name', 'пєтя');
// let age = prompt('how lod are you?', '22');
// alert(`Доброго вечора ${name}, мои поздравления что вам ${age}`);

// =====================
// ======ДОП============
// =====================
//

// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
// let n1 = prompt('enter number 1');
// let n2 = prompt('enter number 2');
// let n3 = prompt('enter number 3');
//
// if (n1 < n2 && n2 < n3) {
//     console.log(n1, n2, n3)
// } else
//     if (n1 < n3 && n3 < n2) {
//         console.log(n1, n3, n2)
//     } else
//         if (n2 < n1 && n1 < n3) {
//             console.log(n2, n1, n3)
//         } else
//             if (n2 < n3 && n3 < n1) {
//                 console.log(n2, n3, n1)
//             } else
//                 if (n3 < n2 && n2 < n1) {
//                     console.log(n3, n2, n1)
//                 } else
//                     if (n3 < n1 && n1 < n2) {
//                         console.log(n3, n1, n2)
//                     };


//
// 2.  Имитируем поведение пешехода на перекстке. Все параметры получаем с клавиатуры!!
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
// let color = prompt('enter color');
// let color1 = 'green';
// let color2 = 'yellow';
// let color3 = 'red';
// let color4 = 'emergency mode';
// if (color === color1) {
//     alert('go')
// } else
//     if (color === color2) {
//         alert('wait')
//     } else
//         if (color === color3) {
//             alert('stop')
//         } else
//             if (color === color4) {
//                 alert('you can do anything')
//             }


//
// 3  Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
let isRoadClear = confirm('Чи нема машин на дорозі?');
let whatIsColor = prompt('Який колір світлофора?');
let color1 = ['green','зелений'];
let color2 = ['yellow','жовтий'];
let color3 = ['red','червоний'];
let color4 = ['emergency mode','аварійка'];

if (isRoadClear === true && whatIsColor === 'зелений') {
    alert('go')
} else
    if (isRoadClear === true && whatIsColor === 'жовтий') {
        alert('wait')
    } else
        if (isRoadClear === true && whatIsColor === 'червоний') {
            alert('stop')
        } else
            if (isRoadClear === true && whatIsColor === 'аварійка') {
                alert('go')
            } else
                if (isRoadClear === false && whatIsColor === 'зелений') {
                    alert('wait until the road is clear')
                } else
                    if (isRoadClear === false && whatIsColor === 'жовтий') {
                        alert('wait')
                    } else
                        if (isRoadClear === false && whatIsColor === 'червоний') {
                            alert('stop')
                        } else
                            if (isRoadClear === false && whatIsColor === 'аварійка') {
                                alert('wait until the road is clear')
                            };