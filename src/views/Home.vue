<template>
  <div class="home">
    <div class="content">
      <van-grid clickable icon-size="30px" :column-num="3">
        <van-grid-item icon="photo-o" text="美女图" to="girls" />
        <van-grid-item icon="search" text="URL 跳转" url="./test" />
        <van-grid-item icon="search" text="URL 跳转" url="/" />
        <van-grid-item icon="search" text="URL 跳转" url="/" />
        <van-grid-item icon="search" text="URL 跳转" url="/" />
        <van-grid-item icon="search" text="URL 跳转" url="/" />
        <van-grid-item icon="search" text="URL 跳转" url="/" />
        <van-grid-item icon="search" text="URL 跳转" url="/" />
        <van-grid-item icon="search" text="URL 跳转" url="/" />
      </van-grid>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="less" scoped>
  .home{
    .content{
      .van-grid-item{
        height: 3rem;
      }
    }
  }
</style>
