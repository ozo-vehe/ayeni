<script setup>
  import { reactive, ref } from "vue";
  import behance from "../assets/icons/icon(1).png";
  import medium from "../assets/icons/icon(2).png";
  import twitter from "../assets/icons/icon(3).png";
  import linkedin from "../assets/icons/icon(4).png";
  import dribble from "../assets/icons/icon(5).png";
  import logo from "../assets/icons/logo.svg"
  import hamburger from "../assets/icons/hamburger.png";

  // Props Passed
  defineProps({
    name: String || "Welcome",
  })

// Data defined in the component
  const links = reactive([
    {name: "behance", href: "https://www.behance.net/obansajohn", iconLink: behance},
    {name: "dribble", href: "https://dribbble.com/_ozovehe", iconLink: dribble},
    {name: "linkedin", href: "https://www.linkedin.com/in/ozovehe/", iconLink: linkedin},
    {name: "twitter", href: "https://twitter.com/__ozovehe", iconLink: twitter},
    {name: "medium", href: "https://medium.com/@johnnie.vehe", iconLink: medium},
  ])

  let windowWidth = ref(801);
  let slide = ref(false);

// Functions
  window.addEventListener("resize", function() {
    windowWidth.value = window.innerWidth;
  })
</script>

<template>
  <main class="relative box-border px-20 py-8 flex flex-wrap gap-y-8 justify-between">
    <img class="w-50" :src="logo" alt="Logo">
    <div v-if="windowWidth <= 800" class="mobileNav">
      <img @click="slide=!slide" class="cursor-pointer" :src="hamburger" alt="Hamburger"/>
      <ul :class="{slide: slide}" class="py-8 transition-all bg-white absolute left-0 -bottom-0 w-full flex justify-center gap-10">
        <li v-for="link in links">
          <a :href="link.href" target="_blank"><img class="w-50" :src="link.iconLink" :alt="link.name" /></a>
        </li>
      </ul>
    </div>
    <ul v-else class="flex gap-10">
      <li v-for="link in links">
        <a :href="link.href" target="_blank"><img class="w-50" :src="link.iconLink" :alt="link.name" /></a>
      </li>
    </ul>
  </main>
</template>

<style scoped>
  @media screen and (max-width: 800px) {
    main {
      padding: 20px 50px;
      margin-bottom: 150px;
      background-color: #fff;
    }
    .mobileNav ul {
      z-index: -1;
      bottom: 0;
      transition: all 0.5s;
    }
    .mobileNav ul.slide {
      z-index: 0;
      bottom: -6rem;
    }
  }
</style>