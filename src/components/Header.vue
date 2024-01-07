<template>
  <header class="header">
    <router-link to="/">Home</router-link>
    <router-link to="/profile">Profile</router-link>
    <router-link to="/login">Login</router-link>
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: #F0F4C3;
  padding: 10px 50px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style>
<script setup lang="ts">
</script>
