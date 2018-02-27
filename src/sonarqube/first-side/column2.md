# Main concepts

<span class="concept">Maintainability</span> : modularity, understandability, changeability, testability and reusability of a module.

<span class="concept">Issue</span> : SonarQube raise an issue every time a piece of code breaks a code rule.
Issue severities:

- BLOCKER: memory leak, not closing a socket... The code **MUST** be fixed immediately.
- CRITICAL: SQL Injection, NullPointerException: The code **MUST** be reviewed immediately.
- MAJOR: duplicated blocks, unused parameters
- MINOR: naming convention, lines too long,...
- INFO

# Issue life cycle

Except Opened state, the others statuses can be set manually.It **requires administer issues permission** on the project

![gitZone](../assets/images/sonarqube-issue-wflw.png)
