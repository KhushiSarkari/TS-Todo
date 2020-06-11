export class ToDo {

    constructor(
        private ul: HTMLUListElement,
        private todoData: string,
        private li: HTMLLIElement
    ) { }
    addTodo() {
        let input = document.createElement('input');
        input.disabled = true;
        input.value = this.todoData;
        this.li.append(input);
        let edit = document.createElement('button');
        edit.classList.add('edit-button');
        edit.innerText = 'Edit';
        this.li.appendChild(edit);
        let del = document.createElement('button');
        del.classList.add('delete-button');
        del.innerText = 'Delete';
        this.li.appendChild(del);
        this.ul.append(this.li);
        edit.addEventListener('click', e => this.editTodo(input));
        del.addEventListener('click', e => this.deleteTodo());
    }
    editTodo(input: HTMLInputElement) {
        input.disabled = false;
        let save = document.createElement('button');
        save.classList.add('save-changes');
        save.innerText = 'Save';
        this.li.appendChild(save);
        save.addEventListener('click', e => {
            this.todoData = input.value;
            this.li.removeChild(save);
            input.disabled = true;
        });

    }
    deleteTodo() {
        if (confirm('Remove ToDo?'))
            this.ul.removeChild(this.li);
    }

};

