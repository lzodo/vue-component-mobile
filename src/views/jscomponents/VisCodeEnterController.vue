<template>
    <div class=" lzo-warp VisCodeEnterController">
        <lzo-header class="myheader" @leftClick="$router.go(-1)">输入验证码</lzo-header>
        <div class="themain">   
            <vis-code-enter class='vis-code-enter' ref='viscodecom' @visCode='vis' :length='2'></vis-code-enter>
            <vis-code-enter class='vis-code-enter' @visCode='vis' :length='4'></vis-code-enter>
            <vis-code-enter @visCode='vis'></vis-code-enter>
        </div>
    </div>
</template>
<script>
export default {
    name:'VisCodeEnterController',
    methods:{
        vis(data){
            alert('您输入的验证码是'+data)
        },
    },
    mounted(){
        this.$refs.viscodecom.setFocus();
    }
}
</script>
<style lang="scss" scoped>
.themain{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
}
.vis-code-enter{
    margin-bottom: 30px;
}
</style>