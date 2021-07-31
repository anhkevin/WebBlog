---
id: 274
title: Tăng kích thước upload size của PHP
description: Khi tôi up 1 file lớn hơn 30MB thì nó không báo lỗi gì cả và refresh lại trang nhưng không lưu vào database. Vấn đề là gì và do đâu?
date: 2019-10-12
author: Ime Share
layout: post
permalink: /tang-kich-thuoc-upload-size-cua-php/
post_views_count:
  - "53"
categories: [PHP]
tags: [PHP]
authors:
  - name: 'anhkevin'
---
**<span style="font-size: 13pt;">Tôi từng gặp lỗi liên quan đến thiết lập max_size trên php như sau:</span>**  
- Khi tôi up 1 file lớn hơn 30MB thì nó không báo lỗi gì cả và refresh lại trang nhưng không lưu vào database  
- Sau đó tôi up 1 file tầm 26MB thì nó lại báo lỗi "Do bạn up file lớn hơn quy định &#8230;. gì gì đó"  
- Nhưng tôi up 1 file dưới 18MB thì OK  
=> Lúc đầu không hiểu 26MB và 30MB thì liên quan gì nhau?  
Sau đó tôi tìm hiểu ra vấn đề là do thiết lập giới hạn max_size trên php.ini như sau:

```
upload_max_filesize = 20M
post_max_size = 30M

```

Do trên code đã check nếu upload file lớn hơn thiết lập **upload\_max\_filesize** trên php.ini thì báo lỗi, nhưng khi **$_POST** vượt quá thiết lập **post\_max\_size** trên php.ini thì lúc này **count($_POST)** lại bằng 0

**<span style="font-size: 13pt;">Cách giải quyết:</span>**  
**Cách 1:** Có thể thiết lập lại **php.ini** trên server cho 2 thông số này bằng nhau  
**Cách 2:** Nếu **count($_POST)** = 0 thì thông báo ABC gì đó