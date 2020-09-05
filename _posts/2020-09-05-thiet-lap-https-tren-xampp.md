---
title: Thiết lập HTTPS trên XAMPP
date: 2020-09-05 21:30:00 +0800
categories: [Server]
tags: [xampp]
math: true
---

## 1. Tạo thư mục "crt"
`C:\xampp\apache\crt`

## 2. Thêm 2 file dưới vào thư mục "C:\xampp\apache\crt"
- [cert.conf](https://gist.github.com/anhkevin/c965d90eeb4b897f7f3b517318d05007#file-cert-conf)
- [make-cert.bat](https://gist.github.com/anhkevin/c965d90eeb4b897f7f3b517318d05007#file-make-cert-bat)

## 3. Chỉnh sửa file cert.conf and chạy make-cert.bat
- Chỉnh sửa file cert.conf: 
`{{DOMAIN}}`

- Chạy make-cert.bat và nhập domain

## 4. Cài đặt cert trên Windows

B1: nhấp vào file server.crt và bấm [Install Certificate...]
B2: Chọn "Local Machine" và bấm Next
B3: Chọn "Place all certificate in the following store" -> Chọn "Trusted Root Certificate Authorities" và bấm OK

## 5. Tạo Virtual Host trong Apache

```
<VirtualHost *:80>
	DocumentRoot "[SOURCE]"
	ServerName [DOMAIN]
	<Directory "[SOURCE]">
        Options FollowSymLinks
        AllowOverride All
        DirectoryIndex index.php
        Require all granted
	</Directory>
</VirtualHost>
<VirtualHost *:443>
	DocumentRoot "[SOURCE]"
	ServerName [DOMAIN]
	SSLEngine On
	SSLCertificateFile "C:\xampp\apache\crt\[DOMAIN]\server.crt"
	SSLCertificateKeyFile "C:\xampp\apache\crt\[DOMAIN]\server.key"
    <Directory "[SOURCE]">
        Options FollowSymLinks
        AllowOverride All
        DirectoryIndex index.php
        Require all granted
    </Directory>
</VirtualHost>
```

=> Xong, refresh lại web để kiểm tra.