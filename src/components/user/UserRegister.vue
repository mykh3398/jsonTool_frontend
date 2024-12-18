<template>
    <div class="auth-container">
      <h2 class="auth-title">Registration</h2>
      <form @submit.prevent="register">
        <!-- Username -->
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="formData.username"
            placeholder="Enter your username"
            required
          />
        </div>
        
        <!-- Email -->
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            placeholder="Enter your email"
            required
          />
        </div>
        
        <!-- Password -->
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="formData.password"
            placeholder="Enter your password"
            required
          />
        </div>
  
        <!-- Submit Button -->
        <button type="submit" class="submit-button">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "UserRegister",
    data() {
      return {
        formData: {
          username: "",
          email: "",
          password: "",
        },
      };
    },
    methods: {
      register() {
        console.log("Registration Data:", this.formData);
        alert("Registration successful!");
        // Сюди можна додати логіку для API-запиту
      },
    },
  };
  </script>
  
  <style scoped>
  .auth-container {
    max-width: 400px;
    margin: 2rem auto;
    background: #f9f9f9;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  
  .auth-title {
    margin-bottom: 1.5rem;
    color: #4caf50;
  }
  
  .form-group {
    margin-bottom: 1rem;
    text-align: left;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
  }
  
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  input:focus {
    outline: none;
    border-color: #4caf50;
  }
  
  .submit-button {
    background-color: #4caf50;
    color: white;
    padding: 0.7rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: #45a049;
  }
  </style>
  