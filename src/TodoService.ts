import TodoTypes from "./todo";


const LOCAL_STORAGE_KEY = 'todos';

//! ACA ESTA TODO EL FUNCIONAMIENTO DE LA APP  

const TodoService = {


    // get Todos 
    getTodos: (): TodoTypes[] => {

        const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY)
        return todoStr ? JSON.parse(todoStr) : [];
    },


    // adding Todos
    addTodos: (text: string): TodoTypes => {
        const todos = TodoService.getTodos();
        const newTodo: TodoTypes = { id: todos.length + 1, text, completed: false };

        const updateTodos = [...todos, newTodo];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));

        return newTodo;
    },

    // Updating The TODO
    updateTodo: (todo: TodoTypes): TodoTypes => {

        const todos = TodoService.getTodos();

        const updateTodos = todos.map((t) => (t.id === todo.id ? todo : t));
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));

        return todo;
    },

    // Deleting the todo
    deleteTodo: (id: number): void => {
        const todos = TodoService.getTodos();

        const updateTodos = todos.filter((todo) => todo.id !== id);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
    }


}

export default TodoService