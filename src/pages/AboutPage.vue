<script setup>
  import about from "../assets/images/aboutme.png";
  import Button from "../components/Button.vue";

</script>

<template>
  <main class="px-20 bg-bg-color">
    <h1 class="font-bold text-4xl">About Me</h1>
    <div class="mt-20 pb-16 flex justify-center flex-wrap gap-x-16 gap-y-8 items-start">
      <div class="w-400 overflow-hidden about-image">
        <img class="w-full" :src="about" alt="Profile Picture">
      </div>
      <div class="w-670">
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet.
        </p>
        <div class="mt-8">
          <Button class="mr-8" text="LinkedIn Profile" link="#" />
          <Button text="Download Resume" link="#" />
        </div>
      </div>
    </div>
  </main>
</template>