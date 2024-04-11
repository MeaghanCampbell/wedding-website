<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
    <!-- desktop nav -->
    <nav class="hidden md:flex justify-between tracking-wide items-center pt-7 normal-text uppercase px-4 sm:px-8">
        <div class="blue w-24 text-2xl playfair-bold">
            <p>M<span class="fraunces-regular">&</span>G</p>
        </div>
        <div class="blue text-sm flex justify-center items-center md:space-x-6 lg:space-x-10 montserrat-bold">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/details">Details</RouterLink>
            <RouterLink to="/travel">Travel</RouterLink>
            <RouterLink to="/our-story">Our Story</RouterLink>
            <RouterLink to="/registry">Registry</RouterLink>
        </div>
        <RouterLink to="/rsvp" class="blue px-4 py-2 rounded btn-bg transition inline-flex montserrat-bold tracking-wide text-xl">
            <p class="text-center">RSVP</p>
        </RouterLink>
    </nav>

    <!-- mobile nav -->
    <nav class="md:hidden pt-7 normal-text uppercase px-4 sm:px-8" id="mobile-menu">
        <div>
            mobile menu
        </div>
    </nav>

</template>