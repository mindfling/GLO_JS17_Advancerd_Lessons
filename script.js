'use strict'; 
/** 
 *  Lesson 02
 *  Advanced
 */

 
let num = 266219;
console.log('It is given a number:', num);

num = num.toString().split('');


let result = 1;
for (let i in num) {
    result *= +num[i];
}
console.log('the product of all digits is', result); 


result **= 3;


console.log(result.toString().substring(0, 2));
