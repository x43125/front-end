// 获取元素
var createTodoBtn = document.getElementById('create')
var todoIn = document.getElementById('todo-in')
var todoOut = document.getElementById('todo-out')

// 创建一个数组，用来存储所有的todo  -- 获取事件
var todoArray = []
var doneArray = []
var checkboxes = []

todoArray.push('demo1')
doneArray.push('demo2')

todoOut.innerHTML = updateTodo()

// 然后每次创建todo后，将内容追加到todo数组中  -- 追加事件
function createTodo(todoValue) {
    if (todoValue == '') {
        return
    }

    todoArray.push(new Todo(todoValue, 'todo'))
}

// 完成某todo，将该todo从todo数组中删除，加到done数组中
function doneTodo(todoNo) {
    // 事务的
    doneArray.push(todoArray[todoNo])
    todoArray.splice(todoNo, 1)
}

// 数组每次更新后，都重新组装成一个todo输出列表  -- 更新输出事件
function updateTodo() {
    var outputValue = '';
    for (var i = 0; i < todoArray.length; i++) {
        
    }

    return outputValue
}

// 清除输入框内容
function clearInput() {
    todoIn.value = ''
}

// 赋予事件
console.log(todoIn.value);
createTodoBtn.onclick = function () {
    createTodo(todoIn.value)
    todoOut.innerHTML = updateTodo()
    clearInput()
}
 


checkboxes = document.getElementById('todo-out').getElementsByTagName('input')

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].onclick = function () {
        if (checkboxes[i].checked) {
            todoArray[i].state = 'done'
        } else {
            todoArray[i].state = 'todo'
        }
        todoOut.innerHTML = updateTodo()
    }
}



