/**
 * Create format CSV based in Array of Array
 * 
 * @function arrayToCSV
 * @param {Array<Array>} array - Array of Array with values
 * @param {String} delimiter - Delimiter separator
 * 
 * @example <caption>Example usage of arrayToCSV</caption>
 * const records = [[1, 2, 3], [4, 5, 6]]
 * arrayToCSV(records) // "1", "2", "3" \n "4", "5", "6" \n
 * arrayToCSV(records, ';') // "1"; "2"; "3" \n "4"; "5"; "6" \n
 */
function arrayToCSV (array, delimiter = ',') {
    return array
            .map(row => row
                .map(col => `"${col}"`)
                .join(delimiter)
            )
            .join('\n');
}
