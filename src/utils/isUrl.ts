import { URL } from "url"
/**
 * @description Check if a string is a valid URL
 * @param  {string} input The input to check
 * @returns {boolean} whether the input is a valid URL
 */
export function isURL(input: string): boolean {
    try {
        new URL(input)
        return true
    } catch {
        return false
    }
}
