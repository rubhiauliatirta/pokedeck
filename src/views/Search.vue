<template>
  <div>
    <b-form @submit.prevent="search" inline>
      <b-form-input
        style="width:500px"
        v-model="searchQuery"
        type="text"
        required
        placeholder="Search..."
      ></b-form-input>
      <b-button
        class="ml-2"
        type="submit"
        >Submit</b-button>
    </b-form>
    <CardList :cardlist="$store.state.searchResult" class="mt-5"/>
    <Loading :isLoading="isLoading" message="Searching...."/>
    <h2 v-if="!isLoading && $store.state.searchResult.length === 0">No Result(s) Found.</h2>

  </div>
</template>

<script>
import CardList from '@/components/CardList.vue'
import Loading from '@/components/Loading.vue'
export default {
  data () {
    return {
      isLoading: false,
      searchQuery: this.$store.state.searchQuery
    }
  },
  components: {
    CardList, Loading
  },
  methods: {
    search () {
      this.isLoading = true
      this.$store.dispatch('getSearchResult', this.searchQuery)
        .finally(() => {
          this.isLoading = false
        })
    }
  }

}
</script>

<style>

</style>
