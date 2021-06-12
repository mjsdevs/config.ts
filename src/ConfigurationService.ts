export class ConfigurationService<Environment extends Object> {
  constructor(private readonly variables: Environment) { }

  /**
   * Returns the value of some desired variable.
   * An optional type paramenter T can be passed to
   * convert the variable value (default: string).
   *  
   * @param key name of the variable
   * @returns Value of the variable
   */
  public get<T = string>(key: keyof Environment) {
    return <T><unknown>this.variables[key];
  }
}