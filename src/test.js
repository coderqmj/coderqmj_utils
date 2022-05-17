// function isNull(value) {
//   const type = Object.prototype.toString.call(value);
//   return (
//     type === '[object Null]' ||
//     type === '[object Undefined]' ||
//     value === '' ||
//     JSON.stringify(value) === '{}'
//   );
// }

// let info = {
//   name: '',
//   age: undefined,
//   book: {},
//   phone: null,
//   name1: 'qmj',
//   obj1: {
//     name2: '',
//     age: undefined,
//     name3: 'jjj',
//   },
// };
// function isObject(obj) {
//   const valueType = typeof obj;
//   return obj !== null && valueType === 'object';
// }
// function deleteNullValue(obj) {
//   let newObj = {};
//   for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//       if (!isNull(obj[key])) {
//         if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
//           newObj[key] = deleteNullValue(obj[key]);
//         } else {
//           newObj[key] = obj[key];
//         }
//       }
//     }
//   }
//   return newObj;
// }
// console.log(deleteNullValue(info));
