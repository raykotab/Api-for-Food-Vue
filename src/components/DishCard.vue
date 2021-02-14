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
export default {

}
</script>

<style>

</style>