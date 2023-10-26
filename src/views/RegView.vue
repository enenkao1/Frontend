<template>
  <div class="reg" style="height: 70vh;align-items: center;justify-content:center;overflow:hidden;">
    <div>
      <h1>Welcome to Smart coder!</h1>
    </div>
    <div style="display: flex;align-items: center;justify-content:center;margin-right: 80px">
      <el-form ref="registrationForm" :label-position="left" label-width="130px" :model="RegForm" >
        <el-form-item label="Username" style="width:500px;margin-bottom: 40px;margin-top: 50px;" >
          <el-input v-model="RegForm.username" placeholder="..."></el-input>
        </el-form-item>
        <el-form-item label="Password" style="width:500px;margin-bottom: 40px ">
          <el-input type="password" v-model="RegForm.password" placeholder="..." show-password></el-input>
        </el-form-item>
        <el-form-item label="Email" style="width:500px;margin-bottom: 40px">
          <el-input v-model="RegForm.email" placeholder="..."></el-input>
        </el-form-item>
        <el-form-item label="Activity zone" style="width:500px;margin-bottom: 60px">
          <el-select v-model="RegForm.userType" placeholder="please select your zone" style="width: 100%;">
            <el-option label="Common User" value="COMMONUSER"></el-option>
            <el-option label="Pro Programmer" value="PROGRAMMER"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="width:500px;margin-bottom: 60px">
          <el-button  round style="width: 100%" @click="submitForm()">Submit</el-button>
        </el-form-item>
        <div style="margin-left: 130px">
          <el-link type="primary" style="border-bottom: 1px solid #409EFF;font-size: 20px" @click="goHome()">Back to login page</el-link>
        </div>
      </el-form>

    </div>


  </div>
</template>

<script>
export default {
  name: "RegView",
  data() {
    return {
      isLoading: false,
      RegForm: {
        username: '',
        password: '',
        email:'',
        userType:''
      }
    };
  },
  methods:{
    goHome(){
      this.$router.push("/login");
    },
    submitForm() {
      this.$refs.registrationForm.validate((valid) => {
        if (valid) {
          // 在请求开始时显示加载图标
          this.isLoading = true;
          this.$axios.post(this.$httpurl + '/users/register', this.RegForm)
              .then(res => res.data)
              .then(res => {
                console.log(res);
                if (res.code === 200) {
                  this.$message.success("The verity email has sent");
                  this.$router.push('/login');
                } else {
                  this.$message.error("This user name already exists, please try another.");
                }
              })
              .finally(() => {
                // 无论请求成功或失败，都在最后隐藏加载图标
                this.isLoading = false;
              });
        } else {
          this.$message.error('请检查表单是否填写正确！');
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
