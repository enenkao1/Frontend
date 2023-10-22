<template>
  <div>
    <app-header></app-header>
    <app-navbar></app-navbar>
    <!-- 页面其他内容 -->
    <el-aside width="200px" class="custom-aside">
      <!-- 第一个栏目 -->
      <el-menu
          text-color="#fff"
          active-text-color="#fffc05"
          style="height: 100%;"
          class="custom-menu"
          router>
        <el-menu-item index="/" style="color: white; font-weight: bold; font-size: 20px">My posted tasks</el-menu-item>
        <el-menu-item index="/" style="color: white; font-weight: bold; font-size: 20px">My taken tasks</el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>

<script src="./HomePage.js">
</script>


<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}
</style>
