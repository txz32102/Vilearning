<template>
  <div>
    <div ref="hotTable" class="handsontable-container"></div>
  </div>
</template>

<script>
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.css';

export default {
  name: 'HandsontableComponent',
  data() {
    return {
      tableWidth: '300px', // Set the desired width
      tableHeight: '150px', // Set the desired height
    };
  },
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
.handsontable-container {
  width: 300px; /* Set the desired width */
  height: 150px; /* Set the desired height */
}

.handsontable-container .ht_master .htCore tbody td {
  font-size: 10px; /* Set a smaller font size */
  padding: 2px; /* Adjust the padding to make cells smaller */
}

.handsontable-container .ht_master .htCore thead th {
  font-size: 10px; /* Set a smaller font size for headers */
  padding: 2px; /* Adjust the padding for headers */
}
</style>
