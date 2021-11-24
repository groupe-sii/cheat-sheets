current version: __2.8.1__ - Date: __Jan. 2017__


# Build

Creating a build : the artifacts will be stored in the _dist/_ directory.
` npm run build`

Build targets and environment, the mapping used can be found in _angular-cli.json_ :
`npm run build --prod`

Build component without manually create a Vue instance for it:
`vue build <Component.vue>`

Watch mode (as development mode but does not add hot-reloading support):
`vue build index.js --watch`

Need help:
`vue build -h`

# Test

Running unit tests
`npm run test`

Running end-to-end tests
`npm run e2e`

# Linting code

`npm run lint`

# Help

`vue help`
