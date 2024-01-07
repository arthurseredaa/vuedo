<template>
  <h1>Hello! This is your profile</h1>
  <h3>Your completed tasks:</h3>
  <div v-for="todo in completedTodos" class="tasks-wrapper">
    <div class="task">
      <span>{{ todo.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useTodosStore} from "@/store/todos";
import {storeToRefs} from "pinia";

const todosStore = useTodosStore()
const {todos} = storeToRefs(todosStore)
const completedTodos = todos.value.filter(todo => todo.done)
</script>

<style scoped lang="scss">
.tasks-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;

  .task {
    display: flex;
    gap: 5px;
  }

  span {
    font-size: 20px;
  }
}
</style>
