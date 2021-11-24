# Update global version

```npm
npm update npm -g
```

# NPM scripts

```json
<package.json>
"scripts" : {"the-script" : "node testfile.js"}
```

Run known or custom script :

```npm
npm test
npm run my-custom-script
```

 * **prepublish, publish, postpublish**

Run while the package is published

 * **preinstall, install, postinstall**

Run while the package is installed

 * **preuninstall, uninstall, postuninstall**

Run while the package is uninstalled

 * **prestop, stop, poststop**

Run by the npm stop command

 * **pretest, test, posttest**

Run by the npm test command

 * **prestart, start, poststart**

Run by the npm start command

 * **prerestart, restart, postrestart**

Run by the npm restart command (if no 'restart' script, run 'stop' and 'start')

# Publish

```npm
npm adduser [--registy=<registry>]
npm login [--registy=<registry>]
npm publish [--registy=<registry>]
```
