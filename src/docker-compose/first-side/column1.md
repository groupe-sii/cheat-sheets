 docker-compose version: __1.16.1__ - Date: __October 2017__
 
# Info

Show the docker-compose version  
`docker-compose version`

Display help and usage instructions for a command
`docker-compose help`

# Manage containers

Build, (re)create and start containers
`docker-compose up [options] [SERVICE]`

  * Start all containers in background: `docker-compose up -d`

Stop containers and remove containers, networks, volumes, and images created.
`docker-compose down [options]`

Restart all stopped and running services
`docker-compose restart [options] [SERVICE]`

Create containers (without starting them)
`docker-compose create [options] [SERVICE]`

  * Build images before creating containers: `docker-compose create --build`

Removes stopped service containers
`docker-compose rm [options] [SERVICE]`

  * Stop the containers, if required, before removing: `docker-compose rm --stop`