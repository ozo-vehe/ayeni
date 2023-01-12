<script setup>
  import { reactive, ref, onMounted, onBeforeMount } from 'vue';
  import Project from '../components/Project.vue';
  import project1 from '../assets/images/project1.png';
  import project2 from '../assets/images/project2.png';
  import project3 from '../assets/images/project3.png';
  import { useProjectsStore } from '../stores/projects';
  import { storeToRefs } from 'pinia';

  // Data
  const store = useProjectsStore();
  const { projects } = storeToRefs(store);
  
  onBeforeMount(async () => {
    console.log("Mounting and fetching...");
    await store.getProjects();
    console.log("Mounted and fetched.");
    console.log(projects.value[0].type);
  })
  // onMounted(async() => {
  //   console.log("Mounting and fetching...");
  //   await store.getProjects();
  //   console.log("Mounted and fetched.");
  //   console.log(projects.value[0].type);
  // });

  const designProjects = reactive([...projects.value]);
  // console.log(designProjects);
  const projectss = reactive([
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
      link: "https://www.google.com",
      type: [ "Brand Design" ],
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
      link: "https://www.google.com",
      type: [ "Product Design" ],
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
      link: "https://www.google.com",
      type: [ "Brand Design", "Product Design" ],
    }
  ]);
  let type = ref("brand design");
</script>

<template>
  <main class="bg-bg-color w-full px-20 py-10">
    <h1 class="font-bold text-4xl mb-6">Projects</h1>
    <div class="links flex gap-x-8 capitalize">
      <p
        :class="{'text-gray-500 underline decoration-2 underline-offset-8': type === 'product design'}"
        class="cursor-pointer"
        @click="type = 'product design'"
      >
        product design
      </p>
      <p
        :class="{'text-gray-500 underline decoration-2 underline-offset-8': type === 'brand design'}"
        class="cursor-pointer"
        @click="type = 'brand design'"
      >
        brand design
      </p>
    </div>
    <div v-if="projects" class="projectContainer w-full text-center my-36" v-for="(project, index) in projects">
      <template v-if="project.type.includes(type)">
        <template v-if="index % 2 !== 0">
          <Project order="order-1" :project="project" />
        </template>
        <template v-else>
          <Project order="order-0" :project="project"/>
        </template>
      </template>
    </div>
    <div v-else>
      <h1 class="font-4xl text-black">Loading...</h1>
    </div>
  </main>
</template>

<style scoped>
  @media screen and (max-width: 800px) {
    main {
      padding: 50px 20px;
    }
    .projectContainer {
      margin-top: 20px;
    }
  }
</style>