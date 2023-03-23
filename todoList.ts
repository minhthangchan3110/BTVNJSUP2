class ToDo {
    date: number;
    works: string[];

    constructor(date: number, works: string[]) {
        this.date = date;
        this.works = works;
    }
}

class ToDoList {
    todos_list: ToDo[];

    constructor() {
        this.todos_list = [];
    }

    addToDos(todo: ToDo) {
    const check = this.todos_list.some(todos => todos.date === todo.date);
    
        if (!check) {
            return this.todos_list.push(todo);
        } else {
            return console.error(`Ban viec`);
        }
    }
}

const todo_1 = new ToDo(14022023, ["Valentia", "Di choi voi ai do"]);
const todo_2 = new ToDo(29042023, ["Sinh nhat ban", "Di an sinh nhat"]);

const todoList = new ToDoList();
todoList.addToDos(todo_1);
todoList.addToDos(todo_2);
todoList.addToDos(new ToDo(31102023, ["Di sinh nhat toi "]));