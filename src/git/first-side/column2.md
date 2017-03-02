# Remote

List all remotes repositories
`git remote -v`

Show information about remote
`git remote show <remote>`

Add new remote repository
`git remote add <remote> <url>`

Dowload all changes from <remote>
`git fetch <remote>`

Download changes and integrate into HEAD
`git pull <remote> <branch>`

Publish changes on a remote
`git push  <remote> <branch>`

# Branch

Create a new local branch and switch HEAD branch
`git checkout -b newBranch`

Delete a local branch
`git branch -d <branch>`

# Commit messages

- Limit the subject line to 50 characters
- Do not end the subject with a period
- Use the imperative mood in the subject line
- User the body to explain *what*, *why* and *how*

Tips: Separate subject from body with a blank line. From de command line you can use:
`git commit -m 'subject' -m 'body'`
