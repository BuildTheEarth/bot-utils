/**
 * @description Make an array human readable
 * @param  {unknown[]} array The array to humanize
 * @param  {boolean} [code] Whether to return the in code blocks, true by default
 * @param  {string} [conjunction] The conjunction to use for the final list element, "and" by default
 * @param  {string} [comma] The comma to use for the element seperation, "," by default
 * @returns {string} The humainized array
 */
export function humanizeArray(
    array: unknown[],
    code: boolean = true,
    conjunction: string = "or",
    comma: string = ", "
): string {
    array = array.map(String)
    if (code) array = array.map(value => `\`${value}\``)

    const lastJoiner = comma + conjunction + " "
    const last = array[array.length - 1]
    if (array.length === 1) return last as string
    return array.slice(0, array.length - 1).join(comma) + lastJoiner + last
}
