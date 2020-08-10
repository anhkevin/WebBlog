---
id: 361
title: Một số lệnh Command Line của MySQL nên biết!
date: 2019-10-27T18:25:31+07:00
author: Ime Share
layout: post
permalink: /mot-so-lenh-command-line-cua-mysql-nen-biet/
post_views_count:
  - "78"
categories:
  - SQL
tags:
  - linux
  - mysql
---
#### <span style="color: #000000;">Một số lệnh Command Line thao tác với MySQL</span>

Đăng nhập MySQL bạn dùng lệnh: mysql -u root -p  
**1. Truy cập Mysql**  
&#8211; Đăng nhập MySQL với tài khoản root bỏ qua nhập pass

<pre>mysql -u root</pre>

&#8211; Đăng nhập MySQL với tài khoản root và nhập pass

<pre>mysql -u root -p</pre>

**2. Thao tác database**  
&#8211; Hiển thị danh sách database

<pre>mysql> SHOW DATABASES;</pre>

&#8211; Tạo database

<pre>mysql> CREATE DATABASE database_name;</pre>

&#8211; Xóa database

<pre>mysql> DROP DATABASE database_name;</pre>

&#8211; Truy cập vào database

<pre>mysql> USE database_name;</pre>

&#8211; Hiển thị toàn bộ table

<pre>mysql> USE database_name;// Phải truy cập vào database trước nếu chưa truy cập
mysql> SHOW TABLES;</pre>

**3. Thao tác sao lưu và phục hồi**  
&#8211; Sao lưu toàn bộ database

<pre>mysql> mysqldump -u root -ppassword --all-databases >  bk_all_databases.sql</pre>

&#8211; Sao lưu một database

<pre>mysql> mysqldump -u root -ppassword database_name >  bk_database_name.sql</pre>

&#8211; Sao lưu cấu trúc database (không có data)

<pre>mysql> mysqldump --no-data --databases database_name1 database_name2 >  backup_structure.sql</pre>

&#8211; Sao lưu cấu trúc một số table của database

<pre>mysql> mysqldump --add-drop-table -u root -ppassword database_name table_1 table_2 >  backup_table.sql</pre>

&#8211; Khôi phục toàn bộ database từ file backup

<pre>mysql> mysql -u root -ppassword >  bk_all_databases.sql</pre>

&#8211; Khôi phục một database bất kỳ từ file backup

<pre>mysql> mysql -u root -ppassword database_name >  bk_database.sql</pre>

**4. Quản lý tài khoản và phân quyền**  
&#8211; Hiển thị toàn bộ users

<pre>mysql> SELECT * FROM mysql.user;</pre>

&#8211; Gán full quyền cho một user trên tất cả database

<pre>mysql> GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost' 
IDENTIFIED BY 'password' WITH GRANT OPTION;</pre>

&#8211; Gán full quyền cho một user trên một database

<pre>mysql> GRANT ALL PRIVILEGES ON database_name.* TO 'username'@'localhost' 
IDENTIFIED BY 'password' WITH GRANT OPTION;</pre>

&#8211; Phân quyền chi tiết cho một user

<pre>mysql> GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER, CREATE TEMPORARY TABLES, LOCK TABLES 
ON database_name.* TO 'username'@'localhost' IDENTIFIED BY 'password';</pre>

&#8211; Thay đổi mật khẩu user

<pre>mysql> UPDATE mysql.user SET password=PASSWORD("new_pass") WHERE User='username';</pre>

<span style="color: #800000;"><strong>=> Để các thay đổi trên được thực hiện ngay lập tức hãy thực hiện lệnh dưới</strong></span>

<pre>mysql> FLUSH PRIVILEGES;</pre>