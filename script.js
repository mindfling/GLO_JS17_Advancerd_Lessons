'use strict';
/**
 * Lesson03
 * Advanced
 */

let lang = 'ru';

const englishWeek = [ 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday', 
    'Sunday'
];

const russianWeek = [
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
    'воскресенье'
];


//a - решаем через if
if (lang === 'ru') {
    console.log(russianWeek);
} else if (lang === 'en') {
    console.log(englishWeek);
} else {
    console.log('other language');
}

