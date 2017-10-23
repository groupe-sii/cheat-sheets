# Manage nodes

List all nodes  
`docker node ls`

Inspect a node  
`docker node inspect NODE`

List tasks running on a node
`docker node ps NODE`

Promote a node to Manager  
`docker node promote NODE`

Demote a node to Worker  
`docker node demote NODE`

Update a node  
`docker node update [options] NODE`

  * Add a label: `docker node update --label-add type=front node-1`
  * Drain a node: `docker node update --availability drain node-1`

Make a Worker node leave the Cluster  
`docker swarm leave`

Remove a node from nodes list  
`docker node rm NODE`
