/**
 * @description Quote a text in markdown
 * @param  {string} text The text to quote
 * @returns {string} The quoted text
 */
export function quote(text: string): string {
    return text
        .split("\n")
        .map(line => `> ${line}`)
        .join("\n")
}
