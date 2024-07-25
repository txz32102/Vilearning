<template>
    <div>
      <SideBar />
      <div class="main-content">
        <h1>Main Page</h1>
        <p>This is the main page content.</p>
      </div>
    </div>
  </template>
  
  <script>
  import SideBar from '../components/SideBar/SideBar.vue';
  
  export default {
    name: 'Main',
    components: {
      SideBar
    }
  };
  </script>
  
  <style scoped>
  .main-content {
    margin-left: 250px; /* Adjust this value based on your sidebar width */
    padding: 20px;
  }
  </style>
  