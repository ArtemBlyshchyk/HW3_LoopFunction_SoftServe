// TASK #1==================================================
// Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
// приклад:
// const arr = [5, 3, 4, 5,6,7,3];
// const arr2 = compact(arr);
// console.log(arr2) ; // [5,3,4,6,7]

// // SOLUTION
// function compact(arr) {
//   let uniqueElems = [...new Set(arr)];
//   return uniqueElems;
// }
// const arr = [5, 3, 4, 5, 6, 7, 3];
// const arr2 = compact(arr);
// console.log(arr2); // [5,3,4,6,7]

// // Second Variant of Solution
// function compact(arr) {
//   let uniqueElems = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!uniqueElems.includes(arr[i])) {
//       uniqueElems.push(arr[i]);
//     }
//   }
//   return uniqueElems;
// }
// const arr = [5, 3, 4, 5, 6, 7, 3];
// const arr2 = compact(arr);
// console.log(arr2); // [5,3,4,6,7]

// TASK #2==================================================
// Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
// початкове значення
// кінцеве значення
// а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]

//SOLUTION

// function createArray(start, end) {
//   let array = [];
//   for (let i = start; i <= end; i++) {
//     array.push(i);
//   }
//   return array;
// }
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]

//SECOND VARIANT

// function createArray(start, end) {
//   return Array.from({ length: end - start + 1 }, (_, i) => start + i); //Array.from({ length: 5 }, (v, k) => k); // [0, 1, 2, 3, 4]
// }

// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]

//TASK #3 ==================================================
// Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.

// SOLUTION***************************************************

// let a = +prompt("Введіть ціле число a");
// let b = +prompt("Введіть ціле число b");
// function integarNumbers(a, b) {
//   if (!Number.isInteger(a) || !Number.isInteger(b)) {
//     return console.log("Введіть ціле число!");
//   }
//   if (a >= b) {
//     return console.log("Число b повинно бути більшим за число a!");
//   }
//   for (let i = a; i <= b; i++) {
//     for (let j = a; j <= i; j++) {
//       console.log(i);
//     }
//   }
// }
// integarNumbers(a, b);

// TASK #4  ==================================================
// Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
// randArray(5);  // [399,310,232,379,40]

// SOLUTION***************************************************
// function randArray(k) {
//   let arr = [];
//   for (let i = 0; i < k; i++) {
//     let elem = Math.floor(Math.random() * 500) + 1; // визначаємо діапазон до 500
//     arr.push(elem);
//   }
//   return arr;
// }
// console.log(randArray(5));

// TASK #5 ==================================================
// Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
// Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
// let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
// let arrNew = funcName(arr);
// [5, 12, 99, 2, 2, 4, 3],
// [”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”]

// SOLUTION***************************************************
// const initialArray = [
//   5,
//   "Limit",
//   12,
//   "a",
//   "3",
//   99,
//   2,
//   [2, 4, 3, "33", "a", "text"],
//   "strong",
//   "broun",
// ];
// function funcName(arr) {
//   const numElems = [];
//   const strElems = [];

//   const generalArray = arr.flat();

//   for (let i = 0; i < generalArray.length; i++) {
//     const elem = generalArray[i];
//     if (typeof elem === "number") {
//       numElems.push(elem);
//     } else {
//       strElems.push(elem);
//     }
//   }
//   console.log(numElems);
//   console.log(strElems);
// }
// const separeteArrs = funcName(initialArray);

//BAD VERSION
// function funcName(arr) {
//   const separeteArrs = {};

//   for (let i = 0; i < arr.length; i++) {
//     const currentItem = arr[i];
//     const type = typeof currentItem;

//     if (Array.isArray(currentItem)) {
//       // Обробка вкладених масивів
//       const insideArrs = funcName(currentItem);
//       for (const key in insideArrs) {
//         if (insideArrs.hasOwnProperty(key)) {
//           if (!separeteArrs[key]) {
//             separeteArrs[key] = [];
//           }
//           separeteArrs[key] = separeteArrs[key].concat(insideArrs[key]);
//         }
//       }
//     } else {
//       // Додавання елементу до відповідного масиву за типом
//       if (!separeteArrs[type]) {
//         separeteArrs[type] = [];
//       }
//       separeteArrs[type].push(currentItem);
//     }
//   }
//   return separeteArrs;
// }
// let initialArray = [
//   5,
//   "Limit",
//   12,
//   "a",
//   "3",
//   99,
//   2,
//   [2, 4, 3, "33", "a", "text"],
//   "strong",
//   "broun",
// ];
// const separByTypeArrs = funcName(initialArray);
// console.log(separByTypeArrs);

// TASK #6 ==================================================
// Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
// В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі” В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку” В діапазоні годин 11-17 – має виводитися привітання “Доброго дня” В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.

// SOLUTION***************************************************
// const currentDate = new Date();
// const currentHour = currentDate.getHours();

// if (currentHour >= 23 && currentHour < 5) {
//   console.log("Доброї ночі");
// } else if (currentHour >= 5 && currentHour < 11) {
//   console.log("Доброго ранку");
// } else if (currentHour >= 11 && currentHour < 17) {
//   console.log("Доброго дня");
// } else {
//   console.log("Доброго вечора");
// }

//SECOND VARIANT
// const currentDate = new Date();
// const currentHour = currentDate.getHours();

// switch (true) {
//   case currentHour >= 23 && currentHour < 5:
//     console.log("Доброї ночі");
//     break;
//   case currentHour >= 5 && currentHour < 11:
//     onsole.log("Доброго ранку");
//     break;
//   case currentHour >= 11 && currentHour < 17:
//     console.log("Доброго дня");
//     break;
//   default:
//     console.log("Доброго вечора");
//     break;
// }
