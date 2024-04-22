<script setup>
    import Nav from '../components/Nav.vue'
</script>

<template>
    <main class="gradient-background">

        <Nav />

        <section class="px-4 sm:px-8 py-14 sm:py-20 max-w-5xl mx-auto flex flex-col justify-center blue">
            <p class="text-3xl sm:text-4xl montserrat-light text-center playfair-bold">The Pine Island Lodge</p>
            <div class="flex justify-center mt-6">
                <iframe class="rounded-xl max-w-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.160881019981!2d-75.78882972386153!3d36.25987289797083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a527160e409ae9%3A0xcd5e23d09ffdc5e1!2sPine%20Island%20Lodge!5e0!3m2!1sen!2sus!4v1713827552687!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <p class="text-3xl sm:text-4xl montserrat-light text-center playfair-bold mt-14 sm:mt-20">Where to stay</p>
            <div class="mt-10">
                <p>items</p>
            </div>
            <p class="text-3xl sm:text-4xl montserrat-light text-center playfair-bold mt-14 sm:mt-20">What to do</p>
            <div class="mt-10">
                <p>items</p>
            </div>
        </section>

    </main>
</template>