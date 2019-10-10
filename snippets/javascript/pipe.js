/**
 * Execute multiple functions in sequence
 * The pipe operator passes the result of an expression as the first parameter of another expression
 * 
 * @function pipe
 * @param {...Function} functions - Functions for called
 * 
 * @example <caption>Example usage of pipe</caption>
 * const sumPI = x => ({ result: x + 3.14 })
 * const sumTwo = ({ result }) => result + 2
 * pipe(sumPI, sumTwo)(2) // 7.14
 */
module.exports = pipe;

function pipe (...functions) {
    return functions
        .reduce((prevFn, nextFn) => 
            initialValue => 
                nextFn(prevFn(initialValue)))
}
