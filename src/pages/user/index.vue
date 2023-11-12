<script>
  export default {
    name: 'userPages',
    data(){
      return{
        username: '',
        userId: ''
      }
    },
    created() {
      // console.log(this.$route.params.id, this.$route.params.nickname)
      console.log(this.$route.query.id, this.$route.query.nickname?this.$route.query.nickname:"未設定")
      this.username = this.$route.query.nickname?this.$route.query.nickname:'未設定'
      this.userId = this.$route.query.id
    }

  }
</script>

<template>
  <div>
    我是User {{userId}} : {{username}}
  </div>
</template>

<style scoped>

</style>