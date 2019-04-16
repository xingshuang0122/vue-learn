<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  created() {
    console.log(`NODE_ENV=${process.env.NODE_ENV}`)
    console.log(`BASE_URL=${process.env.BASE_URL}`)
    console.log(`VUE_APP_NAMEL=${process.env.VUE_APP_NAME}`)
    console.log(`TEST=${process.env.TEST}`)
  }
}
</script>

