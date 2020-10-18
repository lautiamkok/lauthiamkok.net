'use strict'

async function example1 () {
  return 'example 1'
}

async function example2 () {
  return 'example 2'
}

export { example1, example2 }
// or:
// module.exports = { example1, example2 }

// Or:
// https://stackoverflow.com/questions/45781063/nodejs-how-group-and-export-multiple-functions-in-a-separate-file
// export const example1 = async () => {
//    return 'example 1'
// }

// export const example2 = async () => {
//    return 'example 2'
// }

// Or:
// export default {
//   async example1 () {
//     return 'example 1'
//   },
//   async example2 () {
//     return 'example 2'
//   }
// }

// https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
// https://hackernoon.com/import-export-default-require-commandjs-javascript-nodejs-es6-vs-cheatsheet-different-tutorial-example-5a321738b50f
// https://stackoverflow.com/questions/50554170/require-not-working-if-not-using-destructuring-assignment
