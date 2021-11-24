# NPM package managment

## Install package via NPM

```npm
npm install <modulename> --save
npm install <modulename>@<version> --save
# install globally :
npm install --global <modulename>
```

## Install dev package via NPM

```npm
npm install <modulename> --save-dev
```

## Add default '--save' to config

```npm
npm config set save true
```

## Install package from git repo

```npm
npm install git://github.com/my/dep.git
```

## Uninstall package

```npm
npm uninstall <module_name>
```

# NPM project initialization

```npm
npm init
```

# NPM configuration

## get configuration

```npm
npm config ls -l
npm config list
npm config get <conf-key>
```

## edit configuration

```npm
npm config set <conf-key>=value
npm config edit
npm config set proxy=proxy.dns.fr:3128
npm config set https-proxy=proxy.dns.fr:3128
```
