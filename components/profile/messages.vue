<template>
  <v-sheet
    class="mx-auto"
    elevation="0"
    max-width="800"
  >
    <v-slide-group
      v-model="model"
      class="pa-2"
      center-active
      show-arrows
    >
      <v-slide-item
        v-for="(item,key) in objPost"
        :key="key"
        v-slot="{ toggle }"
      >
        <div @click="toggle">
        <Cards :detail="item" />
        </div>

      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>



<script>
    import Cards from '~/components/profile/card.vue'
    export default {
      
        props:[
          'objPost'
        ],

        components:{
            Cards
        },

        data: () => ({
            model: null,
        }),

    }
</script>