<template>
  <!-- Головний хедер -->
  <header class="header">
    <div class="header-content">
      <!-- Назва заголовка -->
      <div class="header-title">
        <h1><router-link to="/">JSON Formatter</router-link></h1>
      </div>

      <!-- Кнопки навігації -->
      <div class="header-buttons">
        <router-link to="/register" class="nav-link-button">Registration</router-link>
        <router-link to="/login" class="nav-link-button">Log In</router-link>

        <!-- Випадаючий список профілю -->
        <div class="dropdown">
          <button class="dropbtn">My account <i class="fas fa-user"></i> </button>
          <div class="dropdown-content">
            <router-link to="/profile">Profile</router-link>
            <a href="#" @click="logOut">Log Out</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  name: "HeaderNav",
  methods: {
    logOut() {
      alert("Вихід з облікового запису");
    },
  },
};
</script>

<style scoped>
/* Головний стиль для хедера */
.header {
  background-color: #4caf50;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.header-content {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Стиль для заголовка */
.header-title h1 {
  margin: 0;
}

.header-title h1 a {
  text-decoration: none;
  color: white;
  font-size: 1.8rem;
  transition: color 0.3s ease;
}

.header-title h1 a:hover {
  color: #f0f0f0;
}

/* Кнопки навігації */
.header-buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-link-button {
  display: inline-block;
  background-color: #ffffff;
  color: #4caf50;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 1rem;
  text-decoration: none;
  transition: background 0.3s ease, color 0.3s ease;
}

.nav-link-button:hover {
  background-color: #e6e6e6;
  color: #388e3c;
}

/* Випадаючий список */
.dropdown {
  position: relative;
}

.dropbtn {
  background-color: #ffffff;
  color: #4caf50;
  padding: 8px 16px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 140px;
  border-radius: 4px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: #333;
  padding: 10px 15px;
  text-decoration: none;
  display: block;
  white-space: nowrap;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
  color: #4caf50;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #e6e6e6;
}
</style>
