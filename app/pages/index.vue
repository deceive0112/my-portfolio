<template>
  <p class="text-2xl font-bold text-center mt-10 mb-50">
    My {{ title }} is very big. 
  </p>
  <div class="flex items-center justify-center">
       <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0 0 24 24"><!-- Icon from Iconoir by Luca Burgio - https://github.com/iconoir-icons/iconoir/blob/main/LICENSE --><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m8.005 20.005l.011-.01m-4.011.01l.011-.01m-.011-3.99l.011-.01m-.011-3.99l.011-.01m-.011-3.99l.011-.01m-.011-3.99l.011-.01m3.989.01l.011-.01"/><path fill="currentColor" d="M12.005 20.005h8v-16h-8z"/></g></svg>
  </div>
</template>

<script setup lang="ts">
const title = "Testicles";

definePageMeta({
  layout: "default",
});
</script>
