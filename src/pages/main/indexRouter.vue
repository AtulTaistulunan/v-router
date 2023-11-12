<script>

</script>

<template>
  <div>
    <div><router-link to="/">首頁</router-link></div>
    <div><router-link to="/news">新聞</router-link></div>
    <div><router-link to="/goods">商品</router-link></div>
<!--    <div><router-link to="/user/1/張三">張三</router-link></div>-->
<!--    <div><router-link to="/user/2/李四">李四</router-link></div>-->
    <div><router-link to="/user?id=1&&nickname=張三">張三</router-link></div>
    <div><router-link to="/user/?id=2">李四</router-link></div>
  </div>
</template>

<style scoped>

</style>