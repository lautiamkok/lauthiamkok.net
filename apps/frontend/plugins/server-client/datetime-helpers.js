'use strict'

import moment from 'moment'

// // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout
// export default {
//   methods: {
//    /**
//      * Using vanilla JavaScript.
//      * Example output: Sunday, 03 November 2019, 05:44:43 AM
//      * @param  {number} timestamp
//      * @return {string}
//      */
//     toLocaleDateTime (timestamp) {
//       if (!timestamp) {
//         return
//       }
//       // Convert timestamp to human datetime.
//       // British English uses day-month-year order and 24-hour time without AM/PM
//       // Example output: Tuesday, September 13, 2016, 4:38:41 PM

//       // parses a string and returns an integer.
//       var date = new Date(parseInt(timestamp))

//       // request a weekday along with a long date
//       var options = {
//           weekday: 'long',
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric',
//           hour: 'numeric',
//           minute: 'numeric',
//           second: 'numeric'
//       }
//       options.timeZone = 'UTC'

//       // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
//       // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
//       return date.toLocaleDateString('en-GB', options)
//     },

//     /**
//      * Using Moment.js - https://momentjs.com/
//      * Example output: Sunday, 03 November 2019, 05:44:43 AM
//      * @param  {number} timestamp
//      * @return {string}
//      */
//     toUtcDateTime (timestamp) {
//       if (!timestamp) {
//         return
//       }

//       if (timestamp === 'never') {
//         return timestamp
//       }

//       // https://momentjs.com/docs/#/displaying/as-string/
//       // https://momentjs.com/docs/#/displaying/format/
//       return moment
//         .utc(timestamp)
//         .local()
//         .format('dddd, DD MMMM YYYY, HH:mm:ss A')
//         .toString()
//     }
//   }
// }

const toUtcDateTime = (timestamp, format = 'DD MMMM YYYY, HH:mm A, dddd') => {
  if (!timestamp) {
    return
  }

  // https://momentjs.com/docs/#/displaying/as-string/
  // https://momentjs.com/docs/#/displaying/format/
  return moment
    .utc(parseInt(timestamp, 10))
    // .local() // don't covert to a local time.
    .format(format)
    .toString()
}

export default (ctx, inject) => {
  ctx.$toUtcDateTime = toUtcDateTime
  inject('toUtcDateTime', toUtcDateTime)
}
