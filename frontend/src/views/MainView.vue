<template>
  <div>
    <SideBar />
    <div class="main-content">
      <div class="box-container">
        <CardComponent title="Reference Region">
          <form @submit.prevent="sendData">
            <label for="dependencyGraph">Dependency graph:</label>
            <textarea id="dependencyGraph" v-model="dependencyGraphData"></textarea>
            <button type="submit">Submit</button>
          </form>
          <HandsontableComponent ref="handsontable" :settings="hotSettings" class="small-table" />
        </CardComponent>

        <CardComponent title="Tutorial Sheet Questions">
          <div>Tutorial Sheet Q1</div>
        </CardComponent>

        <CardComponent title="Exam Questions">
          <div>Exam 2024 Q2</div>
        </CardComponent>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SideBar from '../components/SideBar.vue';
import HandsontableComponent from '../components/HandsontableComponent.vue';
import CardComponent from '../components/CardComponent.vue';

export default {
  name: 'MainContent',
  components: {
    SideBar,
    HandsontableComponent,
    CardComponent,
  },
  data() {
    return {
      dependencyGraphData: '',
      hotSettings: {
        data: [
          ['', 'a', 'b', 'c', 'd'],
          ['1', '', '', '', ''],
          ['2', '', '', '', ''],
          ['3', '', '', '', ''],
          ['4', '', '', '', ''],
        ],
        colHeaders: true,
        rowHeaders: true,
        columns: [
          { readOnly: true },
          { readOnly: false },
          { readOnly: false },
          { readOnly: false },
        ],
        cells: function (row, col) {
          var cellProperties = {};
          if (row === 0 || col === 0) {
            cellProperties.readOnly = true;
          }
          return cellProperties;
        },
        minSpareRows: 0,
        width: '100%',
        height: 150, // Adjusted height for smaller view
      },
    };
  },
  methods: {
    async sendData() {
      try {
        const data = this.$refs.handsontable.getData();
        const response = await axios.post('http://localhost:8088/submit-table-data', { data });
        console.log('Data submitted successfully:', response.data);
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    },
  },
};
</script>

<style scoped>
body, html {
  margin: 0;
  padding: 0;
  overflow: hidden; /* Prevent scrolling */
}

.main-content {
  margin-left: 100px; /* Adjust this value based on your sidebar width */
  padding: 20px;
  display: flex;
  justify-content: flex-start; /* Align boxes to the start (left) */
  align-items: center;
  height: 100vh;
  background-color: #ffffff; /* Background color similar to your image */
  overflow: hidden; /* Prevent scrolling */
}

.box-container {
  display: flex;
  gap: 20px; /* Space between the boxes */
  justify-content: flex-start; /* Align boxes to the start (left) */
  width: 100%;
  height: 100%; /* Ensure it takes the full height */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}
</style>
