
```bash
sudo npm install -g ionic
npm install -g ios-sim
```

Create a folder named **resources** with **icon.png** and **spash.png** with good aspect ratio.

Start conversion with optionnal proxy :
```bash
sudo PROXY=http://proxy.rennes.sii.fr:3128 ionic resources —f
```

# Generated signed android application

Generate your keystore with keytool

```bash
keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
```

Put keystore in **android-signing** folder at root of your cordova project.

In the generated **android** platform folder of your cordova project, create a **release-signing.properties**.

```rc
storeFile=../../android-signing/<myKeyFile>.keystore
storeType=jks
keyAlias=<aliasKey>
```

Next the build.gradle must take this file to sign your application with this command :

```bash
cordova build android --release
```

Next find your generated package to **~/platforms/android/build/outputs/apk**

# Add proxy to android gradle

create **gradle.properties** in the generated **android** platform folder :

```rc
systemProp.http.proxyHost=proxy.dns.fr
systemProp.http.proxyPort=3128
systemProp.https.proxyHost=proxy.dns.fr
systemProp.https.proxyPort=3128
```