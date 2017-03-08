# Android commands

 * List availables targets
 
```bash
android list targets
```

 * List availables virtual devices
 
```bash
android list avds
```

 * Create virtual devices
 
```bash
android create avd -n bob -t android-19
```

# ADB commands

 * List connected physical device

```bash
adb devices
```

 * Install specific apk

```bash
adb install demo.apk
```

 * Reinstall specific apk

```bash
adb install -r demo.apk
```

 * Remove specific package

```bash
adb uninstall name-of-app-package
```

 * List installed packages

```bash
adb shell pm list packages
```

# Emulator commands

Launch android emulator with specific avd target
```bash
emulator -avd bob
```
# Config.xml

**Standard operation on config.xml**
