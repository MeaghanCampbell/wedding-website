<script setup>
import { ref, reactive } from 'vue';
import { Switch } from '@headlessui/vue';
import Nav from '@/components/Nav.vue';
import Footer from '../components/Footer.vue';
import guestList from '@/guest-list';

const firstName = ref('');
const lastName = ref('');
const searchResults = ref([]);
const showError = ref(false);
const showSubmitError = ref(false);
const attendingResults = reactive({});
const invite = ref(true);
const thankYou = ref(false);

const searchParty = () => {
  if (thankYou.value === true) {
    thankYou.value = false;
  }
  invite.value = true;
  const fullName = `${firstName.value.trim()} ${lastName.value.trim()}`.toLowerCase();
  searchResults.value = guestList.filter(party =>
    party.some(member =>
      member.toLowerCase().includes(fullName)
    )
  );
  showError.value = searchResults.value.length === 0;

  // Initialize attendingResults for each member
  searchResults.value.forEach(party => {
    party.forEach(member => {
      attendingResults[member] = { name: member, thursday: false, friday: false };
    });
  });
};

const submitRSVP = function() {
  if (showSubmitError.value === true) {
    showSubmitError.value = false;
  }
  document.getElementById('submit-rsvp').innerHTML = 'Processing...';

  // Transform attendingResults into an array of arrays
  const values = Object.values(attendingResults).map(member => [member.name, member.thursday, member.friday]);

  fetch('https://wedding-server-ebon.vercel.app/api/updateSpreadsheet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    document.getElementById('submit-rsvp').innerHTML = 'Submit RSVP';
    invite.value = false;
    thankYou.value = true;
  })
  .catch((error) => {
    console.error('Error:', error);
    document.getElementById('submit-rsvp').innerHTML = 'Submit RSVP';
    showSubmitError.value = true;
  });
};
</script>

<template>
  <main class="gradient-background flex flex-col min-h-screen">
    <Nav />
    <section class="px-4 sm:px-8 py-14 sm:py-20 max-w-2xl mx-auto fade-in-smooth">
      <p class="text-3xl sm:text-4xl montserrat-regular text-center mb-3 blue">We <span class="playfair-italic">hope you</span> can make it!</p>
      <div id="invite-search">
        <p class="text-center mb-6 blue">Please enter the first and last name of one member of your party below. If you're responding for you and a guest (or your family), you'll be able to RSVP for your entire group on the next page.</p>
        <form @submit.prevent="searchParty" class="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-2">
          <input v-model="firstName" class="w-full p-2 rounded" placeholder="First Name" type="text" id="fname-search" required />
          <input v-model="lastName" class="w-full p-2 rounded" placeholder="Last Name" type="text" id="lname-search" required />
          <button type="submit" class="blue px-4 py-2 rounded btn-bg transition inline-flex montserrat-bold tracking-wide text-xl text-center">Search</button>
        </form>
        <p v-if="showError" class="error-message mt-2 text-sm text-red-600">We couldn't find anyone with that name. Please try again.</p>
        <p class="italic blue mt-6 text-center text-sm font-bold">*if you received a save the date or invitation and don't see your name, please reach out to Meaghan (614-406-5697) for help!</p>
      </div>
      <div v-if="invite">
        <form @submit.prevent="submitRSVP" v-if="searchResults.length > 0" class="mt-10">
          <div class="grid grid-cols-3 sm:grid-cols-4 font-bold bottom-border items-end pb-1 mb-4 text-sm">
            <p class="sm:col-span-2">Name</p>
            <p>Attending<br />Thursday</p>
            <p>Attending<br />Friday</p>
          </div>
          <div v-for="(party, partyIndex) in searchResults" :key="partyIndex">
            <ul class="space-y-3">
              <li v-for="(member, memberIndex) in party" :key="memberIndex" class="grid grid-cols-3 sm:grid-cols-4">
                <p class="sm:col-span-2">{{ member }}</p>
                <div class="flex space-x-1 sm:space-x-2 items-center">
                    <p class="font-semibold text-xs text-gray-500">No</p>
                    <Switch v-model="attendingResults[member].thursday" :class="[attendingResults[member].thursday ? 'bg-emerald-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-gray-300 shadow transition-colors duration-200 ease-in-out focus:outline-none']">
                    <span class="sr-only">Attending Thursday</span>
                    <span aria-hidden="true" :class="[attendingResults[member].thursday ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
                    </Switch>
                    <p class="font-semibold text-xs text-gray-500">Yes</p>
                </div>
                <div class="flex space-x-1 sm:space-x-2 items-center">
                    <p class="font-semibold text-xs text-gray-500">No</p>
                    <Switch v-model="attendingResults[member].friday" :class="[attendingResults[member].friday ? 'bg-emerald-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-gray-300 shadow transition-colors duration-200 ease-in-out focus:outline-none']">
                    <span class="sr-only">Attending Friday</span>
                    <span aria-hidden="true" :class="[attendingResults[member].friday ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
                    </Switch>
                    <p class="font-semibold text-xs text-gray-500">Yes</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="mt-4">
            <button type="submit" id="submit-rsvp" class="blue px-4 py-2 rounded btn-bg transition montserrat-bold tracking-wide text-xl text-center">Submit RSVP</button>
          </div>
          <p v-if="showSubmitError" class="error-message mt-2 text-sm text-red-600">We couldn't find anyone with that name. Please try again.</p>
        </form>
      </div>
      <div v-if="thankYou" class="mt-14 flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="39px" height="39px"><path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/><path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"/></svg>
        <p class="text-center playfair-bold text-emerald-600 text-3xl">Thank you!</p>
        <p class="text-center mt-1 text-xl text-emerald-600">We have received your RSVP :)</p>
      </div>
    </section>
    <Footer class="mt-auto" />
  </main>
</template>