<template>
    <div class="user-profile">
      <!-- Заголовок профілю -->
      <div class="profile-header">
        <!-- Іконка користувача -->
        <i class="fas fa-user-circle profile-icon"></i>
        <div class="user-details">
          <h2>{{ user.name }}</h2>
          <p>{{ user.email }}</p>
        </div>
      </div>
  
      <!-- Таблиця JSON-схем -->
      <div class="json-schemas">
        <h3>Відредаговані JSON-схеми</h3>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Назва схеми</th>
              <th>Дата редагування</th>
              <th>Дії</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(schema, index) in jsonSchemas" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ schema.name }}</td>
              <td>{{ schema.date }}</td>
              <td>
                <button @click="viewSchema(schema)">Переглянути</button>
                <button @click="deleteSchema(index)">Видалити</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserProfile',
    data() {
      return {
        user: {
          name: 'Ім\'я Користувача', // Дефолтне ім'я
          email: 'user@example.com',  // Дефолтна електронна пошта
        },
        jsonSchemas: [
          { name: 'Schema 1', date: '2024-04-12' },
          { name: 'Schema 2', date: '2024-04-13' },
          { name: 'Schema 3', date: '2024-04-14' },
        ],
      };
    },
    methods: {
      viewSchema(schema) {
        alert(`Відображення схеми: ${schema.name}`);
      },
      deleteSchema(index) {
        this.jsonSchemas.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  .user-profile {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .profile-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .profile-icon {
    font-size: 80px;
    color: #4CAF50;
    margin-right: 20px;
  }
  
  .user-details h2 {
    margin: 0;
    font-size: 24px;
    color: #333;
  }
  
  .user-details p {
    margin: 5px 0 0;
    color: #666;
  }
  
  .json-schemas h3 {
    margin-bottom: 10px;
    color: #333;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  
  table th, table td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }
  
  table th {
    background: #4CAF50;
    color: white;
  }
  
  table tr:nth-child(even) {
    background: #f2f2f2;
  }
  
  button {
    margin: 5px;
    padding: 5px 10px;
    border: none;
    background-color: #4CAF50;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  