 docker version: __17.09+__ - Date: __October 2017__
 
# Installation

From Linux shell  
```bash
curl -fsSL https://get.docker.com/ | sh
```

Show the Docker version information  
```bash
docker version
```

# Start containers

Run a container  
```bash
docker run [options] IMAGE [COMMAND]
```

Run a container in background  
```bash
docker run -d IMAGE [COMMAND]
```

# Manage containers

List running containers  
```bash
docker ps
```

List all containers  
```bash
docker ps -a
```

Restart container  
```bash
docker restart [options] CONTAINER
```

Stop a running container  
```bash
docker stop CONTAINER
```

Remove a container  
```bash
docker rm CONTAINER
```

Remove all containers  
```bash
docker rm $(docker ps -a -q)
```
