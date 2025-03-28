<script setup>
    import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'
</script>

<template>
    <main class="gradient-background flex flex-col min-h-screen">

        <Nav />

        <section class="px-4 sm:px-8 py-14 sm:py-16 max-w-5xl mx-auto fade-in-smooth">
            <p class="text-3xl sm:text-4xl montserrat-light text-center playfair-bold mb-10 blue">Check out our Registry on Zola...</p>
            <a href="https://www.zola.com/registry/meaghanandgraham" target="_blank" class="">
                <div  class="text-xl sm:text-3xl blue btn-bg transition rounded-lg py-4 px-8 flex items-center w-fit mx-auto">
                    <span class="mr-2 montserrat-bold">Go To Registry </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="sm:h-16 sm:w-16 h-10 w-10 blue" viewBox="0 0 24 24"><path d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z" style="fill:#455EB6" data-name="Right"/></svg>
                </div>
            </a>
        </section>

        <Footer class="mt-auto" />
      
    </main>
</template>