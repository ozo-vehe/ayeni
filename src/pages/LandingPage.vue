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
    <div class="relative w-full min-h-screen box-border px-20 pb-32 pt-16 flex flex-wrap gap-y-16 justify-center items-center">
      <div class="heroText w-720 order-0">
        <h1 class="mb-4 leading-normal text-dark text-5xl font-bold">
          Designing brands &amp; products for
          audacious businesses.
        </h1>
        <p class="pt-6 text-base text-gray-900">
          Welcome! I am {{name || "Obatobi"}} and this is a selection of my best work!
        </p>

        <Button
          text="hello@obatobiayeni.com" 
          link="mailto:hello@obatobiayeni.com"
          background="bg-black"
          textColor="text-bg-color"
        />
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

  @media screen and (max-width: 800px) {
    main > div {
      padding: 0px 50px;
    }
    .heroText {
      order: 1;
      text-align: center;
      display: flex;
      flex-direction:column;
      padding: 70px 0px;
    }
    .heroText h1 {
      font-size: 1.7rem;
      margin: 0px;
    }
    .heroText button {
      margin: 30px auto;
    }
  }

  @media screen and (max-width: 1000px) {
    main h1 {
      text-align: center;
    }
    .heroText p {
      text-align: center;
    }
    .heroText button {
      margin: 30px auto;
    }
  }
</style>
