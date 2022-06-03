Mount a volume at container startup  
`docker run --mount source=[VOLUME],target=/container/path IMAGE [COMMAND]`

Mount a local folder at container startup  
`docker run --mount type=bind,source=/local/path,target=/container/path IMAGE [COMMAND]`

# Tools

Run a command in a running container  
`docker exec [options] CONTAINER COMMAND`

Fetch the logs of a container  
`docker logs [-f] CONTAINER`

Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE  
`docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]`

Display a live stream of container(s) resource usage statistics  
`docker stats`

Show the history of an image  
`docker history IMAGE[:TAG]`

Return low-level information on Docker objects  
`docker OBJECT_TYPE inspect OBJECT_NAME`

Attach local standard input, output, and error streams to a running container  
`docker attach [options] CONTAINER`

Copy files between local system and container  
`docker cp /local/path CONTAINER:/container/path`

Show docker disk usage  
`docker system df`

Remove unused data  
`docker system prune`
