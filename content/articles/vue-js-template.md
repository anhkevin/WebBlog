---
id: 735
title: Vue.js Template
date: 2019-12-22
author: Ime Share
description: 'Vue.js sử dụng ngôn ngữ HTML tạo template. Bất kỳ HTML nào cũng sử dụng được Vue.js và ngoài ra Vue.js cung cấp hai thứ mạnh mẽ: nội suy và directive.'
layout: post
permalink: /vue-js-template/
post_views_count:
  - "108"
categories: [JavaScript]
tags: [Vue]
authors:
  - name: 'anhkevin'
---
Vue.js sử dụng một cú pháp template dựa trên HTML. Tất cả các template của Vue đều là code HTML hợp lệ và có thể được parse bởi các trình duyệt và parser chuẩn. Ngoài ra Vue.js cung cấp hai thứ mạnh mẽ: nội suy và directive.  
**Note:** _muốn biết directive là gì thì xem [ở đây](https://anhkevin.github.io/vue-js-directive-tuy-bien/) còn nội suy là gì thì xem tiếp bài dưới sẽ rõ_.

- HTML hợp lệ

```javascript
<div>Hello</div>
```

- Khởi tạo Vue.js có template name là app

```javascript
<div id="app">Hello</div>

<script>
new Vue ({
  el: '#app',
})
</script>
```

- Hiển thị tên phía sau chữ Hello bằng cách sử dụng phép nội suy dữ liệu từ vue, đó là thêm data vào vue và sử dụng {{ name }} là mẫu nội suy để hiển thị dữ liệu

```javascript
<div id="app">Hello {{ name }}</div>

<script>
new Vue ({
  el: '#app',
  data: {
    name: 'Anh'
  }
})
</script>
```

=> Lúc này html render ra là

```javascript
<div id="app">Hello Anh</div>
```

=> Và trên trình duyệt sẽ hiển thị

```javascript
Hello Anh
```

&nbsp;

**- Ví dụ thêm dữ liệu là html**

```javascript
<div id="app">
    Hello {{ name }}
    <div v-html = "htmlcontent"></div>
</div>
 
<script>
new Vue ({
  el: '#app',
  data: {
    name: 'Anh',
    htmlcontent : "<h1>Vue Js Template</h1>"
  }
})
</script>
```

=> Lúc này html render ra là

```javascript
<div id="app">
    Hello Anh
    <div><h1>Vue Js Template</h1></div>
</div>

```

**Note:** nếu dữ liệu data là html không thể sử dụng {{ htmlcontent }} mà phải sử dụng v-html = "htmlcontent" thì mới hiểu đó là html và render ra html được.

<span style="font-size: 13pt;">Đây là ví dụ nhằm hiểu cách khởi tạo Vue và sử dụng Vue template cơ bản.</span>