<template>
    <div v-if="isLoading" class="text-center">
      <b-spinner type="grow" style="width: 5rem; height: 5rem;" ></b-spinner>
      <p>{{message}}</p>
    </div>
</template>

<script>
export default {
  name: 'Loading',
  props: ['isLoading', 'message']

}
</script>
