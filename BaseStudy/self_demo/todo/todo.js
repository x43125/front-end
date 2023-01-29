// 获取元素
var createTodoBtn = document.getElementById('create')
var todoIn = document.getElementById('todo-in')
var todoOut = document.getElementById('todo-out')
var doneOut = document.getElementById('done-out')
var deleteOut = document.getElementById('delete-out')

// 创建一个数组，用来存储所有的todo  -- 获取事件
var todoArray = []
var doneArray = []
var deleteArray = []
var checkboxes = []

todoArray.push('demo1')
doneArray.push('demo2')
deleteArray.push('demo3')

// 进入后先更新一次
updateTodo()

// ------------- 函数
// 然后每次创建todo后，将内容追加到todo数组中  -- 追加事件
function createTodo(todoValue) {
    if (todoValue == '') {
        return
    }

    todoArray.push(todoValue)
    updateTodo()
}

// 完成某todo，将该todo从todo数组中删除，加到done数组中
function doneTodo(todoNo) {
    // 事务的
    doneArray.push(todoArray[todoNo])
    todoArray.splice(todoNo, 1)
    updateTodo()
}

// 数组每次更新后，都重新组装成一个todo输出列表  -- 更新输出事件
function updateTodo() {
    var todoListString = '';
    var doneListString = '';
    var deleteListString = '';
    // 更新todo
    for (var i = 0; i < todoArray.length; i++) {
        todoListString += '<li>' + todoArray[i] + '</li>'
    }
    todoOut.innerHTML = todoListString
    // 更新done
    for (var i = 0; i < doneArray.length; i++) {
        doneListString += '<li>' + doneArray[i] + '</li>'
    }
    doneOut.innerHTML = doneListString
    // 更新delete
    for (var i = 0; i < deleteArray.length; i++) {
        deleteListString += '<li>' + deleteArray[i] + '</li>'
    }
    deleteOut.innerHTML = deleteListString
}

// 清除输入框内容
function clearInput() {
    todoIn.value = ''
}

// ------------- 按钮赋予事件

//  创建按钮赋予事件
createTodoBtn.onclick = function () {
    createTodo(todoIn.value)
    clearInput()
}
// 完成按钮赋予事件





