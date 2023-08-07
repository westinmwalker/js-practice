// #1

// function sum(numbers) {
//   var result = 0;
//   var index = 0;
//   while (index < numbers.length) {
//     result += numbers[index];
//     index += 1;
//   }
//   return result;
// }
// console.log(sum([1, 2, 3]));

// const calculateSum = (array) => {
//   return array.reduce((total, current) => {
//     return total + current;
//   }, 0);
// };
// console.log(calculateSum([1, 2, 3, 4, 5]));

// #2

// const arr = ["Hi", "Hey", "Hello"];
// const findShortest = (arr) => {
//   const creds = arr.reduce(
//     (acc, val, index) => {
//       let { ind, len } = acc;
//       if (val.length < len) {
//         len = val.length;
//         ind = index;
//       }
//       return { ind, len };
//     },
//     {
//       ind: -1,
//       len: Infinity,
//     }
//   );
//   return arr[creds["ind"]];
// };
// console.log(findShortest(arr));

// #3

// const reverseNumbers = (array) => {
//   return array.reverse();
// };
// console.log(reverseNumbers([1, 2, 3, 4, 5]));
