<template>
    <div class="test">
        <h1>hello world</h1>
        <h3>image图片 - 前置摄像头调用</h3>
        <input id="upimg" @change="con()" type="file" accept="image/*">
        <img class="imgg" src="" alt="">
    </div>
</template>

<script>
    import api from "../http/service/apiList"
    import EXIF from "exif-js"
    export default {
        name: "test",
        data(){
            return{
                imgs:"",
                imgsrc:''
            }
        },
        async created() {
            console.log(api,"this.$api")
            let res = await this.$api.getJokes();
            console.log(res,"res")
        },
        methods:{
            con(){
                let imgEl = document.querySelector("#upimg");
                let imgg = document.querySelector(".imgg");
                this.imgsrc = imgEl.files[0];
                var reader = new FileReader();
                reader.addEventListener("load",  ()=>{
                    EXIF.getData(this.imgsrc, function() {
                        let allMetaData = EXIF.getAllTags(this);
                        imgg.src = reader.result;
                        switch (allMetaData.Orientation) {
                            case 6:
                                imgg.style.transform = "rotate(90deg)";
                                break;
                            case 8:
                                imgg.style.transform = "rotate(-90deg)";
                                break;
                            case 3:
                                imgg.style.transform = "rotate(180deg)";
                                break;
                        }
                    });
                }, false);
                reader.readAsDataURL(imgEl.files[0]);
                /*setTimeout(()=>{
                    EXIF.getData(document.querySelector(".imgg"), function() {
                        var allMetaData = EXIF.getAllTags(this);
                        alert(allMetaData.Orientation,"###");
                    });
                },1000)*/
            }
        },
    }
</script>

<style scoped>
.imgg{
    max-width: 100%;
}
</style>