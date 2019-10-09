/** 
 * Throws an error saying that parameterName is required for the execution.
 * 
 * @function isRequired
 * @param {string} parameterName - The name of the parameter or variable.
 * @throws Will throw an error requiring the parameterName.
 * 
 * @example <caption>Example usage of isRequired</caption>
 * function sayHi(name = isRequired('name')) {
 *   console.log(name + ' says hi.')
 * }
 * // sayHi('World') prints 'World says hi.'
 * // sayHi() throws an error '"name" is required.'
 */
module.exports = function isRequired (parameterName) {
    throw new Error('"' + parameterName + '" is required.')
}
