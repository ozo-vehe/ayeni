<script setup>
import Button from "../components/Button.vue";
import avatar from "../assets/images/avatar.png";

defineProps({
  name: String
})
</script>

<template>
  <main class="relative w-full h-screen box-border px-20 min-h-100 flex flex-wrap justify-between items-center">
    <div class="w-4/6">
      <h1 class="mb-4 leading-normal text-dark text-5xl font-bold">
        Designing brands &amp; products for <br/>
        audacious businesses.
      </h1>
      <p class="pt-6 text-base text-gray-900">
        Welcome! I am {{name || "Obatobi"}} and this is a selection of my best work!
      </p>

      <Button text="hello@obatobiayeni.com" link="mailto:hello@obatobiayeni.com"/>
    </div>

    <div class="w-1/3 h-50 overflow-hidden text-center">
      <img class="w-full" :src="avatar" alt="Avatar">
    </div>
  </main>
</template>

<style scoped>

</style>
