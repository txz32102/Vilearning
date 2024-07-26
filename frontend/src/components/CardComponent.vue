<template>
    <div class="card">
      <div class="header">{{ title }}</div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardComponent',
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    flex: 1; /* Ensure the cards take up equal space */
    height: calc(100% - 40px); /* Adjust height to account for padding */
    background-color: #e0e7ff; /* Light blue background */
    border-radius: 20px; /* Rounded corners */
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow for better visibility */
    position: relative;
    overflow: hidden; /* Ensure no overflow */
    display: flex;
    flex-direction: column;
  }
  
  .header {
    background-color: yellow;
    text-align: center;
    padding: 10px;
    border-radius: 20px 20px 0 0;
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
  }
  
  .content {
    flex: 1;
    padding-top: 20px; /* Adjust to provide space for the header */
    text-align: center;
    overflow: auto; /* Ensure no overflow */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
  }
  </style>
  