<template>
    <div>
        <vue-word-cloud
          style="
              height: 300px;
          "
          :spacing="2"
          :words="words"
          :rotation="2"
          :color="([, weight]) => weight > 10 ? '#AD5048' : weight > 5 ? '#0C1D24' : '#46373A'"
          font-family="Righteous"
        />
    </div>
</template>

<script>
    import VueWordCloud from 'vuewordcloud';
    export default {

        props:[
            'words'
        ],

        components:{
            [VueWordCloud.name]: VueWordCloud,
        },

    }
</script>

<style lang="scss" scoped>

</style>