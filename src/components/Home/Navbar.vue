<template>
  <el-aside class="navbar" width="300px" style="background-color: #333; height: 100vh;">
    <el-menu default-active="1" class="el-menu-vertical-demo" text-color="#303133" router>
      <el-menu-item index="/codeGeneration">
        <i class="el-icon-s-opportunity"></i>
        Code Generation
      </el-menu-item>e
      <el-menu-item index="/codeComment">
        <i class="el-icon-tickets"></i>
        Code Comment
      </el-menu-item>
      <el-menu-item index="/codeCorrection">
        <i class="el-icon-s-tools"></i>
        Code Correction
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>

<style scoped>
.navbar {
  border-right: 1px solid palegoldenrod;
}

.el-menu-item.is-active, .el-menu-item:not(.is-disabled):hover {
  padding: 0 !important;
  width: 300px !important;
  background-color: palegoldenrod !important;
}
.el-menu-vertical-demo{
  padding: 0 !important;
  width: 300px !important;
  height: 100% !important;
  background-color: #333 !important;
  border-bottom: 1px solid palegoldenrod !important;
}
.el-menu-item {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 0 !important;
  width: 300px !important;
  height: 15% !important;
  background-color: #333 !important;
  color: #FFBE79 !important;
  border-bottom: 1px solid palegoldenrod !important;
  font-size: 20px;
}

.el-menu-item .el-icon-s-opportunity {
  font-size: 25px;
  margin-right: 8px;
  color: #EA3C12;
}

.el-menu-item .el-icon-tickets {
  font-size: 25px;
  margin-right: 10px;
  color: #EA3C12;
}

.el-menu-item .el-icon-s-tools {
  font-size: 25px;
  margin-right: 10px;
  color: #EA3C12;
}

</style>