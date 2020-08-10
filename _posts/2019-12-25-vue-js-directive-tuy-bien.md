---
id: 706
title: Vue.js Directive tùy biến
date: 2019-12-25T18:24:17+07:00
author: Ime Share
excerpt: 'Một directive trong Vue được bắt đầu với v- để chỉ định rõ rằng đây là một thuộc tính riêng do Vue cung cấp, đồng thời thuộc tính này sẽ áp dụng một hành vi (behavior) đặc biệt lên kết quả DOM được render ra'
layout: post
permalink: /vue-js-directive-tuy-bien/
post_views_count:
  - "182"
categories:
  - Vuejs
tags:
  - vuejs
---
Một directive trong Vue được bắt đầu với v- để chỉ định rõ rằng đây là một thuộc tính riêng do Vue cung cấp, đồng thời thuộc tính này sẽ áp dụng một hành vi (behavior) đặc biệt lên kết quả DOM được render ra.

## `v-text`

Sử dụng lệnh v-text để truyền 1 đoạn text vào thẻ nào đó

<pre><h1 v-text="Hello World!">
  
</h1></pre>

Kết quả:

<pre><h1>
  Hello World!
</h1></pre>

## `v-once`

Sử dụng lệnh v-once để không cập nhật lại khi dữ liệu thay đổi

<pre><span v-once>Thông điệp này sẽ không bao giờ thay đổi: {{ msg }}</span></pre>

## `v-html`

Sử dụng lệnh v-html khi xuất HTML, giá trị trong v-html có thể chứa các thẻ HTML và vue.js sẽ tự động hiểu và xuất ra

<pre><div v-html="<h1>Hello World!</h1>">
  
</div></pre>

Kết quả:

<pre><div>
  <h1>
    Hello World!
  </h1>
  
</div></pre>

## `v-bind`

Sử dụng lệnh v-bind khi muốn truyền giá trị cho các thuộc tính của thẻ

<pre>v-bind:title="title"
v-bind:href="url"
.....</pre>

v-bind: có thể viết tắt thành :

<pre>:title="title"
:href="url"
</pre>

## `v-model`

v-model thường sử dụng trong các input, select,&#8230;có thể nhập hoặc thay đổi nôi dung dữ liệu và liên kết để gắn nội dung mới đó

<pre><div id="app">
  <input type="text" v-model="name" />
      
  
  <p>
    Name: {{ name }}
  </p>
  
      
  
  <select v-model="gender">
          &lt;option disabled value="">&lt;/option>
          &lt;option value="male">Male&lt;/option>
          &lt;option value="female">Female&lt;/option>
      </select>
      
  
  <p>
    Gender: {{ gender}}
  </p>
  
</div>

</pre>

Khi nhập nội dung vào input và chọn nội dung select thì dữ liệu của name, gender sẽ là dữ liệu mới vừa nhập và vừa chọn

## `v-if, v-else-if, v-else`

là các directive cho phép thực hiện các điều kiện

<pre><p v-if="isShow">
  Hey!
</p></pre>

isShow là một giá trị boolean có trong dữ liệu

## `v-for`

v-for cho phép hiển thị một danh sách

<pre><div id="app">
  <ul>
    <li v-for="item in items">
      {{ item }}
    </li>
      
  </ul>
  
</div>

</pre>

Mảng đối tượng

<pre><div id="app">
  <!-- using interpolation -->
      
  
  <ul>
    <li v-for="todo in todos">
      {{ todo.title }}
    </li>
        
  </ul>
      
  
  <!-- using v-text -->
      
  
  <ul>
    <li v-for="todo in todos" v-text="todo.title">
      
    </li>
        
  </ul>
  
</div>

</pre>

## `v-on`

v-on là directive sử dụng để kích hoạt các event DOM trong javascript

<pre><div id="app">
  <a v-on:click="handleClick">Click me!</a>
  
</div>

</pre>

v-on là directive rất phổ biến, phổ biến đến nỗi nó có cú pháp viết tắt là @

<pre><a v-on:click="handleClick">Click me!</a>
&lt;a @click="handleClick">Click me!&lt;/a>
</pre>

Ngoài ra còn có các option khác để sử dụng kết hợp với v-on

<pre>v-on.prevent
v-on.stop
v-on.capture
v-on.self
v-on.once
v-on.passive</pre>

Xem chi tiết [tại đây](https://vuejs.org/v2/guide/events.html#Event-Modifiers)

## `v-show`

là directive cho phép hiển thị hoặc ẩn phần tử HTML bằng display:none

<pre><p v-show="isShow">
  Hey!
</p></pre>

isShow là một giá trị boolean có trong dữ liệu

## `v-slot`

Slot là một cơ chế quan trọng cho phép đặt một component bên trong 1 component trong Vue.

v-slot: có thể viết tắt thành #

  


## `v-pre`

v-pre là directive sẽ bỏ qua việc biên dịch cho phần tử này và tất cả các phần tử con của nó.

<pre><div id="app">
  <span v-pre>{{ name }}</span>
  
</div>

</pre>

lúc này màn hình render ra hiển thị là

<pre>{{ name }}
</pre>

## `v-cloak`

v-cloak là một directive có thể giúp bạn muốn ẩn phần tử này cho đến khi Vue hoàn thành quá trình biên dịch xong.

<pre><div id="app">
  <div v-cloak>
    {{ message }}
      
  </div>
  
</div>

</pre>

&nbsp;

<span style="font-size: 13pt;">Ngoài ra có thể tự tạo hoặc custom directive được có thể tham khảo <a href="https://vuejs.org/v2/guide/custom-directive.html">tại đây</a></span>