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

    <Nav />

    <section class="px-4 sm:px-8 py-14 sm:py-20 max-w-5xl mx-auto">

      <div class="text-center space-y-4">
        <p class="text-4xl sm:text-5xl montserrat-light">Meaghan <span class="fraunces-regular">&</span> Graham</p>
        <p class="text-xl">June 6th, 2024</p>
        <p class="text-xl">The Pine Island Lodge • Corolla, North Carolina</p>
        <div class="px-4 py-2 rounded-lg bg-blue-50 border-2 border-blue-50 hover:bg-transparent transition inline-flex montserrat-bold tracking-wide text-xl">
          <RouterLink to="/rsvp">RSVP</RouterLink>
        </div>
      </div>

      <div class="fixed inset-x-0 bottom-0">
        <div class="px-4 sm:px-8">
          <div class="flex items-center fraunces-bold text-7xl sm:text-9xl text-transparent bg-clip-text bg-gradient-to-tr text-gradient py-6">
            <div class="flex flex-col items-center">
              <p>{{ timer.months }}:</p>
              <p class="text-xl sm:text-3xl">months</p>
            </div>
            <div class="flex flex-col items-center">
              <p>{{ timer.days }}:</p>
              <p class="text-xl sm:text-3xl">days</p>
            </div>
            <div class="flex flex-col items-center">
              <p>{{ timer.hours }}</p>
              <p class="text-xl sm:text-3xl">hours</p>
            </div>
          </div>
        </div>
      </div>

    </section>

  </main>
</template>

<style>
  .image-bg {
      background-image: url('../assets/ocean-photo.png');
      background-size: cover;
      background-position: top;
      height: 100vh; /* Adjust as needed */
  }
</style>
