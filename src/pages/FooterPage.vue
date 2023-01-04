<script setup>
  import { reactive } from 'vue';
  import Button from '../components/Button.vue';
  import whiteBehance from '../assets/icons/wicon(1).png';
  import whiteDribble from '../assets/icons/wicon(2).png';
  import whiteLinkedIn from '../assets/icons/wicon(3).png';
  import whiteTwitter from '../assets/icons/wicon(4).png';
  import whiteMedium from '../assets/icons/wicon(5).png';


  const footerIcons = reactive([
    {name: "behance", link: whiteBehance},
    {name: "dribble", link: whiteDribble},
    {name: "linkedin", link: whiteLinkedIn},
    {name: "twitter", link: whiteTwitter},
    {name: "medium", link: whiteMedium},
  ])
</script>

<template>
  <main class="bg-slate-900 text-white box-border text-center px-20 py-10">
    <h1 class="font-bold text-4xl">Get in touch</h1>
    <div class="mt-24 mb-4 flex justify-center items-center gap-x-4">
      <img class="w-40" v-for="icon in footerIcons" :src="icon.link" :alt="icon.name">
    </div>
    <div class="footerButton flex flex-wrap justify-center items-center gap-x-8">
      <Button
        text="hello@obatobiayeni.com"
        link="mailto:hello@obatobiayeni.com"
        textColor="text-black"
        background="bg-bg-color"
      />
      <Button
        text="(+234) 813 015 9953"
        border="border border-bg-color"
      />
    </div>
  </main>
</template>

<style scoped>
  @media screen and (max-width: 800px) {
    main button {
      width: 100%;
      margin-top: 20px;
    }
    .footerButton {
      width: 100%;
      margin-top: 30px;
    }
  }
</style>