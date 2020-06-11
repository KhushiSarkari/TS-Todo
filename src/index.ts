import {ToDo} from './Classes/ToDo';

let containerUL = document.querySelector('.itemList') as HTMLUListElement;
let addButton = document.querySelector('.add') as HTMLButtonElement;
let todoData = document.querySelector('.input') as HTMLInputElement;

addButton.addEventListener('click', e => {
    if (todoData.value !== '') {
        let todo = document.createElement('li');
        todo.classList.add('todo');
        new ToDo(containerUL, todoData.value, todo).addTodo();
    }
    else
        alert("Please specify the task first!")

});


