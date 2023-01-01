<script setup>
import { ref } from 'vue';

  defineProps({
    text: String,
    link: String,
  })

</script>

<template>
  <button class="bg-black text-white px-10 py-4 mt-10 rounded-3xl">
    <a :href="link" target="_blank">{{ text || "Button" }}</a>
  </button>
</template>
