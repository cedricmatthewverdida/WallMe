<template>
    <v-app-bar
        app
        elevation="0"
        color="white"
    >
        <v-toolbar-title class="logo">{{title}}</v-toolbar-title>


        <v-spacer></v-spacer>

        

        <v-menu
        v-if="$auth.loggedIn"
        transition="slide-y-transition"
        bottom
        content-class="my-menu elevation-0"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                depressed
                fab
                small
                color="white"
                rounded
                v-bind="attrs"
                v-on="on"
                style="text-transform:none;"
                >
                    <v-avatar
                        color="primary"
                        size="50"
                        >
                            <v-img
                            :lazy-src="$auth.user.picture.data.url"
                            :src="$auth.user.picture.data.url"
                        />
                    </v-avatar>
                </v-btn>
            </template>



            <v-card
            outline
            class="card pa-3"
            >
                <v-list-item-content class="justify-center">
                    <div class="mx-auto text-center">
                    <h3 class="caption">{{$auth.user.name}}</h3>
                    <v-divider class="my-3"></v-divider>
                    
                    <v-btn
                        depressed
                        rounded
                        text
                        @click="$auth.logout()"
                        class="caption"
                    >
                        Disconnect Account
                    </v-btn>

                    </div>
                </v-list-item-content>
            </v-card>
        </v-menu>
    </v-app-bar>
</template>

<script>
    export default {
        props:[
            'title'
        ],
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Kalam:wght@300;700&family=Permanent+Marker&display=swap');
.logo{
    font-family: 'Amatic SC', cursive;
    font-family: 'Kalam', cursive;
    font-family: 'Permanent Marker', cursive;
}


.my-menu {
  margin-top: 60px;
  contain: initial;
  overflow: visible;
}
.my-menu::before {
  position: absolute;
  content: "";
  top: 0;
  right: 10px;
  transform: translateY(-100%);
  width: 10px; 
  height: 13px; 
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 13px solid #f3f3f3;
}
.card {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
}
</style>