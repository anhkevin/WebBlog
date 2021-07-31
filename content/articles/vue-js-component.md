---
id: 865
title: Vue.js component
date: 2020-02-29
author: Ime Share
description: Component là các đối tượng Vue có thể sử dụng lại được, có thể dùng component như là một phần tử bên trong đối tượng Vue gốc được tạo bởi new Vue
layout: post
permalink: /vue-js-component/
post_views_count:
  - "89"
categories: [JavaScript]
tags: [Vue]
authors:
  - name: 'anhkevin'
---
**Component** là các đối tượng Vue có thể sử dụng lại được, có thể dùng component như là một phần tử bên trong đối tượng Vue gốc được tạo bởi new Vue

Đây là ví dụ về một component trong Vue:

```javascript
// Định nghĩa một component với tên là "button-counter"
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">Bạn đã bấm {{ count }} lần.</button>'
})
```

Sử dụng component

```javascript
<div id="components-demo">
  <button-counter></button-counter>
</div>

new Vue({ el: '#components-demo' })
```

Có thể tái sử dụng component bao nhiêu lần tùy ý:

```javascript
<div id="components-demo">
  <button-counter></button-counter>
  <button-counter></button-counter>
  <button-counter></button-counter>
</div>
```

Tham khảo code chạy thực tế: <https://codepen.io/anh-kevin/pen/rNVmJbj>