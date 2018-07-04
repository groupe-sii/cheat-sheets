
# Linting code

```bash
ng lint
```
# Help

```bash
ng help
```
# Prepocessor integration

Angular CLI supports all major CSS preprocessors: __sass/css__, __less__, __stylus__

When generating a new project you can also define which extension you want for style files:

```bash
ng new <project> --style=<scss|sass|less|stylus>
```
Or set default style on existing project:

```bash
ng set defaults.styleExt <scss|sass|less|stylus>
```
# Deploying the app via GitHub Pages

You can deploy your apps quickly via:

```bash
ng github-pages:deploy --message "Optional commit message"
```
# searching anuglar documentation
You can quicly search official documnentation via:
```bash
ng doc <keyword>
```
# Update your dependencies

```npm
ng update <package>
```
# Add capability

For example, turn your application into a PWA

```npm
ng add @angular/pwa
```