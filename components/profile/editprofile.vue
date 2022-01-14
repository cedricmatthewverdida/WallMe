<template>
    <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
    >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            v-bind="attrs"
            v-on="on"
            class="caption"
            rounded
          >Edit Profile</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-card-title>
                Edit Profile
            </v-card-title>


            <v-card-text>

                <ProfilePic v-on:emitEvent="setProfilepic($event)"/>

            </v-card-text>


            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>

              <v-btn
                text
                @click="updateBioProfile()"
                :disabled="profilepic == ''"
              >Upload
              </v-btn>
              

            </v-card-actions>
          </v-card>
        </template>
    </v-dialog>
</template>

<script>
    import Moralis from 'moralis'
    import {mapState} from 'vuex'
    import ProfilePic from '~/components/profile/profileUpdate/profilepic.vue'
    export default {
        components:{
            ProfilePic
        },
        
        data() {
            return {
                profilepic: ''
            }
        },

        computed:{
            ...mapState(['user'])
        },

        methods: {

            setProfilepic : function (img) {
                return this.profilepic = img
            },

            async updateBioProfile (){
                const upload = new Moralis.File(this.profilepic.name, this.profilepic);
                const User = this.user;
                await User.save({
                    profile: upload
                }).
                then((stat) => {
                    this.$store.dispatch('snackbar/setSnackbar', {
                        text :  "Profile Updated",
                        color : 'success'
                    });
                }, (error) => {
                    this.$store.dispatch('snackbar/setSnackbar', {
                        text :  error.message,
                        color : 'error'
                    });
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>