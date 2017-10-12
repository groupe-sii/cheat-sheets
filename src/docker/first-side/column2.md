# Manage images

Build an image from a Dockerfile  
`docker build -t <image:tag> -f <path/Dockerfile>`

Search an image on Dockerhub  
`docker search <image>`

Pull an image from Dockerhub  
`docker pull <image>`

List all local images  
`docker images`

Remove an image  
`docker rmi <image>`

Remove all images  
`docker rmi $(docker images -q)`

Login to a registry  
`docker login <registry>`

Pull an image from a registry  
`docker pull <registry>/<image>`

Push an image to a registry  
`docker push <registry>/<image>`

Save container state to an image  
`docker commit <option> <container> <image>`

Export an image  
`docker save -o <image.tar> <image>`

Import an image  
`docker load <image.tar>`
