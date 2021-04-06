"use strict";

const arr = [1, 2, 3, 6, 8];
arr.sort(compareNum);
console.log (arr);

function compareNum(a, b) {
    return a - b;
}

arr.forEach(function(item, i, arr) {
    console.log(`${1}: ${item} внутри массива ${arr}`);
});

// arr.pop(); // удаляет последний элемент массива
// arr.push(10); // добавляет элемент в конце массива

// console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}


// const str = prompt("", "");
// const products = str.split(", "); // формирование массива на основани строк
// console.log(products.join('; '));  // строка в массив