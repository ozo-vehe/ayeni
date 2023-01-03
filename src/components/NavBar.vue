<script setup>
  import { reactive } from "vue";
  import behance from "../assets/icons/icon(1).png";
  import medium from "../assets/icons/icon(2).png";
  import twitter from "../assets/icons/icon(3).png";
  import linkedin from "../assets/icons/icon(4).png";
  import dribble from "../assets/icons/icon(5).png";
  import logo from "../assets/icons/logo.svg"
  defineProps({
    name: String || "Welcome",
  })

const links = reactive([
  {name: "behance", href: "https://www.behance.net/obansajohn", iconLink: behance},
  {name: "dribble", href: "https://dribbble.com/_ozovehe", iconLink: dribble},
  {name: "linkedin", href: "https://www.linkedin.com/in/ozovehe/", iconLink: linkedin},
  {name: "twitter", href: "https://twitter.com/__ozovehe", iconLink: twitter},
  {name: "medium", href: "https://medium.com/@johnnie.vehe", iconLink: medium},
])
</script>

<template>
  <main class="box-border px-20 py-8 flex flex-wrap gap-y-8 justify-between">
    <img class="w-50" :src="logo" alt="Logo">
    <ul class="flex gap-10">
      <li v-for="link in links">
        <a :href="link.href" target="_blank"><img class="w-50" :src="link.iconLink" :alt="link.name" /></a>
      </li>
    </ul>
  </main>
</template>