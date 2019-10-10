<template>
  <div id="app">
    <router-view/>
    <footer class="footerTab">footer</footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  display: flex;
  flex-direction: column;
}
.footerTab{
  height: 50px;
  width: 100%;
}
</style>
