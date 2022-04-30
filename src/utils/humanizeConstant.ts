/**
 * @description Make a constant human readable
 * @param  {string} name The constant to humainize
 * @param  {string} [uppercaseExceptions] Optional, a list of words to uppercase as is
 * @param  {string} [lowercaseExceptions] Optional, a list of words to lowercase as is
 * @returns {string} The humainized constant
 */
export function humanizeConstant(
    name: string,
    uppercaseExceptions: string[] = [],
    lowercaseExceptions: string[] = []
): string {
    return name
        .split("_")
        .map(word => {
            if (uppercaseExceptions.includes(word)) return word.toUpperCase()
            if (lowercaseExceptions.includes(word)) return word.toLowerCase()
            return word[0].toUpperCase() + word.slice(1).toLowerCase()
        })
        .join(" ")
}
