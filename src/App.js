import React from "react";

function App() {

  const createTodo = () => {
    const input = document.querySelector('input')
    const todoList = document.querySelector('.todoList')

    if(!input.value.trim()){
        return false
    }else{
        const div = document.createElement('div')
        const text2 = document.createElement('h3')
        const divButton = document.createElement('div')
        const deleteButton = document.createElement('button')
        const editButton = document.createElement('button')

        div.setAttribute('class', 'block_text')
        deleteButton.setAttribute('class', 'delete_button')
        editButton.setAttribute('class', 'edit_button')
        divButton.setAttribute('class', 'div_button')

        deleteButton.innerHTML = 'delete'
        editButton.innerHTML = 'edit'
        text2.innerHTML = input.value

        divButton.append(deleteButton, editButton)
        div.append(text2, divButton)
        todoList.prepend(div)

        deleteButton.onclick = () => div.remove()
        editButton.onclick = () => {
            const change = prompt(`You are changing ${text2.textContent}`)
            if(!change.trim()){
                return false
            }
            else{
                text2.innerText = change
            }
        }
        input.value = ''
    }
  }

  return (
    <div className="App">
      <div>
        <input type="text"/>
        <button onClick={createTodo} className="createButton">Add</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;
