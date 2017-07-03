# Manage Networks

List all networks  
`docker network ls`

Create network  
`docker network create --driver <driver> <name>`

Connect a container to a network  
`docker network connect <options> <network> <container>`

Disconnect a container from a network  
`docker network disconnect <options> <network> <container>`

Remove a network  
`docker network rm <network>`

Remove all unused networks  
`docker network prune`

Attach a network at container startup  
`docker run --network <network> <image> <command>`

# Manage Volumes

List all volumes  
`docker volume ls`

Create a volume  
`docker volume create <options> <name>`

Remove a volume  
`docker volume rm <volume>`

Remove all unused volumes  
`docker volume prune`
