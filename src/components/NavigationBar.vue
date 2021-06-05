<template>
  <b-nav id="mynav">
    <b-nav-item to="/">Home</b-nav-item>
    <b-nav-item to="/search">Search</b-nav-item>
    <b-nav-item to="/mycards">My Cards</b-nav-item>
  </b-nav>
</template>

<script>
export default {

}
</script>

<style scoped>
  #mynav{
    position: fixed;
    width: 100%;
    background-color: lightblue;
    z-index: 20;
  }
</style>
