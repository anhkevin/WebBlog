---
title: CSS Card - Happy Women's Day
description: Happy Women's Day - Pure Css
date: 2023-10-18
categories: [CSS]
tags: [CSS]
math: true
authors:
  - name: 'anhkevin'
---

<div class="text-center">
  <iframe width="800" height="500" src="https://www.youtube.com/embed/XXIWIPpj4oA?autoplay=1" title="YouTube video player" allow="autoplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

***
**HTML:**
```html
<div class="card">
    <div class="card-detail">
        <h1>Happy Women's Day</h1>

        <p>" Ngày 20-10 chúc một nửa thế giới luôn thành công trong cuộc sống. "</p>
        <p>" Luôn duyên dáng và xinh đẹp trong mắt một nửa thế giới còn lại. "</p>
    </div>
    <div class="card-image">
        <img src="https://images.pexels.com/photos/931147/pexels-photo-931147.jpeg" alt="">
    
        <div class="card-info">
            <h2>Chúc Các Bạn Nữ:</h2>
            <ul>
                <li>Luôn khỏe mạnh</li>
                <li>Luôn nở nụ cười trên môi</li>
                <li>Luôn gặp may mắn trong cuộc sống</li>
                <li>Luôn xinh đẹp trong mắt mọi người</li>
                <li>Luôn hạnh phúc trong tình yêu</li>
            </ul>
        </div>
    </div>
</div>
```

***
**CSS:**
```css
@import url('https://fonts.googleapis.com/css?family=Old+Standard+TT|Farsan');
body {
    background: #ce9ffc;
}
.card {
    width: 700px;
    height: 350px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.9);
    border-radius: 5px;
    box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.5);
}

.card-detail, .card-image {
    position: relative;
    text-align: left;
    overflow: hidden;
    height: 100%;
    display: inline-block;
}

.card-detail {
    width: 40%;
    float: left;
    padding: 30px;
}

.card-detail h1 {
    font-family: 'Old Standard TT', serif;
    font-size: 30px;
    color: #344055;
    margin: 0;
}

.card-detail p {
    font-size: 20px;
    font-family: 'Farsan', serif;
    text-align: center;
    color: #7d7d7d;
}

.card-image {
    float: right;
    width: 50%;
    transition: all 0.3s ease-out;
}

.card-image img {
    width: 100%;
    height: auto;
}

.card-info {
    transform: translateX(-100%);
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(27, 26, 26, 0.9);
    width: 100%;
    height: 100%;
    font-family: 'Farsan', serif;
    color: #fff;
    line-height: 1.9;
    font-size: 120%;
    transition: all 0.3s ease-out;
}

.card-info h2 { text-align: center;}
.card-info ul li {
    transition: 0.3s ease;
}
.card-info ul li:hover {
    transform: translateX(50px) scale(1.3);
}
.card-image:hover .card-info {
    transform: translateX(0);
}
.card-image:hover img {
    transition: all 0.3s ease-out;
    transform: scale(1.2, 1.2);
}
```
