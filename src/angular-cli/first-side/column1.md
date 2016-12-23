Angular CLI need Node 4 or higher with NPM 3 or higher

# Installation

`npm install -g angular-cli`
or
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

# Generating Components, Directives, Pipes and Services

Components
`ng generate component <my-new-component>`
Directive
`ng generate directive <my-new-directive>`
Pipe
`ng generate pie <my-new-pipe>`
Service
`ng generate service <my-new-service>`
Interface
`ng generate interface <my-new-interface>`
Enum
`ng generate enum <my-new-enum>`
