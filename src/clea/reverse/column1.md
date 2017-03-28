# Proxy to Backend

Using the proxy mode of Webpack dev server, it's possible to redirect some URLs to another server.

Create a **proxy.conf.json** file with the following conf:

```json
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false
  }
}
```

Then launch:

```clea
clea serve --proxy-config proxy.conf.json
```

It will redirect each call to http://localhost:8080/api to the targeted server.

<span class="no-print">[More details](https://github.com/groupe-sii/clea-cli/blob/master/docs/more/proxy.md)</span>

# Code analysis 

Launch TypeScript & Sass code analysis

```clea
clea lint

# Will attempt to fix lint errors
clea lint --fix
```

<span class="no-print">[More details](https://github.com/groupe-sii/clea-cli/blob/master/docs/lint.md)</span>

# Testing

Launch unit tests with Karma & Jasmine

```clea
clea test
```

<span class="no-print">[More details](https://github.com/groupe-sii/clea-cli/blob/master/docs/test.md)</span>

# SonarQube reporter

Use **sonar-web-frontend-reporters** to generate understandable reporters for SonarQube.

Launch the following command to regenerate reporters under the **reports** folder:

```npm
npm run sonar:reporters
```

<span class="no-print">[More details](https://github.com/groupe-sii/clea-cli/blob/master/docs/more/sonarqube-reporters.md)</span>
