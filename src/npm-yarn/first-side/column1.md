# NPM package managment

## Install package via NPM

```bash
npm install <modulename> --save
npm install <modulename>@<version> --save
#install globally :
npm install --global <modulename>
```

## Install dev package via NPM

```bash
npm install <modulename> --save-dev
```

## Add default '--save' to config
 
```bash
npm config set save true
```

## Install package from git repo
 
```bash
npm install git://github.com/my/dep.git
```

## Uninstall package

```bash
npm uninstall <module_name>
```

# NPM project initialization

```bash
npm init
```

# NPM configuration

## get configuration

```bash
npm config ls -l
npm config list
npm config get <conf-key>
```

## edit configuration

```bash
npm config set <conf-key>=value
npm config edit
npm config set proxy=proxy.dns.fr:3128
npm config set https-proxy=proxy.dns.fr:3128
```

