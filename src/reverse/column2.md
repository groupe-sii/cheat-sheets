# Commit rules

- One commit for one task: if you have 2 tasks written in one file you can use *git add -p* and chose which chunk you need to add ad your commit
- Try to commit as often as possible
- Do not commit a half-done work. You should only commit code when it's completed.
- Commit a stable version of your work: the tests should not failed

# Commit messages

- Limit the subject line to 50 characters
- Do not end the subject with a period
- Use the imperative mood in the subject line
- User the body to explein *what*, *why* and if you think its necessary *how*

Tips: From your editor you can separate subject from body with a blank line. From de command line you can use:
`git commit -m 'subject' -m 'body'`