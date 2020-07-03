<template>
    <div id="girls">

    </div>
</template>

<script>
    export default {
        name: "girls",
        data(){
            return{
                data:[]
            }
        },
        async created() {
            let res = this.$api.getGirls();
            let res2 = this.$api.getJokes();
            console.log(res,res2,"getGirls")
        },
        methods:{

        }
    }
</script>

<style lang="less" scoped>

</style>