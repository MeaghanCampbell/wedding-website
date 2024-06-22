<script setup>
    import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'

</script>

<template>
    <main class="gradient-background flex flex-col min-h-screen">

        <Nav />

        <section class="px-4 sm:px-8 py-14 sm:py-16 max-w-5xl mx-auto fade-in-smooth flex-grow">
            <p class="text-3xl sm:text-4xl montserrat-light text-center blue">Things to do coming <span class="playfair-italic">soon.</span></p>
        </section>

        <Footer class="mt-auto" />
      
    </main>
</template>