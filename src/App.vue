<template>
  <div class="container">
    <div>
      <input type="text" v-model="newTodoValue" />
      <Button :click-handler="addTodo">Add</Button>
      <Button :click-handler="() => isShowCompleted = !isShowCompleted">
        {{ isShowCompleted ? 'Hide completed' : 'Show completed' }}
      </Button>
    </div>
    <p v-if="!filteredTodos.length && !todos.length">
      There is no todos!
    </p>
    <p v-if="!filteredTodos.length && todos.length">
      You don't have new todos!
    </p>
    <div v-for="todo in filteredTodos" class="tasks-wrapper">
      <div class="task">
        <input type="checkbox" v-model="todo.isCompleted" />
        <span>{{ todo.text }}</span>
      </div>
      <Button :click-handler="() => removeTodo(todo.id)">Remove</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
import Button from "@/components/Button/Button.vue";

  type Todo = {
    id: number
    text: string
    isCompleted?: boolean
  }

  let newTodoValue = ref('')

  let todoId = 0
  let todos = ref<Todo[]>([])
  let isShowCompleted = ref(false)
  let filteredTodos = computed(() => {
    return isShowCompleted.value ? todos.value : todos.value.filter(todo => !todo.isCompleted)
  })

  const addTodo = () => {
    todos.value.push({
      id: todoId++,
      text: newTodoValue.value,
      isCompleted: false,
    })

    newTodoValue.value = ''
  }

  const removeTodo = (id: number) => {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }
</script>
