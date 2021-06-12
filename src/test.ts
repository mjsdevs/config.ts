import { Result, ConfigurationServiceFactory, ValidationFunction } from './index'

class Env {
  constructor(
    public NODE_ENV: string,
    public PORT: number
  ) { }
}

const handler: ValidationFunction<Env> = (env: NodeJS.ProcessEnv) => {
  if (env['NODE_ENV'] && env['PORT']) {
    return Result.ok(new Env(env['NODE_ENV'], Number(env['PORT'])));
  }

  return Result.fail<Env>('Erro na validação de alguma variavel. Verifique o .env');
}

const factory = new ConfigurationServiceFactory<Env>();
const service = factory.create({
  validation: {
    handler,
  },
  options: {}
});

const env = service.get('NODE_ENV');
console.log(env);