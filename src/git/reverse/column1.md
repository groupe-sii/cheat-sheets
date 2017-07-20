# Tag

Tag a commit
`git tag <tag-name>`

# Merge

Merge <branch> on your current branch
`git merge <branch>`

Reapply commits (of the <branch>) on top of you current branch
`git rebase <branch>`

# Undo
List all operations on repository
`git reflog`

Discard all local changes in your working directory
`git reset --hard HEAD`

Discard local changes in a file
`git checkout HEAD <file>`

Revert a commit (add a new commit with contrary changes)
`git revert <commit>`

Change the last commit
`git commit --amend`
**Be careful: don't amend a published commit!**

# Settings

Some commands to change the default git behavior
`git config --global pull. rebase true`
`git config --global rerere.enabled 1`
