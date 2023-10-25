<template>
  <div>
    <div>
      <h1>
        这是个用来放user主页面的地方，还没想好怎么设计
      </h1>
    </div>
    <div style="text-align: center;margin-top: 100px">
      <span style="color: blue; cursor:pointer;border-bottom: 1px solid blue;font-size: 20px;" @click = "goLogin">
        Login
      </span>
    </div>
    <div style="text-align: center;margin-top: 100px">
      <span style="color: blue; cursor:pointer;border-bottom: 1px solid blue;font-size: 20px;" @click = "goForum">
        Forum
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "userMainView",
  methods:{
    goLogin(){
      this.$router.push("/login")
    },
    goForum(){
      this.$router.push("/forum")
    }
  }
}
</script>

<style scoped>

</style>
