Angular CLI need __Node 4++__ with __NPM 3++__

# Installation

```bash
npm install -g @angular/cli
yarn global add @angular/cli
```

# Usage

Generating an Angular project

```bash
ng new <project_name>```

```bash
cd <project_name>
```

Serving via development server

```bash
ng serve
```

Navigate to __http://localhost:4200/__. The app will automatically reload if you change any source files.

Change _port_ and _LiveReload port_

```bash
ng serve --host 0.0.0.0 --port 4201 --live-reload-port 49153
```

# Build

Creating a build : the artifacts will be stored in the _dist/_ directory.

```bash
ng build
```

Build targets and environment, the mapping used can be found in _angular-cli.json_ :

```bash
ng build --target=production --environment=prod
```

Angular CLI supports AOT compilation by running :

```bash
ng build --aot
```