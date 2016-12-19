# Merge

Merge <branch> on your current branch
`git merge <branch>`

Reapply commits (of the <branch>) on top of you current branch
`git rebase <branch>`

# Alias

Custom the *git log* command
`git config --global alias.lg     "log --graph --abbrev-commit --color --oneline"`
`git config --global alias.lga     "log --graph --abbrev-commit --color --oneline --all"`
Now you can write *git lg* and *git lga*

# Settings

Somes commands to change the default git behavior
`git config --global pull. rebase true`
`git config --global rerere.enabled 1`

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