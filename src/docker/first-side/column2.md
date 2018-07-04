# Manage images

Build an image from a Dockerfile  
```bash
docker build -t IMAGE[:TAG] .
```

Search an image on Dockerhub  
```bash
docker search IMAGE
```

Pull an image from Dockerhub  
```bash
docker pull [options] IMAGE[:TAG]
```

List all local images  
```bash
docker images
```

Remove an image  
```bash
docker rmi [options] [IMAGE]
```

Remove all images  
```bash
docker rmi $(docker images -q)
```

Login to a registry  
```bash
docker login [options] [SERVER]
```

Pull an image from a registry  
```bash
docker pull [options] SERVER/NAME[:TAG]
```

Push an image to a registry  
```bash
docker push SERVER/NAME[:TAG]
```

Save container state to an image  
```bash
docker commit [options] CONTAINER [REPOSITORY[:TAG]]
```

Export an image  
```bash
docker save -o PATH.tar IMAGE[:TAG]
```

Import an image
```bash
docker load -i PATH.tar
```
