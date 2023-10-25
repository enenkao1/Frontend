<template>
  <div class="login" >
    <div style="flex: 1">
      <img src="@/assets/login.jpg" alt="" style = "width: 50%">
    </div>
    <div style="flex: 1; ">
      <div v-if="loginFail" class="failText">
        Username or password is not correct.
      </div>
      <el-form :label-position="labelPosition" label-width="130px" :model="loginForm">
        <el-form-item label="Username" style="width:500px">
          <el-input v-model="loginForm.name" placeholder="..."></el-input>
        </el-form-item>
        <el-form-item label="Password" style="width:500px">
          <el-input v-model="loginForm.password" placeholder="..."></el-input>
        </el-form-item>
        <el-form-item style="width:500px;margin-bottom: 40px">
          <el-button type="primary" round style="width: 100%" @click="login">Login</el-button>
        </el-form-item>
        <div style="text-align: left;margin-left: 120px;margin-bottom: 10px;">Create an account, click <span style="color: blue; cursor:pointer;border-bottom: 1px solid blue;" @click="goReg()">here</span></div>
        <div style="text-align: left;margin-left: 120px">Forget your password, click <span style="color: blue; cursor:pointer;border-bottom: 1px solid blue;">here</span></div>
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
      },
      tableData:[
        { id: 1, userId: "user", password: "123456" },
        { id: 2, userId: "user2", password: "1234567" },
      ],
      loginFail: false,

    };
  },
  methods:{
    login(){
      let match = false;
      /* eslint-disable */
      this.tableData.forEach((row,index)=>{
          if(this.loginForm.name == row.userId && this.loginForm.password == row.password ){

            match = true;
          }
      });
      if(match==true){
        this.goUser();
      }else{
        this.loginFail = true;
      }
    },
    goReg(){
      this.$router.push("/reg");
    },
    goUser(){
      this.$router.push("/user")
    }
  }
}
</script>

<style scoped>
.login{
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content:center;
  overflow:hidden;
}
.failText{
  color: red;
  text-align: left;
  margin-left: 135px;
  margin-bottom: 20px;
}
</style>
