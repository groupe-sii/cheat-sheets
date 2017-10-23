 docker version: __17.09+__ - Date: __October 2017__

# Cluster initialization

## On the first Manager node

Initialize the cluster  
`docker swarm init --advertise-addr MANAGER-IP`

Retrieve the token to add a new Manager node  
`docker swarm join-token manager`

Retrieve the token to add a new Worker node  
`docker swarm join-token worker`

## On every new node

Join the node to the cluster  
`docker swarm join --token TOKEN`

# Cluster events

Show real time events
`docker events`

# Manage networks

Create a distributed overlay network
`docker network create --driver overlay NETWORK`
