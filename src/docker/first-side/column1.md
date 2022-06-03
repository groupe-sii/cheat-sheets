 docker version: __20.10+__ - Date: __June 2022__
 
# Installation

Documentation  
`https://docs.docker.com/engine/install/`

Show the Docker version / information  
`docker version / info`

# Create a container

Run a container  
`docker run [options] IMAGE [COMMAND]`

Run a httpd container in background  
`docker run -d httpd`

# Manage containers

List running containers  
`docker ps`

List all containers  
`docker ps -a`

Stop a running container  
`docker stop CONTAINER`

Start a stopped container  
`docker start [options] CONTAINER`

Remove a container  
`docker rm [-f] CONTAINER`

Remove all containers  
`docker rm $(docker ps -a -q)`
