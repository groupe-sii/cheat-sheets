 docker-compose version: __1.16.1__ - Date: __October 2017__
 
# Info

Show the docker-compose version  
```bash
docker-compose version
```

Display help and usage instructions for a command
```bash
docker-compose help
```

# Manage containers

Build, (re)create and start containers
```bash
docker-compose up [options] [SERVICE]`
```

Start all containers in background: `docker-compose up -d`

Stop containers and remove containers, networks, volumes, and images created.
```bash
docker-compose down [options]`
```

Restart all stopped and running services
```bash
docker-compose restart [options] [SERVICE]`
```

Create containers (without starting them)
```bash
docker-compose create [options] [SERVICE]`
```

Build images before creating containers: `docker-compose create --build`

Removes stopped service containers
```bash
docker-compose rm [options] [SERVICE]`
```

Stop the containers, if required, before removing: `docker-compose rm --stop`