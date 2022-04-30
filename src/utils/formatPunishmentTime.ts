import ms from "ms"
/**
 * @description Formats a punishment time to a human readable format
 * @param  {number} length the length of the punishment
 * @param  {boolean} [bare] false by default, whether to return the time in a bare format (without suffix)
 * @returns {string} The formatted punishment time
 */
export function formatPunishmentTime(length: number, bare: boolean = false): string {
    if (bare) {
        if (!length) return "**Permanent**"
        else return ms(length, { long: true })
    } else {
        if (!length) return "**permanently**"
        else return `for ${ms(length, { long: true })}`
    }
}
