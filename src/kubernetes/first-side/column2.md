# Viewing, Finding Resources

List main resources
`kubectl get all`

List all services in the namespace
`kubectl get services [--namespace NS]`

List all pods in all namespaces
`kubectl get pods --all-namespaces`

List a particular deployment
`kubectl get deployment DEPLOYMENT`

Get the version label of all pods with label _version=v1_
```
kubectl get pods --selector=version=v1
```

Describe commands with verbose output
`kubectl describe nodes NODE`
`kubectl describe pods POD`


# Updating Resources

Rolling update
`kubectl rolling-update POD ARGS`

  * Rolling update pods of _app-v1_:
  `kubectl rolling-update app-v1 -f app-v2.yaml`

  * Change the name of the resource and update the image:
  `kubectl rolling-update app-v1 app-v2 --image=image:v2`

Force replace, delete and then re-create the resource. Will cause a service outage.
`kubectl replace --force -f POD.json`