import { config, DotenvConfigOptions } from "dotenv";
import { join } from "path/posix";
import { ConfigurationService } from "./ConfigurationService";
import { ValidationFunction } from "./ValidationFunction";

type CreationParams<Environment> = {
	options: DotenvConfigOptions,
	validation: {
		handler: ValidationFunction<Environment>,
		args?: unknown[],
	}
};

export class ConfigurationServiceFactory<Environment> {
	create(params: CreationParams<Environment>) {
		config({
			path: join(process.cwd(), '.env'),
			...params.options,
		});

		const validation = params
			.validation
			.handler(process.env, params.validation.args);

		if (validation.isFailure) {
			console.log(validation._error);
		}

		return new ConfigurationService<Environment>(validation.value());
	}
}