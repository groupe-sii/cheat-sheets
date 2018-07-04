# Manage Images

Build images referenced in Compose file (without starting the containers)
```bash
docker-compose build [options] [SERVICE]`
```

Pull images referenced in Compose file
```bash
docker-compose pull [options] [SERVICE]`
```

Push images for services to their respective registry/repository
```bash
docker-compose push [options] [SERVICE]`
```

# Tools

Validate and view the Compose file
```bash
docker-compose config`
```

List containers
```bash
docker-compose ps [options] [SERVICE]`
```

Display log output from services
```bash
docker-compose logs [options] [SERVICE]`
```

Display the running processes
```bash
docker-compose top [SERVICE]`
```

Stream container events for every container
```bash
docker-compose events [options] [SERVICE]`
```

List images used by the created containers
```bash
docker-compose images`
```

Run arbitrary commands in the containers of a service
```bash
docker-compose exec [options] SERVICE COMMAND`
```

Print the public port for a port binding
```bash
docker-compose port [options] SERVICE PRIVATE_PORT`
```
