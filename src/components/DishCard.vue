<template>
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
            <button type="button" class="btn btn__danger" @click="deleteDish">
                Delete <span class="visually-hidden">{{dish.id}}</span>
            </button>
        </div>
    </div>
</template>

<script>

import EditDishForm from "./EditDishForm";
import DishesDataService from '../services/DishesDataService';

export default {

    name: 'DishCard',

    components: {
        EditDishForm,

    },

    data() {
        return {
            isEditing : false,
            editingData: {
                newName: "",
                newImage: "",
                newDescription: "",
            } 
        }
    },

    methods: {
        async deleteDish(id) {
            const response = await DishesDataService.deleteDish(id)
            //this.$emit('-deleted');
            this.listAllDishes();
        },
        toggleToDishEditForm() {
            this.isEditing = true;
        },

        editDish (id, editingData) {
            console.log(id);
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
    }

}
</script>

<style>

</style>