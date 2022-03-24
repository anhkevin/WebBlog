---
id: 753
title: VueJS - Methods (phương thức)
date: 2019-12-28
author: Ime Share
description: |
  Methods trong Vue.js là các phương thức của component
  Các phương thức có thể truyền tham số vào và có thể truy cập data dữ liệu
layout: post
permalink: /vue-js-methods-phuong-thuc/
post_views_count:
  - "141"
categories: [JavaScript]
tags: [Vue]
authors:
  - name: 'anhkevin'
---
Methods trong Vue.js là các phương thức của component  
Các phương thức có thể truyền tham số vào và có thể truy cập data dữ liệu

Các phương thức trong Vue.js được định nghĩa trong thuộc tính **methods**

```javascript
new Vue({
  methods: {
    handleClick: function() {
      alert('test')
    }
  }
})

```

Xem ví dụ về sự kiện click sẽ gọi phương thức xử lý

```javascript
<div id="app">
  <a @click="handleClick('Click')">Click me!</a>
  
</div>


```

Kết quả hiển thị khi nhấp chuột vào "Click me!" là: Anh, Click  
**Phân tích ví dụ trên**  
- text: là tham số  
- this.name là cách truy cập dữ liệu của name