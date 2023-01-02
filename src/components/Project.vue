<script setup>
  import Button from "./Button.vue";
  defineProps({
    project: Object,
    order: String,
  });
</script>

<template>
  <main class="flex justify-between flex-wrap">
    <div class="projectImage w-400" :class="order">
      <img class="w-full" :src="project.image" :alt="project.name">
    </div>
    <div class="projectInfo w-700">
      <h1 class="text-3xl font-bold tracking-wide leading-normal">{{ project.name }}</h1>
      <div class="projectTags flex gap-x-8 my-4">
        <p class="bg-violet-200 px-4 py-1 rounded" v-for="tag in project.tags">
          <span class="text-violet-900">{{ tag }}</span>
        </p>
      </div>
      <p class="mt-12">{{ project.description }}</p>

      <Button text="See more" :link="project.link" />
    </div>
  </main>
</template>