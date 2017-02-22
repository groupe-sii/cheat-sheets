# Updating angular-cli

To update angular-cli to a new version, you must update both the global package and your project's local package.

Global package:

```shell
npm uninstall -g @angular/cli
npm cache clean
npm install -g @angular/cli@latest
```

Local project package:

```shell
rm -rf node_modules dist # use rmdir on Windows
npm install --save-dev @angular/cli@latest
npm install
ng init
```
# 3rd Party Library Installation

Simply install your library via __npm install lib-name --save__ and import it in your code.

If the library does not include typings, you can install them using npm:

```shell
npm install d3 --save
npm install @types/d3 --save-dev
```
