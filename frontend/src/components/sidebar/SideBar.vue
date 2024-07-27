<template>
  <div>
    <div class="header">
      <h1>Header Content</h1>
    </div>
    <div class="sidebar">
      <div class="sidebar-content">
        <img src="@/assets/icons/cs.png" alt="User Profile" class="profile-pic" />
        <p>User,<br />Good morning!</p>
        <button class="sidebar-button become-member">Become a member</button>
        <button class="sidebar-button">Design My Future</button>
        <button class="sidebar-button">New Project</button>
        <button class="sidebar-button">Community</button>
        <button class="sidebar-button">Team</button>
        <button class="sidebar-button">Bin</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 250px; /* This ensures the header starts after the sidebar */
  width: calc(100% - 250px); /* The width of the header minus the width of the sidebar */
  height: 10%;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 999; /* Make sure the header is behind the sidebar */
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #4caf50; /* Change this to match the background in the image */
  display: flex;
  justify-content: center;
  z-index: 1000;
  border-right: 5px solid black; /* Adding a black line to the rightmost part */
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  padding: 20px;
}

.profile-pic {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.sidebar-button {
  background-color: #ffeb3b; /* Change this to match the button color in the image */
  color: #000;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  width: 100%;
}

.sidebar-button.become-member {
  background-color: #ff4081; /* Pink color for Become a Member button */
}

.sidebar-button:hover {
  background-color: #f1c40f; /* Change this to a hover color if needed */
}
</style>
