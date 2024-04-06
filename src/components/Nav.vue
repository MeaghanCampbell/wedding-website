<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <nav class="bg-color flex space-x-6 items-center justify-center pt-5">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/travel">Travel</RouterLink>
        <RouterLink to="/our-story">Our Story</RouterLink>
        <RouterLink to="/registry">Registry</RouterLink>
        <RouterLink to="/faq">FAQ</RouterLink>
        <RouterLink to="/rsvp">RSVP</RouterLink>
    </nav>
</template>

<style>

</style>