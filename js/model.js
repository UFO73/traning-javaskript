// const model = 125;

// console.log(model)
// let qwontity = prompt('How many brain wi haw');
// qwontity = Number(qwontity)
// console.log(qwontity);
// console.log(typeof qwontity);

// let elementWidth = '50.44px';
// const result = Number.parseInt(elementWidth)

// console.log('elementWidth', result)
// console.log(typeof result)

// let salary = 134.456789
// salary = Number(salary.toFixed(3))

// console.log(typeof salary)

// console.log(salary)

// const base = 5;
// const power = 10;

// const result = Math.pow(base, power)

// console.log(result)
// console.log(typeof result)

// console.log(base ** power )

// let base = prompt('Дай чесло');
// base = Number(base);
// console.log(base);

// let power = prompt('Дай степень');
// power = Number(power);
// console.log(power);

// const result = (base ** power);
// console.log(result)

// const min = 1;
// const max = 5000;
// const result = Math.round(Math.random() * (max - min) + min)

// console.log(result);


// let brand = prompt('Дай бренд');
// brand = brand.toLowerCase();

// console.log(brand);


// const balance = 0;
// let massage;

// if (balance > 0) {
//     massage = 'Позитивний баланц';
// } else {
//     massage = 'Негативний баланц';
// }

// console.log(massage)

const stars = 6;
let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('такої кількості зірок не існує')
// }

switch (stars) {
    case 1:
        price = 20;
        break;
    case 2:
        price = 30;
        break;
    case 3:
        price = 50;
        break;
    case 4:
        price = 70;
        break;
    case 5:
        price = 120;
        break;
    default: 
        console.log('No')
}

console.log(price)