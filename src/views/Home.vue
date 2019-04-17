<template>
  <b-container fluid class="bg-light">
    <div id="headerImg" class="jumbotron jumbotron-fluid text-center">
      <b-container>
        <h1 class="d-none d-md-block font-weight-bold display-2 mb-3 mt-5">金寶的高接梨</h1>
        <h1 class="d-none d-md-block display-3 mb-3 mt-3" style="font-family: 'Oswald', sans-serif;">JINBAU PEAR</h1>
        <h1 class="d-md-none font-weight-bold display-5 mb-3 mt-5">金寶的高接梨</h1>
        <h1 class="d-md-none display-5 mb-3 mt-5" style="font-family: 'Oswald', sans-serif;">JINBAU PEAR</h1>
        <font-awesome-icon :icon="['fa', 'seedling']" size="6x" class="m-5" style="color: green"/>
        <p class="display-5 d-none d-sm-block" >金寶的高接梨  |  JINBAU PEAR  |  產地直銷 <br>
          來自台中石岡小農自產自銷的新鮮高接水梨</p>
      </b-container>
    </div>
    <AboutBrand/>
    <div id="EyecatchImg" class="mb-5"/>
  </b-container>
</template>

<script>
import AboutBrand from '@/components/AboutBrand.vue'

export default {
  name: 'Home',
  components: {
    AboutBrand
  }
}
</script>

<style scoped>

#headerImg{
  color:white;
  height:100vh;
  background-image: url('https://lh3.googleusercontent.com/5Q2cDzdE4Re0oBFSsKTjg6t0f2z8pA2OFNVXjjFCtfhtzWhPewRF-RW4jJFc79yNaymvpPnuy_mnhK_RZ3erdZOXb9M_GXw3fpoAJ4ObbWddIm-XsDFhYS5Dq5RGJBeMYwTjtRmhXOlc0fKzXZvq-c6GnR8wtGmtr23UhMcxutfyFEjn4ZxVvvIAeoW5C_zl2XyskS3DrJK1tJzaheQk0IRdeof2-d9QT7ME7yUCkhTSUMUuLSx4n98n9kXJJsCTD4IB99MQXG4j_BTSh1mJP0HtvDzOzgw2jiuB2pxlwQ2b0cNCOzfA6aMjVSlGRerZIXL_HnPIl1NmWs1D5TRkUKmDGR8TNxe0XfzI0aYg8p7q1AM03NFPlevuSjsLw-TA7gXGIEa4xoZaF2aPGNcSnRREQODT4gQEzYjddAB8ZRJDUebHUY-CZ5o1b_m-tBTS2oReO1j58TqOUVubIBw6NBZJVTeYJcOBgTRRoEuKOSAdHTwNlpqCf9YHAsEfoOw1HQ7pbEQVMmYmK34aqDXwIowZLPFRzbv9WQurKKCVWwAd8xnTVB9QxM6-3G0d7Jnxb6NSz5TPWaCy680X7KI133M6sMPOKV8RVKVkdWlPgzGRhoHDJSIvq7VTnEgEW0mWR8qiGbigpGtlqLh0LY7C61CxuEje6_w=w1221-h915-no');
  background-position: 50% 70%;
  background-size: cover;
  background-color: antiquewhite;
  opacity: 0.8;
}

#EyecatchImg{
  height:70vh;
  background-image: url('https://lh3.googleusercontent.com/xKFlI-xrdhCLDXdmIV9EMA-H4uYjB_Z5uCjiTM750sgVaR9ZXO1GlSNYJmVRNfkkfpdqy6cJLxz2f_b6Oj-HNpE5RWxZ6lKxuOAM9nm5MCYzxf5t0Vu0Dz0ZBYsQQqS99-h1mG7gLapy1ckLQqfowlsHWWTzJZz6JmjDyl-DBincxQUY8bkgyAI8GMc7UxlY5_WAbzEG8GYD5AqUPcdn28PpV5r5qf3phxM3pQv_30BwZokarG2VD-l1FObpHrd-_IqmTfigqMo_errRneceRKh_yACD10RBhuM-a3jWlDXpxGBM3JJKQlG8GkV1ohtyHhIs9Ft8KGjcg6MovXu8yA9Am7jxY5ZjshsdwSs7pOkFKj7G3OvtkyzeA3_qb1cHsywFlfx3bwKg6Xy2mQdCxaMI0Hw2auh8fas3ED23QJRIeaL9RFxLvZ-E3lVya_TBvU-PAIBdrLrH_SZB96-0QtCKlmgaE2McPY6Oc3dj2pYLnSLs2XnCPNFcILrLlPwqKWuOG405KV3Tz_WwqCOeil1BUGQ0P7mPTYvkvNenFTDH-D8y0DQiOQe0o3PTh2PQ7nh-EZWsjx8jUHEGnBaTdQjOF61VKxKNyd_O1eVrbARysQy8m5MWQnbXWGlQnO70Tl0kdpdoQ_qUM7tzPk8iHlAjt07RO8E=w1632-h452-no');
  background-position: 30% 30%;
  background-size: cover;
  background-color: antiquewhite;
  opacity: 0.9;
}
</style>