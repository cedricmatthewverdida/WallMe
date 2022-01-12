<template>
  <v-app>
    
    <v-main>
        <Nuxt/>
    </v-main>

    <TheSnackbar />
  </v-app>
</template>

<script>
import TheSnackbar from '@/components/TheSnackbar.vue';
export default {
  components:{
    TheSnackbar
  },
}
</script>