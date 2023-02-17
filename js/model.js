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

// const stars = 5;
// let price;

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

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('No')
// }

// console.log(price)


// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch =  isValidPassword === 'jqueryismyjam';

//   // Change code above this line
//   return isMatch;
// }

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   let totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = `Insufficient funds!`;
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//   }
//   // Change code above this line
//   return message;
// }


// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic.length - 1;


// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//     if (message.length < maxLength) {
//         result = message;
//     } else {
//         result = "okio"
//     }
//   /// Change code above this line
//   return result;
// }

// formatMessage("Curabitur ligula sapien", 16);
// formatMessage("Curabitur ligula sapien", 23);
// formatMessage("Vestibulum facilisis purus nec", 20);
// formatMessage("Vestibulum facilisis purus nec", 30);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);


// const message = "Amazing SalE, only tonight!";
// const messagelower = message.toLowerCase();
// let result;

// if (messagelower.includes('sale')) {
//     result = true;
// } else if (messagelower.includes('spam')) {
//     result = true;
// } else {
//     result = false;
// }

// console.log(messagelower)
// console.log(result)

// console.log("two" && 0)

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i)
//   }

//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3))
// console.log(createArrayOfNumbers(14, 17))
// console.log(createArrayOfNumbers(29, 34))

// function filterArray(numbers, value) {
// const arr = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i])
//     if (value < numbers[i]) {
//       arr.push(numbers[i])
//     }
//   }

//   return arr;

// }


// console.log(filterArray([1, 2, 3, 4, 5], 3))
// console.log(filterArray([1, 2, 3, 4, 5], 4))
// console.log(filterArray([1, 2, 3, 4, 5], 5))
// console.log(filterArray([12, 24, 8, 41, 76], 38))
// console.log(filterArray([12, 24, 8, 41, 76], 20))


// function getCommonElements(array1, array2) {
  
//   const element = []
//   for (const arr of array1) {
//     if (array2.includes(arr)) {
//       element.push(arr)
//     }
//   }


//   return element;
 
// }


// console.log(getCommonElements([1, 2, 3], [2, 4]))

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const orr of order) {
//     total += orr;
//   }

//   // Change code above this line
//   return total;
// }


// console.log(calculateTotalPrice([12, 85, 37, 4]))

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([12, 24, 8, 41, 76], 20))

// function getEvenNumbers(start, end) {
//   const total = []

//   for (let i = start; i <= end; i += 1) {
//     // console.log(i)
//     if (i % 2 === 0) {
//       total.push(i);
//     }
//   }

//   return total;

  
// }

// console.log(getEvenNumbers(6, 12))

// function includes(array, value) {
  
//   let message = false;

//   for (const arr of array) {
//     if (arr === value) {
//       message = true;
//     }

//   }

//   return message;
// }

// console.log(includes([1, 2, 3, 4, 5], 9))
