<template >
<div style="height: 100vh;background-color: gray">
  <div>
    <el-container style="margin: auto;height: 15vh;background-color: white;justify-content: center;border-bottom: 10px solid black">
      <img src="@/assets/logo.png" alt="" style = "width: 60%">
    </el-container>
  </div>
  <div style="width: 90%;margin: auto;height: 80vh;background-color: white;">
    <div style="height: 5vh;display: flex;align-items: center">
      <div size="small" style="flex: 1">
        <el-button size="small" style="float: left;margin-left: 30px" @click = "goBack">back</el-button>
      </div>
      <el-pagination
          style="float: right;"
          small
          layout="prev, pager, next"
          :total="30"
      >
      </el-pagination>
    </div>

      <el-container style="width: 100%;margin: auto;">
        <el-header height="20px" style="background-color: azure;"> </el-header>
        <el-container>
          <el-aside  width="300px" style="background-color: cadetblue;line-height: 60px">
            <img src="@/assets/User.jpg" alt="" style = "width: 50%;border: 2px solid white;margin-top: 20px">
            <h2 style="text-align: center">Username</h2>
          </el-aside>
          <el-main  style="background-color: white;border: 2px solid #000000">
           <div style="border-bottom: 2px dashed black;height: 2vh;text-align: left">
            Published: Today
           </div>
            <div style="text-align: left;margin-top: 20px">
              Content
            </div>
          </el-main>
        </el-container>
      </el-container>

  </div>
</div>
</template>

<script>
export default {
  name: "postView",
  methods:{
    goBack(){
      this.$router.push("/forum");
    }
  }
}
</script>

<style scoped>

</style>
