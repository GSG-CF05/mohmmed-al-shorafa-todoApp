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

//!===================== the game====================================
let distance = 40
let distance1 = 40
let poring = document.querySelector(`.poring`)
let playing = document.querySelector(`.playing`)
let press = document.querySelector(`.press`)
let masta = document.querySelector(`.poringa`)

window.addEventListener('keydown', function (e) {
  keyR = this.document.querySelector(`.left[data-key="${e.keyCode}"]`)
  if (!keyR) {
    return
  } else if (keyR) {
    keyR.classList.add('playing')
    poring.classList.remove('poring-left')
    poring.classList.add('poring')
    poring.style.left = ' ' + distance + 'px'
    distance += 10
    if (distance > 720) {
      return (distance = 720)
    }
  }
})
// 2nd
window.addEventListener('keydown', function (e) {
  keyL = this.document.querySelector(`.right[data-key="${e.keyCode}"]`)
  if (!keyL) {
    return
  } else if (keyL) {
    keyL.classList.add('playing')
    poring.classList.add('poring-left')
    poring.classList.remove('poring')
    poring.style.left = ' ' + distance + 'px'
    distance -= 10
    if (distance < 0) {
      return (distance = 0)
    }
  }
})
// 3rd
window.addEventListener('keydown', function (e) {
  keyT = this.document.querySelector(`.top[data-key="${e.keyCode}"]`)

  if (!keyT) {
    return
  } else if (keyT) {
    keyT.classList.add('playing')
    poring.style.top = ' ' + distance1 + 'px'
    distance1 -= 10
    if (distance1 < 0) {
      return (distance1 = 0)
    }
  }
})
// 4th
window.addEventListener('keydown', function (e) {
  keyB = this.document.querySelector(`.bottom[data-key="${e.keyCode}"]`)

  if (!keyB) {
    return
  } else if (keyB) {
    keyB.classList.add('playing')
    poring.style.top = ' ' + distance1 + 'px'
    distance1 += 10
    if (distance1 > 440) {
      return (distance1 = 440)
    }
  }
})

window.addEventListener('transitionend', function removeTransition(e) {
  if (e.propertyName !== 'transform') {
    return
  } else {
    e.target.classList.remove('playing')
  }
})
