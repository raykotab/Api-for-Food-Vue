<template>
  <div id="app">
   
       <dishes-list/>
       <!-- <dish-card/> -->
    <div id="nav">
     
    </div>
    <router-view/>
    
  </div>
  
</template>

<script>

import DishesList from './components/DishesList';
// import DishCard from './components/DishCard';

export default {

  name: 'app',

  components: {
    DishesList,
    
  },
};



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

