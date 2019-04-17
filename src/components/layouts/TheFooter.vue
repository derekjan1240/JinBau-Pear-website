<template>
    <footer id="footer" class="container-fluid text-center">
        <GoogleMap/>
        <div id="social-media" class="pt-3">
          <ul class="list-inline">
            <li v-for="socialMediaList in socialMediaLists" :key="socialMediaList._id"  class="list-inline-item">
              <a :href="socialMediaList.link"><font-awesome-icon :icon="socialMediaList.icon" size="lg" class="m-3" :style="socialMediaList.styles" v-b-tooltip.hover.top="socialMediaList.title"/></a>
            </li>
          </ul>
          <p>©2019 by jinbau-pear.</p>
        </div>

        <!-- without v-for 
          <div id="social-media">
            <a :href="facebook.link"><font-awesome-icon :icon="['fab', 'facebook']" size="lg" class="m-3" style="color: #3B5998"/></a>
            <font-awesome-icon :icon="['fab', 'line']" size="lg" class="m-3" style="color: 00c300"/>
            <p>©2019 by jinbau-pear.</p>
          </div>  
        -->

    </footer>
</template>

<script>
import GoogleMap from '@/components/GoogleMap.vue'

export default {
  name: 'TheFooter',
  components: {
    GoogleMap
  },
  data() {
    return {
      facebook:{
          link: 'https://www.facebook.com/%E9%87%91%E5%AF%B6%E7%9A%84%E9%AB%98%E6%8E%A5%E6%A2%A8-Jinbau-Pear-372478336933774/?modal=admin_todo_tour'
      },
      socialMediaLists:{
        facebook:{
          _id:0,
          title: 'facebook',
          icon:['fab', 'facebook'],
          styles:{color: '#3B5998'},
          link: 'https://www.facebook.com/%E9%87%91%E5%AF%B6%E7%9A%84%E9%AB%98%E6%8E%A5%E6%A2%A8-Jinbau-Pear-372478336933774/?modal=admin_todo_tour'
        },
        line:{
          _id:1,
          title: 'line',
          icon:['fab', 'line'],
          styles:{color: '#00c300'},          
          link: 'https://www.facebook.com/%E9%87%91%E5%AF%B6%E7%9A%84%E9%AB%98%E6%8E%A5%E6%A2%A8-Jinbau-Pear-372478336933774/?modal=admin_todo_tour'
        }
      }

    //   designer: `
    //     <span style="font-size:0.9em">Designed by
    //       <span style="color: #e27575;font-size: 14px;">❤</span>
    //       <a href="https://github.com/summerblue"target="_blank"style="color:inherit">Summer</a>
    //     </span>
    //   `
    }
  }
}
</script>

<style scoped>
    #footer{
        text-align: center;
    }
</style>