// 获取展示内容
var output = document.getElementById('output')

// 获取按钮主体
var no1 = document.getElementById('no1')
var no2 = document.getElementById('no2')
var no3 = document.getElementById('no3')
var no4 = document.getElementById('no4')
var no5 = document.getElementById('no5')
var no6 = document.getElementById('no6')
var no7 = document.getElementById('no7')
var no8 = document.getElementById('no8')
var no9 = document.getElementById('no9')
var no0 = document.getElementById('no0')
var noPoint = document.getElementById('noPoint')

var opSum = document.getElementById('opSum')
var opSub = document.getElementById('opSub')
var opMul = document.getElementById('opMul')
var opDev = document.getElementById('opDev')
var opTrans = document.getElementById('opTrans')
var opEqual = document.getElementById('opEqual')
var opClear = document.getElementById('opClear')

// 给按钮们添加点击事件
no1.onclick = function () {
    input(no1.innerText)
}
no2.onclick = function () {
    input(no2.innerText)
}
no3.onclick = function () {
    input(no3.innerText)
}
no4.onclick = function () {
    input(no4.innerText)
}
no5.onclick = function () {
    input(no5.innerText)
}
no6.onclick = function () {
    input(no6.innerText)
}
no7.onclick = function () {
    input(no7.innerText)
}
no8.onclick = function () {
    input(no8.innerText)
}
no9.onclick = function () {
    input(no9.innerText)
}
no0.onclick = function () {
    input(no0.innerText)
}
noPoint.onclick = function () {
    input(noPoint.innerText)
}

opClear.onclick = function () {
    input(opClear.innerText)
}
opSum.onclick = function () {
    input(opSum.innerText)
}
opSub.onclick = function () {
    input(opSub.innerText)
}
opMul.onclick = function () {
    input(opMul.innerText)
}
opDev.onclick = function () {
    input(opDev.innerText)
}
opEqual.onclick = function () {
    input(opEqual.innerText)
}

var opArr = ['+', '-', '*', '/', '%']
var left = right = result = null
var operator
var hasOperator = false

// 输入主体
function input(text) {
    if (text == 'AC') {
        // 清除
        clear()
    } else if ('=' == text) {
        // 等号
        if (result == null) {
            result = calculate(left, right, operator)
        }
    } else if (opArr.includes(text)) {
        if (result != null) {
            var temp = result
            clear()
            left = temp
        }
        // 运算符号
        if (!hasOperator) {
            // 没有运算符号则赋值
            operator = text
            hasOperator = true;
        }
        // 有则不处理
    } else {
        if (result != null) {
            clear()
        }
        // 普通数字
        if (!hasOperator) {
            // 没有符号则左边
            left = inputNumber(text, left)
        } else {
            // 有符号则右边
            right = inputNumber(text, right)
        }
    }

    // console.log(result);
    output.innerText = buildOutput(result, left, right, operator)
}

// 组装输出
function buildOutput(result, left, right, operator) {
    if (result != null) {
        return result
    }
    if (left == null) {
        return 0
    }
    if (operator == null) {
        return left
    }
    if (right == null) {
        return left + operator
    }
    return left + operator + right
}

// 处理输入是数字的情况
function inputNumber(text, leftOrRight) {
    // 有符号则右边
    if (leftOrRight == null || leftOrRight == 0) {
        // 第一个数
        leftOrRight = text
    } else if (text == '.' && leftOrRight.includes('.')) {
        // 如果输入的是. 且已经有.了则不许输入了
    } else {
        // 其他的则向后加就可以了
        leftOrRight += text
    }
    return leftOrRight
}

// 清屏
function clear() {
    left = null
    right = null
    operator = null
    result = null
    hasOperator = false
}

// 计算逻辑主体
function calculate(left, right, operator) {
    switch (operator) {
        case '+':
            return left * 1 + right * 1
        case '-':
            return left * 1 - right * 1
        case '*':
            return left * 1 * right * 1
        case '/':
            return left * 1 / (right * 1)
        case '%':
            return left * 1 % right * 1
        default:
            return NaN
    }
}


