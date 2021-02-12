<template>
  <div id="app">
    <new-dish-form @dish-added="addDish"></new-dish-form>
       <dishes-list/>
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
    
  </div>
  
</template>

<script>
import DishesList from './components/DishesList';
import NewDishForm from './components/NewDishForm';
import EditDishForm from './components/EditDishForm';
import axios from 'axios'

export default {

  name: 'app',

  components: {
    DishesList,
    NewDishForm,
    EditDishForm
  },
  
  data() {
    return {
      newDish: {} 
    };
  },
  
  methods: {
    async addDish(dish) {
      try { await axios
      ({
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/dishes',
        headers: { 
        'Content-Type': 'application/json'
        },
        data: JSON.stringify(dish)
      })
      this.newDish = dish;
      console.log(dish);
      }
      catch (error) {
        console.log(error);
      }
    }
  }
};


// 
// export default {
//   name: "add-tutorial",
//   data() {
//     return {
//       tutorial: {
//         id: null,
//         title: "",
//         description: "",
//         published: false
//       },
//       submitted: false
//     };
//   },
//   methods: {
//     saveTutorial() {
//       var data = {
//         title: this.tutorial.title,
//         description: this.tutorial.description
//       };

//       TutorialDataService.create(data)
//         .then(response => {
//           this.tutorial.id = response.data.id;
//           console.log(response.data);
//           this.submitted = true;
//         })
//         .catch(e => {
//           console.log(e);
//         });
//     },
    
//     newTutorial() {
//       this.submitted = false;
//       this.tutorial = {};
//     }
//   }
// };
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

