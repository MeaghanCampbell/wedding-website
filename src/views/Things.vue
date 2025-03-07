<script setup>
    import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'
    import offTheWall from '../assets/things/off-the-wall.png'
    import urbanKitchen from '../assets/things/urban-kitchen.webp'
    import paperCanoe from '../assets/things/paper-canoe.avif'
    import grillRoom from '../assets/things/grill-room.avif'
    import corollaPizza from '../assets/things/corolla-pizza.jpg'
    import duckDonuts from '../assets/things/duck-donuts.jpg'
    import aqua from '../assets/things/aqua.webp'
    import bluePoint from '../assets/things/blue-point.jpg'
    import costalCantina from '../assets/things/costal-cantina.jpg'
    import ducksCottage from '../assets/things/duckcottage.jpg'
    import spa from '../assets/things/spa-sanderling.webp'
    import norbanks from '../assets/things/norbanks.jpg'
    import kilmarlic from '../assets/things/kilmarlic.png'
    import horses from '../assets/things/horses.jpg'
    import wrightBros from '../assets/things/wright-bros.jpg'
    import carrituckClub from '../assets/things/carrituck-club.webp'

</script>

<template>
    <main class="gradient-background flex flex-col min-h-screen">

        <Nav />

        <section class="px-4 sm:px-8 py-14 sm:py-16 max-w-5xl mx-auto fade-in-smooth flex-grow">
            <p class="text-3xl sm:text-4xl montserrat-light text-center playfair-bold mb-10 blue">Food / Drinks</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <a href="https://offthewalltaphouse.com/" target="_blank"
                    class="relative max-w-xs mx-auto bg-cover bg-center bg-no-repeat p-10 w-full rounded-lg flex flex-col items-center justify-center text-white transition hover:opacity-80"
                    :style="{ backgroundImage: `url(${offTheWall})` }">
                    <div class="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <p class="relative text-lg font-semibold mb-3 mt-3 text-center pb-2">
                        Off The Wall Tap House <br />
                        <span class="font-normal">Outer Banks / Corolla</span>
                    </p>
                </a>

                <a href="https://www.urbankitchenobx.com/" target="_blank" 
                    class="relative max-w-xs mx-auto bg-cover bg-center bg-no-repeat p-10 w-full rounded-lg flex flex-col items-center justify-center text-white transition hover:opacity-80"
                    :style="{ backgroundImage: `url(${urbanKitchen})` }">
                    <div class="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <p class="relative text-lg font-semibold mb-3 mt-3 text-center pb-2">
                        Urban Kitchen<br />
                        <span class="font-normal">Outer Banks / Corolla</span>
                    </p>
                </a>

                <a href="https://www.papercanoeobx.com/" target="_blank" 
                    class="relative max-w-xs mx-auto bg-cover bg-center bg-no-repeat p-10 w-full rounded-lg flex flex-col items-center justify-center text-white transition hover:opacity-80"
                    :style="{ backgroundImage: `url(${paperCanoe})` }">
                    <div class="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <p class="relative text-lg font-semibold mb-3 mt-3 text-center pb-2">
                        Paper Canoe<br />
                        <span class="font-normal">Outer Banks / Corolla</span>
                    </p>
                </a>

                <a href="https://aquarestaurantobx.com/" target="_blank" 
                    class="relative max-w-xs mx-auto bg-cover bg-center bg-no-repeat p-10 w-full rounded-lg flex flex-col items-center justify-center text-white transition hover:opacity-80"
                    :style="{ backgroundImage: `url(${aqua})` }">
                    <div class="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <p class="relative text-lg font-semibold mb-3 mt-3 text-center pb-2">
                        Aqua<br />
                        <span class="font-normal">Outer Banks / Duck</span>
                    </p>
                </a>

                <a href="https://coastalcantina.com/" target="_blank" 
                    class="relative max-w-xs mx-auto bg-cover bg-center bg-no-repeat p-10 w-full rounded-lg flex flex-col items-center justify-center text-white transition hover:opacity-80"
                    :style="{ backgroundImage: `url(${costalCantina})` }">
                    <div class="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <p class="relative text-lg font-semibold mb-3 mt-3 text-center pb-2">
                        Costal Cantina<br />
                        <span class="font-normal">Outer Banks / Duck</span>
                    </p>
                </a>

                <a href="https://www.thebluepoint.com/" target="_blank" 
                    class="relative max-w-xs mx-auto bg-cover bg-center bg-no-repeat p-10 w-full rounded-lg flex flex-col items-center justify-center text-white transition hover:opacity-80"
                    :style="{ backgroundImage: `url(${bluePoint})` }">
                    <div class="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <p class="relative text-lg font-semibold mb-3 mt-3 text-center pb-2">
                        The Blue Point<br />
                        <span class="font-normal">Outer Banks / Duck</span>
                    </p>
                </a>


                <a href="https://www.grillroomobx.com/" target="_blank" 
                    class="relative max-w-xs mx-auto bg-cover bg-center bg-no-repeat p-10 w-full rounded-lg flex flex-col items-center justify-center text-white transition hover:opacity-80"
                    :style="{ backgroundImage: `url(${grillRoom})` }">
                    <div class="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <p class="relative text-lg font-semibold mb-3 mt-3 text-center pb-2">
                        The Grill Room<br />
                        <span class="font-normal">Outer Banks / Corolla</span>
                    </p>
                </a>

                <a href="https://corollapizza.com/"  target="_blank"
                    class="relative max-w-xs mx-auto bg-cover bg-center bg-no-repeat p-10 w-full rounded-lg flex flex-col items-center justify-center text-white transition hover:opacity-80"
                    :style="{ backgroundImage: `url(${corollaPizza})` }">
                    <div class="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <p class="relative text-lg font-semibold mb-3 mt-3 text-center pb-2">
                        Corolla Pizza<br />
                        <span class="font-normal">Outer Banks / Corolla</span>
                    </p>
                </a>


                <a href="https://www.duckdonuts.com/" target="_blank" 
                    class="relative max-w-xs mx-auto bg-cover bg-center bg-no-repeat p-10 w-full rounded-lg flex flex-col items-center justify-center text-white transition hover:opacity-80"
                    :style="{ backgroundImage: `url(${duckDonuts})` }">
                    <div class="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <p class="relative text-lg font-semibold mb-3 mt-3 text-center pb-2">
                        Duck Donuts<br />
                        <span class="font-normal">Outer Banks / Corolla & Duck</span>
                    </p>
                </a>

                <a href="https://www.duckscottage.com/" target="_blank" 
                    class="relative max-w-xs mx-auto bg-cover bg-center bg-no-repeat p-10 w-full rounded-lg flex flex-col items-center justify-center text-white transition hover:opacity-80"
                    :style="{ backgroundImage: `url(${ducksCottage})` }">
                    <div class="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <p class="relative text-lg font-semibold mb-3 mt-3 text-center pb-2">
                        Ducks Cottage<br />
                        <span class="font-normal">Outer Banks / Duck</span>
                    </p>
                </a>


            </div>

            <p class="text-3xl sm:text-4xl montserrat-light text-center playfair-bold mb-10 mt-16 blue">Activities</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <a href="https://www.norbanks.com/" target="_blank" 
                    class="relative max-w-xs mx-auto bg-cover bg-center bg-no-repeat p-10 w-full rounded-lg flex flex-col items-center justify-center text-white transition hover:opacity-80"
                    :style="{ backgroundImage: `url(${norbanks})` }">
                    <div class="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <p class="relative text-lg font-semibold mb-3 mt-3 text-center pb-2">
                        Nor'Banks Sailing and Watersports <br />
                        <span class="font-normal italic text-sm">(Sailing, Tubing, Jet Ski, Kayak, Pontoon, Parasailing)</span><br />
                        <span class="font-normal">Outer Banks / Duck</span>
                    </p>
                </a>

                <a href="https://www.thesanderling.com/" target="_blank" 
                    class="relative max-w-xs mx-auto bg-cover bg-center bg-no-repeat p-10 w-full rounded-lg flex flex-col items-center justify-center text-white transition hover:opacity-80"
                    :style="{ backgroundImage: `url(${spa})` }">
                    <div class="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <p class="relative text-lg font-semibold mb-3 mt-3 text-center pb-2">
                        Spa at the Sanderling <br />
                        <span class="font-normal">Outer Banks / Duck</span>
                    </p>
                </a>

                <a href="https://www.invitedclubs.com/clubs/the-currituck-club/golf" target="_blank" 
                    class="relative max-w-xs mx-auto bg-cover bg-center bg-no-repeat p-10 w-full rounded-lg flex flex-col items-center justify-center text-white transition hover:opacity-80"
                    :style="{ backgroundImage: `url(${carrituckClub})` }">
                    <div class="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <p class="relative text-lg font-semibold mb-3 mt-3 text-center pb-2">
                        Carrituck Golf Club <br />
                        <span class="font-normal">Outer Banks / Corolla</span>
                    </p>
                </a>

                <a href="https://kilmarlic.com/" target="_blank" 
                    class="relative max-w-xs mx-auto bg-cover bg-center bg-no-repeat p-10 w-full rounded-lg flex flex-col items-center justify-center text-white transition hover:opacity-80"
                    :style="{ backgroundImage: `url(${kilmarlic})` }">
                    <div class="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <p class="relative text-lg font-semibold mb-3 mt-3 text-center pb-2">
                        Kilmarlic Golf Course <br />
                        <span class="font-normal">Southern Shores</span>
                    </p>
                </a>

                <a href="https://wildhorsetour.com/" target="_blank" 
                    class="relative max-w-xs mx-auto bg-cover bg-center bg-no-repeat p-10 w-full rounded-lg flex flex-col items-center justify-center text-white transition hover:opacity-80"
                    :style="{ backgroundImage: `url(${horses})` }">
                    <div class="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <p class="relative text-lg font-semibold mb-3 mt-3 text-center pb-2">
                        Wild Horse Tour <br />
                        <span class="font-normal">Outer Banks / Corolla</span>
                    </p>
                </a>

                <a href="https://www.outerbanks.com/wright-brothers-national-memorial.html" target="_blank" 
                    class="relative max-w-xs mx-auto bg-cover bg-center bg-no-repeat p-10 w-full rounded-lg flex flex-col items-center justify-center text-white transition hover:opacity-80"
                    :style="{ backgroundImage: `url(${wrightBros})` }">
                    <div class="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <p class="relative text-lg font-semibold mb-3 mt-3 text-center pb-2">
                        Wright Brothers National Memorial <br />
                        <span class="font-normal">Outer Banks / Kill Devil Hills</span>
                    </p>
                </a>

            </div>

            <p class="text-3xl sm:text-4xl montserrat-light text-center playfair-bold mt-16 blue">Looking for more?</p>
            <p class="blue mt-4 text-center mb-10">Explore everything the Outer Banks has to offer...</p>

            <a href="https://www.twiddy.com/outer-banks/things-to-do/" target="_blank" class="blue px-4 py-2 rounded btn-bg transition montserrat-bold tracking-wide text-xl flex justify-center max-w-xs mx-auto">
                
                <span class="text-center">Explore more</span>
            </a>

        </section>

        <Footer class="mt-auto" />
      
    </main>
</template>