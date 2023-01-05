<script setup>
  import Button from "./Button.vue";
  import icon from "../assets/icons/arrow.png";
  defineProps({
    project: Object,
    order: String,
  });
</script>

<template>
  <main class="flex justify-center gap-20 flex-wrap">
    <div class="projectImage w-400" :class="order">
      <img class="w-full" :src="project.image" :alt="project.name">
    </div>
    <div class="projectInfo text-left w-600">
      <h1 class="text-3xl p-0 m-0 font-bold tracking-wide leading-normal">{{ project.name }}</h1>
      <div class="projectTags flex flex-wrap gap-x-3 my-4">
        <p class="bg-violet-200 px-4 py-1 rounded" v-for="tag in project.tags">
          <span class="text-violet-900">{{ tag }}</span>
        </p>
      </div>
      <p class="mt-12">{{ project.description }}</p>

      <Button
        text="See more"
        :link="project.link"
        background="bg-black hover:bg-gray-800 transition-all duration-300"
        textColor="text-bg-color"
        :icon="icon"
      />
    </div>
  </main>
</template>

<style scoped>
  @media screen and (max-width: 800px) {
    main {
      padding: 0px;
      gap: 40px;
    }
    .projectImage {
      width: 100%;
      order: 0;
    }
    .projectInfo {
      text-align: left;
    }
    .projectInfo h1 {
      font-size: 1.6rem;
      margin: 0px;
    }
    .projectTags {
      gap: 10px 5px;
      font-size: 0.8rem;
    }
    .projectInfo > p {
      font-size: 1.1rem;
    }
    .projectInfo button {
      margin: 40px auto 0px;
    }
  }
</style>