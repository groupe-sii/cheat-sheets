# Serve

Change the host and port to listen to:

```clea
clea serve --port 4000 --host 0.0.0.0
```

Merge or override the webpack configuration:

```clea
# Merge with Clea webpack configuration
clea --merge-config webpack.config.js

# Override Clea webpack configuration
clea --override-config webpack.config.js
```

<span class="no-print">[More details](https://github.com/groupe-sii/clea-cli/blob/master/docs/serve.md)</span>

# Mock your API

Easily mock a REST API with JSON Server:

```clea
clea serve --api
```

## Options

**--api [db]** enable the mock API on the specified database JSON file (defaults to: **db.json**)

**--api-custom-routes [config]** add custom Express routes if you want something more than just a RESTFul API (defaults to: **api.conf.js**)

By using the **--api** option, a proxy is set to the **/api** URL.

<span class="no-print">[More details](https://github.com/groupe-sii/clea-cli/blob/master/docs/more/api.md)</span>

# Environments

You can target an environment with the following:

```clea
clea serve|build --target=<environment>
```

Environments mapping is made in the **.clea-cli.json** file:

```json
environmentSource: "config/config.json",
environments: {
  development: "config/config.dev.json",
  production: "config/config.prod.json"
}
```
<span class="no-print">[More details](https://github.com/groupe-sii/clea-cli/blob/master/docs/more/environments.md)</span>
