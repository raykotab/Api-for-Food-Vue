<template>

  <div id="dishList">
    <new-dish-form @dish-added="createDish"></new-dish-form>
    <ul>
        <li v-for='dish in dishes' v-bind:key='dish.id'>
            <div v-if="!isEditing" :label="dish.label" :id="dish.id"
                @dish-deleted="deleteDish(dish.id)"
                @dish-edited="editDish(dish.id, $event)">
                {{dish.name}} <br>
                <img v-bind:src='dish.image'/> <br>
                {{dish.description}} <br>
                <div class="btn-group">
                    <button type="button" class="btn"  @click="toggleToDishEditForm">
                        Edit <span class="visually-hidden">{{dish.id}}</span>
                    </button>
                    <button type="button" class="btn btn__danger" @click="deleteDish(dish.id)">
                        Delete <span class="visually-hidden">{{dish.id}}</span>
                    </button>
                </div>
            </div>
            <edit-dish-form v-else :id="id" :name="newName" :image="newImage" :description="newDescription"
                    @dish-edited="dishEdited"
                    @dish-cancelled="editCancelled">
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

export default {
    
    name: 'DishesList',

    components: {
        EditDishForm,
        NewDishForm
    },

    data() {
        return {
            dishes: [],
            isEditing : false,
            editingData: {
                newName: "",
                newImage: "",
                newDescription: "",
            }
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
            //this.$emit('-deleted');
            this.listAllDishes();
        },

        // async deleteDish(dishId) {
           
        //     try { await axios
        //         ({
        //             method: 'delete',
        //             url: `http://127.0.0.1:8000/api/dishes/${dishId}`,
        //             headers: {},
        //             data: JSON.stringify()
        //         })
        //         this.$emit('dish-deleted', this.dish);
                
        //     }
        //     catch (error) {
        //     console.log(error);
        //     }
        // },


        toggleToDishEditForm() {
            this.isEditing = true;
        },
        editDish (id, editingData) {
            axios.put('http://127.0.0.1:8000/api/dishes/{id}').then(response => {
               
            }, this.listAllDishes())
        },
        dishEdited(newLabel) {
            this.$emit('dish-edited', newLabel);
            this.isEditing = false;
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