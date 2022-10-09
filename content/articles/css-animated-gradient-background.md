---
title: CSS Animated Gradient Background
description: CSS Gradient Backgrounds is CSS Pure without any images for modern background with beautiful CSS animation
date: 2022-10-09
categories: [CSS]
tags: [CSS]
math: true
authors:
  - name: 'anhkevin'
---

[![Watch the video](https://i.ytimg.com/vi/yNAPRKxXIwM/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDGBLINx7ct_LxZZyRdfxTxgqyOKA)](https://youtu.be/yNAPRKxXIwM)
***
**HTML:**
```html
<div class="bg-gradient">
    <div class="flex-center">
        <h1>CSS Animated <br>Gradient Background</h1>
        <h5>— Made with by TianDev —</h5>
    </div>
</div>
</div>
```

**CSS:**
```css
.bg-gradient {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 300px;
}

.flex-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
		    background-position: 0% 50%;
    }
}
```
