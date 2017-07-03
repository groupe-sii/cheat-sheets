 docker version: __17.05+__ - Date: __June 2017__
 
# Installation

From Linux shell  
`curl -fsSL https://get.docker.com/ | sh`

Show the Docker version information  
`docker version`

# Start containers

Run a container  
`docker run <options> <image> <command>`

Run a container in background  
`docker run -d <image> <command>`

# Manage containers

List running containers  
`docker ps`

List all containers  
`docker ps -a`

Restart container  
`docker restart <container>`

Stop a running container  
`docker stop <container>`

Remove a container  
`docker rm <container>`

Remove all containers  
`docker rm $(docker ps -a -q)`
