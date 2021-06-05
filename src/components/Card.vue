<template>
    <div>
      <CardTemplate v-if="isLoading" imgSrc="./card.jpg" type="add" :card="card" spinner="true"/>
      <CardTemplate v-show="!isLoading" :imgSrc="card.imageUrl" type="add" :card="card" ref="imagecard"/>
    </div>
</template>

<script>
import CardTemplate from './CardTemplate'
export default {
  components: {
    CardTemplate
  },
  props: ['card'],
  data () {
    return {
      isLoading: true
    }
  },
  mounted () {
    // console.log(this.$refs.imagecard.$el)
    this.$refs.imagecard.$el.querySelector('img').onload = this.finishedLoadImage
    this.$refs.imagecard.$el.querySelector('img').onerror = this.finishedLoadImage
  },
  methods: {
    finishedLoadImage () {
      this.isLoading = false
    }
  }
}
</script>

<style scoped>
  .loading-image {
    background-image: url('~@/assets/card.jpg');
    background-repeat: no-repeat;
    background-size: 200px 279px
  }
</style>
