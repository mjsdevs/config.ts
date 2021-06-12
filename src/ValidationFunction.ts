import { Result } from "./Result";

export type ValidationFunction<Environment extends Object> = 
	(env: NodeJS.ProcessEnv, args?: unknown[]) => Result<Environment>; 