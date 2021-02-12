<template>
  <div id="dishList">
   
    <ul>
        <li v-for='dish in dishes' v-bind:key='dish.id'>
            {{dish.name}} <br>
            <img v-bind:src='dish.image'/> <br>
            {{dish.description}} <br>
            <button>Delete</button>
            <button>edit</button> 
        </li>
    </ul>
    
  </div>
</template>

<script>
import axios from 'axios'


export default {
    
    name: 'DishesList',
    data() {
        return {
            dishes: []
        }
    },

    created() {
        this.fetchDishes()
    },

    methods: {
        fetchDishes () {
            axios.get('http://127.0.0.1:8000/api/dishes').then(response => {
                this.dishes = response.data
            })
        }
    }
}

</script>

<style>
#dishList img {
    width: 20vw;
    height: 15vw;

}

</style>