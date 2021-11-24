# Change version
 
 Change **version** parameter of ** widget** tag. With android target, you must also update **android-versionCode**.
 
# Change application name
 
 Simply change **name** tag's value.
 
# Change package name

 Simply change **android-packageName** parameter value.
 
# Entry point
 
 The entry-point is define by **src** parameter in the **content** tag
 
# Whitelist
 
 Whitelist plugin is often require. You must install it from the **plugin add** command (cordova-plugin-whitelist).
 
 This plugin allow or reject specific URL.
 
 ```xml
<!-- access to google secured domain -->
<access origin="https://www.google.com" />
<!-- access to google map domain -->
<access origin="http://maps.google.com" />
<!-- access to all google sub-domain -->
<access origin="http://*.google.com" />
<!-- access allow from all -->
<access origin="*" />
 ```
 
 Allow application to call specific intent
 
 ```xml
<allow-intent href="http://*/*"/>
<allow-intent href="https://*/*"/>
<allow-intent href="tel:*"/>
<allow-intent href="sms:*"/>
<allow-intent href="mailto:*"/>
<allow-intent href="geo:*"/>
```

# Generate iOS Resources

You can auto-generate spash and icon multiple size for iOS platform.
Install ios-sim :
