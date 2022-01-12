<template>
    <div class="center-screen">

        <div class="d-flex flex-column">
        <h1>Wall Me</h1>
        <v-btn
        @click="login()"
        x-large
        color="primary"
        style="text-transform:none;"
        depressed
        >
            <v-icon class="mr-1">mdi-facebook</v-icon>
            Continue with Facebook
        </v-btn>
        </div>
        
    </div>
</template>

<script>
    export default {
        layout: 'plain',
        methods:{
            async login () {
                this.$auth.loginWith('facebook')
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Be+Vietnam+Pro:wght@100&family=Fredoka+One&family=Kalam:wght@300;700&family=Permanent+Marker&family=Righteous&display=swap');
.center-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}

h1 {
	font-family: 'Fredoka One', cursive;
	 color: #362222;
	 font-size: calc(1em + 5vw);
	 font-weight: 900;
	 
}
</style>