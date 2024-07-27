<template>
  <div id="MainPage">
    <Sidebar />
    <div class="content-wrapper">
      <HeaderComponent />
      <div class="main-content">
        <div class="column">
          <h2>Past Projects</h2>
          <CourseCard 
            v-for="course in pastProjects" 
            :key="course.courseCode"
            :zoom="100" 
            :courseCode="course.courseCode" 
            :courseTitle="course.courseTitle" 
            :courseLinks="course.courseLinks"
          />
        </div>
        <div class="column">
          <h2>Current Projects</h2>
          <CourseCard 
            v-for="course in currentProjects" 
            :key="course.courseCode"
            :zoom="100" 
            :courseCode="course.courseCode" 
            :courseTitle="course.courseTitle" 
            :courseLinks="course.courseLinks"
          />
        </div>
        <div class="column">
          <h2>My Future</h2>
          <CourseCard 
            v-for="course in futureProjects" 
            :key="course.courseCode"
            :zoom="100" 
            :courseCode="course.courseCode" 
            :courseTitle="course.courseTitle" 
            :courseLinks="course.courseLinks"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar/SideBar.vue';
import CourseCard from '@/components/cards/CourseCard.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  name: 'MainPage',
  components: {
    Sidebar,
    CourseCard,
    HeaderComponent
  },
  data() {
    return {
      pastProjects: [
        { courseCode: "Alevel50001", courseTitle: "Mathematics", courseLinks: [{ text: 'More info', href: '#' }, { text: 'Open Multiple Instructors', href: '#' }] },
        { courseCode: "Alevel50002", courseTitle: "Physics", courseLinks: [{ text: 'More info', href: '#' }, { text: 'Open Multiple Instructors', href: '#' }] },
        { courseCode: "Alevel50003", courseTitle: "Chemistry", courseLinks: [{ text: 'More info', href: '#' }, { text: 'Open Multiple Instructors', href: '#' }] },
        { courseCode: "Alevel50004", courseTitle: "Economy", courseLinks: [{ text: 'More info', href: '#' }, { text: 'Open Multiple Instructors', href: '#' }] },
        { courseCode: "Alevel50005", courseTitle: "Further Math", courseLinks: [{ text: 'More info', href: '#' }, { text: 'Open Multiple Instructors', href: '#' }] },
      ],
      currentProjects: [
        { courseCode: "MECH50001", courseTitle: "Heat Transfer", courseLinks: [{ text: 'More info', href: '#' }, { text: 'Open Multiple Instructors', href: '#' }] },
        { courseCode: "MECH50002", courseTitle: "Fluid Mechanics", courseLinks: [{ text: 'More info', href: '#' }, { text: 'Open Multiple Instructors', href: '#' }] },
        { courseCode: "Fluid02001", courseTitle: "Control volume analysis, frames of reference, fluid particles.", courseLinks: [{ text: 'More info', href: '#' }, { text: 'Open Multiple Instructors', href: '#' }] },
        { courseCode: "Fluid02002", courseTitle: "Material Derivative", courseLinks: [{ text: 'More info', href: '#' }, { text: 'Open Multiple Instructors', href: '#' }] },
        { courseCode: "Fluid02003", courseTitle: "Application to scalars; acceleration; vectors; Velocity gradients; Mass conservation", courseLinks: [{ text: 'More info', href: '#' }, { text: 'Open Multiple Instructors', href: '#' }] },
      ],
      futureProjects: [
        { courseCode: "Manu50001", courseTitle: "MECH Engineer", courseLinks: [{ text: 'More info', href: '#' }, { text: 'Open Multiple Instructors', href: '#' }] },
        { courseCode: "Manu50002", courseTitle: "Civil Engineer", courseLinks: [{ text: 'More info', href: '#' }, { text: 'Open Multiple Instructors', href: '#' }] },
        { courseCode: "Manu50003", courseTitle: "Electrics and Electronics Engineer", courseLinks: [{ text: 'More info', href: '#' }, { text: 'Open Multiple Instructors', href: '#' }] },
        { courseCode: "Finan60001", courseTitle: "Investor", courseLinks: [{ text: 'More info', href: '#' }, { text: 'Open Multiple Instructors', href: '#' }] },
        { courseCode: "Finan60002", courseTitle: "Financial Advisor", courseLinks: [{ text: 'More info', href: '#' }, { text: 'Open Multiple Instructors', href: '#' }] },
      ],
    };
  }
};
</script>

<style>
#MainPage {
  display: flex;
}

.content-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 250px; /* Adjust based on sidebar width */
}

.main-content {
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #008000; /* Green background */
  padding: 20px 0; /* Add padding to give some space around the content */
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%; /* Adjust the width as needed */
}

.column h2 {
  margin-bottom: 20px;
  color: white; /* Make header text white for better contrast */
}

.header {
  position: fixed;
  top: 0;
  width: calc(100% - 250px); /* Adjust based on sidebar width */
  z-index: 10;
}
</style>
