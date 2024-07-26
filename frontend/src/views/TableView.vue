<template>
  <div>
    <h1>Handsontable Vue Example</h1>
    <HandsontableComponent />
  </div>
</template>

<script>
import HandsontableComponent from '@/components/HandsontableComponent.vue';

export default {
  name: 'TableView',
  components: {
    HandsontableComponent,
  },
};
</script>

<style>
/* You can add custom styles here */
</style>
