# Local Git State

![gitZone](../../assets/images/gitZone.png)

# Manage local changes

Show the working tree status
`git status`

Show changes between commits, commit and working tree
![gitDiff](../../assets/images/gitDiff.png)

Add <file> contents to the index
`git add <file>`

Add current contents of the index in a new commit
`git commit -m 'subject' -m 'body'`

Change the last commit
`git commit --amend`
**Be careful: don't amend a published commit!**

Who changed what in <file>
`git blame <file>`