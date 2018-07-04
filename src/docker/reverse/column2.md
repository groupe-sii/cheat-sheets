Mount a local folder at container startup  
```bash
docker run --mount type=bind,source=/local/path,target=/container/path IMAGE [COMMAND]`
```
# Tools

Run a command in a running container  
```bash
docker exec [options] CONTAINER COMMAND`
```
Fetch the logs of a container  
```bash
docker logs [options] CONTAINER`
```
Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE  
```bash
docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]`
```
Display a live stream of container(s) resource usage statistics  
```bash
docker stats`
```
Show the history of an image  
```bash
docker history IMAGE[:TAG]`
```
Return low-level information on Docker objects  
```bash
docker inspect OBJECT/CONTAINER`
```
Attach local standard input, output, and error streams to a running container  
```bash
docker attach [options] CONTAINER`
```
Display system-wide information  
```bash
docker info`
```
Show docker disk usage  
```bash
docker system df`
```
Remove unused data  
```bash
docker system prune`
```