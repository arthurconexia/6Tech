/**
 * Execute multiple functions in sequence
 * The pipe operator passes the result of an expression as the first parameter of another expression
 * 
 * @function pipeAsync
 * @param {...Function} functions - Functions for called
 * 
 * @example <caption>Example usage of pipeAsync</caption>
 * const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
 * const sumPI = async x => {
 *     await sleep(2000)
 *     return ({ result: x + 3.14 })
 * }
 * const sumTwo = async ({ result }) => {
 *     await sleep(2000)
 *     return result + 2
 * }
 * 
 * (async () => {
 *     console.log(await pipeAsync(sumPI, sumTwo)(2)) // 7.14
 * })()
 */
module.exports = function pipeAsync (...functions) {
    return functions
        .reduce((prevFn, nextFn) => 
            async initialValue => 
                nextFn(await prevFn(initialValue)))
}
