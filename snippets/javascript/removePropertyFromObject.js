/** 
 * Remove a property from a object using object destructuring, returning a pure object
 * 
 * @function removePropertyFromObject
 * @param {Object} object - A regular object
 * @param {string} propertyName - The name of the property you want to remove from the given object
 * @returns {Object} Returns a pure object, with all the properties from the inital object, but the propertyName.
 * 
 * @example <caption>Example usage of removeProperty</caption>
 * removeProperty({ a: 0, b: 1 }, 'b')
 * // returns { a: 0 }
 */
module.exports = function removePropertyFromObject (object, propertyName) {
  const { [propertyName]: removed, ...response } = object
  return response
}
