//this is much better than the og noop used in main-bot
/**
 * @description A no-operation function
 * @param {...unknown[]} _unused This parameter is not used, it is a NO-OP function
 * @returns {null} Always returns `null`
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function noop(..._unused: unknown[]): null {
    return null
}
