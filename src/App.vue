<template>
  <div class="container">
    <div>
      <input type="text" v-model="newTodoText" />
      <Button :click-handler="() => add(newTodoText)">Add</Button>
      <div v-for="button in filterButtons">
        <Button :class="{ active: currentFilter === button.type }" :click-handler="() => setFilter(button.type)" :id="button.id">
          {{ button.text }}
        </Button>
      </div>

    </div>
    <p>Completed: {{ doneCount }}</p>
    <p>Uncompleted: {{ todoCount }}</p>
    <p>Total: {{ todos.length }}</p>
    <div v-for="todo in filteredTodos" class="tasks-wrapper">
      <div class="task">
        <input type="checkbox" v-model="todo.done" @click="toggle(todo.id)" />
        <span>{{ todo.text }}</span>
      </div>
      <Button :click-handler="() => remove(todo)">Remove</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/Button/Button.vue";
import {useTodosStore} from "@/store/todos";
import {storeToRefs} from "pinia";
import {filterButtons} from '@/constants/ui'

const todosStore = useTodosStore()

const {add, remove, toggle, setFilter} = todosStore
const {filteredTodos, newTodoText, currentFilter, doneCount, todoCount, todos} = storeToRefs(todosStore)
</script>
