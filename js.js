'use strict';
console.log(`Первая задача:`);
let arr = [1,3,7,2,9,6];
console.log(`Исходный массив: ${arr}`);
console.log(`Минимум: ${jobArray.min(arr)}`);
console.log(`Максимум: ${jobArray.max(arr)}`);
console.log(`Среднее: ${jobArray.middle(arr)}`);
let a = jobArray.clone(arr);
console.log(`Клон: ${a}`);
a = [1,2,3,4];
console.log(`Измененный клон: ${a}`);
console.log(`Исходный массив: ${arr}`);

console.log('Вторая задача');

let line = {
    x: [],
    y: [],
    type: 'scatter'
};

const x = [];
const y = [];
line.x = x;
line.y = y;

let coordinate = function (){
    let a = 0;
    let b = 0;
    for(let i = -5000; i <= 5000; i++) {
       a = i / 1000;
       if (a >= 1) {
           b = 5 / a;
       } else if ( a < 1 ) {
           b = a * a - 4 * a;
       }
       y.push(b);
       x.push(a);
    }

};
coordinate();

let data = [line];

let layout = {
    title: 'График какой-то функции',
    xaxis: {
        title: 'x',
        showgrid: false,
        zeroline: false
    },
    yaxis: {
        title: 'y = f(x)',
        showline: false
    }
};

Plotly.newPlot('myDiv', data, layout);
