# Tag

Tag a commit
```bash
git tag <tag-name>
```

# Merge

Merge <branch> on your current branch
```bash
git merge <branch>
```

Reapply commits (of the <branch>) on top of you current branch
```bash
git rebase <branch>
```

# Undo
List all operations on repository
```bash
git reflog
```

Discard all local changes in your working directory
```bash
git reset --hard HEAD
```

Discard local changes in a file
```bash
git checkout HEAD <file>
```

Revert a commit (add a new commit with contrary changes)
```bash
git revert <commit>
```

Change the last commit
```
git commit --amend`
**Be careful: don't amend a published commit!**

# Settings

Some commands to change the default git behavior
```bash
git config --global pull. rebase true`
```

```bash
git config --global rerere.enabled 1`

```