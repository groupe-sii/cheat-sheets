# Remote

List all remotes repositories

```bash
git remote -v
```

Show information about remote

```bash
git remote show <remote>
```

Add new remote repository

```bash
git remote add <remote> <url>
```

Dowload all changes from <remote>

```bash
git fetch <remote>
```

Download changes and integrate into HEAD

```bash
git pull <remote> <branch>
```

Publish changes on a remote

```bash
git push  <remote> <branch>
```

# Branch

```bash
git checkout -b <branch> # Create branch and switch them
git branch -d <branch> # Delete branch
```

# Commit messages

- Limit the subject line to 50 characters
- Do not end the subject with a period
- Use the imperative mood in the subject line
- Use the body to explain *what*, *why* and *how*

**Tips:** Separate subject from body with a blank line. From de command line you can use:

```bash
git commit -m 'subject' -m 'body'
```

