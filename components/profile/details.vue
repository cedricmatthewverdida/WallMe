<template>
    <v-card
        width="500"
        color="transparent"
        elevation="0"
    >
        <v-card-text class="d-flex justify-center">
            
            <v-avatar
            color="primary"
            size="200"
            >
                <v-img
                :lazy-src="profile"
                :src="profile"
                >

                </v-img>
            </v-avatar>
            
        </v-card-text>

        <v-card-text class="text-center">
            <h2>{{name}}</h2>
            <h6 class="caption">{{bio}}</h6>
        </v-card-text>

        <v-card-actions class="d-flex justify-center">
            <v-btn
            text
            rounded
            >
                <v-icon class="mr-1">mdi-pencil</v-icon>
                <span>5.3k</span>
            </v-btn>
            <v-btn
                text
                rounded
            >
                <v-icon class="mr-1">mdi-heart-outline</v-icon>
                <span>2.3k</span>
            </v-btn>

            <v-btn
                text
                rounded
                readonly
            >
                <v-icon class="mr-1">mdi-gift-outline</v-icon>
                <span>1</span>
            </v-btn>
        </v-card-actions>

    </v-card>
</template>

<script>
    export default {
        props:[
            'profile',
            'name',
            'bio',
        ]
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
</style>