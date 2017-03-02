# Tag

Tag a commit
`git tag <tag-name>`

# Merge

Merge <branch> on your current branch
`git merge <branch>`

Reapply commits (of the <branch>) on top of you current branch
`git rebase <branch>`

# Undo

Discard all local changes in your working directory
`git reset --hard HEAD`

Discard local changes in a file
`git checkout HEAD <file>`

Revert a commit (add a new commit with contrary changes)
`git revert <commit>`

Change the last commit
`git commit --amend`
**Be careful: don't amend a published commit!**

# Alias

Custom the *git log* command
`git config --global alias.lg     'log --graph --abbrev-commit --color --oneline'`
`git config --global alias.lga     'log --graph --abbrev-commit --color --oneline --all'`
Now you can write *git lg* and *git lga*
