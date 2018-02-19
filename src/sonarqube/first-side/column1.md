 SonarQube version: __6.3+__ - Date: __February 2018__
 
# Introduction

SonarQube is a quality management plateform dedicated to continuous analyse and measure technical quality.

# Main concepts

**Quality Gates** : Set of boolean conditions based on measure thresholds 
**against which projects are measured during a period**. 
SonarQube way is the default quality gate.

```
Blocker Issues equals 0
Code Coverage is greater than 80%
```

Possible value:
- ERROR
- WARN
- OK

**Rules**: rules are executed on source to generate issues. Three basic types of rules: Reliability, Maintainability and security
Rule definition:

- Language
- Type: bug, vulnerability, code smell
- Tag
- Repository
- Status: beta, deprecated, ready

**Quality profiles** : Collections of rules to apply during an analysis.
Each language has a default profile

**Issue** : SonarQube raise an issue every time a piece of code breaks a code rule.
Issue severities:

- BLOCKER: memory leak, unclosed JDBC connection, not closing a socket. The code **MUST** be fixed immediately.
- CRITICAL: SQL Injection, NullPointerException, empty catch block: The code **MUST** be reviewed immediately.
- MAJOR: duplicated blocks, unused parameters, too complex methods ...
- MINOR: naming convention, lines too long,...
- INFO

**Leak period** :  period (generally last release) in which newly added code is analysed against specified criteria.

**Metric** : A type of measurement. Examples: number of lines of code, number of duplicated blocks, complexity etc.

**Measure** : The value of a metric for a given module at a given time


**Reliability** : code that can produce operational risks or unexpected behavior at runtime. Must of time it's the consequence of lack of compliance with best practice 

**Maintainability** : modularity, understandability, changeability, testability and reusability of a code, module.



