<script setup>
  import { ref, onBeforeMount, computed } from 'vue';
  import Project from '../components/Project.vue';
  import { useProjectsStore } from '../stores/projects';
  import { storeToRefs } from 'pinia';

  // Data
  let type = ref("All");
  const store = useProjectsStore();
  const { projects } = storeToRefs(store);
  const { getProjects } = store;
  
  // Lifecycle hooks
  onBeforeMount(async () => {
    await getProjects();
  });

  // Functions
  const filteredProject = computed((type) => {
    projects.filter((proj) => {
      return proj.type.includes(type);
    })
  });
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
      <template v-else>
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