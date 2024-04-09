<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <!-- desktop nav -->
    <nav class="hidden md:flex space-x-8 tracking-wide items-center justify-center pt-7 normal-text uppercase px-4 sm:px-8">
        <RouterLink class="" to="/">Home</RouterLink>
        <RouterLink to="/details">Details</RouterLink>
        <RouterLink to="/travel">Travel</RouterLink>
        <RouterLink to="/our-story">Our Story</RouterLink>
        <RouterLink to="/registry">Registry</RouterLink>
        <div class="px-4 py-2 rounded-lg bg-blue-50 border-2 border-blue-50 hover:bg-transparent transition inline-flex montserrat-bold tracking-wide">
            <RouterLink to="/rsvp">RSVP</RouterLink>
        </div>
    </nav>
    <!-- mobile nav -->
    <nav class="md:hidden pt-7 normal-text uppercase px-4 sm:px-8" id="mobile-menu">
        <div>
            mobile menu
        </div>
    </nav>
</template>

<style>

</style>