<template>
    <div class=" lzo-warp CountDownController">
        <lzo-header class="myheader" @leftClick="$router.go(-1)">倒计时</lzo-header>
        <div class="themain">   
            <count-down :debutclick='false'>
                <span slot = 'before'>获取验证码</span>
                <span slot = 'after'>s 后重新获取</span>
            </count-down>
        </div>
    </div>
</template>
<script>
export default {
    name:'CountDownController'
}
</script>
<style lang="scss" scoped>
.themain{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40%;
}
</style>