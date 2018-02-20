# Main concepts

<u>**Issue**</u> : SonarQube raise an issue every time a piece of code breaks a code rule.
Issue severities:

- BLOCKER: memory leak, not closing a socket... The code **MUST** be fixed immediately.
- CRITICAL: SQL Injection, NullPointerException: The code **MUST** be reviewed immediately.
- MAJOR: duplicated blocks, unused parameters, too complex methods ...
- MINOR: naming convention, lines too long,...
- INFO

# Issue life cycle

- **Opened** : Issue opened by SonarQube during an analysis when a part of code break a rule
- **Confirmed** : State set manually by the user, that validated the problem
- **False positive** : State set manually by the user. In the project context, the issue is not a problem
  **Requires Administer Issues permission** on the project.
- **Won't fix** : State set manually by the user. The issue is a valid issue but due to project context there is no need to fix it actually. It represents **accepted technical debt**. <br/>
  **Requires Administer Issues permission** on the project.
- **Change severity** : State set manually by the user. The issue is a valid issue but it's not as bad as set in the rule's default severity 
  **Requires Administer Issues permission** on the project.
- **Resolved** : State set manually by the user. If the fix is right SonarQube will close the issue during the next analysis otherwise the issue will be re-opened

![gitZone](../assets/images/sonarqube-issue-wflw-green-10.png)
