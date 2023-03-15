function animateRow(obj, target, callBack) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // 将设置成 == 否则当一开始目标值就小于当前值的时候，就不会运动了
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // 回调函数写到定时器结束的时候
            // if (callBack) {
                // callBack();
            // }
            callBack && callBack();
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}

function animate(obj, target, callBack) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // 将设置成 == 否则当一开始目标值就小于当前值的时候，就不会运动了
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // 回调函数写到定时器结束的时候
            // if (callBack) {
                // callBack();
            // }
            callBack && callBack();
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}