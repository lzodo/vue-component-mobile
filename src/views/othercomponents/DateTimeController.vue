<template>
    <div class="DateTimeController">
        <lzo-header class="myheader" :AddLeft="true" @leftClick="$router.go(-1)">日期时间选择</lzo-header>
        <DateTime type="time" v-model="datetime1"></DateTime>
        <DateTime type="day" v-model="datetime2"></DateTime>
        <DateTime type="month" v-model="datetime3"></DateTime>
        <DateTime type="date" v-model="datetime4"></DateTime>
        <DateTime type="datetime" v-model="datetime5"></DateTime>
    </div>    
</template>
<script>
export default {
    name:'DateTimeController',
    data(){
        return{
            datetime1:'01:01',
            datetime2:'',
            datetime3:'',
            datetime4:'',
            datetime5:'2008-08-08 08:08'
        }
    },
    methods:{

    },
    mounted(){
      
    },
}
</script>
<style lang="scss" scoped>

</style>