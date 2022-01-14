<template>
    <div>
      <v-dialog
          transition="dialog-bottom-transition"
          max-width="600"
          v-model="show"
      >
          <template v-slot:default="dialog">
            <v-card>

              <v-card-title>
                Create Wall
              </v-card-title>
              <v-card-subtitle>
                creating a wall depends on you if you reveal or stay hidden :D
              </v-card-subtitle>
              <v-card-text>
                
                  <v-combobox
                    :items="identityOpt"
                    v-model="Wall.identity"
                    prepend-inner-icon="mdi-incognito"
                    label="Who are you ?"
                    filled
                    rounded
                    persistent-hint
                    hint="If leave blank sets to Anonymous"
                  >
                  </v-combobox>

                  <v-text-field
                    v-model="Wall.reveal"
                    prepend-inner-icon="mdi-eye-outline"
                    label="Reveal Date 😳"
                    filled
                    rounded
                    type="date"
                    persistent-hint
                    hint="Only this person can see your identity if set"
                  >
                  </v-text-field>

                  <v-textarea
                    v-model="Wall.message"
                    filled
                    counter
                    rounded
                    label="What's on your mind"
                    :rules="rules"
                  ></v-textarea>
                
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  @click="dialog.value = false"
                >Close</v-btn>

                <v-btn
                  text
                  @click="makeWall(Wall), dialog.value = false"
                >Create</v-btn>
              </v-card-actions>
            </v-card>
          </template>
      </v-dialog>
    </div>
</template>


<script>
    import {mapActions} from 'vuex'
    export default {
        data() {
          return {

            Wall:{
              identity: undefined,
              reveal: undefined,
              message: '',
            },

            identityOpt: [
              'Admirer',
              'Friend',
              'Secret'
            ],

            rules: [v => v.length <= 100 || 'Max 100 characters'],
          }
        },

        props: {
          value: Boolean
        },

        methods: {
          ...mapActions(['makeWall'])
        },

        computed: {
          show: {
            get () {
              return this.value
            },
            set (value) {
              this.$emit('input', value)
            }
          }
        },
    }
</script>

<style lang="scss" scoped>

</style>