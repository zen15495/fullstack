let valuer1 = ['Apple',  1, false];
let valuer2 = ['Fries', 2, true, 'Apple'];
let valuer3 = ['Mars', 9, 'Apple'];

let result = []
for (let i = 0; i < valuer1.length; i++) {
    if (valuer2.includes(valuer1[i]) && valuer3.includes(valuer1[i])) {
        result.push(valuer1[i]);
    }
}
console.log(result);


