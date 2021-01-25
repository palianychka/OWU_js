// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let numbersArray = [9, 8, 7, 6, 5];
// let stringsArray = ['name', 'kokos', 'dobby', 'Nightwish','Lapa'];
// let mixArray = [true, 'Sierj', 23, 'empty', 32];
// let emptyArray = [];
// emptyArray[0] = 'Vasia';
// emptyArray[1] = 'Pietia';
// emptyArray[2] = 'Mila';
// emptyArray[3] = 'Yola';
// emptyArray[4] = 'Kola';
//
// console.log(numbersArray);
// console.log('________________________________________');
// console.log(stringsArray);
// console.log('________________________________________');
// console.log(mixArray);
// console.log('________________________________________');
// console.log(emptyArray);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// let div = `<div>Lorem ipsum dolor sit amet</div>`;
// for (let i = 1; i <= 10; i++) {
//     document.write(i);
//     document.write(div);
//     document.write('<br>');
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// let string = `<div>avadakedabra</div>`;
// for (let i = 1; i < 11; i++) {
//     document.write(i);
//     document.write(string);
//     document.write('______________________');
//     document.write('<br>');
//
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let div = '<div><h1>avadakadabra</h1></div>';
// let i = 1;
// while (i < 21) {
//     document.write(i);
//     document.write(div);
//     document.write('____________________');
//     document.write('<br>');
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let div = '<div><h3>bober zla tvaryna</h3></div>';
// let i = 1;
// while (i <= 20) {
//     document.write(i);
//     document.write(div);
//     document.write('----------------------------');
//     document.write('<br>');
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numArray = [23, 3, 56, 32, 9, 4,86, 90, 0];
// for (let value of numArray) {
//     document.write(value);
//     document.write('<br>')
// }
// document.write('____________________________');
// document.write('<br>')
//
// for (let i = 0; i < numArray.length; i++) {
//     document.write(numArray[i]);
//     document.write('<br>')
// }
// document.write('____________________________');
// document.write('<br>')
//
// let i = 0;
// while (i < numArray.length) {
//     document.write(numArray[i]);
//     document.write('<br>');
//     i++
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let stringsArray = [
//     'kokos',
//     'morkovka',
//     'ridiska',
//     'baranchik shon',
//     'barbara strange',
//     'knopik',
//     'fiksik',
//     'bobik',
//     'moska',
//     'slon'];
// for (let i = 0; i < stringsArray.length; i++) {
//     console.log(stringsArray[i]);
// }
// console.log('______________________');
// for (let i of stringsArray) {
//     console.log(i)
// }
// console.log('______________________');
// let i = 0;
// while (i < stringsArray.length) {
//     console.log(stringsArray[i]);
//     i++
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = [2, 'kokos', true, 3, 'bro', 98, 34, false, 90, 'baba'];
// for (let i of arr) {
//     console.log(i);
// }
// console.log('_____________');
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i])
//     i++
// }
// console.log('_____________');
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// булеві елементи
// let arr = [2, 'kokos', true, 3, 'bro', 98, 34, false, 90, 'baba'];
// for (let i of arr) {
//     if (typeof i === "boolean") {
//         console.log(i)
//     }
// }
// console.log('--------------')
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "boolean") {
//         console.log(arr[i])
//     }
// }
// console.log('--------------')
// let i = 0;
// while (i < arr.length) {
//         if (typeof arr[i] === "boolean") {
//         console.log(arr[i])
//     }
//     i++
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// числові елементи
// let arr = [2, 'kokos', true, 3, 'bro', 98, 34, false, 90, 'baba'];
// let i = 0;
// while (i < arr.length) {
//     if (typeof arr[i] === "number") {
//         console.log(arr[i])
//     }
//     i++
// }
// console.log('______________')
// for (let i of arr) {
//     if (typeof i === "number") {
//         console.log(i)
//     }
// }
// console.log('______________')
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//         console.log(arr[i])
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки
// рядкові елементи
// let arr = [2, 'kokos', true, 3, 'bro', 98, 34, false, 90, 'baba', false, true];
// let i = 0;
// while (i < arr.length) {
//     if (typeof arr[i] === "string") {
//         console.log(arr[i]);
//     }
//     i++
// }
// console.log('__________');
// for (let string of arr) {
//     if (typeof string === "string") {
//         console.log(string)
//     }
// }
// console.log('__________');
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//         console.log(arr[i])
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// let emptyArr = [];
// emptyArr[0] = ('elf');
// emptyArr[1] = (true);
// emptyArr[2] = (44);
// emptyArr[3] = ('dwarf');
// emptyArr[4] = (55);
// emptyArr[5] = (false);
// emptyArr[6] =('dart weider');
// emptyArr[7] =(false);
// emptyArr[8] =(99);
// emptyArr[9] =(10);
// for (let i of emptyArr) {
//     console.log(i)
// }
// console.log('______________')
// let i = 0;
// while (i < emptyArr.length) {
//     console.log(emptyArr[i]);
//     i++
// }
// console.log('______________')
// for (let i = 0; i < emptyArr.length; i++) {
//     console.log(emptyArr[i])
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та
// document.write
// for (let i = 1; i < 11; i++) {
//     console.log(i);
//     document.write(i)
//     document.write('<br>')
// }
// document.write('____________')
// console.log('_____________')
// document.write('<br>');
//
// let i = 1;
// while (i < 11) {
//     console.log(i);
//     document.write(i);
//     document.write('<br>');
//     i++
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та
// document.write
// for (let i = 1; i < 101; i++) {
//     console.log(i);
//     document.write(i);
//     document.write('<br>')
// }
// let i = 1;
// while (i < 101) {
//     console.log(i);
//     document.write(i);
//    document.write('<br>');
//     i++
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та
// for (let i = 0; i < 101; i+= 2) {
//     console.log(i)
// }
// let i = 2;
// while (i <= 100) {
//     console.log(i);
//     i+= 2
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
//     document.write(i);
//     document.write('<br>')
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// let i = 0;
// while (i <=100) {
//     console.log(i);
//     document.write(i);
//     document.write('<br>');
//     i+= 2
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i < 100; i+= 2) {
//     console.log(i)
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//
// for (let min = 0; min <= 2; min++) {
//     for (let sec = 0; sec < 60; sec++) {
//         console.log(`${min} : ${sec}`);
//         if (min === 2 && sec === 0)
//             break
//     }
// }

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// Додатково
// for (let hour = 0; hour < 3; hour++) {
//     for (let min = 0; min < 60; min++){
//         for (let sec = 0; sec < 60; sec++) {
//             console.log(`${hour} : ${min} : ${sec}`)
//             if (hour === 2 && min === 20 && sec === 0) break
//
//         }
//         if (hour === 2 && min === 20) break
//     }
// }

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let abc = [ 'a', 'b', 'c'];
// for (let i = 0; i < abc.length; i++) {
//     document.write(abc[i])
// }

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let abc = [ 'a', 'b', 'c'];
// let i = 0;
// while (i < abc.length) {
//     document.write(abc[i]);
//     i++
// }

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let abc = [ 'a', 'b', 'c'];
// for (let i of abc) {
//     document.write(i)
// }
//
// =================
// =================
// =================
// =================
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let abc = [ 'a', 'b', 'c'];
// abc.push(1);
// abc.push(2);
// abc.push(3);
// for (let i = 0; i < abc.length; i++) {
//     console.log(abc[i])
// }

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let abc = [ 1, 2, 3];
// abc[0] = 3;
// abc[2] = 1;
// for (let i of abc) {
//     console.log(i)
// }

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let numberArray = [1, 2, 3];
// numberArray.push(4);
// numberArray.push(5);
// numberArray.push(6);
// console.log(numberArray)

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let numArr = [1, 2, 3];
// numArr.unshift(4);
// numArr.unshift(5);
// numArr.unshift(6);
// console.log(numArr)

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let arr = ['js', 'css', 'jq'];
// console.log(arr);
// let shiftElement = arr.shift();
// console.log(shiftElement)

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arr = ['js', 'css', 'jq'];
// console.log(arr);
// let popElement = arr.pop();
// console.log(popElement);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(2, 4));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(0,2))

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.splice(1, 2));
// console.log(arr);

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0,'a', 'b', 'c')
// console.log(arr)


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let numArr = [1, 2, 3, 4, 5];
// let remove = numArr.splice(1, 0,'a', 'b') + numArr.splice(6, 0, 'c') + numArr.splice(8, 0, 'e');
// console.log(numArr)

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let numArr = [34, 6, 7, 90,3,22, 54, 56, 5, 34, 77, 65];
// for (let i = 0; i < numArr.length; i++) {
//     if (numArr[i] % 2 === 0)
//         console.log(numArr[i])
// }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push ()
// скопіювати значення одного масиву в інший
// let arr = [34, 6, 7, 2, 7, 23, 57, 878, 7657, 3434, 56, 2342, 56, 765];
// let emptyArr = [];
// for (let i = 0; i < arr.length; i++) {
//     emptyArr.push(arr[i]);
// }
// console.log(emptyArr)

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати
// значення одного масиву в інший.
// let arr = [34, 6, 7, 2, 7, 23, 57, 878, 7657, 3434, 56, 2342, 56, 765];
// let emptyArr = [];
// for (let i = 0; i < arr.length; i++) {
//     emptyArr[i] = arr[i]
// }
// console.log(emptyArr);

// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i])
//     i++
// }

//     2. перебрати його циклом for
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arr.length) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i])}
//     i++
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//     }
// }


// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arr.length) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//     }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//     }
// }


// 7. замінити кожне число кратне 3 на слово "okten"
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'okten';
//     }
// }
// console.log(arr);


// 8. вивести масив в зворотньому порядку.
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// console.log('arr', arr);
// console.log('------------------------------------------------------');
// let reversed = arr.reverse();
// console.log('reversed', reversed)


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)--------------------------------------
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }
// console.log('--------------------------------------------------------');
// console.log(arr.reverse())

//     2. перебрати його циклом for
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// console.log('---------------------------')
// let reverse = arr.reverse();
// console.log(reverse)


// 10!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
// let emptyArr = [];
// for (let i =0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         emptyArr.push(i);
//     }
// }
// console.log(emptyArr)


// - заповнити його 50 непарними числами за допомоги циклу.
// let emptyArr = [];
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         emptyArr.push(i)
//     }
//
// }
// console.log(emptyArr)


//
//
// 1
// створити пустий масив та :
//     1. заповнити його 50 парними числами за допомоги циклу.
// let emptyArr = [];
// for (let i = 0; i < 100; i++) {
//        if (i % 2 === 0) {
//         emptyArr.push(i)
//     }
// }
// console.log(emptyArr)

