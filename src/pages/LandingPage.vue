<script setup>
import Button from "../components/Button.vue";
import avatar from "../assets/images/avatar.png";
import NavBar from "../components/NavBar.vue";

defineProps({
  name: String
})
</script>

<template>
  <main class="landingPage">
    <NavBar name="obatobi"/>
    <div class="relative w-full min-h-screen box-border px-20 min-h-100 flex flex-wrap justify-center items-center gap-40">
      <div class="w-800">
        <h1 class="mb-4 leading-normal text-dark text-5xl font-bold">
          Designing brands &amp; products for <br/>
          audacious businesses.
        </h1>
        <p class="pt-6 text-base text-gray-900">
          Welcome! I am {{name || "Obatobi"}} and this is a selection of my best work!
        </p>

        <Button text="hello@obatobiayeni.com" link="mailto:hello@obatobiayeni.com"/>
      </div>

      <div class="w-400 h-50 overflow-hidden text-center">
        <img class="w-full" :src="avatar" alt="Avatar">
      </div>
    </div>
  </main>
</template>

<style scoped>
  .landingPage {
    background-image: url("../assets/images/bg.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>
