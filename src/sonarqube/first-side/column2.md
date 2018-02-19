# Analysis parameters

 
 | Parameter  | Description | Default value   | Mandatory   |
 |---|---|---|---|
 | sonar.host.url  | Server URL  | http://localhost:9000   | true   |
 | sonar.project.key  | The project key that is unique for each project.|  When using maven it's set to <br/> <groupId\>:<artifactId\>   | false  |
 | sonar.sources  | Comma-separated paths to directories containing source files.  | Compatible with Maven  |  false |
 | sonar.projectName  | Name of the project that will be displayed on the web interface.  | If not set, sonar.project.key is used  |  false |
 | sonar.login  | The login of a SonarQube user with Execute Analysis permission.  |   | false  |
 | sonar.password  | The password that goes with sonar.login.  |   | false  |
 | sonar.language  | Set the language of the source code to analyse  | If not set multi-language analysis will be triggered  | false  |
 | sonar.tests  | Comma-separated paths to directories containing tests files.  | Not compatible with Maven  | false  |
 | sonar.exclusions  | Comma-delimited list of file pattern to be excluded from analysis.  |  | false  |
 | sonar.inclusions  | Comma-delimited list of file pattern to be included in analysis. Only files matching pattern will be included  |  | false  |
 | sonar.test.exclusions  | Comma-delimited list of test file pattern to be excluded from analysis.  |  | false  |
 | sonar.test.inclusions  | Comma-delimited list of test file pattern to be included in analysis. Only files matching pattern will be included  |  | false  |

