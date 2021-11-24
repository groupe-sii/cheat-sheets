
# List outdated package

```npm
npm outdated
```

# Linking

```npm
npm link
```

Link allow to create a globally-installed package that is in development (or not in registries).

But you can also link your package in other **node_modules** directory :

```npm
cd my-lib/
npm link
cd ../my-project-that-use-lib/
npm link my-lib
```

Or in only one step :

```npm
cd my-project-that-use-lib/
npm link ../my-lib
```

# Cache clean

```npm
npm cache clean
```

# Install in production

This command don't install dev dependencies

```npm
npm install --production
```

# Yarn package managment

Yarn is a faster package manager than NPM.

## Equivalent to npm command

```npm
yarn = npm install
```

```npm
yarn add <package> = npm install <package> --save
```
