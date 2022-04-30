import fs from "fs"
import JSON5 from "json5"

/**
 * @description Loads a json5 file asyncronously
 * @param  {string} filename The file to load
 * @returns {Promise<any>} The loaded file
 * @async
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function loadJSON5(filename: string): Promise<any> {
    const content = await fs.promises.readFile(filename, "utf8")
    try {
        return await JSON5.parse(content)
    } catch (err) {
        err.message = filename + ": " + err.message
        throw err
    }
}

/**
 * @description Loads a json5 file syncronously
 * @param  {string} filename The file to load
 * @returns {any} The loaded file
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function loadSyncJSON5(filename: string): any {
    const content = fs.readFileSync(filename, "utf8")
    try {
        return JSON5.parse(content)
    } catch (err) {
        err.message = filename + ": " + err.message
        throw err
    }
}
