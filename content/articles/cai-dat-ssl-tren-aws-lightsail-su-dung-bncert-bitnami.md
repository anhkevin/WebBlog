---
title: Cài đặt SSL trên Amazon Lightsail sử dụng bncert Bitnami
description: Các bước thiết lập SLL trên Lightsail sử dụng Bitnami Wordpress. Để thực hiện các bước thiết lập này yêu cầu đã cài đặt web trong Amazon Lightsail.
date: 2021-07-07
categories: [Orther]
tags: [Amazon]
math: true
authors:
  - name: 'anhkevin'
---

Để thực hiện các bước thiết lập bên dưới yêu cầu đã cài đặt web trong Amazon Lightsail thành công

## Bước 1. Truy cập [Lightsail](https://lightsail.aws.amazon.com/) để đăng nhập tài khoản
## Bước 2. Chọn kết nối SSH như hình
<img src="/img/uploads/2021/anhkevin_sll_bitnami.PNG" />

## Bước 3. Sau khi kết nối SSH thì mở màn hình Terminal
- Nhập lệnh dưới để chạy bncert
```shell
sudo /opt/bitnami/bncert-tool
```
<img src="/img/uploads/2021/anhkevin_sll_bitnami_1.PNG" />
=> nhập "Y" để cập nhật version

- Nhập domain cần thiết lập
<img src="/img/uploads/2021/anhkevin_sll_bitnami_2.PNG" />

- Trường hợp muốn thiết lập cho cả www.domain thì chọn Y như hình
<img src="/img/uploads/2021/anhkevin_sll_bitnami_3.PNG" />

- Thiết lập tự động chuyển HTTP sang HTTPS
<img src="/img/uploads/2021/anhkevin_sll_bitnami_4.PNG" />

- Nó liệt kê danh sách quá trình cài đặt => đồng ý "nhập Y" để bắt đầu
<img src="/img/uploads/2021/anhkevin_sll_bitnami_5.PNG" />
=> Trường hợp hiển thị "E-mail address []:" thì nhập email mong muốn vào, khi nào có vấn đề liên quan SSL nó báo.

- Đồng ý thỏa thuận file PDF (rãnh thì đọc nó nói gì - mình thì next)
<img src="/img/uploads/2021/anhkevin_sll_bitnami_6.PNG" />

Báo "Success" là thành công -> refresh lại web để kiểm tra