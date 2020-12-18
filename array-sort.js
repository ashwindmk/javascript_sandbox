'use strict';

var arr = [
    {name: 'Alice', age: 23},
    {name: 'Bob', age: 22},
    {name: 'Clara', age: 21},
    {name: 'Daniel', age: 23}
];

function sortBy(key) {
    return (o1, o2) => {
        return o1[key] - o2[key];
    };
}

arr.sort(sortBy('age'));

console.log(arr);
