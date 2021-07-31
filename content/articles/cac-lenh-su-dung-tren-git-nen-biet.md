---
id: 252
title: Các lệnh sử dụng trên GIT nên biết
date: 2019-10-12
author: Ime Share
description: Git là một hệ thống quản lý phiên bản phân tán (distributed version control system) hỗ trợ quản lý code và lịch sử thay đổi, có khả năng tách nhánh (branch), hỗ trợ rất tốt cho teamwork, những việc như phân chia task, tổng hợp code trở nên dễ dàng hơn nhiều.
layout: post
permalink: /cac-lenh-su-dung-tren-git-nen-biet/
post_views_count:
  - "93"
categories: [Orther]
tags: [GIT]
authors:
  - name: 'anhkevin'
---

<span style="text-decoration: underline;"><span style="font-size: 14pt;"><strong>Git cheat sheet - Bảng các lệnh Git cơ bản</strong></span></span>  
[<img class="alignleft wp-image-552 size-full" src="img/uploads/2019/10/git-cheat-sheet-ime-share-blog.jpg" alt="" width="1200" height="1697" srcset="img/uploads/2019/10/git-cheat-sheet-ime-share-blog.jpg 1200w, img/uploads/2019/10/git-cheat-sheet-ime-share-blog-212x300.jpg 212w, img/uploads/2019/10/git-cheat-sheet-ime-share-blog-724x1024.jpg 724w, img/uploads/2019/10/git-cheat-sheet-ime-share-blog-768x1086.jpg 768w, img/uploads/2019/10/git-cheat-sheet-ime-share-blog-1086x1536.jpg 1086w, img/uploads/2019/10/git-cheat-sheet-ime-share-blog-106x150.jpg 106w, img/uploads/2019/10/git-cheat-sheet-ime-share-blog-300x424.jpg 300w" sizes="(max-width: 1200px) 100vw, 1200px" />](img/uploads/2019/10/git-cheat-sheet-ime-share-blog.jpg)

**<span style="font-size: 14pt;">- Thiết lập thông tin user</span>**

+ Thiết lập cho toàn bộ dự án thì có chữ **`--global`**

```shell
$ git config --global user.name "username"
$ git config --global user.email "username@domain.com"
```

+ Thiết lập riêng project đó thì bỏ chữ **`--global`**

```shell
$ git config user.name "username"
$ git config user.email "username@domain.com"
```

**<span style="font-size: 14pt;">- Clone một remote về</span>**

```shell
$ git clone https://github.com/user/repository.git
```

**<span style="font-size: 14pt;">- Lệnh liên quan Branch</span>**

+ Xem các nhánh hiện tại ở local

```shell
$ git branch
```

+ Xem tất cả các nhánh

```shell
$ git branch - a
```

+ Tạo mới một nhánh

```shell
$ git branch <name_branch>
```

+ Xóa một branch

```shell
$ git branch -d <name_branch>
```

**<span style="font-size: 14pt;">- Chuyển nhánh</span>**

```shell
$ git checkout <name_branch>
```

**<span style="font-size: 14pt;">- Kéo những thay đổi về nhánh hiện tại</span>**

```shell
$ git pull origin <name_branch>
```

**<span style="font-size: 14pt;">- Cập nhật thay đổi</span>**

**Bước 1:** Add các file trước khi commit

```shell
$ git add .
$ git add change_file.txt
$ git add folder_change/
```

Dòng 1: add tất cả  
Dòng 2: chỉ add file thay đổi muốn commit  
Dòng 3: chỉ add folder thay đổi muốn commit

**Bước 2:** Commit những thay đổi lên local

```shell
$ git commit - m "commit message"
```

**Bước 3:** Cập nhật các commit trên local lên server (nếu ko muốn cập nhật lên server thì bỏ qua bước này)

```shell
$ git push origin <name_branch>
```

**<span style="font-size: 14pt;">- Gộp nhánh</span>**  
Muốn gộp nhánh branch\_1 vào branch\_2 thì làm như sau:  
+ checkout vào nhánh branch_2  
+ sau đó merge nhánh branch_1 vào

```shell
$ git checkout <branch_2>
$ git merge <branch_1>
```