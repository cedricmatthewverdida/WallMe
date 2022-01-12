<template>
    <div class="center-screen">
    <v-progress-circular
      :size="100"
      color="primary"
      indeterminate
    ></v-progress-circular>
    </div>
</template>

<script>

    export default {
        layout:'plain'
    }

</script>

<style lang="scss" scoped>
.center-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
</style>