# Manage services

Create a new service  
`docker service create [options] IMAGE [COMMAND] [ARGS...]`

  * Create a busybox service: `docker service create --name busybox busybox`

List all services  
`docker service ls`

List the tasks of a service  
`docker service ps SERVICE`

Remove a service  
`docker service rm SERVICE`

Update a service  
`docker service update [options] SERVICE`

  * Update service image `docker service update --image my-service:2 my-service`

Scale a service  
`docker service scale SERVICE=REPLICAS`

Inspect a service
`docker service inspect SERVICE`

Fetch the logs of a service or task  
`docker service logs SERVICE`
`docker service logs TASK`

Roll back a service to its previous version  
`docker service rollback SERVICE`
