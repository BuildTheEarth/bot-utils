/**
 * @description Truncate a string to a certain length
 * @param  {string} string The string to truncate
 * @param  {number} length The length of the truncated string
 * @param  {string} [ellipsis] The ellipsis to use, "..." by default
 * @returns {string} The truncated string
 */
export function truncateString(
    string: string,
    length: number,
    ellipsis: string = "…"
): string {
    const exceeds = string.length > length
    const truncatedLength = exceeds ? length - ellipsis.length : length
    let truncated = string.slice(0, truncatedLength)
    if (exceeds) truncated += ellipsis
    return truncated
}
