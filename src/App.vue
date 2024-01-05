<template>
  <div class="container">
    <div>
      <input type="text" v-model="newTodoValue" />
      <button @click="addTodo">Add</button>
      <button @click="isShowCompleted = !isShowCompleted">Show completed</button>
    </div>
    <p v-if="!filteredTodos.length">
      There is no todos!
    </p>
    <div v-for="todo in filteredTodos" class="tasks-wrapper">
      <div class="task">
        <input type="checkbox" v-model="todo.isCompleted" />
        <span>{{ todo.text }}</span>
      </div>
      <button @click="() => removeTodo(todo.id)">Remove</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

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

<style scoped>

</style>
