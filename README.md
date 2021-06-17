# config.ts
Config.ts is a generic configuration service that uses dotenv and typescript to improve the experience when using environment variables.

# Install
```
// with NPM
npm install @mjsdevs/config.ts


// with yarn
yarn add @mjsdevs/config.ts
```

# Usage
```typescript
import {
  Result,
  ConfigurationServiceFactory,
} from '@mjsdevs/config.ts'

// create an interface/class with the desired environment variables
interface EnvDefinition {
  NODE_ENV: string;
}

// get a factory for configuration service
const factory = new ConfigurationServiceFactory<EnvDefinition>();

// use the factory to create a new ConfigurationService instance.
// you need to implement the handler to return a success or failing Result
const service = factory.create({
  validation:{
    handler: (env) => Result.ok(env),
  },
  options: {}
});

// user the service to get environment variables
const env = service.get('NODE_ENV'); // development
```

# Changelog
// WIP

# Contributing
// WIP
