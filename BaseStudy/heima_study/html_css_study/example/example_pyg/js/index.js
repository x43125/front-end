window.addEventListener('load', function () {
    var focus = this.document.querySelector('.focus');
    var arrow_l = this.document.querySelector('.arrow-l');
    var arrow_r = this.document.querySelector('.arrow-r');

    // 左右箭头出现
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    // mouseleave 当只要在此元素的面积覆盖上就不算离开
    // mouseout 当到达子元素的时候就算离开
    // 左右箭头消失
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(() => {
            arrow_r.click();
        }, 2000);
    })

    // 动态生成小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
    var focusWidth = focus.offsetWidth;
    var num = 0;
    var circle = 0;
    var flag = true;
    console.log("ul length : " + ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        // 生成子元素
        var li = this.document.createElement('li');
        // 给小圆圈设置属性，记录序号
        li.setAttribute('index', i);
        // 父元素插入子元素
        ol.appendChild(li);
        // 拍他思想
        li.addEventListener('click', function () {
            // 点击圆圈移动图片
            var index = this.getAttribute('index');
            for (var x = 0; x < ol.children.length; x++) {
                ol.children[x].className = '';
            }
            this.className = 'current';
            circle = num = parseInt(index);
            console.log(circle + ":" + num);
            animate(ul, -num * focusWidth);
        })
    }

    ol.children[num].className = 'current';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false;
            console.log(num);
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
                console.log(num);
            }
            num++;
            console.log(num);
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();
        }
    })

    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            circleChange();
        }
    })

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }

    var timer = setInterval(() => {
        // 善于发现善于利用现有的规律
        arrow_r.click();
    }, 2000);
})