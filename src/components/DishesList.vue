<template>

  <div id="dishList">
    <new-dish-form @dish-added="createDish"></new-dish-form>
    <ul>
        <li v-for='dish in dishes' v-bind:key='dish.id'>
            <!-- <dish-card  v-if="!isEditing" :label="dish.label" :id="dish.id"
                @dish-deleted="deleteDish(dish.id)"
                @dish-edited="editDish(dish.id, $event)"></dish-card> -->
            <div v-if="!isEditing" :label="dish.label" :id="dish.id"
                @dish-deleted="deleteDish(dish.id)"
                @dish-edited="editDish(id, dish)">
                {{dish.name}} <br>
                <img v-bind:src='dish.image'/> <br>
                {{dish.description}} <br>
                <div class="btn-group">
                    <button type="button" class="btn"  @click="toggleToDishEditForm(dish)">
                        Edit <span class="visually-hidden">{{dish.id}}</span>
                    </button>
                    <button type="button" class="btn btn__danger" @click="deleteDish(dish.id)">
                        Delete <span class="visually-hidden">{{dish.id}}</span>
                    </button>
                </div>
            </div>
            <edit-dish-form v-if="isEditing" :dish="dish"
                    @dish-edited="editDish"
                    @edit-cancelled="editCancelled">
            </edit-dish-form>    
        </li>
    </ul>
    
  </div>
</template>

<script>
import axios from 'axios'
import NewDishForm from './NewDishForm';
import EditDishForm from "./EditDishForm";
import DishesDataService from '../services/DishesDataService';
import DishCard from './DishCard';

export default {
    
    name: 'DishesList',

    components: {
        EditDishForm,
        NewDishForm,
        DishCard
    },

    data() {
        return {
            dishes: [],
            isEditing : false,
            
        }
    },

    created() {
        this.listAllDishes()
    },

    methods: {
        async listAllDishes () {
            const response = await DishesDataService.getAll()
                this.dishes = response.data
        },
        async createDish(dish) {
        try { const response = await 
        DishesDataService.createDish(dish)
        this.newDish = dish;
        console.log(dish);
        }
        catch (error) {
            console.log(error);
        }
            this.listAllDishes();
        },

        async deleteDish(id) {
            const response = await DishesDataService.deleteDish(id)
            
            this.listAllDishes();
        },
        toggleToDishEditForm(dish) {
            this.isEditing = true;
            
        },

        async editDish (id, editingData) {
            // console.log(id + " " + editingData.newName);
            // axios.put(`http://127.0.0.1:8000/api/dishes/${id}`, editingData).then(response => {
            const response = await DishesDataService.updateDish(id, editingData)
            this.isEditing = false;
            this.listAllDishes()
        },
        dishEdited(newLabel) {
            this.$emit('dish-edited', newLabel);
        },
        editCancelled() {
            this.isEditing = false;
        }  
    },
}

</script>

<style>
#dishList img {
    width: 20vw;
    height: 15vw;

}

</style>