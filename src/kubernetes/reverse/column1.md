# Editing Resources

Edit a resource in text editor
`kubectl edit TYPE/RESOURCE`

  * Edit the service named _app_:
  `kubectl edit svc/app`

# Scaling Resources

Scale a resource
`kubectl scale --replicas=NUM RESOURCE`

  * Scale a deployment named _foo_ to 3:
  `kubectl scale --replicas=3 deployment/foo`

  * Scale a resource specified in _foo.yaml_ to 3:
  `kubectl scale --replicas=3 -f foo.yaml`


# Deleting Resources

Delete a ressource
`kubectl delete TYPE RESOURCE`

  * Delete pods and services with same names _baz_ and _foo_:
  `kubectl delete pods,service baz foo`

  * Delete pods and services with label _name=myLabel_:
  `kubectl delete pods,services -l name=myLabel`
  
  * Delete all pods and services in namespace _my-ns_:
  `kubectl -n my-ns delete pods,svc --all`

  * Delete a pod using the type and name specified in _pod.yaml_:
  `kubectl delete -f ./pod.yaml`

