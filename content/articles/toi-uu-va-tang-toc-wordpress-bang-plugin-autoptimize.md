---
id: 611
title: Tối ưu và tăng tốc WordPress bằng plugin Autoptimize
date: 2019-12-11
author: Ime Share
description: Autoptimize là plugin giúp nén và giảm dung lượng file hỗ trợ cải thiện thời gian tải trang
layout: post
permalink: /toi-uu-va-tang-toc-wordpress-bang-plugin-autoptimize/
post_views_count:
  - "133"
categories: [PHP]
tags: [Wordpress]
authors:
  - name: 'anhkevin'
---
<span style="font-size: 13pt;"><strong>Autoptimize</strong> là plugin giúp nén và giảm dung lượng file hỗ trợ cải thiện thời gian tải trang thông qua các yếu tố chính sau:</span>  
<span style="font-size: 13pt;">- Nén, gộp, và tối ưu file CSS</span>  
<span style="font-size: 13pt;">- Nén, gộp, và tối ưu file JavaScript</span>  
<span style="font-size: 13pt;">- Nén HTML</span>

**Link plugin:** <http://wordpress.org/plugins/autoptimize/>

<span style="font-size: 14pt;"><strong>Cách thiết lập chi tiết Autoptimize</strong></span>

<span style="font-size: 13pt;"><strong>1. JavaScript Options</strong></span>  
- **Optimize JavaScript Code**: cho phép thiết lập Optimize cho JS  
- **Aggregate JS-files**: gộp tất cả JS thành 1 file  
- **Also aggregate inline JS**: gộp JS thành nội tuyến  
- **Force JavaScript in <head>**: là đẩy JS lên khu vực <head>  
- **Exclude scripts from Autoptimize**: loại trừ những file JS không muốn Autoptimize  
- **Add try-catch wrapping**: thêm try-catch nếu JS bị lỗi

<span style="font-size: 13pt;"><strong>2. CSS Options</strong></span>  
- **Optimize CSS Code**: cho phép thiết lập Optimize cho CSS  
- **Aggregate CSS-files**: gộp tất cả CSS thành 1 file  
- **Also aggregate inline CSS**: gộp CSS thành nội tuyến  
- **Generate data: URIs for images?** Điều này giúp ảnh nền nhỏ được nội tuyến vào file CSS để tránh thêm một lượt request tải ảnh về.  
- **Inline and Defer CSS**: là nội tuyến và trì hoãn tải CSS. Bình thường Autoptimze sẽ tối ưu hóa CSS và đưa nó lên đầu thẻ head, nhưng điều đó sẽ chặn hiển thị trang (cái bạn thường thấy PageSpeed Insight của Google thông báo). Khi bạn tick tùy chọn này, CSS sẽ được trì hoãn tải (ưu tiên HTML tải trước). Và để bố cục trang không bị ảnh hưởng quá lớn bạn có thể thêm CSS vào phần Paste the above the fold CSS here – là các CSS quan trọng liên quan đến bố cục của trang. Để có được nội dung CSS này, bạn vào trang: https://www.sitelocity.com/critical-path-css-generator rồi paste URL bài post vào, nó sẽ trích xuất cho bạn CSS cần thiết  
- **Inline all CSS**: là đặt nội tuyến tất cả CSS. Điều này có tác dụng giảm request so với việc đặt CSS ngoại tuyến.  
- **Exclude CSS from Autoptimize**: loại trừ các file CSS không muốn Autoptimize.

<span style="font-size: 13pt;"><strong>3. HTML Options</strong></span>  
- **Optimize HTML Code**: cho phép thiết lập Optimize cho HTML  
- **Keep HTML comments**: giữ HTML comment trong trang.

<span style="font-size: 13pt;"><strong>4. CDN Options</strong></span>  
**CDN Base URL**: Nếu bạn sử dụng dịch vụ CDN (như MaxCDN, KeyCDN) thì ở phần CDN options bạn điền URL gốc CDN vào đó, còn không thì bỏ trống

**<span style="font-size: 13pt;">5. Cache Info</span>:** phần này cho biết các thông tin liên quan đến cache, bao gồm thư mục, trạng thái cho phép ghi đè của Autoptimize và dung lượng file cache đang có.

**<span style="font-size: 13pt;">6. Misc Options</span>:** đây là tùy chọn bổ sung nâng cao  
- **Save aggregated script/css as static files**: lưu cache tĩnh các file JS và CSS  
- **Minify excluded CSS and JS files**: các file đã loại trừ Optimize thì sẽ không Minify  
- **Also optimize for logged in users**: optimize sẽ được bật cho cả người dùng đăng nhập

<div id="gtx-trans" style="position: absolute; left: -4px; top: 1110px;">
  <div class="gtx-trans-icon">
  </div>
</div>