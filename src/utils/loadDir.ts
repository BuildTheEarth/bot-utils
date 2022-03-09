import fs from "fs"
import path from "path"
import Discord from "discord.js"

//This is a generic loadDir, the one in main bot supercedes it
//HELLO IF YOU WERE WONDERING WHY ISDEV DOSENT WORK USE THE ONLE IN MAIN BOT
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
