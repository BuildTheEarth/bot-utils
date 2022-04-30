/**
 * @description The enum for the environment, the valid values are TESTING, PRODUCTION, and PRODUCTION_DOCKER
 */
export enum CurrEnvValues {
    TESTING = "Testing",
    PRODUCTION = "Production",
    PRODUCTION_DOCKER = "Docker 🐳"
}

/**
 * @description Returns the current environment.
 * @returns {CurrEnvValues} The current environment.
 */
export function currentEnv(): CurrEnvValues {
    if (process.env.IN_DOCKER === "yes") return CurrEnvValues.PRODUCTION_DOCKER
    if (process.env.NODE_ENV === "production") return CurrEnvValues.PRODUCTION_DOCKER
    return CurrEnvValues.TESTING
}
