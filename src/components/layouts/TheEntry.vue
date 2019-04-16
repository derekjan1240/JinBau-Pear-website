<template>
    <b-navbar-nav class="ml-auto">
      <b-nav-item to="/" v-b-modal="'login-modal'"><font-awesome-icon :icon="['fa', 'user']" size="sm" /> 註冊  <font-awesome-icon :icon="['fa', 'user-plus']" size="sm" class="ml-2"/> 登入 </b-nav-item>
      <LoginModel/>
    </b-navbar-nav>
</template>

<script>
import LoginModel from '@/components/model/LoginModel.vue'
export default {
  name: 'TheEntry',
  components: {
    LoginModel
  }
}
</script>

<style scoped>

</style>