# Undo
 
discard all local changes in your working directory
`git reset --hard HEAD`

discard local changes in a file
`git checkout HEAD <file>`

Revert a commit (add a new commit with contrary changes)
`git revert <commit>`

# Remote

List all remotes repositories
`git remote -v`

Show information about remote
`git remote show <remote>`

Add new remote repository
`git remove add <remote> <url>`

Dowload all changes from <remote>
`git fetch <remote>`

Download changes and integrate into HEAD
`git pull <remote> <branch>`

Publish changes on a remote
`git push  <remote> <branch>`

#Branch

Create a new local branch and switch HEAD branch
`git checkout -b newBranch`

Delete a local branch
`git branch -d <branch>`

# Tag

Tag a commit
`git tag <tag-name>`