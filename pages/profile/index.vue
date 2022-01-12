<template>
  <div>

      <vue-word-cloud
        style="
            height: 200px;
        "
        :words="[['romance', 19], ['horror', 3], ['fantasy', 7], ['Yawa', 3],['Buset', 19], ['Pastilan', 3], ['Tata', 7], ['Eq', 3]]"
        :color="([, weight]) => weight > 10 ? '#AD5048' : weight > 5 ? '#0C1D24' : '#46373A'"
        font-family="Righteous"
        rotation-unit="turn"
      />
      


      <v-row v-if="user.length != 0">
        <v-col align="right">
          <Detail
          :profile="user.get('profile')._url"
          :name="$auth.user.name"
          :bio="user.get('bio')"
          />
        </v-col>
        <v-col>
          <Post/>
        </v-col>
      </v-row>


  </div>
</template>

<script>
  import Moralis from 'moralis'
  import Post from '~/components/profile/messages.vue'
  import Detail from '~/components/profile/details.vue'
  import VueWordCloud from 'vuewordcloud';
  import {mapState} from 'vuex'
  export default {
    middleware:'loggedin',
    components:{
      Post,
      Detail,
      [VueWordCloud.name]: VueWordCloud,
    },

    data() {
      return {
        profile: 'https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/268819231_656437962037177_4249873349574138887_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE6Cx-LA-2p9HttBYkpLJXwlQZYwI2jHCaVBljAjaMcJk3SfeQqx_fWGR-AHni_4kFcCLym6BWIdD6zqXdTdxOI&_nc_ohc=PNbQf3DBkyUAX81-8Yp&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT9yUw0P2M-4aNDUaBCNMoZEzxMkkoZwCh8OszDp4-KjOw&oe=61E2C1EE',
        name: 'Cedric Matthew Verdida',
        bio: "Sana Gagraduate!",
        email: "chryhesmicazumic@gmail.com"
      }
    },

    computed:{
      ...mapState(['user'])
    }
  }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Be+Vietnam+Pro:wght@100&family=Kalam:wght@300;700&family=Permanent+Marker&family=Righteous&display=swap');

#overlayprofile {
  width: 100px;
  height: 100px;
  position: relative;
}
#navi,
#infoi {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
#infoi {
  z-index: 10;
}

</style>