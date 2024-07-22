<script setup>
    import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'
    import hamptonInn from '../assets/hampton-inn.jpg'
    import sanderling from '../assets/sanderling.webp'
    import innAtCorolla from '../assets/inn-at-corolla-light.jpg'
    import airbnb from '../assets/airbnb.png'
    import vrbo from '../assets/vrbo.png'
    import atlantic from '../assets/atlantic.png'
    import twiddy from '../assets/twiddy.png'
    import { RouterLink } from 'vue-router'

</script>

<template>
    <main class="gradient-background">

        <Nav />

        <section class="px-4 sm:px-8 py-14 sm:py-16 max-w-5xl mx-auto flex flex-col justify-center blue fade-in-smooth">
            <p class="text-3xl sm:text-4xl montserrat-light text-center playfair-bold">The Pine Island Lodge</p>
            <div class="flex justify-center mt-6">
                <iframe class="rounded-xl max-w-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.160881019981!2d-75.78882972386153!3d36.25987289797083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a527160e409ae9%3A0xcd5e23d09ffdc5e1!2sPine%20Island%20Lodge!5e0!3m2!1sen!2sus!4v1713827552687!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <p class="text-3xl sm:text-4xl montserrat-light text-center playfair-bold mt-14 sm:mt-16">Flying to the wedding?</p>
            <div class="mt-10 flex flex-col md:flex-row md:justify-center text-center space-y-4 md:space-y-0 md:space-x-6">
                <div class="bg-white p-4 rounded-lg space-y-2 flex flex-col items-center">
                    <h2 class="text-xl font-semibold">Norfolk International Airport <span class="font-normal">(ORF)</span></h2>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon-width blue" fill="currentColor" viewBox="0 0 50 50" width="35px" height="35px"><path d="M 43.125 11 C 41.394531 11 39.621094 11.378906 37.875 12.15625 L 9.625 24.78125 C 9.542969 24.820313 9.464844 24.84375 9.40625 24.84375 C 9.171875 24.84375 8.765625 24.519531 8.40625 24.25 C 7.054688 23.253906 5.085938 21.824219 4.46875 21.34375 C 4.003906 20.988281 3.359375 20.78125 2.65625 20.78125 C 1.617188 20.78125 0.753906 21.195313 0.3125 21.875 C -0.046875 22.429688 -0.109375 23.113281 0.1875 23.78125 L 3.75 31.6875 C 4.179688 32.652344 5.292969 33.8125 8.15625 33.8125 C 11.414063 33.8125 16.46875 32.3125 22.78125 29.5 L 24.09375 28.90625 L 21.8125 41.125 C 21.539063 42.222656 21.578125 42.96875 21.96875 43.46875 C 22.21875 43.789063 22.59375 43.96875 23 43.96875 C 23.203125 43.96875 23.414063 43.9375 23.625 43.84375 L 25.1875 43.15625 C 26.363281 42.632813 27.621094 41.011719 28.1875 39.78125 L 35.625 23.6875 C 49.855469 17.023438 50.496094 15.613281 49.875 14.21875 C 49.160156 12.621094 46.621094 11 43.125 11 Z M 13.875 12.9375 C 13.3125 12.9375 12.503906 13 11.875 13.28125 L 10.3125 13.96875 C 9.796875 14.199219 9.457031 14.640625 9.4375 15.15625 C 9.40625 16.121094 10.386719 16.734375 11.0625 17.09375 L 15.65625 19.90625 L 24.71875 15.84375 L 16.34375 13.28125 C 15.585938 13.050781 14.726563 12.9375 13.875 12.9375 Z"/></svg>
                        <span class="font-semibold text-xl">+</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon-width blue" fill="currentColor" viewBox="0 0 50 50" width="35px" height="35px"><path d="M 13.037109 11 C 11.45613 11 9.948854 11.677199 8.8984375 12.859375 L 2.3417969 20.234375 C 0.93270474 21.067231 -0.010735503 22.586565 -0.0234375 24.308594 L -0.0703125 30.943359 C -0.0822777 32.581096 1.2613602 33.937957 2.8984375 33.939453 L 5.078125 33.941406 C 5.2428512 35.090851 5.7025415 36.202225 6.5019531 37.101562 C 7.5185588 38.245244 9.0833339 39 11 39 C 13.962876 39 16.329315 36.788858 16.806641 33.957031 L 33.166016 33.978516 C 33.337288 35.110214 33.714147 36.21528 34.501953 37.101562 C 35.518559 38.245249 37.083334 39 39 39 C 41.961814 39 44.43157 36.826434 44.910156 33.996094 L 47.072266 33.998047 C 48.676429 33.999556 50 32.678454 50 31.074219 L 50 25.412109 C 50 22.962063 48.216073 20.856414 45.798828 20.453125 L 37.125 19.007812 L 32.861328 12.914062 C 32.021719 11.714437 30.64744 11 29.183594 11 L 13.037109 11 z M 13.037109 13 L 21 13 L 21 19 L 8.9375 19 L 5.7617188 19.398438 L 10.392578 14.1875 C 11.064162 13.431676 12.026089 13 13.037109 13 z M 23 13 L 29.183594 13 C 29.997747 13 30.756265 13.394172 31.222656 14.060547 L 34.679688 19 L 23 19 L 23 13 z M 11 29 C 13.220986 29 15 30.779015 15 33 C 15 35.220985 13.220986 37 11 37 C 9.5833342 37 8.6481071 36.504756 7.9980469 35.773438 C 7.3479866 35.042119 7 34.027778 7 33 C 7 31.972222 7.3479866 30.957882 7.9980469 30.226562 C 8.6481071 29.495244 9.5833342 29 11 29 z M 39 29 C 41.220986 29 43 30.779015 43 33 C 43 35.220985 41.220986 37 39 37 C 37.583334 37 36.648107 36.504756 35.998047 35.773438 C 35.347987 35.042119 35 34.027778 35 33 C 35 31.972222 35.347987 30.957882 35.998047 30.226562 C 36.648107 29.495244 37.583334 29 39 29 z"/></svg>
                    </div>
                    <p>~2 hour drive to Corolla</p>
                </div>
                <div class="bg-white p-4 rounded-lg space-y-2 flex flex-col items-center">
                    <h2 class="text-xl font-semibold">Richmond International Airport <span class="font-normal">(RIC)</span></h2>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon-width blue" fill="currentColor" viewBox="0 0 50 50" width="35px" height="35px"><path d="M 43.125 11 C 41.394531 11 39.621094 11.378906 37.875 12.15625 L 9.625 24.78125 C 9.542969 24.820313 9.464844 24.84375 9.40625 24.84375 C 9.171875 24.84375 8.765625 24.519531 8.40625 24.25 C 7.054688 23.253906 5.085938 21.824219 4.46875 21.34375 C 4.003906 20.988281 3.359375 20.78125 2.65625 20.78125 C 1.617188 20.78125 0.753906 21.195313 0.3125 21.875 C -0.046875 22.429688 -0.109375 23.113281 0.1875 23.78125 L 3.75 31.6875 C 4.179688 32.652344 5.292969 33.8125 8.15625 33.8125 C 11.414063 33.8125 16.46875 32.3125 22.78125 29.5 L 24.09375 28.90625 L 21.8125 41.125 C 21.539063 42.222656 21.578125 42.96875 21.96875 43.46875 C 22.21875 43.789063 22.59375 43.96875 23 43.96875 C 23.203125 43.96875 23.414063 43.9375 23.625 43.84375 L 25.1875 43.15625 C 26.363281 42.632813 27.621094 41.011719 28.1875 39.78125 L 35.625 23.6875 C 49.855469 17.023438 50.496094 15.613281 49.875 14.21875 C 49.160156 12.621094 46.621094 11 43.125 11 Z M 13.875 12.9375 C 13.3125 12.9375 12.503906 13 11.875 13.28125 L 10.3125 13.96875 C 9.796875 14.199219 9.457031 14.640625 9.4375 15.15625 C 9.40625 16.121094 10.386719 16.734375 11.0625 17.09375 L 15.65625 19.90625 L 24.71875 15.84375 L 16.34375 13.28125 C 15.585938 13.050781 14.726563 12.9375 13.875 12.9375 Z"/></svg>
                        <span class="font-semibold text-xl">+</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon-width blue" fill="currentColor" viewBox="0 0 50 50" width="35px" height="35px"><path d="M 13.037109 11 C 11.45613 11 9.948854 11.677199 8.8984375 12.859375 L 2.3417969 20.234375 C 0.93270474 21.067231 -0.010735503 22.586565 -0.0234375 24.308594 L -0.0703125 30.943359 C -0.0822777 32.581096 1.2613602 33.937957 2.8984375 33.939453 L 5.078125 33.941406 C 5.2428512 35.090851 5.7025415 36.202225 6.5019531 37.101562 C 7.5185588 38.245244 9.0833339 39 11 39 C 13.962876 39 16.329315 36.788858 16.806641 33.957031 L 33.166016 33.978516 C 33.337288 35.110214 33.714147 36.21528 34.501953 37.101562 C 35.518559 38.245249 37.083334 39 39 39 C 41.961814 39 44.43157 36.826434 44.910156 33.996094 L 47.072266 33.998047 C 48.676429 33.999556 50 32.678454 50 31.074219 L 50 25.412109 C 50 22.962063 48.216073 20.856414 45.798828 20.453125 L 37.125 19.007812 L 32.861328 12.914062 C 32.021719 11.714437 30.64744 11 29.183594 11 L 13.037109 11 z M 13.037109 13 L 21 13 L 21 19 L 8.9375 19 L 5.7617188 19.398438 L 10.392578 14.1875 C 11.064162 13.431676 12.026089 13 13.037109 13 z M 23 13 L 29.183594 13 C 29.997747 13 30.756265 13.394172 31.222656 14.060547 L 34.679688 19 L 23 19 L 23 13 z M 11 29 C 13.220986 29 15 30.779015 15 33 C 15 35.220985 13.220986 37 11 37 C 9.5833342 37 8.6481071 36.504756 7.9980469 35.773438 C 7.3479866 35.042119 7 34.027778 7 33 C 7 31.972222 7.3479866 30.957882 7.9980469 30.226562 C 8.6481071 29.495244 9.5833342 29 11 29 z M 39 29 C 41.220986 29 43 30.779015 43 33 C 43 35.220985 41.220986 37 39 37 C 37.583334 37 36.648107 36.504756 35.998047 35.773438 C 35.347987 35.042119 35 34.027778 35 33 C 35 31.972222 35.347987 30.957882 35.998047 30.226562 C 36.648107 29.495244 37.583334 29 39 29 z"/></svg>
                    </div>
                    <p>~3 hour drive to Corolla</p>
                </div>
            </div>
            <p class="text-3xl sm:text-4xl montserrat-light text-center playfair-bold mt-14 sm:mt-16 mb-10">Where to stay</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="max-w-xs mx-auto bg-white p-4 rounded-lg flex flex-col items-center">
                    <div style="width:17rem;" class="h-48 relative">
                        <img :src="hamptonInn" alt="hampton inn" class="absolute w-full h-full object-cover rounded-lg" />
                    </div>
                    <p class="text-lg font-semibold mb-3 mt-3 text-center bottom-border pb-2">Hampton Inn & Suites <br /><span class="font-normal">Outer Banks / Corolla - Hilton</span></p>
                    <p class="mb-3 text-center text-sm">The Hampton Inn is directly next to the Pine Island Lodge.</p>
                    <a href="https://www.hilton.com/en/hotels/obxnchx-hampton-suites-outer-banks-corolla/" target="_blank" class="blue px-4 py-2 rounded btn-bg transition montserrat-bold tracking-wide text-xl flex justify-center">
                        <span class="text-center">Book</span>
                    </a>
                </div>
                <div class="max-w-xs mx-auto bg-white p-4 rounded-lg flex flex-col items-center">
                    <div style="width:17rem;" class="h-48 relative">
                        <img :src="sanderling" alt="sanderling" class="absolute w-full h-full object-cover rounded-lg" />
                    </div>
                    <p class="text-lg font-semibold mb-3 mt-3 text-center bottom-border pb-2">The Sanderling Resort <br /><span class="font-normal">Outer Banks / Duck</span></p>
                    <p class="mb-3 text-center text-sm">The Sanderling is 6 minutes (driving) from the Pine Island Lodge.</p>
                    <a href="https://www.sanderling-resort.com/" target="_blank" class="blue px-4 py-2 rounded btn-bg transition montserrat-bold tracking-wide text-xl flex justify-center">
                        <span class="text-center">Book</span>
                    </a>
                </div>
                <div class="max-w-xs mx-auto bg-white p-4 rounded-lg flex flex-col items-center">
                    <div style="width:17rem;" class="h-48 relative">
                        <img :src="innAtCorolla" alt="inn at corolla" class="absolute w-full h-full object-cover rounded-lg" />
                    </div>
                    <p class="text-lg font-semibold mb-3 mt-3 text-center bottom-border pb-2">Inn at Corolla<br /><span class="font-normal">Outer Banks / Corolla</span></p>
                    <p class="mb-3 text-center text-sm">The Inn at Corolla is 14 minutes (driving) from the Pine Island Lodge.</p>
                    <a href="https://www.innatcorolla.com/" target="_blank" class="blue px-4 py-2 rounded btn-bg transition montserrat-bold tracking-wide text-xl flex justify-center">
                        <span class="text-center">Book</span>
                    </a>
                </div>
            </div>
            <p class="text-center mt-10">In addition to hotels, there are plenty of rental homes in the area available at the following links:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <a href="https://www.twiddy.com/" target="_blank" class="bg-white rounded-lg p-4 transition hover:shadow-lg max-w-xs mx-auto">
                    <img :src="twiddy" alt="twiddy vacation rentals" />
                </a>
                <a href="https://www.atlanticrealty-nc.com/" target="_blank" class="bg-white rounded-lg p-4 transition hover:shadow-lg max-w-xs mx-auto">
                    <img :src="atlantic" alt="Atlantic Realty" />
                </a>
                <a href="https://www.airbnb.com/" target="_blank" class="bg-white rounded-lg p-4 transition hover:shadow-lg max-w-xs mx-auto">
                    <img :src="airbnb" alt="AirBnb" />
                </a>
                <a href="https://www.vrbo.com/" target="_blank" class="bg-white rounded-lg p-4 transition hover:shadow-lg max-w-xs mx-auto">
                    <img :src="vrbo" alt="VRBO" />
                </a>
            </div>
            
        </section>

        <Footer />

    </main>
</template>