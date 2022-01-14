<template>
    <v-app-bar
        app
        elevation="0"
        color="white"
    >
        <v-toolbar-title class="logo">
            <svg width="200px" height="200px" xmlns="http://www.w3.org/2000/svg" viewBox="71.71499633789062 14.600000000000001 356.57000732421875 120.8" style="background: rgba(0, 0, 0, 0);" preserveAspectRatio="xMidYMid"><defs><filter id="editing-vr"><feFlood flood-color="#f00" flood-opacity="0.7" result="c1"></feFlood><feFlood flood-color="#00f" flood-opacity="0.7" result="c3"></feFlood><feComposite operator="in" in="c1" in2="SourceAlpha" result="text-c1"></feComposite><feComposite operator="in" in="c3" in2="SourceAlpha" result="text-c3"></feComposite><feOffset in="text-c1" dx="5" dy="-1" result="text1"></feOffset><feOffset in="text-c3" dx="-5" dy="1" result="text3"></feOffset><feBlend in="SourceGraphic" in2="text1" mode="multiply" result="text4"></feBlend><feBlend in="text4" in2="text3" mode="multiply"></feBlend></filter></defs><g filter="url(#editing-vr)"><g transform="translate(125.45502710342407, 98.68000030517578)"><path d="M2.69-39.68L2.69-39.68L2.69-39.68Q3.58-41.47 5.54-42.46L5.54-42.46L5.54-42.46Q7.49-43.46 10.18-43.46L10.18-43.46L10.18-43.46Q14.40-43.46 16.93-40.42L16.93-40.42L16.93-40.42Q19.46-37.38 19.46-30.72L19.46-30.72L19.46-7.87L34.11-42.18L41.66-42.18L43.39-9.79L43.20-7.94L58.43-42.18L67.20-42.18L46.72 0L33.09 0L31.81-19.46L23.36 0L7.94 0L6.02-30.72L6.02-30.72Q5.82-34.18 4.90-36.45L4.90-36.45L4.90-36.45Q3.97-38.72 2.69-39.68ZM66.14-1.92L66.14-1.92L66.14-1.92Q64.64-3.58 63.97-6.21L63.97-6.21L63.97-6.21Q63.30-8.83 63.30-13.12L63.30-13.12L63.30-13.12Q63.30-17.41 64.77-21.31L64.77-21.31L64.77-21.31Q66.24-25.22 68.93-28.03L68.93-28.03L68.93-28.03Q74.43-33.92 83.52-33.92L83.52-33.92L83.52-33.92Q86.78-33.92 89.15-32.83L89.15-32.83L100.10-33.92L95.36-8.96L95.36-8.96Q95.17-8.19 95.17-6.78L95.17-6.78L95.17-6.78Q95.17-5.38 96.03-4.48L96.03-4.48L96.03-4.48Q96.90-3.58 98.18-3.46L98.18-3.46L98.18-3.46Q97.54-1.28 95.20 0L95.20 0L95.20 0Q92.86 1.28 90.24 1.28L90.24 1.28L90.24 1.28Q87.62 1.28 85.86 0.29L85.86 0.29L85.86 0.29Q84.10-0.70 83.58-2.37L83.58-2.37L83.58-2.37Q82.56-0.77 80.38 0.26L80.38 0.26L80.38 0.26Q78.21 1.28 75.30 1.28L75.30 1.28L75.30 1.28Q72.38 1.28 70.02 0.51L70.02 0.51L70.02 0.51Q67.65-0.26 66.14-1.92ZM79.65-27.90L79.65-27.90L79.65-27.90Q78.91-26.75 78.27-24.80L78.27-24.80L78.27-24.80Q77.63-22.85 76.58-17.63L76.58-17.63L76.58-17.63Q75.52-12.42 75.52-8.70L75.52-8.70L75.52-8.70Q75.52-4.99 76.10-3.90L76.10-3.90L76.10-3.90Q76.67-2.82 77.70-2.82L77.70-2.82L77.70-2.82Q79.74-2.82 81.25-4.77L81.25-4.77L81.25-4.77Q82.75-6.72 83.33-10.18L83.33-10.18L86.72-28.93L86.72-28.93Q85.38-30.08 83.81-30.08L83.81-30.08L83.81-30.08Q82.24-30.08 81.31-29.57L81.31-29.57L81.31-29.57Q80.38-29.06 79.65-27.90ZM118.85-3.52L118.85-3.52L118.85-3.52Q116.86 1.28 110.53 1.28L110.53 1.28L110.53 1.28Q107.33 1.28 105.28-0.96L105.28-0.96L105.28-0.96Q103.62-2.82 103.62-4.93L103.62-4.93L103.62-4.93Q103.62-9.73 105.86-20.22L105.86-20.22L110.53-44.80L123.52-46.08L117.31-13.70L117.31-13.70Q116.22-8.96 116.22-7.30L116.22-7.30L116.22-7.30Q116.22-3.65 118.85-3.52ZM139.58-3.52L139.58-3.52L139.58-3.52Q137.60 1.28 131.26 1.28L131.26 1.28L131.26 1.28Q128.06 1.28 126.02-0.96L126.02-0.96L126.02-0.96Q124.35-2.82 124.35-4.93L124.35-4.93L124.35-4.93Q124.35-9.73 126.59-20.22L126.59-20.22L131.26-44.80L144.26-46.08L138.05-13.70L138.05-13.70Q136.96-8.96 136.96-7.30L136.96-7.30L136.96-7.30Q136.96-3.65 139.58-3.52ZM163.65 0L156.29 0L167.87-42.24L181.25-42.24L184.19-18.11L196.10-42.24L207.30-42.24L208.45-10.62L208.45-10.62Q208.70-4.35 211.78-2.43L211.78-2.43L211.78-2.43Q211.07-1.15 209.02 0.06L209.02 0.06L209.02 0.06Q206.98 1.28 204.26 1.28L204.26 1.28L204.26 1.28Q201.54 1.28 199.94 0.51L199.94 0.51L199.94 0.51Q198.34-0.26 197.44-1.54L197.44-1.54L197.44-1.54Q195.84-3.84 195.84-8.26L195.84-8.26L195.84-28.03L183.23 0L175.30 0L170.82-28.74L163.65 0ZM240.45-10.82L240.45-10.82L240.45-10.82Q242.05-9.73 242.05-7.33L242.05-7.33L242.05-7.33Q242.05-4.93 240.83-3.39L240.83-3.39L240.83-3.39Q239.62-1.86 237.63-0.83L237.63-0.83L237.63-0.83Q233.54 1.28 229.12 1.28L229.12 1.28L229.12 1.28Q224.70 1.28 222.11 0.32L222.11 0.32L222.11 0.32Q219.52-0.64 217.79-2.43L217.79-2.43L217.79-2.43Q214.40-5.82 214.40-12.03L214.40-12.03L214.40-12.03Q214.40-21.70 219.65-27.58L219.65-27.58L219.65-27.58Q225.28-33.92 235.07-33.92L235.07-33.92L235.07-33.92Q241.15-33.92 244.16-31.36L244.16-31.36L244.16-31.36Q246.40-29.44 246.40-26.30L246.40-26.30L246.40-26.30Q246.40-15.04 226.94-15.04L226.94-15.04L226.94-15.04Q226.69-13.38 226.69-11.97L226.69-11.97L226.69-11.97Q226.69-9.02 228-7.90L228-7.90L228-7.90Q229.31-6.78 231.74-6.78L231.74-6.78L231.74-6.78Q234.18-6.78 236.77-7.90L236.77-7.90L236.77-7.90Q239.36-9.02 240.45-10.82ZM227.39-17.79L227.39-17.79L227.39-17.79Q231.94-17.79 234.56-20.61L234.56-20.61L234.56-20.61Q237.18-23.30 237.18-27.58L237.18-27.58L237.18-27.58Q237.18-29.06 236.64-29.86L236.64-29.86L236.64-29.86Q236.10-30.66 235.01-30.66L235.01-30.66L235.01-30.66Q233.92-30.66 232.99-30.24L232.99-30.24L232.99-30.24Q232.06-29.82 231.10-28.42L231.10-28.42L231.10-28.42Q228.74-25.22 227.39-17.79Z" fill="#444"></path></g></g><style>text {
            font-size: 64px;
            font-family: Arial Black;
            dominant-baseline: central;
            text-anchor: middle;
            }</style></svg>
        </v-toolbar-title>


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

                    <EditProfile/>

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

    import EditProfile from '~/components/profile/editprofile.vue'
    export default {
        props:[
            'title'
        ],
        components:{
            EditProfile
        }
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