<template>
  <div class="task">
    <div class="content">
      <input type="checkbox" v-model="todo.done" />
      <span>{{ todo.text }}</span>
    </div>
    <Button :click-handler="() => remove(todo)">Remove</Button>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/Button.vue";
import type {Todo} from "@/types/common";
import {useTodosStore} from "@/store/todos";

type Props = {
  todo: Todo
}

defineProps<Props>()

const { remove, toggle } = useTodosStore()
</script>

<style scoped lang="scss">
.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  border: 1px solid black;
  padding: 5px 10px;
  width: 100%;
  min-width: 300px;
}

.content {
  display: flex;
  align-items: center;
  gap: 5px;
}

.task span {
  text-decoration: none;
}

.task input {
  width: 20px;
  height: 20px;
}

.task input:checked + span {
  text-decoration: line-through;
}
</style>
