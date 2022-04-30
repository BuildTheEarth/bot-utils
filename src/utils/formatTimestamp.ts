/**
 * @param  {Date | number} date The date to format, can be a number in milliseconds or a Date object
 * @param  {"d" | "D" | "f" | "F" | "R" | "t" | "T"} format "f" by default, see below for more info
 * Available formats:
 * * `d` (01/01/1970)
 * * `D` (January 1, 1970)
 * * `f` (January 1, 1970 12:00 AM)
 * * `F` (Thursday, January 1, 1970 12:00 AM)
 * * `R` (51 years ago)
 * * `t` (12:00 AM)
 * * `T` (9:00:00 PM)
 */
export function formatTimestamp(
    date: Date | number,
    format: "d" | "D" | "f" | "F" | "R" | "t" | "T" = "f"
): string {
    const seconds = date instanceof Date ? Math.round(date.getTime() / 1000) : date
    return `<t:${seconds}:${format}>`
}
