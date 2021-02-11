<template>
  <form>
    <label for="new-dish-input">
      Add your favourite dish!
    </label>
    <input
      type="text"
      id="new-dish-input"
      name="new-dish"
      autocomplete="off"
    />
    <button type="submit">
      Add a dish
    </button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
    name: 'NewDishForm',

}
</script>

<style>

</style>