<template>
  <div class="login" style="height: 70vh;display: flex;align-items: center;justify-content:center;overflow:hidden;">
    <div style="flex: 1">
      <img src="@/assets/login.jpg" alt="" style = "width: 50%">
    </div>
    <div style="flex: 1;display: flex; ">
      <el-form :label-position="labelPosition" label-width="130px" :model="loginForm">
        <el-form-item label="Username" style="width:500px">
          <el-input v-model="loginForm.name" placeholder="..."></el-input>
        </el-form-item>
        <el-form-item label="Password" style="width:500px">
          <el-input v-model="loginForm.password" placeholder="..."></el-input>
        </el-form-item>
        <el-form-item style="width:500px;margin-bottom: 40px">
          <el-button type="primary" round style="width: 100%">Login</el-button>
        </el-form-item>
        <div style="text-align: left;margin-left: 120px;margin-bottom: 10px">Create an account, click <span style="color: blue; cursor:pointer">here</span></div>
        <div style="text-align: left;margin-left: 120px">Forget your password, click <span style="color: blue; cursor:pointer">here</span></div>
      </el-form>

    </div>


  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      labelPosition: 'right',
      loginForm: {
        name: '',
        password: ''
      }
    };
  }
}
</script>

<style scoped>

</style>
