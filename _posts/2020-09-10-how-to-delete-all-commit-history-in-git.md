---
title: How to delete all commit history in GIT
date: 2020-09-10 14:57:00 +0700
categories: [Orther]
tags: [GIT]
---

## If you want to delete all of our commits history, but keep the code in its current state, try this

### Check out to temp branch:
```shell
git checkout --orphan temp_branch
```
--orphan <new_branch>
Create a new orphan branch, named <new_branch>. The first commit made on this new branch will have no parents and it will be the root of a new history totally disconnected from all the other branches and commits.

### Add all the files:
```shell
git add -A
```

### Commit the changes:
```shell
git commit -am "Initial commit"
```

### Delete the old branch:
```shell
git branch -D master
```

### Rename the temp branch to master:
```shell
git branch -m master
```

### Finally, force update to our repository:
```shell
git push -f origin master
```