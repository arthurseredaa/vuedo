<template>
  <Header />
  <div class="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.app {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
}
</style>
