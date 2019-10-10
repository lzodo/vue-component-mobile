<template>
  <div class="lzo-warp Index">
	  <lzo-header></lzo-header>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      msg: "",
      cssItems: [
        {
          path: "/CssComponents/basic",
          title: "基本样式(Basic)"
        },
        {
          path: "/CssComponents/button",
          title: "按钮(Button)"
        },
        {
          path: "/CssComponents/form",
          title: "表单(Form)"
        },
        {
          path: "/CssComponents/icon",
          title: "图标(Icon)"
        },
        {
          path: "/CssComponents/layout",
          title: "布局(Layout)"
        },
        {
          path: "/CssComponents/grid",
          title: "格式化布局(Grid)"
        },
        {
          path: "/CssComponents/panel",
          title: "面板(Panel)"
        },
        {
          path: "/CssComponents/cell",
          title: "列表(Cell)"
        },
        {
          path: "/CssComponents/list",
          title: "列表(List)"
        }
      ],
      jsItems: [
        {
          path: "/JsComponents/dialog",
          title: "弹框(Dialog)"
        },
        {
          path: "/JsComponents/counter",
          title: "计步器(Counter)"
        },
        {
          path: "/JsComponents/picker",
          title: "下拉选择(Picker)"
        },
        {
          path: "/JsComponents/dateTime",
          title: "日期时间(DateTime)"
        },
        {
          path: "/JsComponents/search",
          title: "搜索组件(Search)"
        },
        {
          path: "/JsComponents/sendCode",
          title: "短信验证(SendCode)"
        },
        {
          path: "/JsComponents/messageBox",
          title: "弹框容器(messageBox)"
        },
        {
          path: "/JsComponents/viewer",
          title: "图片预览(v-Viewer)"
        },
        {
          path: "/JsComponents/actionSheet",
          title: "下拉选择(actionSheet)"
        },
        {
          path: "/JsComponents/upload",
          title: "图片上传(iview-Upload)"
        },
        {
          path: "/JsComponents/infiniteScroll",
          title: "infiniteScroll(持续滚动加载)"
        },
        {
          path: "/JsComponents/scrollNav",
          title: "scrollNav(滚动菜单)"
        },
        {
          path: "/JsComponents/scrollTab",
          title: "scrollTab(滚动菜单)"
        },
        {
          path: "/JsComponents/tab",
          title: "tab(切换)"
        },
        {
          path: "/JsComponents/carkeyboard",
          title: "carkeyboard(车牌键盘)"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
