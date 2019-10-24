<template>
  <div class="lzoFooter fineSide side-t" :style="{height:Height+'px'}">
    <ul class="links">
      <li class="item" v-for="(item,index) in links" :key="index" :class='{active:index==acIndex}' @click='changeLink(item,index)'>
          <div class="ico iconfont" :class='item.ico'></div>
          <span class="font">{{item.font}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "lzoFooter",
  props: {
    Height: {
      type: Number,
      default: 60
    },
    links: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
        acIndex:0
    };
  },
  
  filters: {},
  methods: {
      changeLink(item,index){
         this.acIndex = index;
         this.handleGoto(item.link);
      },
  },
  watch: {},
  mounted() {
    let that = this;
    that.links.map((item,index)=>{
       if(item.link == that.$route.path){
          that.acIndex = index;
       }
    })
  }
};
</script>
<style lang="scss">
.links {
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  display: flex;
  background: #fff;
  .item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color:#777;
    &.active{
        color:#5CACEE;
    }
    .ico{
        font-size: 20px;
        margin-top: 3px;
    }
    .font{
        font-size: 10px;
        display: block;
        margin-top: 3px;
    }
  }
}
</style>
