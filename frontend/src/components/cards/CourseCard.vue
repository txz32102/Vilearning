<template>
  <div class="card" :style="{ zoom: zoom + '%' }">
    <div class="card-icon">
      <img src="@/assets/logo.svg" alt="icon" />
    </div>
    <div class="card-content">
      <div class="course-code">{{ courseCode }}</div>
      <div class="course-title">{{ courseTitle }}</div>
      <div class="course-links">
        <a v-for="(link, index) in courseLinks" :key="index" :href="link.href">{{ link.text }}</a>
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
    courseCode: {
      type: String,
      required: true,
    },
    courseTitle: {
      type: String,
      required: true,
    },
    courseLinks: {
      type: Array,
      default: () => [],
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
  min-width: 300px; /* Ensure consistent width */
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}

.course-code {
  font-weight: bold;
  font-size: 0.8em;
  white-space: nowrap;
}

.course-title {
  font-size: 1em;
  margin: 5px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.course-links {
  display: flex;
  gap: 10px;
}

.course-links a {
  text-decoration: none;
  color: #007bff;
  font-size: 0.8em;
  white-space: nowrap;
}

.course-links a:hover {
  text-decoration: underline;
}
</style>
