// !declaration
let inputTodo = document.querySelector('.input-todo')
let btnTodo = document.querySelector('.btn-todo')
let listTodo = document.querySelector('.list-todo')

let elTodos = []
//! ===================== click btnTodo ============================
btnTodo.addEventListener('click', addNewTodo)

function addNewTodo(e) {
  e.preventDefault()
  if (inputTodo.value == '') {
    return
  } else {
    // !declaration
    let li = document.createElement('li')
    let inp = document.createElement('input')
    let divBtn = document.createElement('div')
    let divInput = document.createElement('div')
    let saveBtn = document.createElement('button')
    let editBtn = document.createElement('button')
    let removeBtn = document.createElement('button')

    //* ============================================================
    //! append
    listTodo.appendChild(li)
    divBtn.appendChild(editBtn)
    divBtn.appendChild(removeBtn)
    divInput.appendChild(inp)
    divInput.appendChild(saveBtn)
    li.appendChild(divInput)
    li.appendChild(divBtn)
    //*=============================================================
    //! add attribute
    li.classList.add('result-li')
    inp.classList.add('result-input')
    saveBtn.classList.add('custom-btn')
    saveBtn.classList.add('btn-5')
    editBtn.classList.add('custom-btn')
    editBtn.classList.add('btn-4')
    editBtn.classList.add('btn')
    removeBtn.classList.add('custom-btn')
    removeBtn.classList.add('btn-4')

    inp.disabled = true
    //*=============================================================
    //! inner text
    saveBtn.textContent = 'Save'
    editBtn.textContent = 'Edit'
    removeBtn.textContent = 'Remove'
    inp.value = inputTodo.value
    //*=============================================================
    saveToLocalStorage()

    //!========================== removeElement ====================
    removeBtn.addEventListener('click', removeElement)
    function removeElement() {
      li.remove()
      elTodos = JSON.parse(localStorage.getItem('key'))
    }

    //!======================= editElement =========================
    editBtn.addEventListener('click', editElement)
    function editElement() {
      inp.disabled = false
      elTodos = JSON.parse(localStorage.getItem('key'))
      let elementIndex = elTodos.indexOf(inp.value)
      elTodos.splice(elementIndex, 1)
      localStorage.setItem('key', JSON.stringify(elTodos))
    }
    //!===================== saveElement ===========================
    saveBtn.addEventListener('click', saveElement)
    function saveElement() {
      inp.disabled = true
      elTodos = JSON.parse(localStorage.getItem('key'))
      elTodos.push(inp.value)
      localStorage.setItem('key', JSON.stringify(elTodos))
    }
  }
  inputTodo.value = ''
}

// !============= saveToLocalStorage ==============================
function saveToLocalStorage() {
  elTodos.push(inputTodo.value)
  localStorage.setItem('key', JSON.stringify(elTodos))
}

//! ================= getTasksOnLoad ==============================

document.addEventListener('DOMContentLoaded', getTasksOnLoad)

function getTasksOnLoad() {
  if (localStorage.getItem('key')) {
    elTodos = JSON.parse(localStorage.getItem('key'))
  }

  elTodos.forEach((todo) => {
    // !declaration  on load
    let li = document.createElement('li')
    let inp = document.createElement('input')
    let divBtn = document.createElement('div')
    let divInput = document.createElement('div')
    let saveBtn = document.createElement('button')
    let editBtn = document.createElement('button')
    let removeBtn = document.createElement('button')

    //* ============================================================
    //! append  on load
    listTodo.appendChild(li)
    divBtn.appendChild(editBtn)
    divBtn.appendChild(removeBtn)
    divInput.appendChild(inp)
    divInput.appendChild(saveBtn)
    li.appendChild(divInput)
    li.appendChild(divBtn)
    //*=============================================================
    //! add attribute
    li.classList.add('result-li')
    inp.classList.add('result-input')
    saveBtn.classList.add('custom-btn')
    saveBtn.classList.add('btn-5')
    editBtn.classList.add('custom-btn')
    editBtn.classList.add('btn-4')
    editBtn.classList.add('btn')
    removeBtn.classList.add('custom-btn')
    removeBtn.classList.add('btn-4')

    inp.disabled = true
    //*=============================================================
    //! inner text on load
    saveBtn.textContent = 'Save'
    editBtn.textContent = 'Edit'
    removeBtn.textContent = 'Remove'
    inp.value = todo
    //*==============================================================

    //!============= removeElement in on load =======================
    removeBtn.addEventListener('click', removeElement)
    function removeElement() {
      li.remove()
      elTodos = JSON.parse(localStorage.getItem('key'))
      // console.log(elementsValue);
      let elementIndex = elTodos.indexOf(inp.value)
      // console.log(elementIndex, 123);
      elTodos.splice(elementIndex, 1)
      // console.log(elementsValue, 222);
      localStorage.setItem('key', JSON.stringify(elTodos))
    }

    //!======================= editElement =========================
    editBtn.addEventListener('click', editElement)
    function editElement() {
      inp.disabled = false
      elTodos = JSON.parse(localStorage.getItem('key'))
      let elementIndex = elTodos.indexOf(inp.value)
      elTodos.splice(elementIndex, 1)
      localStorage.setItem('key', JSON.stringify(elTodos))
    }
    //!===================== saveElement ===========================
    saveBtn.addEventListener('click', saveElement)
    function saveElement() {
      inp.disabled = true
      elTodos = JSON.parse(localStorage.getItem('key'))
      elTodos.push(inp.value)
      localStorage.setItem('key', JSON.stringify(elTodos))
    }
  })
}
