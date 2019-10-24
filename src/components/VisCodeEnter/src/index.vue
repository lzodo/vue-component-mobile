<template>
  <div class="visCodeEnter">
    <div
      class="vis-cen"
      :style="{width:(itemWidth+spacing)*length-spacing+unit,height:itemWidth+unit}"
    >
      <input
        type='number'
        ref="visInputRef"
        class="vis-input"
        v-model="enterValues"
        @keyup="sendCode"
        @focus="getFocus"
        @input="visValue"
        @click='getFocus'
      />
      <div
        class="vis-item-number"
        :class="{active:index == activeIndex}"
        v-for="(item,index) in values"
        :key="index"
        :style="{width:itemWidth+unit,marginRight:(index+1)==values.length?'0':spacing+unit}"
      >{{item}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VisCodeEnter",
  data() {
    return {
      values: [],
      itemWidth: 38,
      spacing: 10,
      activeIndex: -1,
      enterValues: "",
      focusState:false,
    };
  },
  props: {
    length: {
      type: Number,
      default: 6
    },
    unit: {
      type: String,
      default: "px"
    },
    valType: {
      type: String,
      default: "number"
    }
  },
  watch: {
    enterValues(newval,oldval) {
      let that = this;
    //   if(this.activeIndex < oldval.length){ //如果当前得到焦点的所有小于旧值得长度,说明通过左箭头左移动了
    //       let before = newval.substring(0,this.activeIndex+1);
    //       let after = newval.substring(this.activeIndex+2);
    //       newval = before + after;
    //       this.enterValues = before + after;
    //   }
      this.activeIndex = newval.length;
    //   this.setCaretPosition(this.$refs.visInputRef, newval.length); //将光标定位到最后
      this.creatArray();
      newval = newval.substr(0, that.length);
      newval.split("").map((item, index) => {
        that.values[index] = item;
      });

    }
  },
  methods: {
     setFocus(){
        //  console.log('dd');
        let that = this;
        this.$nextTick(function() {
            that.$refs.visInputRef.focus();
        })
     },
     setCaretPosition(ctrl, pos) {
        // Modern browsers
        if(ctrl.setSelectionRange) {
            ctrl.focus();
            ctrl.setSelectionRange(pos, pos);
            // IE8 and below
        } else if(ctrl.createTextRange) {
            var range = ctrl.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    },
    creatArray(){
        let that = this;
        that.values = new Array(that.length).fill("");
    },
    visValue() {
    //   console.log(this.enterValues);
      if (this.valType == "number") {
         this.enterValues=this.enterValues.replace(/\D/g,'')
      }
    },
    getFocus() {
      let that = this;
      this.activeIndex = 0;
      console.log(this.activeIndex);
      this.enterValues = "";
      this.creatArray();
    },
    sendCode(e) {
      if (this.enterValues.length === this.length) {
        this.$refs.visInputRef.blur();
        this.activeIndex = -1;
        console.log("发送验证码");
        this.$emit('visCode',this.enterValues)
      }
    //   if(e.keyCode == 37){
    //       if(this.activeIndex!=0){
    //           this.activeIndex--;
    //       }
    //   }else if(e.keyCode == 39){
    //       if(this.activeIndex<this.enterValues.length){
    //           this.activeIndex++
    //       }
    //   }
    }
  },
  mounted() {
    let that = this;
    this.creatArray();
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.vis-cen {
  position: relative;
  margin: 0 auto;
}
.vis-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  outline: none;
}
.vis-item-number {
  float: left;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;
  border: 1px solid #999;
  &.active {
    border-color: #d68445;
  }
}
</style>