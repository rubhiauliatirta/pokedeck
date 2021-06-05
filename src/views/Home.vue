<template>
  <div>
    <CardList :cardlist="allCards"/>
    <Loading :isLoading="isLoading" message="Fetching new cards...."/>

  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex'
import CardList from '@/components/CardList.vue'
import Loading from '@/components/Loading.vue'

export default {
  created () {
    if (this.allCards.length === 0) {
      this.fetchCard()
    }
    window.addEventListener('scroll', this.scrollListerner)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollListerner)
  },
  components: {
    CardList, Loading
  },
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapState(['allCards'])
  },
  methods: {
    ...mapActions(['getCards']),
    scrollListerner (event) {
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2 && !this.isLoading) {
        this.fetchCard()
      }
    },
    fetchCard () {
      this.isLoading = true
      this.getCards()
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style>

</style>
