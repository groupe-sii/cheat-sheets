# Generate entities

All AngularJS entities are one command away:

```clea
clea generate [entity] my-new-entity

# Support relative path
# If you are under the src/app/feature/ folder,
# and launch:
clea generate [entity] my-new-entity
# Your new entity will be generated under the
# src/app/feature/my-new-entity folder

# But, if you are still in the src/app/feature/ folder
# and launch:
clea generate [entity] ../my-newer-entity
# Your entity will be generated in the
# src/app/my-newer-entity folder
```

Available entities:

```clea
# Component
clea generate component my-new-component

# Directive
clea generate directive my-new-directive

# Filter
clea generate filter my-new-filter

# Service
clea generate service my-new-service

# Module
clea generate module my-module

# Lazy load the module in the parent routing file
clea generate module my-module --lazy-load

# Generate a component for the new module
clea generate module my-module --with-component
```

<span class="no-print">[More details](https://github.com/groupe-sii/clea-cli/blob/master/docs/generate.md)</span>

# Build

Compiles the application into an output directory

```clea
clea build
```

Target **production** environment, generate the **doc** and the **sourcemaps** (for debugging purpose).

```clea
clea build --target=production --doc --sourcemap
```
