 docker version: __17.09+__ - Date: __October 2017__
 
# Installation

From Linux shell  
`curl -fsSL https://get.docker.com/ | sh`

Show the Docker version information  
`docker version`

# Start containers

Run a container  
`docker run [options] IMAGE [COMMAND]`

Run a container in background  
`docker run -d IMAGE [COMMAND]`

# Manage containers

List running containers  
`docker ps`

List all containers  
`docker ps -a`

Restart container  
`docker restart [options] CONTAINER`

Stop a running container  
`docker stop CONTAINER`

Remove a container  
`docker rm CONTAINER`

Remove all containers  
`docker rm $(docker ps -a -q)`
