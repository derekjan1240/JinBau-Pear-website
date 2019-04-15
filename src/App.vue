<template>
  <div id="app">
      <TheHeader/>
      <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader.vue'
import TheFooter from '@/components/layouts/TheFooter'

export default {
  name: 'app',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
/* google fonts */
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC|Oswald:200,300,400,500,600');

#app {
  font-family: 'Noto Sans TC', 'Oswald', 'Avenir', Helvetica, Arial, sans-serif;
}

</style>
