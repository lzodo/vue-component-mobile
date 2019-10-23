<template>
  <div class="lzo-warp Index">
    <lzo-header class="myheader" :AddLeft="false" @leftClick="leftClick">首页</lzo-header>
    <div class="modeule" v-for="(item,index) in items" :key="index">
      <span class="title">{{item.title}}</span>
      <ul class="modeule-val">
        <li class="modeule-item" v-for="(vitem,vindex) in item.val" :key="vindex" @click='handleGoto(vitem.path)'>
           <!-- <lzo-button type='primary'>{{vitem.title}}</lzo-button> -->
           {{vitem.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppController",
  data() {
    return {
      msg: "",
      items: [
        {
          title: "my components",
          val: [
            {
              path: "/CountDownController",
              title: "倒计时"
            },
            {
              path: "/VisCodeEnterController",
              title: "输入验证码"
            },
            {
              path: "/VisCodeEnterController",
              title: "按钮"
            },
            {
              path: "/DownScrollController",
              title: "滚动底部加载"
            },
            {
              path: "/PanelController",
              title: "面板"
            },
            {
              path: "/CssComponents/layout",
              title: "布局"
            },
            {
              path: "/CssComponents/grid",
              title: "格式化布局"
            },
            {
              path: "/CssComponents/basic",
              title: "基本样式"
            },
            {
              path: "/CssComponents/button",
              title: "按钮"
            },
            {
              path: "/CssComponents/form",
              title: "表单"
            },
            {
              path: "/CssComponents/icon",
              title: "图标"
            },
            {
              path: "/CssComponents/layout",
              title: "布局"
            }
          ]
        },
        {
          title: "other components",
          val: [
            {
              path: "/DateTimeController",
              title: "日期时间"
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
              path: "/JsComponents/messageBox",
              title: "弹框容器"
            },
            {
              path: "/JsComponents/viewer",
              title: "图片预览"
            },
            {
              path: "/JsComponents/actionSheet",
              title: "下拉选择"
            },
            {
              path: "/JsComponents/upload",
              title: "图片上传"
            },
            {
              path: "/JsComponents/infiniteScroll",
              title: "持续滚动加载"
            },
            {
              path: "/JsComponents/scrollNav",
              title: "滚动菜单"
            },
            {
              path: "/JsComponents/scrollTab",
              title: "滚动菜单"
            },
            {
              path: "/JsComponents/tab",
              title: "tab(切换)"
            }
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
.Index {
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
