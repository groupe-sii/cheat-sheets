Cordova : __6.5.0__ - Date : __March 2017__

# NPM commands

Uses node to install the cordova program on your computer globally.

```bash
npm install -g cordova
```

# Init project

Uses cordova to create your project in a folder called demo with the namespace ca.edumedia.m.griffis

```bash
cordova create demo com.sii.fr.mydemo Demo
```

# Add platform to your project

```bash
cordova platform add android
cordova platform add ios
```

# Add plugin

```bash
cordova plugin add cordova-plugin-device
```

# Build application

```bash
cordova build android
cordova build ios
```

# Start application with emulator

```bash
cordova emulate android --target=myAdvName
```

# Run application

You can run application on added platform

```bash
cordova run android
cordova run ios
cordova run browser
```