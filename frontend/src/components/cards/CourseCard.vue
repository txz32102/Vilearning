<template>
  <div class="card" :style="{ zoom: zoom + '%' }">
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
  props: {
    zoom: {
      type: Number,
      default: 100,
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  background-color: #f6f6d4;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  max-width: 300px;
}

.card-icon {
  background-color: #d3d3f6;
  padding: 10px;
  border-radius: 5px;
}

.card-icon img {
  width: 40px;
  height: auto;
}

.card-content {
  margin-left: 10px;
}

.course-code {
  font-weight: bold;
  font-size: 0.8em;
}

.course-title {
  font-size: 1.2em;
  margin: 5px 0;
}

.course-links {
  display: flex;
  gap: 10px;
}

.course-links a {
  text-decoration: none;
  color: #007bff;
  font-size: 0.8em;
}

.course-links a:hover {
  text-decoration: underline;
}
</style>
