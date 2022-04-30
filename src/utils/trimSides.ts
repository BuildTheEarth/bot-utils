import _ from "lodash"
/**
 * @description A lodash macro to trim the sides of a string
 * @param  {string} text The text to trim
 * @param  {string} startTrim The string to trim from the start
 * @param  {string} endTrim The string to trim from the end
 * @returns {string} The trimmed text
 */
export function trimSides(text: string, startTrim: string, endTrim: string): string {
    return _.trimStart(_.trimEnd(text, endTrim), startTrim)
}
