<script setup>
    import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'
</script>

<template>
    <main class="gradient-background flex flex-col min-h-screen">

        <Nav />

        <section class="px-4 sm:px-8 py-24 sm:py-32 max-w-5xl mx-auto fade-in-smooth">
            <a href="https://www.zola.com/registry/meaghanandgraham" target="_blank" class="">
                <div  class="text-2xl sm:text-4xl blue btn-bg transition rounded-lg py-4 px-8 flex items-center">
                    <span class="mr-2 montserrat-bold">Check out our Registry </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-16 w-16 blue" viewBox="0 0 24 24"><path d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z" style="fill:#455EB6" data-name="Right"/></svg>
                </div>
            </a>
        </section>

        <Footer class="mt-auto" />
      
    </main>
</template>