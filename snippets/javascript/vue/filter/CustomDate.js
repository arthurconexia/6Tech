import Vue from 'vue'
import moment from 'moment'

/**
 * Custom filter for dates using moment
 * 
 * @function customDate
 * @param {Date|string} date - Date
 * @param {String} format - Formate
 * 
 * @example  <caption>Example usage of customDate with filter</caption>
 * Vue.filter('customDate', customDate)
 * Vue.component('show-date', {
 *     data: function () {
 *         return {
 *             now: new Date(1996, 04, 24)
 *         }
 *     },
 *     template: "<p>{{ now | customDate('LL') }}</p>"
 * })
 * <show-date></show-date>
 * // <p>May 24, 1996</p>
 */
module.exports = function customDate (date, format = '') {
  if (!date) return ''
  return moment(date).format(format)
}
