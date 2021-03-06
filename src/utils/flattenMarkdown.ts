import Discord from "discord.js"
/**
 * @param  {string} string The string to flatten markdown
 * @param  {Discord.Guild} guild The Discord guild to fetch property managers from
 * @returns {Promise<string>} The flattened markdown string
 * @async
 */
export async function flattenMarkdown(
    string: string,
    guild: Discord.Guild
): Promise<string> {
    return string.replace(/(^|[^\\])<(@|@!|@&|#)(\d{18})>/g, replacer.bind(null, guild))
}

function replacer(
    guild: Discord.Guild,
    _match: string,
    char: string,
    mode: "@" | "@!" | "@&" | "#",
    id: string
): string {
    let name: string
    let manager: Discord.UserManager | Discord.RoleManager | Discord.GuildChannelManager
    switch (mode) {
        case "@":
        case "@!":
            name = "user"
            manager = guild.client.users
            break
        case "@&":
            name = "role"
            manager = guild.roles
            break
        case "#":
            name = "channel"
            manager = guild.channels
            break
    }

    const object = manager.cache.get(id)
    const token = mode === "#" ? "#" : "@"
    if (object) {
        const display = object instanceof Discord.User ? object.tag : object.name
        return `${char}${token}${display}`
    } else {
        return `${char}${token}deleted-${name}`
    }
}
