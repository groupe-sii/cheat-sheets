Mount a local folder at container startup  
`docker run --volume /local/path:/container/path <image> <command>`

# Tools

Run a command in a running container  
`docker exec <options> <container> <command>`

Fetch the logs of a container  
`docker logs <container>`

Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE  
`docker tag <target_image> <source_image>`

Display a live stream of container(s) resource usage statistics  
`docker stats`

Show the history of an image  
`docker history <image>`

Return low-level information on Docker objects  
`docker inspect <object/container>`

Attach local standard input, output, and error streams to a running container  
`docker attach <options> <container>`

Display system-wide information  
`docker info`

Show docker disk usage  
`docker system df`

Remove unused data  
`docker system prune`