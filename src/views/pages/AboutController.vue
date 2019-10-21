<template>
  <div class="lzo-warp About">
    <lzo-header class="myheader" :AddLeft="false" @leftClick="leftClick">小东西</lzo-header>

    <div class="modeule" v-for="(item,index) in items" :key="index">
      <span class="title">{{item.title}}</span>
      <ul class="modeule-val">
        <li class="modeule-item" v-for="(vitem,vindex) in item.val" :key="vindex" @click='handleGoto(vitem.path)'>
           {{vitem.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutController",
  data() {
    return {
      msg: "",
      items: [
        {
          title: "jsItems",
          val: [
            {
              path: "/SxbjCssCase",
              title: "蛇形边框"
            },
            {
              path: "/JsComponents/counter",
              title: "计步器"
            },
            {
              path: "/JsComponents/picker",
              title: "下拉选择"
            },
            {
              path: "/JsComponents/dateTime",
              title: "日期时间"
            },
            {
              path: "/JsComponents/search",
              title: "搜索组件"
            },
            {
              path: "/JsComponents/sendCode",
              title: "短信验证"
            },
                        {
              path: "/JsComponents/search",
              title: "搜索组件"
            },
            {
              path: "/JsComponents/sendCode",
              title: "短信验证"
            },
          ]
        }
      ],

      jsItems: []
    };
  },
  methods: {
    leftClick() {
      console.log("返回");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.About {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .myheader {
    width: 100%;
    height: 50px;
  }
}
.modeule {
  width: 100%;
  background: #f1f1f1;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .title {
    display: block;
    background: #f1f1f1;
    // margin-top: 5px;
    line-height: 40px;
    height: 40px;
    padding: 0 10px;
  }
  .modeule-val {
    width: 100%;
    // display:flex;
    // flex-wrap: wrap-reverse;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    display: inline-grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    grid-gap:5px;
    .modeule-item {
      padding: 0 10px;
      background: #fff;
      min-height: 60px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #777;
      // &:hover{
      //   background: #abc;
      //   color:#fff
      // }
    }
  }
}
</style>
