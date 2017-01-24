Angular CLI need Node 4 or higher with NPM 3 or higher

# Installation

`npm install -g angular-cli`
`yarn global add angular-cli`

# Usage

Help
`ng help`
Generating and serving an Angular project via development server
`ng new <project_name>`
`cd <project_name>`
`ng serve`

Navigate to `http://localhost:4200/`
The app will automatically reload if you change any of the source files.

You can configure the default HTTP port and the one used by the LiveReload server with two command-line options
`ng serve --host 0.0.0.0 --port 4201 --live-reload-port 49153`

# Build and tests

Creating a build
`ng build`

Runing unit tests
`ng test`

Runing end-to-end tests
`ng e2e`
