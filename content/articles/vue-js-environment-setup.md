---
title: VueJS - Thiết Lập Môi Trường
date: 2019-12-21
description: 'Có nhiều cách để cài đặt VueJS. Ví dụ như sử dụng trực tiếp script, sử dụng NPM, CLI,...'
layout: post
permalink: /vue-js-environment-setup/
categories: [JavaScript]
tags: [Vue]
authors:
  - name: 'anhkevin'
---
Có nhiều cách để cài đặt VueJS. Ví dụ như sử dụng trực tiếp Script, sử dụng NPM, CLI,...

- Sử dụng Script trực tiếp trong HTML

```html
<script src="https://unpkg.com/vue"></script>
```
Liên kết "https://unpkg.com/vue" sẽ cung cấp phiên bản mới nhất của VueJS

- Sử dụng NPM

Đối với Project lớn thì nên sử dụng NPM, để có thể cài đặt và sử dụng các gói npm khác dễ dàng hơn, phát triển dự án nhanh hơn

```shell
npm  install vue
```

- Sử dụng dòng lệnh CLI

VueJS cung cấp CLI để cài đặt vue và bắt đầu với việc kích hoạt server. Để cài đặt bằng CLI, chúng ta cần cài đặt CLI được thực hiện bằng lệnh sau.

```shell
npm install --global vue-cli
```

=> Sau khi hoàn tất, nó sẽ hiển thị phiên bản CLI cho VueJS. Quá trình cài đặt sẽ mất vài phút.

```
+ vue-cli@2.8.2
added 965 packages in 355.414s
```

**Sau đây là lệnh để tạo Project sử dụng Webpack.**

```shell
vue init webpack myproject
```

**Sau khi tạo Project xong, để khởi động Project thì sử dụng lệnh dưới**

```shell
cd myproject
npm install
npm run dev
```