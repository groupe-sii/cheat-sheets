# Manage Networks

List all networks  
`docker network ls`

Create network  
`docker network create --driver DRIVER NAME`

Connect a container to a network  
`docker network connect [options] NETWORK CONTAINER`

Disconnect a container from a network  
`docker network disconnect [options] NETWORK CONTAINER`

Remove a network  
`docker network rm NETWORK`

Remove all unused networks  
`docker network prune`

Attach a network at container startup  
`docker run --network NETWORK IMAGE [COMMAND]`

# Manage Volumes

List all volumes  
`docker volume ls`

Create a volume  
`docker volume create [options] NAME`

Remove a volume  
`docker volume rm VOLUME`

Remove all unused volumes  
`docker volume prune`
