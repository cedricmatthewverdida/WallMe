<template>
  <v-app>


    <NavigationBar :title="title"/>
    
    <v-main>
        <Nuxt/>
    </v-main>
    
    <TheSnackbar />

  </v-app>
</template>

<script>
import TheSnackbar from '@/components/TheSnackbar.vue';
import NavigationBar from '~/components/navigation.vue'
import {mapActions} from 'vuex'
export default {

  components:{
    NavigationBar,
    TheSnackbar
  },

  data () {
    return {
      title: 'Wall Me'
    }
  },

  methods: {
    ...mapActions(['makeAuth'])
  },
  mounted() {
    if(this.$auth.loggedIn){
      this.makeAuth()
    }
  },

}
</script>
