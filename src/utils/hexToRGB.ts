import _ from "lodash"
/**
 * @description Converts a hex color to rgb
 * @param  {string} hexCode the hex code to convert
 * @returns {number[]} The RGB values of the hex code, lenght 3
 */
export function hexToRGB(hexCode: string): readonly [number, number, number] {
    let R: string | number, G: string | number, B: string | number

    hexCode = _.trimStart(hexCode, "#")

    R = hexCode.charAt(0) + "" + hexCode.charAt(1)
    G = hexCode.charAt(2) + "" + hexCode.charAt(3)
    B = hexCode.charAt(4) + "" + hexCode.charAt(5)

    R = parseInt(R, 16)
    G = parseInt(G, 16)
    B = parseInt(B, 16)
    return [R, G, B]
}
