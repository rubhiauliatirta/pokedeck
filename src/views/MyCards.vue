<template>
  <div>
    <h1 v-if="myCards.length === 0">No card here.</h1>
    <CardList :cardlist="myCards"/>
  </div>

</template>

<script>
import CardList from '../components/CardList'
import { mapState } from 'vuex';
export default {
  components: {
    CardList
  },
  computed : {
    ...mapState(['myCards'])
  }
}
</script>

<style>

</style>
