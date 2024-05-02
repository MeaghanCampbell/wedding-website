<script setup>
    import Nav from '../components/Nav.vue'
    import { ref } from 'vue';

    import photo1 from '../assets/gallery/photo1.jpg'
    import photo2 from '../assets/gallery/photo2.jpg'
    import photo3 from '../assets/gallery/photo3.jpg'
    import photo4 from '../assets/gallery/photo4.jpg'
    import photo5 from '../assets/gallery/photo5.jpg'
    import photo6 from '../assets/gallery/photo6.jpg'
    import photo7 from '../assets/gallery/photo7.jpg'
    import photo8 from '../assets/gallery/photo8.jpg'
    import photo9 from '../assets/gallery/photo9.jpg'
    import photo10 from '../assets/gallery/photo10.jpg'
    import photo11 from '../assets/gallery/photo11.jpg'
    import photo12 from '../assets/gallery/photo12.jpg'
    import photo14 from '../assets/gallery/photo14.jpg'
    import photo15 from '../assets/gallery/photo15.jpg'
    import photo16 from '../assets/gallery/photo16.jpg'
    import photo17 from '../assets/gallery/photo17.jpg'
    import photo18 from '../assets/gallery/photo18.jpg'
    import photo19 from '../assets/gallery/photo19.jpg'
    import photo20 from '../assets/gallery/photo20.jpg'
    import photo21 from '../assets/gallery/photo21.jpg'
    import photo22 from '../assets/gallery/photo22.jpg'
    import photo23 from '../assets/gallery/photo23.jpg'
    import photo24 from '../assets/gallery/photo24.jpg'
    import photo25 from '../assets/gallery/photo25.jpg'

    const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo14, photo15, photo16, photo17, photo18, photo19, photo20, photo21, photo22, photo23, photo24, photo25]
    
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

