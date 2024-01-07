export type Todo = {
  id: string;
  text: string;
  done: boolean;
}

export type State = {
  todos: Todo[];
  currentFilter: 'all' | 'done' | 'todo';
  newTodoText: string;
}
