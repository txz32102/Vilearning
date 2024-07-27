<template>
    <div>
      <div class="header">
        <div class="header-content">
          <div class="main-page">
            <h1>MAIN PAGE</h1>
            <p>Manage Your Life!</p>
          </div>
          <div class="mode-toggle">
            <p>Mode: <a href="#">Overall</a> / <a href="#">Detailed</a></p>
          </div>
        </div>
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
    height: 20%; /* Changed to 20% */
    background-color: green;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    z-index: 999; /* Make sure the header is behind the sidebar */
    border-bottom: 5px solid black; /* Adding a black line to the bottom part */
  }
  
  .header-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    align-items: center;
    position: relative;
  }
  
  .main-page {
    background-color: #ffeb3b;
    padding: 10px 20px;
    border-radius: 10px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .mode-toggle {
    background-color: #e0e0e0;
    padding: 10px 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    background-color: green; /* Change this to match the background in the image */
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
  