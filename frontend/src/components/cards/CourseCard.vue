<template>
    <div class="card">
      <div class="card-icon">
        <img src="@/assets/logo.svg" alt="icon" />
      </div>
      <div class="card-content">
        <div class="course-code">MECH50001</div>
        <div class="course-title">Heat Transfer</div>
        <div class="course-links">
          <a href="#">More info</a>
          <a href="#">Open Multiple Instructors</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CourseCard',
  };
  </script>
  
  <style scoped>
  .card {
    display: flex;
    align-items: center;
    background-color: #f6f6d4; /* Background color for card */
    border-radius: 10px;
    padding: 10px;
    margin: 20px;
  }
  
  .card-icon {
    background-color: #d3d3f6; /* Background color for icon area */
    padding: 10px;
    border-radius: 5px;
  }
  
  .card-icon img {
    width: 40px; /* Adjust the size of the icon */
    height: auto;
  }
  
  .card-content {
    margin-left: 10px;
  }
  
  .course-code {
    font-weight: bold;
  }
  
  .course-title {
    font-size: 1.5em;
    margin: 5px 0;
  }
  
  .course-links {
    display: flex;
    gap: 10px;
  }
  
  .course-links a {
    text-decoration: none;
    color: #007bff;
  }
  
  .course-links a:hover {
    text-decoration: underline;
  }
  </style>
  