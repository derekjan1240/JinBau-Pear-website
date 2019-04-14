<template>
        <div>
            <div id="map-container-google-1" class="z-depth-1-half map-container">
                <iframe :src="mapPsoition.url" frameborder="0"
                style="border:0" allowfullscreen></iframe>
            </div>
        </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
        mapPsoition:{
            url: "http://maps.google.com.tw/maps?q=24.2589,120.80988972&z=15&output=embed"
        }
    }
  },
  beforeCreate() {

  },
  methods: {
    
  }
}
</script>

<style scoped>
    .map-container{
        overflow:hidden;
        padding-bottom:56.25%;
        position:relative;
        height:0;
    }
    .map-container iframe{
        left:0;
        top:0;
        height:100vh;
        width:100vw;
        position:absolute;
    }
</style>