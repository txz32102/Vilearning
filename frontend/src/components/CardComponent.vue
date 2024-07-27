<template>
  <div class="card">
    <div class="header">{{ title }}</div>
    <div class="content">
      <TextInput />
    </div>
  </div>
</template>

<script>
import TextInput from './TextInput.vue'; // Ensure the correct path to TextInput.vue

export default {
  name: 'CardComponent',
  components: {
    TextInput,
  },
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
  background-color: #e0e7ff; /* Same color as the card */
  text-align: center;
  padding: 20px 10px 10px 10px; /* Increase top padding */
  border-radius: 20px 20px 0 0;
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  position: relative;
  top: -10%; /* Move up 10% */
  width: calc(100% + 40px); /* Extend to the full width of the card */
  left: -20px; /* Adjust to align with the card's edges */
  z-index: 1; /* Ensure it stays on top */
}

.header::after {
  content: '';
  display: block;
  width: 100%;
  height: 2px; /* Thickness of the white line */
  background-color: white;
  position: absolute;
  bottom: -1px;
  left: 0;
}

.content {
  flex: 1;
  padding-top: 20px; /* Adjust to provide space for the header */
  text-align: center;
  overflow: auto; /* Ensure no overflow */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}
</style>
