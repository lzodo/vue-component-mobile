<template>
  <div class="CountDown">
    <div
      class="Buttonblue click"
      :style="{width:width+unitw,height:height+unith}"
      v-if="!butclick"
      @click='getdata'
    >
        <slot name='before'></slot>
    </div>
    <div
      class="Buttonblue disabled"
      :style="{width:width+unitw,height:height+unith}"
      v-if="butclick"
    >{{cypetimes}}<slot name='after'></slot></div>
  </div>
</template>
<script>
export default {
  name: "CountDown",
  data() {
    return {
      cypetimes:'',
      butclick:'',
    };
  },
  props: {
    width: {
      type: Number,
      default: 130
    },
    height: {
      type: Number,
      default: 40
    },
    unitw: {
      type: String,
      default: "px"
    },
    unith: {
      type: String,
      default: "px"
    },
    times: {
      type: Number,
      default: 60
    },
    debutclick:{
        type:Boolean,
        default:false
    }
  },
  watch: {},
  methods: {
      setDisabled(){
          let that = this;
          this.cypetimes = this.times;
          that.butclick = true;
          let timeval = setInterval(()=>{
              if(that.cypetimes == 1){
                  clearInterval(timeval);
                  that.cypetimes = that.times;
                  that.butclick = false;
              }
              that.cypetimes --
          },1000)
      },
      getdata(){
         let that = this;
         that.setDisabled();
         that.$emit('declick')

      },
  },
  mounted() {
      this.cypetimes = this.times;
      this.butclick = this.debutclick;
      if(this.butclick){
          this.setDisabled();
      }
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.Buttonblue {
  background: #ccc;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  letter-spacing: 1px;
  border: 1px solid #088ef0;
  background: linear-gradient(#34a5f8, #088ef0);
  color: #fff;
  box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, 0.3),
    0 1px 2px rgba(0, 0, 0, 0.15);
  padding: 0 10px;
  &.click:active {
    border-color: #0880d7;
    background: #2798eb;
    color: #0880d7;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 0 #fff;
    text-shadow: 0 1px 0 hsla(0, 0%, 100%, 0.3);
    text-decoration: none;
    transition-duration: 0s;
  }
  &.disabled {
    opacity: 0.8;
  }
}
</style>