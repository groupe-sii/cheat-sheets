# Manage stacks

Deploy a new stack from a compose file  
`docker stack deploy --compose-file COMPOSE-FILE STACK`

List all stacks  
`docker stack ls`

List the services of a stack  
`docker stack services STACK`

List the tasks of a stack  
`docker stack ps STACK`

Remove a stack  
`docker stack rm STACK`

# Manage secrets

Create a secret from a file or STDIN  
`Docker secret create SECRET-NAME FILE-PATH`
`echo STRING |docker secret create SECRET-NAME`

List all secrets  
`Docker secret ls`

Use a secret in a compose file  
```dockerfile
version: "3.1"
services:
  web:
    image: secrets_web
    secrets:
      - mysql-password
secrets:
  mysql-password:
    external: true
```
