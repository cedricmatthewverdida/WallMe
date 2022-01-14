<template>
    <v-card
    color="transparent"
    outlined
    >
        <v-card-text>

            <v-file-input
            accept="image/*"
            label="Upload Image"
            hint="provide an image (PNG, JPG, or GIF) for the card display of your item."
            show-size
            @change="Preview_image"
            v-model="image"
            filled
            rounded
            prepend-icon="mdi-image-plus"
            class="mt-2"
            ></v-file-input>

           
        </v-card-text>
    </v-card>
</template>

<script>
  export default {


    data() {
        return {
          url: null,
          image: null,
        }
    },

    methods: {

      Preview_image() {
        return this.url = this.image != null ?  URL.createObjectURL(this.image) : null
      },

      emitEvent : function (){
        this.$emit('emitEvent',this.image);
      }

    },

    watch:{
        image : function (){
            this.emitEvent()
        }
    }

  }
</script>

<style lang="scss" scoped>
.image-upload-wrap {
  height: 110px;
  width: 110px;
  border: 4px dashed gray;
  position: relative;
  border-radius:10px;
  
}


.drag-text {
  text-align: center;
}

.drag-text h3 {
  font-weight: 100;
  text-transform: uppercase;
  color: #15824B;
  padding: 60px 0;
}

</style>