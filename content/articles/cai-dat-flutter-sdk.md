---
id: 484
title: Cài đặt Flutter SDK
description: Cách cài đặt môi trường phát triển Flutter SDK trên windows, MacOs hoặc Linux.
date: 2019-11-18
author: Ime Share
layout: post
permalink: /cai-dat-flutter-sdk/
post_views_count:
  - "108"
categories: [Orther]
tags: [Flutter]
authors:
  - name: 'anhkevin'
---
Nếu muốn biết **Flutter** là gì thì tự google nha. Để cài đặt môi trường phát triển thì thực hiện các thao tác phía dưới:

**Bước 1**. Cài đặt Flutter SDK trên windows [tại đây](https://flutter.dev/docs/get-started/install/windows) , đối với MacOs hoặc Linux thì xem thêm [tại đây](https://flutter.dev/docs/get-started/install)

**Bước 2**. Giải nén tệp vừa tải về vào thư mục bạn muốn cài đặt **Flutter**

**Bước 3**. Tạo biến môi trường để chạy các lệnh Flutter trên Windows  
- Gõ "env" tìm kiếm trên windows để vào "System Properties"  
- Bấm vào "Environment Variables"  
- Ở 2 mục User variables và System variables chỉnh sửa variable = Path và thêm giá trị "D:\Projects\flutter\bin" là thư mục bin của flutter vừa giải nén

**Bước 4**. Vào CMD đến thư mục chứa flutter gõ : **flutter doctor**  
Lệnh này kiểm tra môi trường của bạn và hiển thị một báo cáo về trạng thái cài đặt Flutter.

<span style="color: #ff0000;">D:\Projects\flutter\bin> flutter doctor</span>  
[<img class="aligncenter wp-image-500 size-full" src="/img/uploads/2019/11/flutter-sdk-ime-share-blog.png" alt="" width="889" height="263" srcset="/img/uploads/2019/11/flutter-sdk-ime-share-blog.png 889w, /img/uploads/2019/11/flutter-sdk-ime-share-blog-300x89.png 300w, /img/uploads/2019/11/flutter-sdk-ime-share-blog-768x227.png 768w, /img/uploads/2019/11/flutter-sdk-ime-share-blog-150x44.png 150w" sizes="(max-width: 889px) 100vw, 889px" />](/img/uploads/2019/11/flutter-sdk-ime-share-blog.png)