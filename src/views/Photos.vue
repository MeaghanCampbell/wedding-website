<script setup>
    import Nav from '../components/Nav.vue'
    import { ref } from 'vue';

    import photo1 from '../assets/gallery/katieludolphphotos-116.jpg'
    import photo2 from '../assets/gallery/katieludolphphotos-131.jpg'
    import photo3 from '../assets/gallery/katieludolphphotos-89.jpg'
    import photo4 from '../assets/gallery/katieludolphphotos-36.jpg'
    import photo5 from '../assets/gallery/katieludolphphotos-28.jpg'


    const images = [photo4, photo3, photo1, photo2, photo5]
    
    let loading = ref(true);
    let loadCounter = ref(0);
    const onLoad = () => {
        loadCounter.value++;
        if (loadCounter.value === images.length) {
            loading.value = false;
        }
    }
</script>

<template>
    <main class="gradient-background">
        <Nav />

        <section class="px-4 sm:px-8 py-14 sm:py-16 max-w-5xl mx-auto fade-in-smooth">
            <p v-show="loading" class="loader blue text-center text-2xl">loading...</p>
            <div class="image-grid">
                <img v-show="!loading" v-for="(image, path) in images" :key="path" :src="image" alt="images" :class="{'rounded-lg fade-in-smooth': true, 'loaded': !loading}" @load="onLoad" />
            </div>
        </section>
    </main>
</template>

