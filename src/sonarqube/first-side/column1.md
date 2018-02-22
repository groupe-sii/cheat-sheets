 SonarQube version: __6.3+__ - Date: __February 2018__

# Main concepts

<u>**Quality Gates**</u> : Set of boolean conditions based on measure thresholds 
**against which projects are measured during a period**. 

```
Blocker Issues equals 0
Code Coverage is greater than 80%
```

<u>**Rules**</u>: rules are executed on source to generate issues. Three basic types of rules: **Reliability**, **Maintainability** and **Security**
Rule definition:

- Language
- Type: bug, vulnerability, code smell
- Tag
- Repository
- Status: beta, deprecated, ready

Example:
```
".equals()" should not be used to test the values of "Atomic" classes
Language: Java
Type: bug
Tag: multi-threading
Repository: N/A
Status: ready
```

<u>**Quality profiles**</u> : Collections of rules to apply during an analysis.
Each language has a default profile

<u>**Leak period**</u> :  period (generally last release) in which newly added code is analysed against specified criteria.

<u>**Metric**</u> : A type of measurement. Examples: number of lines of code, number of duplicated blocks, complexity etc.

<u>**Reliability**</u> : code that can produce operational risks or unexpected behavior at runtime. Must of time it's the consequence of lack of compliance with best practice 

