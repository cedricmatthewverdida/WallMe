<template>
    <v-card
        width="500"
        color="transparent"
        elevation="0"
    >
        
        <v-card-text class="d-flex justify-center">
            
            <v-avatar
            v-if="profile != undefined"
            color="primary"
            size="200"
            >
                <v-img
                :lazy-src="profile._url"
                :src="profile._url"
                >
                
                </v-img>
            </v-avatar>

            <v-avatar
            v-else
            dark
            color="primary"
            size="200"
            >
                <h1 class="white--text" style="font-size:100px;">{{name.slice(0, 2).toUpperCase()}}</h1>
            </v-avatar>

        </v-card-text>

        <v-card-text class="text-center">
            <h2>{{name}}</h2>
            <span v-if="!editBio">
                <h4 class="mt-2">
                    {{bio}}
                    <sup v-if="mode == 'user'">
                        <v-btn
                        icon
                        x-small
                        @click="editBio = true"
                        >
                            <v-icon x-small>mdi-pencil</v-icon>
                        </v-btn>
                    </sup>
                </h4>
            </span>
            <span v-else>
                <center>
                <v-text-field
                v-model="updateBio"
                :label="'Updating: ' + bio"
                filled
                rounded
                class="bio"
                prepend-inner-icon="mdi-account"
                placeholder="Type here to change your bio"
                hide-details
                @keyup.enter="updateBioProfile"
                />
                </center>
            </span>
        </v-card-text>

        <v-card-actions v-if="mode == 'stalk'" class="d-flex justify-center">
            <v-btn
            text
            rounded
            @click="dialog = true"
            :readonly="user.id == stalk.id"
            v-if="user.id != stalk.id"
            >
                <v-icon class="mr-1">mdi-pencil</v-icon>
                <small>{{post | numberformat}}</small>
            </v-btn>

            <v-btn
            text
            rounded
            v-if="user.id == stalk.id"
            >
                <v-icon class="mr-1">mdi-pencil</v-icon>
                <small>{{post | numberformat}}</small>
            </v-btn>
            <v-btn
                text
                rounded
                @click="heartReact()"
                v-if="user.id != stalk.id"
            >
                <v-icon class="mr-1" :color="youalreadylike ? 'pink' : ' '">{{hearticon}}</v-icon>
                <small v-if="mode == 'user'">{{user.get('heartcount') | numberformat}}</small>
                <small v-else>{{stalk.get('heartcount') | numberformat}}</small>
            </v-btn>

            <v-btn
                text
                rounded
                v-if="user.id == stalk.id"
            >
                <v-icon class="mr-1" :color="youalreadylike ? 'pink' : ' '">{{hearticon}}</v-icon>
                <small v-if="mode == 'user'">{{user.get('heartcount') | numberformat}}</small>
                <small v-else>{{stalk.get('heartcount') | numberformat}}</small>
            </v-btn>

            <v-btn
                text
                rounded
                disabled
            >
                <v-icon class="mr-1">mdi-gift-outline</v-icon>
                <small>1</small>
            </v-btn>
        </v-card-actions>

        <v-card-actions v-if="mode == 'user'" class="d-flex justify-center">
            <v-btn
            text
            rounded
            >
                <v-icon class="mr-1">mdi-pencil</v-icon>
                <small>{{post | numberformat}}</small>
            </v-btn>
            <v-btn
                text
                rounded
                color="pink"
            >
                <v-icon class="mr-1">
                    mdi-heart
                </v-icon>
                <small v-if="mode == 'user'">{{user.get('heartcount') | numberformat}}</small>
                <small v-else>{{stalk.get('heartcount') | numberformat}}</small>
            </v-btn>

            <v-btn
                text
                rounded
                disabled
            >
                <v-icon class="mr-1">mdi-gift-outline</v-icon>
                <small>1</small>
            </v-btn>
        </v-card-actions>

        <Create v-model="dialog"/>
    </v-card>
</template>

<script>
    import Create from '~/components/profile/createPost.vue'
    import {mapState, mapActions } from 'vuex'
    export default {

        components:{
            Create
        },

        props:[
            'profile',
            'name',
            'bio',
            'mode',
            'post'
        ],

        mounted() {
            if(this.mode == 'user'){
                this.fetchReactor()
            }else{
                this.fetchStalkReactor()
            }
        },

        data() {
            return {
                editBio: false,
                updateBio: '',
                youalreadylike: undefined,
                initReact: false,
                dialog: false,
            }
        },

        watch : {
            reactor : function (){
                this.userReactStatus()
            }
        },

        computed : {
            ...mapState(['user','reactor','stalk']),

            hearticon: function (){
                return this.youalreadylike ? "mdi-heart" : "mdi-heart-outline"
            },

            detailmode : function (){
                return this.mode == 'user' ? this.user : this.stalk;
            }
        },

        methods:{
            ...mapActions(['fetchReactor','fetchStalkReactor']),

            userReactStatus : function (){

                this.youalreadylike = this.reactor.find(element => element.id == this.user.id) == undefined ? false : true;
                this.initReact = true
            },

            async heartReact () {
                const User = this.stalk;
                const relation = User.relation("heart");

                if(this.reactor.find(element => element.id == this.user.id) == undefined){
                    
                    relation.add(this.user);
                    User.increment("heartcount")
                    User.save().then((value) => {
                        console.log(value);
                    });

                    this.reactor.push(this.user)

                    this.youalreadylike = true;
                }else{


                    relation.remove(this.user);
                    User.decrement("heartcount")
                    User.save();

                    const x = this.reactor.findIndex(element => element.id == this.user.id)
                    this.$delete(this.reactor, x)
                    this.youalreadylike = false;
                }

            },

            async updateBioProfile (){
                const User = this.user;
                await User.save({
                    bio: this.updateBio
                }).
                then((stat) => {
                    this.$store.dispatch('snackbar/setSnackbar', {
                        text :  "Bio updated!",
                        color : 'purple'
                    });
                    this.editBio = false
                    this.bio = this.updateBio
                }, (error) => {
                    this.$store.dispatch('snackbar/setSnackbar', {
                        text :  error.message,
                        color : 'error'
                    });
                })
            }
        },

        filters: {
            numberformat : function (num) {
                return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
            }
        }
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Be+Vietnam+Pro:wght@100&family=Kalam:wght@300;700&family=Permanent+Marker&display=swap');
.fullname{
    font-family: 'Amatic SC', cursive;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-family: 'Kalam', cursive;
    font-family: 'Permanent Marker', cursive;
}
.bio{
    width: 250px;
}
</style>