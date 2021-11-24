 kubernetes version: __1.8__ - Date: __October 2017__
 
# Kubectl Autocomplete

Setup autocomplete in bash
`apt install bash-completion`
`source <(kubectl completion bash)`


# Context and Configuration

Show kubeconfig settings
`kubectl config view`

Set the default context (cluster)
`kubectl config use-context CLUSTER-NAME`

# Creating Objects

Create resource(s)
`kubectl create -f FILE.yaml [FILE2.yaml]`

  * Create _app-v1_ from a file:
  `kubectl create -f app-v1.yaml`

Create resource(s) in all manifest files in a directory
`kubectl create -f PATH/DIR/`

Create resource(s) from url
`kubectl create -f https://URL`

Run a single instance (pod)
`kubectl run NAME ARGS`

  * Start a single instance (pod) of nginx
  `kubectl run nginx --image=nginx`