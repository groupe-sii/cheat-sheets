Mount a local folder at container startup  
`docker run --volume /local/path:/container/path IMAGE [COMMAND]`

# Tools

Run a command in a running container  
`docker exec [options] CONTAINER COMMAND`

Fetch the logs of a container  
`docker logs [options] CONTAINER`

Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE  
`docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]`

Display a live stream of container(s) resource usage statistics  
`docker stats`

Show the history of an image  
`docker history IMAGE[:TAG]`

Return low-level information on Docker objects  
`docker inspect OBJECT/CONTAINER`

Attach local standard input, output, and error streams to a running container  
`docker attach [options] CONTAINER`

Display system-wide information  
`docker info`

Show docker disk usage  
`docker system df`

Remove unused data  
`docker system prune`