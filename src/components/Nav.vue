<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink class="text-green-500" to="/travel">Travel</RouterLink>
        <RouterLink to="/our-story">Our Story</RouterLink>
        <RouterLink to="/registry">Registry</RouterLink>
        <RouterLink to="/faq">FAQ</RouterLink>
        <RouterLink to="/rsvp">RSVP</RouterLink>
    </nav>
</template>