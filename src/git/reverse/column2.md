# Proxy

Add proxy on your global configuration
`git config --global http.proxy http://proxy.com:1234`

Unset the global proxy
`git config --global --unset http.proxy`

Add proxy on your current project directory
`git config http.proxy http://proxy.com:1234`

Check your global proxy
`git config --global --get http.proxy`

Check your local proxy
`git config --get http.proxy`


# default client

Visualize git tree
`gitk --all`

Graphical git operations
`git gui`

# Settings
Add *--global* flag if you want to apply the setting to all off your local repositories
`git config user.name "your-user-name"`
`git config user.email "your-email-addr"`

Rebase by default when doing git pull
`git config pull. rebase true`

Fix conflicts only once
`git config rerere.enabled 1`

Store and remember credentials
`git config credential.helper store`
