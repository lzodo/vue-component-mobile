<template>
  <div id="app">
    <div class="main">
      <router-view />
    </div>
    <!-- <footer class="footerTab">footer</footer> -->
    <lzo-footer class="footerTab" :links="links"></lzo-footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      links: [
        {
          ico: "iconhome",
          link: "/",
          font: "首页"
        },
        {
          ico: "iconguanyu",
          link: "/about",
          font: "关于"
        },
        {
          ico: "iconwode",
          link: "/userinfo",
          font: "我的"
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
#app {
  display: flex;
  flex-direction: column;
  .footerTab{
	  height: 60px;
  }
  .main{
	  width: 100%;
	  flex:1;
	  overflow-y:hidden; 
	  overflow-x:hidden;
  }
}
.routerview {
  height: 100%;
}
</style>
