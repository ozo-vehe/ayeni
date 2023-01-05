<script setup>
  import { onMounted, reactive, ref } from "vue";
  import { useProjectsStore } from "../stores/projects";
  import logo from "../assets/icons/logo.svg"
  import hamburger from "../assets/icons/hamburger.png";

  // Props Passed
  defineProps({
    name: String || "Welcome",
  })

// Data defined in the component
  const store = useProjectsStore();
  const links = reactive([...store.socialLinks])

  let windowWidth = ref(801);
  let slide = ref(false);

// Functions
  window.addEventListener("resize", function() {
    windowWidth.value = window.innerWidth;
  })
  onMounted(() => {
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
          <a :href="link.href" target="_blank"><img class="w-50" :src="link.link1" :alt="link.name" /></a>
        </li>
      </ul>
    </div>
    <ul v-else class="flex gap-10">
      <li v-for="link in links">
        <a :href="link.href" target="_blank"><img class="w-50" :src="link.link1" :alt="link.name" /></a>
      </li>
    </ul>
  </main>
</template>

<style scoped>
  @media screen and (max-width: 800px) {
    main {
      padding: 20px;
      margin-bottom: 150px;
      background-color: #fff;
    }
    .mobileNav ul {
      z-index: -1;
      bottom: 0rem;
      transition: all 0.5s;
    }
    .mobileNav ul.slide {
      z-index: 0;
      bottom: -6rem;
    }
  }
</style>