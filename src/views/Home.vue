<template>
  <div class="home">
  <!-- <dishes-list/> -->
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DishesList from '../components/DishesList.vue'
// import newDishForm from '../components/newDishForm.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld,
    DishesList
    
  }
}
</script>
