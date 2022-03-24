---
title: VueJS - Computed Property
date: 2020-03-01
author: Ime Share
description: Computed Property trong VueJS thể hiện dưới dạng một phương thức hoặc một đối tượng (object) chứa các phương thức setter và getter dùng để thiết lập dữ liệu và lấy dữ liệu đưa ra template
layout: post
permalink: /vue-js-computed-property/
categories: [JavaScript]
tags: [Vue]
authors:
  - name: 'anhkevin'
---
**Computed Property** trong VueJS thể hiện dưới dạng một phương thức hoặc một đối tượng (object) chứa các phương thức setter và getter dùng để thiết lập dữ liệu và lấy dữ liệu đưa ra template. Khi bạn gọi một Computed Property thì bạn sẽ gọi nó như một thuộc tính bình thường. Và khi đó các hành động trong Computed Property sẽ được thực thi. Ngoài ra chúng ta cũng có thể cho rằng Computed Property là những hàm sử dụng để xử lý dữ liệu hiển thị lên template nhưng tối ưu hơn methods kết quả của nó sẽ được lưu trữ (Cache) và chỉ cập nhật khi cần thiết.

**Getter/Setter trong Computed Property**

Tìm hiểu về các hàm get/set trong Computed Property bằng cách sử dụng một ví dụ

```html
<div id = "computed_props">
    <input type="text" v-model="fullname" />
    <h1>{{firstName}}</h1>
    <h1>{{lastName}}</h1>
</div>
<script type = "text/javascript">
    var vm = new Vue({
        el: '#computed_props',
        data: {
            firstName: "Tian",
            lastName: "Dev"
        },
        methods: {
        },
        computed:{
            fullname: {
                get: function() {
                    return this.firstName+" "+this.lastName;
                }
            }
        }
    });
</script>
```

=> Lúc này kết quả input sẽ hiển thị đầy đủ fullname là "Tian Dev", do input liên kết với hàm fullname và đây là Computed Property trả về với hàm getter
Nhưng khi thay đổi giá trị input thì giá trị firstName và lastName không thay đổi.
Để làm cho giá trị firstName và lastName thay đổi khi chỉnh sửa giá trị input thì ta sử dụng hàm setter như bên dưới:

```javascript
set: function(name) {
    var fname = name.split(" ");
    this.firstName = fname[0];
    this.lastName = fname[1]
}
```

*Code đầy đủ có chứa getter/setter*

```html
<div id = "computed_props">
    <input type="text" v-model="fullname" />
    <h1>{{firstName}}</h1>
    <h1>{{lastName}}</h1>
</div>
<script type = "text/javascript">
    var vm = new Vue({
        el: '#computed_props',
        data: {
            firstName: "Tian",
            lastName: "Dev"
        },
        methods: {
        },
        computed:{
            fullname: {
                get: function() {
                    return this.firstName+" "+this.lastName;
                },
				set: function(name) {
                    var fname = name.split(" ");
                    this.firstName = fname[0];
                    this.lastName = fname[1]
                }
            }
        }
    });
</script>
```

=> Bây giờ khi thay đổi giá trị input thì giá trị của firstName và lastName cũng sẽ hiển thị thay đổi

*Note:* vậy khác biệt giữa methods và Computed là khi bạn gọi một method thì nó sẽ tính toán lại từ đầu. Còn đối với Computed thì khác, kết quả của các Computed sẽ được Cached và chỉ cập nhật khi dữ liệu thay đổi do đó sử dụng computed được coi là tiết kiệm thời gian và băng thông hơn.