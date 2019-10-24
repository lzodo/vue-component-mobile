<template>
  <div id="main">
    <div class="main">
      <transition  mode="out-in" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
        <keep-alive>
          <router-view class="animated"/>
        </keep-alive>
      </transition>
    </div>
    <!-- <footer class="footerTab">footer</footer> -->
    <lzo-footer class="footerTab" :links="links"></lzo-footer>
  </div>
</template>

<script>
export default {
  name: "MainController",
  data() {
    return {
      links: [
        {
          ico: "iconhome",
          link: "/",
          font: "首页"
        },
        {
          ico:'iconchajiancanshupeizhi',
          link:'/plugin',
          font:'插件'
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
      ],
      transitionName: 'fadeOutLeft'
    };
  },
  mounted(){
    
    },
};
</script>

<style lang='scss' scoped>
#main {
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
// .fade-enter-active{
//   animation: bounceInLeft 1s;
// }
// .fade-leave-active{
//   animation: bounceInOutRight 1s;
// }
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  top: 46px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
