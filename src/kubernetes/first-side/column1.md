 kubernetes version: __1.22__ - Date: __June 2022__
 
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
`kubectl apply -f FILE.yaml [FILE2.yaml]`

Create resource(s) from a directory
`kubectl apply -f PATH/DIR/`

Create resource(s) from url
`kubectl apply -f https://URL`

Run a single pod
`kubectl run NAME --image=IMAGE`

Run a single pod and connect into it  
`kubectl run --ti NAME --image=IMAGE`
