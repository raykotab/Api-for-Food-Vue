<template>
  <form @submit.prevent="onSubmit">
    <label for="new-dish-input">
      Add your favourite dish!
    </label>
    <input
      type="text"
      id="new-name-input"
      name="new-dish-name"
      placeholder="Name"
      autocomplete="off"
      v-model.lazy="name"
    />
    <input
      type="text"
      id="new-image-input"
      name="new-dish-image"
      placeholder="Image url"
      autocomplete="off"
      v-model.lazy="image"
      
    />
    <input
      type="text"
      id="new-description-input"
      name="new-dish-description"
      placeholder="Description"
      autocomplete="off"
      v-model.lazy="description"
     
    />
    <button type="submit">
      Add a dish
    </button>
  </form>
</template>

<script>


export default {
    name: 'NewDishForm',
    methods: {
        onSubmit() {
            this.$emit("dish-added", this.name);
        }
    },

    data() {
    return {
      name: "",
      image: "",
      description: ""
    };
  }
};

</script>

<style>

</style>