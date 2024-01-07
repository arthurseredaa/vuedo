<template>
  <div class="statuses">
    <div>Completed: {{ doneCount }}</div>
    <div>Uncompleted: {{ todoCount }}</div>
    <div>Total: {{ todos.length }}</div>
  </div>

  <div class="input-wrapper">
    <input type="text" v-model="newTodoText" />
    <Button :click-handler="() => add(newTodoText)">Add</Button>
  </div>
  <div class="filter-buttons">
    <div v-for="button in filterButtons">
      <Button :class="{ active: currentFilter === button.type }" :click-handler="() => setFilter(button.type)" :id="button.id">
        {{ button.text }}
      </Button>
    </div>
  </div>

  <div>
    <div v-for="todo in filteredTodos">
      <Task :todo="todo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/Button.vue";
import Task from "@/components/Task.vue";
import {useTodosStore} from "@/store/todos";
import {storeToRefs} from "pinia";
import {filterButtons} from '@/constants/ui'

const todosStore = useTodosStore()

const {add, setFilter} = todosStore
const {filteredTodos, newTodoText, currentFilter, doneCount, todoCount, todos} = storeToRefs(todosStore)
</script>

<style scoped lang="scss">
.statuses {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}

.filter-buttons {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-direction: row;
}

.input-wrapper {
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
}
</style>
