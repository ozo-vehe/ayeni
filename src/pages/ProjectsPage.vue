<script setup>
  import { reactive } from 'vue';
  import Project from '../components/Project.vue';
  import project1 from '../assets/images/project1.png';
  import project2 from '../assets/images/project2.png';
  import project3 from '../assets/images/project3.png';
  
  const projects = reactive([
    {
      id: 0,
      image: project1,
      name: "Holzarbeit: Visual Identity & E-Commerce Website",
      tags: [
        "Art Direction",
        "Brand Identity",
        "UI Design"
      ],
      description: "Holzarbeit is a small business that provides luxury interior decor services for individuals and firms on a tight budget.",
      link: "https://www.google.com"
    },
    {
      id: 1,
      image: project2,
      name: "Gelt: Expense Tracker Mobile App",
      tags: [
        "Prototyping",
        "UX Research",
        "UI Design"
      ],
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      link: "https://www.google.com"
    },
    {
      id: 2,
      image: project3,
      name: "8px: Design Agency Landing Page",
      tags: [
        "Art Direction",
        "UX Reseasrch",
        "UI Design"
      ],
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      link: "https://www.google.com"
    }
  ])
</script>

<template>
  <main class="bg-bg-color w-full px-20 py-10">
    <h1 class="font-bold text-4xl mb-6">Projects</h1>
    <div class="links flex gap-x-8 capitalize">
      <a href="#">product design</a>
      <a href="#">brand design</a>
    </div>
    <div class="w-full border text-center my-36" v-for="project in projects" :key="project.id">
      <template v-if="project.id % 2 !== 0">
        <Project order="order-1" :project="project" />
      </template>
      <template v-else>
        <Project order="order-0" :project="project"/>
      </template>
    </div>
  </main>
</template>

<style scoped>
  @media screen and (max-width: 800px) {
    main {
      padding: 50px;
    }
  }
</style>