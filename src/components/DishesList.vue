<template>
  <div id="dishList">
   
    <ul>
        <li v-for='dish in dishes' v-bind:key='dish.id'>
            <div v-if="!isEditing">
                {{dish.name}} <br>
                <img v-bind:src='dish.image'/> <br>
                {{dish.description}} <br>
                <div class="btn-group">
                    <button type="button" class="btn"  @click="toggleToDishEditForm">
                        Edit <span class="visually-hidden">{{dish.name}}</span>
                    </button>
                    <button type="button" class="btn btn__danger" @click="deleteDish">
                        Delete <span class="visually-hidden">{{dish.name}}</span>
                    </button>
                </div>
            </div>
            <edit-dish-form v-else :id="id" :name="name"
                    @dish-edited="dishEdited"
                    @dish-cancelled="editCancelled">
            </edit-dish-form>    
        </li>
    </ul>
    
  </div>
</template>

<script>
import axios from 'axios'
import EditDishForm from "./EditDishForm";

export default {
    
    name: 'DishesList',

    components: {
        EditDishForm
    },

    data() {
        return {
            dishes: [],
            isEditing : false
        }
    },

    created() {
        this.listAllDishes()
    },

    methods: {
        listAllDishes () {
            axios.get('http://127.0.0.1:8000/api/dishes').then(response => {
                this.dishes = response.data
            })
        },
        deleteDish(id) {
            axios.delete('http://127.0.0.1:8000/api/dishes/{id}').then(response => {
                this.$emit('item-deleted');
                this.listAllDishes();
            })
        },
        toggleToDishEditForm() {
            this.isEditing = true;
        },
        editDish (id, data) {
            axios.put('http://127.0.0.1:8000/api/dishes/{id}').then(response => {
                this.listAllDishes();
            })
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