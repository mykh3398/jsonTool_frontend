<template>
  <div id="app">
    <HeaderNav />
    <div class="main-content">
      <router-view />
    </div>

  </div>
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue";


export default {
  components: {
    HeaderNav,

  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
}


.main-content {
  flex-grow: 1;
  padding: 20px; 
  box-sizing: border-box; 
}
</style>
