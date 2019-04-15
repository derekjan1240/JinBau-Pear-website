<template>
  <header id="header" class="container-fluid">
    <div>
      <b-navbar toggleable="sm" type="light" variant="light">
        <a class="navbar-brand mr-5" href="#">金寶的高接梨</a>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item v-for="navList in navLists" :key="navList._id" href="#" @click="changeNavIndex(navList._id)" :class="{ 'active': navList._id === activeNavIndex }">{{ navList.name }}</b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <TheEntry/>
        </b-collapse>
      </b-navbar>
    </div>
      
    <div id="headerImg" class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="d-none d-md-block font-weight-bold display-2 mb-3 mt-5">金寶的高接梨</h1>
        <h1 class="d-none d-md-block display-3 mb-3 mt-3" style="font-family: 'Oswald', sans-serif;">JINBAU PEAR</h1>
        <h1 class="d-md-none font-weight-bold display-5 mb-3 mt-5">金寶的高接梨</h1>
        <h1 class="d-md-none display-5 mb-3 mt-5" style="font-family: 'Oswald', sans-serif;">JINBAU PEAR</h1>
        <font-awesome-icon :icon="['fa', 'seedling']" size="6x" class="m-5" style="color: green"/>
        <p class="display-5 d-none d-sm-block" >金寶的高接梨  |  JINBAU PEAR  |  產地直銷 <br>
          來自台中石岡小農自產自銷的新鮮高接水梨</p>
      </div>
    </div>
  </header>

</template>

<script>
import TheEntry from '@/components/layouts/TheEntry'

export default {
  name: 'TheHeader',
  components: {
    TheEntry
  },
  data() {
    return {
      logo: {
        src: require('@/assets/img/jinbau-pear.jpg'),
        title: 'JinBau Pear'
      },
      navLists: [
        {
          _id: 0,
          name: '首頁'
        },{
          _id: 1,
          name: '小農日誌'
        },{
          _id: 2,
          name: '產品資訊'
        },{
          _id: 3,
          name: '聯絡我們'
        }
      ],
      activeNavIndex: 0
    }
  },
  beforeCreate() {

  },
  methods: {
    changeNavIndex(index) {
      this.activeNavIndex = index;
    }
  }
}
</script>

<style scoped>
img { width: 20%; }

.title { display: none; }

#headerImg{
  text-align: center;
  color:white;
  height:100vh;
  background-image: url('https://lh3.googleusercontent.com/5Q2cDzdE4Re0oBFSsKTjg6t0f2z8pA2OFNVXjjFCtfhtzWhPewRF-RW4jJFc79yNaymvpPnuy_mnhK_RZ3erdZOXb9M_GXw3fpoAJ4ObbWddIm-XsDFhYS5Dq5RGJBeMYwTjtRmhXOlc0fKzXZvq-c6GnR8wtGmtr23UhMcxutfyFEjn4ZxVvvIAeoW5C_zl2XyskS3DrJK1tJzaheQk0IRdeof2-d9QT7ME7yUCkhTSUMUuLSx4n98n9kXJJsCTD4IB99MQXG4j_BTSh1mJP0HtvDzOzgw2jiuB2pxlwQ2b0cNCOzfA6aMjVSlGRerZIXL_HnPIl1NmWs1D5TRkUKmDGR8TNxe0XfzI0aYg8p7q1AM03NFPlevuSjsLw-TA7gXGIEa4xoZaF2aPGNcSnRREQODT4gQEzYjddAB8ZRJDUebHUY-CZ5o1b_m-tBTS2oReO1j58TqOUVubIBw6NBZJVTeYJcOBgTRRoEuKOSAdHTwNlpqCf9YHAsEfoOw1HQ7pbEQVMmYmK34aqDXwIowZLPFRzbv9WQurKKCVWwAd8xnTVB9QxM6-3G0d7Jnxb6NSz5TPWaCy680X7KI133M6sMPOKV8RVKVkdWlPgzGRhoHDJSIvq7VTnEgEW0mWR8qiGbigpGtlqLh0LY7C61CxuEje6_w=w1221-h915-no');
  background-position: 50% 70%;
  background-size: cover;
  background-color: antiquewhite;
  opacity: 0.8;
}
</style>