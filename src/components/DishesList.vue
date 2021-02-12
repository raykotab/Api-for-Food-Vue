<template>
  <div id="dishList">
   
    <ul>
        <li v-for='dish in dishes' v-bind:key='dish.id'>
            {{dish.name}}
            <img v-bind:src='dish.image'/> 
            {{dish.description}}
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


</style>