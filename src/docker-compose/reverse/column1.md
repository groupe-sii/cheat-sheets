# Manage Images

Build images referenced in Compose file (without starting the containers)
`docker-compose build [options] [SERVICE]`

Pull images referenced in Compose file
`docker-compose pull [options] [SERVICE]`

Push images for services to their respective registry/repository
`docker-compose push [options] [SERVICE]`

# Tools

Validate and view the Compose file
`docker-compose config`

List containers
`docker-compose ps [options] [SERVICE]`

Display log output from services
`docker-compose logs [options] [SERVICE]`

Display the running processes
`docker-compose top [SERVICE]`

Stream container events for every container
`docker-compose events [options] [SERVICE]`

List images used by the created containers
`docker-compose images`

Run arbitrary commands in the containers of a service
`docker-compose exec [options] SERVICE COMMAND`

Print the public port for a port binding
`docker-compose port [options] SERVICE PRIVATE_PORT`
