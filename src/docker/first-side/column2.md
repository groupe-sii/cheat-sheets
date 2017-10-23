# Manage images

Build an image from a Dockerfile  
`docker build -t IMAGE:TAG -f PATH`

Search an image on Dockerhub  
`docker search IMAGE`

Pull an image from Dockerhub  
`docker pull [options] IMAGE[:TAG]`

List all local images  
`docker images`

Remove an image  
`docker rmi [options] [IMAGE]`

Remove all images  
`docker rmi $(docker images -q)`

Login to a registry  
`docker login [options] [SERVER]`

Pull an image from a registry  
`docker pull [options] SERVER/NAME[:TAG]`

Push an image to a registry  
`docker push SERVER/NAME[:TAG]`

Save container state to an image  
`docker commit [options] CONTAINER [REPOSITORY[:TAG]]`

Export an image  
`docker save -o PATH.tar IMAGE[:TAG]`

Import an image  
`docker load PATH.tar`
