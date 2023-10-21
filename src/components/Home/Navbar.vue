<template>
  <el-container style="height: 100vh;">
    <el-aside width="200px" style="background-color: #333;">
      <el-menu default-active="1" class="el-menu-vertical-demo" text-color="#aaaaa">
        <el-menu-item index="/codeGeneration">Code Generation</el-menu-item>
        <el-menu-item index="/codeComment">Code Comment</el-menu-item>
        <el-menu-item index="/codeCorrection">Code Correction</el-menu-item>
      </el-menu>
    </el-aside>
  </el-container>
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>
<style scoped>
.el-menu-item.is-active, .el-menu-item:not(.is-disabled):hover {
  background-color: palegoldenrod !important;
}
</style>