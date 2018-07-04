# Manage Networks

List all networks  
```bash
docker network ls`
```

Create network  
```bash
docker network create --driver DRIVER NAME`
```

Connect a container to a network  
```bash
docker network connect [options] NETWORK CONTAINER`
```

Disconnect a container from a network  
```bash
docker network disconnect [options] NETWORK CONTAINER`
```

Remove a network  
```bash
docker network rm NETWORK`
```

Remove all unused networks  
```bash
docker network prune`
```

Attach a network at container startup  
```bash
docker run --network NETWORK IMAGE [COMMAND]`
```

# Manage Volumes

List all volumes  
```bash
docker volume ls`
```

Create a volume  
```bash
docker volume create [options] NAME`
```

Remove a volume  
```bash
docker volume rm VOLUME`
```

Remove all unused volumes  
```bash
docker volume prune`
```
