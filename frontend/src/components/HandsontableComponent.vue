<template>
  <div>
    <div ref="hotTable"></div>
  </div>
</template>

<script>
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.css';

export default {
  name: 'HandsontableComponent',
  mounted() {
    this.hot = new Handsontable(this.$refs.hotTable, {
      data: [
        ['', 'a', 'b', 'c', 'd'],
        ['1', '', '', '', ''],
        ['2', '', '', '', ''],
        ['3', '', '', '', ''],
        ['4', '', '', '', ''],
      ],
      colHeaders: [' ', 'A', 'B', 'C', 'D'],
      rowHeaders: true,
      width: '600px',
      height: '300px',
      licenseKey: 'non-commercial-and-evaluation',
    });
  },
  beforeUnmount() {
    if (this.hot) {
      this.hot.destroy();
    }
  },
};
</script>

<style>
/* You can add custom styles here */
</style>
