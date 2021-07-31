---
id: 803
title: Vue.js Filter (bộ lọc)
date: 2020-02-17
author: Ime Share
description: Vue cho phép định nghĩa các filter trong các định dạng văn bản thường gặp
layout: post
permalink: /vue-js-filter-bo-loc/
post_views_count:
  - "134"
categories: [JavaScript]
tags: [Vue]
authors:
  - name: 'anhkevin'
---
Vue cho phép định nghĩa các **filter** trong các định dạng văn bản hiển thị.  
Filter được đặt ở cuối một biểu thức JavaScript, biểu thị bằng kí hiệu |

Để hiểu rõ hơn đi tìm hiểu thứ tự theo ví dụ dưới.

**Ví dụ 1:** hiển thị tên name sau chữ Hi 

```javascript
<div id="app">
  <p>Hi {{ name }}!</p>
</div>

<script>
new Vue ({
  el: '#app',
  data: {
    name: 'ABC'
  }
})
</script>
```

Kết quả như sau: Hi ABC -> ví dụ trên chưa sử dụng filter

Nếu bạn muốn kiểm tra xem name có chứa giá trị hay không và không có thì hiển thị ra chữ "there" => Hi there  
Sử dụng filters "fallback" như bên dưới:

```javascript
<div id="app">
  <p>Hi {{ name | fallback }}!</p>
</div>

<script>
new Vue ({
  el: '#app',
  data: {
    name: 'ABC'
  },
  filters: {
    fallback: function(name) {
      return name ? name : 'there'
    }
  }
})
</script>
```

Ví dụ trên sử dụng cú pháp để áp dụng filters là "**| filterName**".

**Ví dụ 2:** In hoa chữ cái đầu tiên của một text

```javascript
<div id="app">
  <p>{{ message | capitalize }}</p>
</div>

<script>
new Vue ({
  el: '#app',
  data: {
    message: 'this is text'
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
})
</script>
```

ví dụ trên sử dụng một filter được đặt tên là capitalize

Ngoài ra có thể định nghĩa ở cấp toàn cục trước khi khởi tạo một đối tượng Vue như sau:

```javascript
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
```