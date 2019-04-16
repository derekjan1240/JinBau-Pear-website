<template>
  <header id="header" class="container-fluid">
    <div>
      <b-navbar toggleable="sm" type="light" variant="light">
        <a class="navbar-brand mr-5" href="/">金寶的高接梨</a>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item v-for="navList in navLists" :key="navList._id" :to="navList.path" @click="changeNavIndex(navList._id)" :class="{ 'active': navList._id === activeNavIndex }">{{ navList.name }}</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        <TheEntry/>
      </b-navbar>
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
      navLists: [
        {
          _id: 0,
          name: '首頁',
          path:'/'
        },{
          _id: 1,
          name: '小農日誌',
          path:'/'
        },{
          _id: 2,
          name: '產品資訊',
          path:'/'
        },{
          _id: 3,
          name: '聯絡我們',
          path:'/'
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
</style>