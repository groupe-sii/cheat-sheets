# Interacting with running Pods

Dump pod logs (stdout)
`kubectl logs POD`

Stream pod logs (stdout)
`kubectl logs -f POD`

Run pod as interactive shell (example with busybox)
`kubectl run -i --tty busybox --image=busybox -- sh`

Attach to running container
`kubectl attach POD -i`

Forward port 6000 of Pod to 5000 on your local machine
`kubectl port-forward POD 5000:6000`

Run command in existing pod
`kubectl exec POD -- COMMAND`

# Interacting with Nodes and Cluster

Mark node as unschedulable
`kubectl cordon NODE`

Drain node in preparation for maintenance
`kubectl drain NODE`

Mark node as schedulable
`kubectl uncordon NODE`

Show metrics for a given node
`kubectl top node NODE`

Display addresses of the master and services
`kubectl cluster-info`