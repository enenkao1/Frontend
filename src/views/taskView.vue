<template>
<div>
  <el-container>
    <el-header height="20px" style="margin-top: 100px;background-color: azure"> </el-header>
    <el-container>
      <el-aside  width="300px" style="background-color: cadetblue;line-height: 60px">
        <img src="@/assets/User.jpg" alt="" style = "width: 50%;border: 2px solid white;margin-top: 20px">
        <h2 style="text-align: center">Username</h2>
      </el-aside>
      <el-main  style="background-color: white;line-height: 50px;border: 2px solid #000000">  Content</el-main>
    </el-container>
  </el-container>
</div>
</template>

<script>
export default {
  name: "taskView"
}
</script>

<style scoped>

</style>
