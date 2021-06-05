<template>
  <b-card
    overlay
    style="margin:10px; padding:0; width:200px;"
    :img-src="imgSrc"
    img-alt="image"
    body-class="d-flex w-100 text-center align-items-center justify-content-center"
    footer-class="d-flex justify-content-between align-items-center p-2 m-0 footerclass">
    <b-spinner v-if="spinner" variant="light" label="Spinning"></b-spinner>
    <small slot="footer">{{card.name}}</small>
    <div slot=footer>
    <b-button size="sm" variant="primary"
      v-if="shouldAdd"
      @click="addCard">
        Add
    </b-button>
    <b-button v-else size="sm" variant="danger"
      @click="removeCard">
        Remove
    </b-button>
    </div>
  </b-card>
</template>

<script>
export default {
  props: ['imgSrc', 'card', 'spinner'],
  methods: {
    removeCard (id) {
      this.$swal({
        title: `Delete ${this.card.name} from your cards?`,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.$store.commit('deleteFromMyCards', this.card.id)
          this.$mytoast(`Succesfully delete ${this.card.name}`)
        }
      })
    },
    addCard () {
      console.log(this.$route.path)
      this.$store.commit('addToMyCards', this.card)
      this.$mytoast(`Succesfully add ${this.card.name} to your collection`)
    }
  },
  computed: {
    shouldAdd () {
      return !this.$route.path.includes('mycards')
    }
  }
}
</script>

<style>
  .footerclass{
    z-index: 10
  }
</style>
