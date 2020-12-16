---
title: PHP 8.0 là bản cập nhật lớn của PHP
date: 2020-12-16 11:33:00 +0800
categories: [PHP]
tags: [PHP]
math: true
---

# PHP 8.0 là bản cập nhật lớn của PHP

## PHP JIT (Trình biên dịch Just in Time)

***

Đây là một trong các tính năng được mong đợi nhất ở lần cập nhật này.
PHP JIT được thực hiện gần như độc lập, nó có thể được bật / tắt vào lúc biên dịch mã code PHP. Khi được bật, mã PHP được lưu trữ trong một vùng nhớ cache và sẽ được chạy khi có yêu cầu.
=> Như vậy thì JIT sẽ giúp PHP biên dịch nhanh hơn.
Dưới đây là bảng so sánh hiệu suất của JIT trong PHP
![Desktop View]({{ "https://www.php.net/images/php8/scheme.svg" | relative_url }})

***

## Thay đổi cách khai báo các tham số bằng cách đặt trong các tham số ở hàm khởi tạo luôn

***

### PHP 7:
```php
class Point {
    public float $x;
    public float $y;
    public float $z;

    public function __construct(
        float $x = 0.0,
        float $y = 0.0,
        float $z = 0.0
    ) {
        $this->x = $x;
        $this->y = $y;
        $this->z = $z;
    }
}
```

### PHP 8:
```php
class Point {
    public function __construct(
        public float $x = 0.0,
        public float $y = 0.0,
        public float $z = 0.0,
    ) {}
}
```

***
