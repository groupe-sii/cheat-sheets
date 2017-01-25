Angular CLI need Node 4++ with NPM 3++

# Installation

`npm install -g angular-cli`
`yarn global add angular-cli`

# Usage

Generating and serving an Angular project via development server
`ng new <project_name>`
`cd <project_name>`
`ng serve`

Navigate to __http://localhost:4200/__. The app will automatically reload if you change any source files.

Change port and LiveReload port
`ng serve --host 0.0.0.0 --port 4201 --live-reload-port 49153`

# Build and tests

Creating a build : the artifacts will be stored in the _dist/_ directory.
`ng build`

Build targets and environment, the mapping used can be found in _angular-cli.json_ :
`ng build --target=production --environment=prod`

Running unit tests
`ng test`

Running end-to-end tests
`ng e2e`
