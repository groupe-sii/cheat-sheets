# Manage images

Build an image from a Dockerfile  
`docker build -t IMAGE[:TAG] .`

Search an image on Dockerhub  
`docker search IMAGE`

Pull an image from Dockerhub  
`docker pull IMAGE[:TAG]`

List all local images  
`docker image ls`

Remove a local image  
`docker image rm IMAGE[:TAG]`

Login to a registry  
`docker login [options] [SERVER]`

Pull an image from a registry  
`docker pull [options] SERVER/NAME[:TAG]`

Push an image to a registry  
`docker push SERVER/NAME[:TAG]`

Save container state to a new image  
`docker commit CONTAINER IMAGE[:TAG]`

Export an image  
`docker save -o PATH.tar IMAGE[:TAG]`

Import an image
`docker load -i PATH.tar`
