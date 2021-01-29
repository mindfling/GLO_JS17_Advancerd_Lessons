'use strict'; 
/** 
 *  Lesson 02
 *  Advanced
 */

 
//дано число
let num = 266219;
// console.log('num: ', num, 'typeof num:', typeof num);


let numStr = num.toString();
console.log('It is given a number:', num);


//разбиваем строку по символам на массив
let arr = numStr.split('');
// console.log('arr: ', arr, 'typeof arr: ',typeof arr);


//произведение элементов массива
let product = 1;
for (let i in arr) {
    product *= +arr[i];
}
console.log('the product of all digits is', product); 


//возводим результат в степень 3
let result = product ** 3;
// console.log('product to 3 power:', result);


//выводим в консоль первые 2 цифры 
console.log(result.toString().substring(0, 2));
