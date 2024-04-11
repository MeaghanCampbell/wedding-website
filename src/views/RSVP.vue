<script setup>
    import { ref } from 'vue';
    import Nav from '@/components/Nav.vue';
    import guestList from '@/guest-list';

    const firstName = ref('');
    const lastName = ref('');
    const searchResults = ref([]);
    const showError = ref(false); //

    const searchParty = () => {
        const fullName = `${firstName.value} ${lastName.value}`.toLowerCase();
        searchResults.value = guestList.filter(party => 
            party.members.some(member => 
                member.name.toLowerCase().includes(fullName)
            )
        );
        showError.value = searchResults.value.length === 0;
    };

    const submitRSVP = () => {
        console.log('results')
    };
</script>

<template>
    <main class="gradient-background">

        <Nav />

        <section class="px-4 sm:px-8 py-14 sm:py-20 max-w-2xl mx-auto">
            <p class="text-3xl sm:text-4xl montserrat-regular text-center mb-3 blue">We <span class="playfair-italic">hope you</span> can make it!</p>


              <!-- invite search form to get -->
              <div id="invite-search">
                  <p class="text-center mb-6 blue">Please enter the first and last name of one member of your party below. If you're responding for you and a guest (or your family), you'll be able to RSVP for your entire group on the next page.</p>
                  <form @submit.prevent="searchParty" class="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-2">
                      <input v-model="firstName" class="w-full p-2 rounded" placeholder="First Name" type="text" id="fname-search" required />
                      <input v-model="lastName" class="w-full p-2 rounded" placeholder="Last Name" type="text" id="lname-search" required />
                      <button type="submit" class="blue px-4 py-2 rounded btn-bg transition inline-flex montserrat-bold tracking-wide text-xl text-center">Search</button>
                  </form>
                  <p v-if="showError" class="error-message mt-2 text-sm text-red-600">We couldn't find anyone with that name. Please try again.</p>
                  <p class="italic blue mt-6 text-center text-sm font-bold">*if you received a save the date or invitation and don't see your name, please reach out to 614-406-5697 for help!</p>
              </div>

              <!-- search results & RSVP submit -->
              <form @submit.prevent="submitRSVP" v-if="searchResults.length > 0" class="mt-10">
                <div v-for="party in searchResults" :key="party.partyName" class="bg-white p-4 rounded">
                      <ul class="space-y-3">
                          <li v-for="(member, index) in party.members" :key="member.name" class="grid grid-cols-3">
                              <p>{{ member.name }}</p>
                              <input class="input-height" type="checkbox" />
                              <input class="input-height" type="checkbox" />
                          </li>
                      </ul>
                  </div>
                  <button type="submit" class="mt-4 blue px-4 py-2 rounded btn-bg transition montserrat-bold tracking-wide text-xl text-center">Submit RSVP</button>
              </form>

        </section>

    </main>
</template>