import fs from "fs"
import path from "path"
import Discord from "discord.js"

/**
 * @description Loads a directory of files and returns an collection of the files code contents
 * @template T
 * @param  {string} dir The directory to load
 * @param  {function(value:T): T} [process] The function to process each file
 * @param  {Discord.Collection<string, T>} [baseCollection] The base collection to add the files to
 * @returns {Promise<Discord.Collection<string, T>>} The collection of files
 * This is a generic loadDir, the one in main bot supercedes it
 * For main bot use, use the one in main bot
 * @async
 */
export async function loadDir<T>(
    dir: string,
    process?: (value: T) => T,
    baseCollection?: Discord.Collection<string, T>
): Promise<Discord.Collection<string, T>> {
    const result = baseCollection || new Discord.Collection<string, T>()
    const files = await fs.promises.readdir(dir)
    for (const file of files) {
        const name = file.replace(/.js|.ts$/, "")
        const filepath = path.join(dir, file)
        let value: T = (await import(filepath)).default
        if (process) value = process(value)
        else result.set(name, value)
    }

    return result
}
