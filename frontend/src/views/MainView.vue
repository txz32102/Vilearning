<template>
  <div>
    <SideBar />
    <div class="main-content">
      <div class="box-container">
        <div class="box reference-region">
          <div class="header">Reference Region</div>
          <div class="content">
            <form @submit.prevent="sendData">
              <label for="dependencyGraph">Dependency graph:</label>
              <textarea id="dependencyGraph" v-model="dependencyGraphData"></textarea>
              <button type="submit">Submit</button>
            </form>
            <hot-table :settings="hotSettings" ref="handsontableComponent" class="small-table"></hot-table>
          </div>
        </div>
        <div class="box tutorial-sheet-questions">
          <div class="header">Tutorial Sheet Questions</div>
          <div class="content">Tutorial Sheet Q1</div>
        </div>
        <div class="box exam-questions">
          <div class="header">Exam Questions</div>
          <div class="content">Exam 2024 Q2</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HotTable } from '@handsontable/vue3';
import axios from 'axios';
import SideBar from '../components/SideBar/SideBar.vue';

export default {
  name: 'MainContent',
  components: {
    HotTable,
    SideBar,
  },
  data() {
    return {
      dependencyGraphData: '',
      hotSettings: {
        data: [
          ['', 1, 2, 3],
          [1, '', '', ''],
          [2, '', '', ''],
          [3, '', '', ''],
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
        rowHeaders: false,
        colHeaders: false,
        width: '100%',
        height: 150, // Adjusted height for smaller view
      },
    };
  },
  methods: {
    async sendData() {
      try {
        const data = this.$refs.handsontableComponent.hotInstance.getData();
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

.box {
  flex: 1; /* Ensure the boxes take up equal space */
  height: calc(100% - 40px); /* Adjust height to account for padding */
  background-color: #e0e7ff; /* Light blue background similar to your image */
  border-radius: 20px; /* Rounded corners */
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow for better visibility */
  position: relative;
  overflow: hidden; /* Ensure no overflow */
}

.reference-region {
  background-color: #fdfd96; /* Adjust color as needed */
}

.tutorial-sheet-questions {
  background-color: #ffb6c1; /* Adjust color as needed */
}

.exam-questions {
  background-color: #add8e6; /* Adjust color as needed */
}

.header {
  background-color: yellow;
  text-align: center;
  padding: 10px;
  border-radius: 20px 20px 0 0;
  position: absolute;
  top: 0;
  left: 0; /* Ensure header is positioned correctly */
  right: 0; /* Ensure header is positioned correctly */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

.content {
  padding-top: 60px; /* Adjust to provide space for the header */
  text-align: center;
  overflow: hidden; /* Ensure no overflow */
  height: calc(100% - 60px); /* Ensure the content fits within the box */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

textarea {
  width: 100%;
  height: 100px;
  margin-top: 10px;
}

button {
  margin-top: 10px;
}

.small-table {
  width: 100%;
  height: 150px; /* Adjusted height for smaller view */
}
</style>
