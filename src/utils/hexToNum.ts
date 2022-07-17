import _ from "lodash"
/**
 * @description Converts a hex color to base-10
 * @param  {string} hexCode the hex code to convert
 * @returns {number} The hex value in base-10
 */
export function hexToNum(hexCode: string): number {
    hexCode = "0x" + _.trimStart(hexCode, "#")

    return Number(hexCode)
}
