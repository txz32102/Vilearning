<template>
    <div id="MainPage">
      <CourseCard :zoom="100" />
      <CourseCard :zoom="100" />
      <CourseCard :zoom="100" />
    </div>
  </template>
  
  <script>
  import CourseCard from '@/components/cards/CourseCard.vue';
  
  export default {
    name: 'MainPage',
    components: {
      CourseCard,
    },
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }
  </style>
  