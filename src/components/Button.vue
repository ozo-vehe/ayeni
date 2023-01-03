<script setup>
import { ref } from 'vue';

  defineProps({
    text: String,
    link: String,
    background: String,
    textColor: String,
    border: String,
    icon: String,
  })

</script>

<template>
  <button :class="textColor, background, border" class="px-14 flex items-center justify-center gap-x-4 py-4 mt-10 rounded-32">
    <a :href="link" target="_blank">{{ text || "Button" }}</a>
    <img v-if="icon" :src="icon" alt="Icon">
  </button>
</template>
