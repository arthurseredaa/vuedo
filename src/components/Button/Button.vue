<template>
  <button @click="clickHandler" class="button">
    <slot />
  </button>
</template>

<script setup lang="ts">

type Props = {
  clickHandler: () => void
}

defineProps<Props>()

</script>

<style scoped lang="scss">
.button {
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
}
</style>
