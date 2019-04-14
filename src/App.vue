<template>
  <div id="app">
      <Header/>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Footer
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