// 2. заповнити його 50 непарними числами за допомоги циклу.
// let emptyArr = [];
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         emptyArr.push(i)
//     }
// }
// console.log(emptyArr)

// // 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
// let array = [];
// for (let i = 0; i < 10; i++) {
//     array[i] = Math.floor((Math.random() * 732 -8) + 8)
// }
// console.log(array);
//
// console.log('-------------------------------------')
//
//
//
// //     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// // 2. вывести на консоль  каждый третий елемент
// for (let i = 2; i < 10; i+=3) {
//     console.log(array[i])
// }
// console.log('-------------------------------------')
//
// // 3. вывести на консоль  каждый третий елемент
// // но при условии что его значение является парным.
// for (let i = 2; i < 10; i+=3) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i])
//     }
//
// };
// console.log('-------------------------------------')
//
//
// // 4. вывести на консоль  каждый третий елемент
// // но при условии что он имеет парное значение и
// // записать их в другой массив.
// for (let i = 2; i < 10; i+=3) {
//     if (array[i] % 2 === 0) {
//         let secArr = array[i];
//         console.log('secArr', secArr)
//     }
// }

// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// let arr = [24, 46, 574, 54, 76, 5, 76, 3, 7, 876, 43, 34, 5, 68, 77];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i+1] % 2 === 0) {
//         console.log(arr[i])
//     }
//
// }
// console.log(arr)

// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let price = [100,250,50,168,120,345,188];
// let value = 0;
// for (let i = 0; i < price.length; i++) {
//     value += price[i]/price.length
// }
//
// console.log(value);
//
// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr = [];
// let innerArr = [];
// for (let i = 0; i < 5; i++) {
//     arr.push(Math.floor(Math.random() *100 -10) + 10)
// }
//
// for (let i = 0; i < arr.length; i++) {
//     innerArr.push(arr[i]*5)
// }
// console.log(arr)
// console.log(innerArr)


// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.
let arrMix = ['kj', false, 'kjj', 2323, 'll', 45, true];
let num = [];
for (let i = 0; i < arrMix.length; i++) {
if (typeof arrMix[i] === "number") {
    num.push(arrMix[i])
}
}
console.log(num)

//
//
