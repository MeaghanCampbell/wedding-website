<script setup>
  import Nav from '../components/Nav.vue'
  import { RouterLink } from 'vue-router'
  import { onMounted, onUnmounted, reactive } from 'vue'

  const targetDate = new Date('June 6, 2025 17:00:00 EDT');
  const timer = reactive({
    months: 0,
    days: 0,
    hours: 0,
  });

  let intervalId;

  onMounted(() => {
    intervalId = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      timer.months = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24 * 30))).toString().padStart(2, '0');
      timer.days = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))).toString().padStart(2, '0');
      timer.hours = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).toString().padStart(2, '0');
    }, 1000);
  });

  onUnmounted(() => {
    clearInterval(intervalId);
  });
</script>

<template>
  <main class="image-bg">
    <div class="relative">

    <Nav />

    <section class="px-4 sm:px-8 py-14 sm:py-20 max-w-5xl mx-auto">

      <div class="text-center space-y-5 blue">
        <p class="text-5xl sm:text-6xl playfair-bold uppercase">Meaghan <span class="fraunces-bold">&</span> Graham</p>
        <p class="text-xl">June 6th, 2024</p>
        <p class="text-xl pb-1">Corolla, North Carolina</p>
        <RouterLink to="/rsvp" class="px-4 py-2 rounded btn-bg transition inline-flex montserrat-bold tracking-wide text-xl">
          <p>RSVP</p>
        </RouterLink>
      </div>

      <div class="fixed inset-x-0 bottom-0">
        <div class="px-4 sm:px-8">
          <div class="flex items-center playfair-regular text-8xl sm:text-9xl text-transparent bg-clip-text bg-gradient-to-l text-gradient py-7 max-w-xl">
            <div class="flex flex-col items-center">
              <p>{{ timer.months }}:</p>
              <p class="text-xl sm:text-2xl mt-3 tracking-wide playfair-bold">months</p>
            </div>
            <div class="flex flex-col items-center">
              <p>{{ timer.days }}:</p>
              <p class="text-xl sm:text-2xl mt-3 tracking-wide playfair-bold">days</p>
            </div>
            <div class="flex flex-col items-center">
              <p>{{ timer.hours }}</p>
              <p class="text-xl sm:text-2xl mt-3 tracking-wide playfair-bold">hours</p>
            </div>
          </div>
        </div>
      </div>

    </section>
    </div>
  </main>
</template>

<style>
  .image-bg {
      position: relative;
      background-image: url('../assets/home-photo.webp');
      background-size: cover;
      background-position: top;
      height: 100vh; /* Adjust as needed */
  }

  .image-bg::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, #cad3ec 0%, rgba(235, 233, 227, 0.55) 50%);
  }
</style>
