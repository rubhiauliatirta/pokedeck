<template>
  <div class="d-flex flex-row flex-wrap justify-content-center align-items-stretch">
    <Card v-for="card in cardlist"
      :key="card.id"
      :card="card"
      />
  </div>
</template>

<script>
import Card from './Card'
export default {
  props: ['cardlist'],
  components: {
    Card
  }
}
</script>
