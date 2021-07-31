---
id: 898
title: Phân biệt empty và isset trong php
date: 2020-03-09
author: Ime Share
description: |
  Hàm isset - Xác định nếu một biến được khai báo và không phải là NULL.
  Hàm empty - Xác định xem một biến có trống không.
layout: post
permalink: /phan-biet-empty-va-isset-trong-php/
post_views_count:
  - "110"
categories: [PHP]
tags: [PHP]
authors:
  - name: 'anhkevin'
---
**Hàm isset** - Xác định nếu một biến được khai báo và không phải là NULL. Nói cách khác, nó trả về true chỉ khi biến không phải là NULL.  
**Hàm empty** - Xác định xem một biến có trống không.  
Trả về FALSE nếu biến $var tồn tại và có giá trị không trống, khác không. Nếu không thì trả lại TRUE.  
Các giá trị sau được coi là trống: "", 0, 0.0, "0", NULL, FALSE, array()

**So sánh isset và empty:**

<table style="border-collapse: collapse; width: 100%; height: 292px;background: gainsboro;">
  <tr style="height: 24px;background: #b4c0e8;">
    <td style="width: 40%; height: 24px; text-align: center;">
      <strong>Variable ($var)</strong>
    </td>
    <td style="width: 30%; height: 24px; text-align: center;">
      <strong>isset($var)</strong>
    </td>
    <td style="width: 30%; height: 24px; text-align: center;">
      <strong>empty($var)</strong>
    </td>
  </tr>
  <tr style="height: 24px;">
    <td style="width: 40%; height: 24px; text-align: center;">
      “” (chuỗi rỗng)
    </td>
    <td style="width: 30%; height: 24px; text-align: center;">
      bool(true)
    </td>
    <td style="width: 30%; height: 24px; text-align: center;">
      bool(true)
    </td>
  </tr>
<tr style="height: 24px;">
    <td style="width: 40%; height: 24px; text-align: center;">
      ” ” (chuỗi chứa space)
    </td>
    <td style="width: 30%; height: 24px; text-align: center;">
      bool(true)
    </td>
    <td style="width: 30%; height: 24px; text-align: center;">
    </td>
  </tr>
<tr style="height: 24px;">
    <td style="width: 40%; height: 24px; text-align: center;">
    </td>
    <td style="width: 30%; height: 24px; text-align: center;">
      bool(true)
    </td>
    <td style="width: 30%; height: 24px; text-align: center;">
      bool(true)
    </td>
  </tr>
<tr style="height: 24px;">
    <td style="width: 40%; height: 24px; text-align: center;">
      0.0
    </td>
<td style="width: 30%; height: 24px; text-align: center;">
      bool(true)
    </td>
<td style="width: 30%; height: 24px; text-align: center;">
      bool(true)
    </td>
  </tr>
<tr style="height: 24px;">
    <td style="width: 40%; height: 24px; text-align: center;">
      "0"
    </td>
<td style="width: 30%; height: 24px; text-align: center;">
      bool(true)
    </td>
<td style="width: 30%; height: 24px; text-align: center;">
      bool(true)
    </td>
  </tr>
<tr style="height: 24px;">
    <td style="width: 40%; height: 24px; text-align: center;">
      NULL
    </td>
<td style="width: 30%; height: 24px; text-align: center;">
    </td>
<td style="width: 30%; height: 24px; text-align: center;">
      bool(true)
    </td>
  </tr>
<tr style="height: 24px;">
    <td style="width: 40%; height: 24px; text-align: center;">
      FALSE
    </td>
<td style="width: 30%; height: 24px; text-align: center;">
      bool(true)
    </td>
<td style="width: 30%; height: 24px; text-align: center;">
      bool(true)
    </td>
  </tr>
<tr style="height: 24px;">
    <td style="width: 40%; height: 24px; text-align: center;">
      TRUE
    </td>
<td style="width: 30%; height: 24px; text-align: center;">
      bool(true)
    </td>
<td style="width: 30%; height: 24px; text-align: center;">
    </td>
  </tr>
<tr style="height: 24px;">
    <td style="width: 40%; height: 24px; text-align: center;">
      array()<br /> (một array trống)
    </td>
<td style="width: 30%; height: 24px; text-align: center;">
      bool(true)
    </td>
<td style="width: 30%; height: 24px; text-align: center;">
      bool(true)
    </td>
  </tr>
<tr style="height: 52px;">
    <td style="width: 50%; height: 52px; text-align: center;">
      var $var;<br /> (một biến được khai báo,<br> nhưng không có giá trị)
    </td>
<td style="width: 25%; height: 52px; text-align: center;">
    </td>
<td style="width: 25%; height: 52px; text-align: center;">
      bool(true)
    </td>
  </tr>
</table>