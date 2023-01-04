<script setup>
  import about from "../assets/images/aboutme.png";
  import Button from "../components/Button.vue";

</script>

<template>
  <main class="px-20 pb-36 bg-bg-color">
    <h1 class="font-bold text-4xl">About Me</h1>
    <div class="mt-20 pb-16 flex justify-center flex-wrap gap-x-16 gap-y-8 items-start">
      <div class="imageContainer w-400 overflow-hidden about-image">
        <img class="w-full" :src="about" alt="Profile Picture">
      </div>
      <div class="aboutText w-670">
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet.
        </p>
        <div class="mt-8 flex">
          <Button 
            class="mr-8"
            text="LinkedIn Profile"
            link="#"
            textColor="text-bg-color"
            background="bg-black"
          />
          <Button
            text="Download Resume"
            link="#"
            border="border border-black"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  @media screen and (max-width: 800px) {
    main {
      padding: 0px 20px 50px;
      text-align: center;
    }
    main h1 {
      font-size: 1.6rem;
    }
    main > div {
      margin-top: 50px;
    }
    .imageContainer {
      width: 100%;
    }
    .aboutText {
      text-align: left;
      font-size: 1.1rem
    }
    main button {
      font-size: 1rem;
      padding: 16px 40px;
      margin: 20px auto 0px;
    }
  }
</style>