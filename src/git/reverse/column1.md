# Branch

Create a new local branch and switch HEAD branch
`git switch -c newBranch`

List local branches
`git branch`

Delete a local branch
`git branch -d <branch>`

# Merge

Merge &lt;branch&gt; on your current branch
`git merge <branch>`

Reapply commits (of &lt;branch&gt;) on top of current branch
`git rebase <branch>`

# Undo
List all operations on repository
`git reflog`

Discard all local changes in your working directory
`git reset --hard HEAD`
**Be careful: you may lose valuable work!**

Discard local changes in a file
`git restore --staged --worktree <file>`

Revert a commit (add a new commit with contrary changes)
`git revert <commit>`

Change the last commit
`git commit --amend`
**Be careful: don't amend a published commit!**

Remove from repository but not on disk
`git rm --cached <file>`
