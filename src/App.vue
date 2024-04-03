<script setup>
import { RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
</script>

<template>
  <header>
    <div class="wrapper">
        <Nav />
    </div>
  </header>

  <RouterView />
</template>
