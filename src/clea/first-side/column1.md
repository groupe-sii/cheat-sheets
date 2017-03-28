# Usage

The CLI requires NodeJS >= 6.9.0 and NPM 3 or higher.

```clea
clea help
# or
clea help [command]
```

# How to start ?

```clea
clea new <app-name> # Generate a new project
cd <app-name>
clea serve # Serve it
```

Go to http://localhost:8080/. Hot reload is active by default.

# UI Framework

Pre-configure a default UI Framework:

```clea
clea new <app-name> --ui-framework <type>
```

Available types:

- **material**: for AngularJS Material
- **bootstrap**: for Angular UI Bootstrap

# Make it Progressive

Generate the basics of a Progressive Web App with the following:

```clea
clea new <app-name> --make-it-progressive
```

Generated files:

- **sw.conf.js**: sw-precache and sw-toolbox configuration file.
- **src/app/app.sw.ts**: Service Worker registration.
- **src/public/index.html**: add <head> metadata for PWA support.
- **src/public/manifest.json**: manifest file describing the application.

<span class="no-print">[More details](https://github.com/groupe-sii/clea-cli/blob/master/docs/more/make-it-progressive.md)</span>
