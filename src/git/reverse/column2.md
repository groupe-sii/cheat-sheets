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

# Commit rules

- One commit for one task: if you have 2 tasks written in one file you can use *git add -p* and chose which chunk you need to add at your commit
- Try to commit as often as possible
- Do not commit a half-done work. You should only commit code when it's completed.
- Commit a stable version of your work: the tests should not failed

# default client

Visualize git tree
`gitk --all`

Graphical git operations
`git gui`
