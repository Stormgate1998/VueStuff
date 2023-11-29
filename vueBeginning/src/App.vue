<script setup lang="ts">
import Vehicle from './components/Vehicle.vue';
</script>

<template>
  
  <Vehicle :x="30" :y="90" :angle="90"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  animation: spin 10s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg); /* Rotate 360 degrees */
  }
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
