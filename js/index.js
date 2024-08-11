// Destructuring assignment ga oid vazifa
// #### **1. Array Destructuring:**

// 1 - masala

// const info = ["Ali", 30, "Toshkent"];
// let [name, age, city] = info;
// console.log(name,age,city);

// 2 - masala

// const colors = ["red", "green", "blue", "yellow", "purple"];
// let [a, b, ...res] = colors;
// console.log(res);

// 3 - masala

// const result = [10, 20, 30, 40];
// let [a, , , b] = result;
// console.log(a, b);
// Uzur domla funksiyada ishlatishni bilmadim, xatolik bervoryabdi

// 4 - masala

// const numbers = [1, 2, 3, 4, 5, 6];
// let [,a = 2,,,b = 5] = numbers;
// console.log(a,b);

// #### **2. Object Destructuring:**

// 1 - masala

// const book = {
//   title: "JavaScript for Beginners",
//   author: "John Doe",
//   year: 2021,
// };
// const { title, author } = book;
// console.log(title, author);

// 3 - masala

// const person = {
//     firstName: "Ali",
//     lastName: "Valiyev",
// };
// const {firstName: username, lastName: fullname} = person;
// console.log(username,fullname);

// 4 - masala

// const settings = {
//   theme: "dark",
//   language: "uz",
// };
// const {mode = "Model", fontSize = 20} = settings;
// console.log(mode,fontSize);

// Masalalar. ESLATMA masalalarni har uch turdagi funksiyalar yordamida ishlansin. Jami 30 ta funksiya yuklanadi

// 1 - masala

// function toqSonYigindi(arg) {
//     let sum = 0;
//     for (const iterator of arg) {
//         if (iterator % 2 == 1) {
//             sum += iterator
//         }
//     }
//     return sum;
// }
// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(toqSonYigindi(arr));

// 2 - masala

// const minElement = function(arg) {
//     let min = arr[0];
//     for (const iterator of arg) {
//         if (iterator < min) {
//             min = iterator;
//         }
//     }
//     return min;
// }
// let arr = [34,12,45,21,56,13];
// console.log(minElement(arr));

// 3 - masala

// const raqamAjrat = (arg) => {
//     for (const iterator of arg) {
//         if (iterator > 0) {
//             newArr.push(iterator);
//         }
//     }
//     return newArr;
// }
// let matn = "sa2lom1";
// let newArr = [];
// console.log(raqamAjrat(matn));

// 4 - masala

// function kvadratQaytar(numbers) {
//     let newArr = [];
//     for (let i = 0; i < numbers.length; i++) {
//         newArr.push(numbers[i] * numbers[i]);
//     }
//     return newArr;
// }
// let numbers = [1,2,3,4,5];
// let kvadrat = kvadratQaytar(numbers);
// console.log(kvadrat);

// 5 - masala

// const reverseStr = function(str) {
//     let res = str.split('').reverse().join('');
//     return res;
// }
// console.log(reverseStr("salom bolalar"));

// 6 - masala

// const countSymbolStr = (str) => {
//     let res = str.split('').length;
//     return res;
// }
// console.log(countSymbolStr("salom"));

// 7 - masala

// function kubQaytar(numbers) {
//     let newArr = [];
//     for (let i = 0; i < numbers.length; i++) {
//         newArr.push(numbers[i] * numbers[i] * numbers[i]);
//     }
//     return newArr;
// }
// let numbers = [1,2,3,4,5];
// let kub = kubQaytar(numbers);
// console.log(kub);

// 8 - masala

// const unliReverse = (str) => {
//   let res = [];
//   for (const i of str) {
//     switch (i) {
//       case "a":
//       case "o":
//       case "i":
//       case "e":
//       case "u":
//       case "A":
//       case "O":
//       case "I":
//       case "E":
//       case "U":
//         res.push(i.split('').reverse().join(''));
//         break;
//       default:
//         break;
//     }
//   }
//   return res;
// };
// console.log(unliReverse("salom bolalar"));

// 10 - masala

// function matnOchir(str) {
//     let res = str.replaceAll(5, '');
//     return res;
// }
// let test = "sa5lom";
// console.log(matnOchir(test));