import {defineStore} from "pinia";

type Todo = {
  id: number;
  text: string;
  done: boolean;
}

type State = {
  todos: Todo[];
  currentFilter: 'all' | 'done' | 'todo';
  nextId: number;
  newTodoText: string;
}

export const useTodosStore = defineStore('todos', {
  state: (): State => ({
    todos: [],
    currentFilter: 'all',
    nextId: 0,
    newTodoText: '',
  }),
  getters: {
    filteredTodos({ todos, currentFilter }): Todo[] {
      if (!todos.length) return [];
      if (currentFilter === 'all') return todos;
      if (currentFilter === 'done') return todos.filter(t => t.done);
      if (currentFilter === 'todo') return todos.filter(t => !t.done);
      return [];
    },
    doneCount({ todos }): number {
      if (!todos) return 0;
      return todos.filter(t => t.done).length;
    },
    todoCount({ todos }): number {
      if (!todos) return 0;
      return todos.filter(t => !t.done).length;
    },
  },
  actions: {
    add(text: string) {
      this.todos.push({
        id: this.nextId,
        text,
        done: false,
      });
      this.nextId++;
      this.newTodoText = '';
    },
    toggle(todoId: number) {
      this.todos = this.todos.map((todo) => todo.id === todoId ? {...todo, done: !todo.done} : todo)
    },
    remove(todo: Todo) {
      const index = this.todos.indexOf(todo);
      if (index > -1) {
        this.todos.splice(index, 1);
      }
    },
    setFilter(filter: 'all' | 'done' | 'todo') {
      this.currentFilter = filter;
    },
  }
})
