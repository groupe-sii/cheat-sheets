
# List outdated package

```bash
npm outdated
```


# Linking

```bash
npm link
```

Link allow to create a globally-installed package that is in development (or not in registries).

But you can also link your package in other **node_modules** directory :
```bash
cd my-lib/
npm link
cd ../my-project-that-use-lib/
npm link my-lib
```

Or in only one step :

```bash
cd my-project-that-use-lib/
npm link ../my-lib
```

# Cache clean

```bash
npm cache clean
```

# Install in production

This command don't install dev dependencies

```bash
npm install --production
```

# Yarn package managment

Yarn is a faster package manager than NPM.

## Equivalent to npm command

 * `yarn = npm install`
 * `yarn add <package> = npm install <package> --save`
