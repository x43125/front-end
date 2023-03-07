window.addEventListener('load', function () {
    var focus = this.document.querySelector('.focus');
    var arrow_l = this.document.querySelector('.arrow-l');
    var arrow_r = this.document.querySelector('.arrow-r');

    // 左右箭头出现
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
    })
    // mouseleave 当只要在此元素的面积覆盖上就不算离开
    // mouseout 当到达子元素的时候就算离开
    // 左右箭头消失
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
    })

    // 动态生成小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
    var focusWidth = focus.offsetWidth;
    var num = 0;
    var ulLength = ul.children.length;
    console.log("ul length : " + ulLength);
    for (var index = 0; index < ulLength; index++) {
        // 生成子元素
        var li = this.document.createElement('li');
        // 给小圆圈设置属性，记录序号
        li.setAttribute('index', index);
        // 父元素插入子元素
        ol.appendChild(li);
        // 拍他思想
        li.addEventListener('click', function () {
            // 点击圆圈移动图片
            var circleIndex = this.getAttribute('index');
            num = parseInt(circleIndex);
            picAndCircleMove(ul, ol, num, focusWidth, ulLength);
        })
    }

    ol.children[0].className = 'current';
    // 点击左右按钮移动轮播图
    arrow_r.addEventListener('click', function () {
        if (num == ulLength - 1) {
            num = 0;
            picAndCircleMove(ul, ol, num, focusWidth, ulLength);
            return;
        }
        num += 1;
        picAndCircleMove(ul, ol, num, focusWidth, ulLength);
    })

    arrow_l.addEventListener('click', function () {
        if (num == 0) {
            num = ulLength - 1;
            picAndCircleMove(ul, ol, num, focusWidth, ulLength);
            return;
        }
        num -= 1;
        picAndCircleMove(ul, ol, num, focusWidth, ulLength);
    })

    // 移动图片并切换小圆圈焦点
    function picAndCircleMove(ul, ol, num, focusWidth, ulLength) {
        animate(ul, -num * focusWidth);
        for (var i = 0; i < ulLength; i++) {
            ol.children[i].className = '';
        }
        ol.children[num].className = 'current';
    }

    // TODO 添加定时器
    this.setInterval(function () {
        picAndCircleMove(ul, ol, 1, focusWidth, ulLength);
    }, 1);
})