<script setup>
    import { RouterLink } from 'vue-router'
    import { ref } from 'vue'

    let navOpen = ref(false)

    let toggleNav = function() {
        navOpen.value = !navOpen.value
    }
</script>

<template>
    <!-- desktop nav -->
    <nav class="hidden md:flex justify-between tracking-wide items-center pt-7 normal-text uppercase px-4 sm:px-8">
        <RouterLink to="/" class="blue w-24 text-2xl playfair-bold">
            <p>M<span class="fraunces-regular">&</span>G</p>
        </RouterLink>
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
    <nav class="bg-blue md:hidden normal-text uppercase">

        <div class="relative flex h-16 items-center justify-between px-4">
            <div class="inset-y-0 left-0 flex items-center sm:hidden">
                <!-- Mobile menu button-->
                <button type="button" @click="toggleNav" class="relative inline-flex items-center justify-center rounded-md p-2 white" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="absolute -inset-0.5"></span>
                    <span class="sr-only">Open main menu</span>
                    <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Menu open  -->
        <transition>
            <div class="md:hidden px-4 absolute z-50 bg-blue w-full" id="mobile-menu" v-if="navOpen">
                <div class="space-y-1 px-2 pb-3 pt-2 flex flex-col">
                    <RouterLink to="/" class="white py-2 font-bold tracking-wide">Home</RouterLink>
                    <RouterLink to="/details" class="white py-2 font-bold tracking-wide">Details</RouterLink>
                    <RouterLink to="/travel" class="white py-2 font-bold tracking-wide">Travel</RouterLink>
                    <RouterLink to="/our-story" class="white py-2 font-bold tracking-wide">Our Story</RouterLink>
                    <RouterLink to="/registry" class="white py-2 font-bold tracking-wide">Registry</RouterLink>
                    <RouterLink to="/rsvp" class="white py-2 font-bold tracking-wide">RSVP</RouterLink>
                </div>
            </div>
        </transition>

    </nav>

</template>