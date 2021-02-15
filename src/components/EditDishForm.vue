<template>
  <form class="stack-small" @submit.prevent="onSubmit">
    <div>
      <label class="edit-label">
        Edit Name for &quot;{{dish.name}}&quot;
      </label>
      <input 
        name="name"
        type="text" 
        autocomplete="off" 
        v-model.lazy.trim="editedDish.name" 
        v-bind="dish.name" />

    </div>
    <div>
      <label class="edit-label">
        Edit Image for &quot;{{dish.image}}&quot;
      </label>
      <input 
        name="image"
        type="text" 
        autocomplete="off" 
        v-model.lazy.trim="editedDish.image" 
        v-bind="dish.image" />

    </div>
    <div>
      <label class="edit-label">
        Edit Description for &quot;{{dish.description}}&quot;
      </label>
      <input 
         name="description"
        type="text" 
        autocomplete="off" 
        v-model.lazy.trim="editedDish.description"
        v-bind:description="dish.description" />
    </div>
    <div class="btn-group">
      <button type="button" class="btn" @click="onCancel">
        Cancel
        <span class="visually-hidden">editing {{dish.id}}</span>
      </button>
      <button type="submit" class="btn btn__primary">
        Save
        <span class="visually-hidden">edit for {{dish.id}}</span>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    dish: {
      type: Object,
    },
    // name: {
    //   type: String,
    //   required: true
    // },
    // image: {
    //   type: String,
    //   required: true
    // },
    // description: {
    //   type: String,
    //   required: true
    // },
    // id: {
    //   type: String,
    //   required: true
    // }
  },
  data() {
    return {
      
        editedDish: {
            name: null,
            image: null,
            description: null
        }
    };
  },
  
  methods: {

    onSubmit() {
      console.log(this.editedDish.name);
      this.$emit("dish-edited", this.dish.id, this.editedDish);
    
    },
    onCancel() {
      this.$emit("edit-cancelled");
    }
  }
};
</script>
<style scoped>
.edit-label {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0b0c0c;
  display: block;
  margin-bottom: 5px;
}
input {
  display: inline-block;
  margin-top: 0.4rem;
  width: 100%;
  min-height: 4.4rem;
  padding: 0.4rem 0.8rem;
  border: 2px solid #565656;
}
form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
form > * {
  flex: 0 0 100%;
}
</style>