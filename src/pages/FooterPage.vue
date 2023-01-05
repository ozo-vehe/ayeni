<script setup>
  import { reactive } from 'vue';
  import Button from '../components/Button.vue';
  import { useProjectsStore } from '../stores/projects';

  const store = useProjectsStore();
  const links = reactive([...store.socialLinks])
</script>

<template>
  <main class="bg-slate-900 text-white box-border text-center px-20 py-10">
    <h1 class="font-bold text-4xl">Get in touch</h1>
    <div class="mt-24 mb-4 flex justify-center items-center gap-x-4">
      <a v-for="link in links" :href="link.href" target="_blank"><img class="w-40" :src="link.link2" :alt="link.name" /></a>
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
        link="tel:+2348130159953"
      />
    </div>
  </main>
</template>

<style scoped>
  @media screen and (max-width: 800px) {
    main button {
      width: 100%;
      margin-top: 20px;
      padding: 15px 0px;
    }
    .footerButton {
      font-size: 1rem;
      width: 100%;
      margin-top: 30px;
    }
  }
</style>