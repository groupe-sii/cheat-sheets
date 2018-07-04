current version: __2.8.1__ - Date: __Jan. 2017__


# Build

Creating a build : the artifacts will be stored in the _dist/_ directory.
```npm
npm run build
```

Build targets and environment, the mapping used can be found in _angular-cli.json_ :
```npm
npm run build --prod
```

Build component without manually create a Vue instance for it:
```npm
vue build <Component.vue>
```

Watch mode (as development mode but does not add hot-reloading support):
```npm
vue build index.js --watch
```

Need help:
```npm
vue build -h
```

# Test

Running unit tests
```npm
npm run test
```

Running end-to-end tests
```npm
npm run e2e
```

# Linting code

```npm
npm run lint
```

# Help

```npm
vue help
```