<template>
  <div class="PluginController lzo-warp">
      <lzo-header class="myheader" :AddLeft="false" >Vue - 插件</lzo-header>
      <ul class="plugins">
          <li class="plugin-item" v-for='(item,index) in plugItems' :key='index' @click='handleGoto(item.path)'>
              {{item.title}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "PluginController",
  data() {
    return {
      msg: "",
      plugItems:[
          {
              title:'vue-easyrefresh',
              path:'/vue-easyrefresh'
          }
      ],
    };
  },
  methods:{

  }
};
</script>

<style scoped>

</style>
