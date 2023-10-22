<template>
  <div class="reg" style="height: 70vh;align-items: center;justify-content:center;overflow:hidden;">
    <div>
      <h1>Welcome to Smart coder!</h1>
    </div>
    <div style="display: flex;align-items: center;justify-content:center;margin-right: 80px">
      <el-form :label-position="left" label-width="130px" :model="RegForm" >
        <el-form-item label="Username" style="width:500px;margin-bottom: 40px;margin-top: 50px;" >
          <el-input v-model="RegForm.name" placeholder="..."></el-input>
        </el-form-item>
        <el-form-item label="Password" style="width:500px;margin-bottom: 40px ">
          <el-input v-model="RegForm.password" placeholder="..."></el-input>
        </el-form-item>
        <el-form-item label="Email" style="width:500px;margin-bottom: 60px">
          <el-input v-model="RegForm.email" placeholder="..."></el-input>
        </el-form-item>
        <el-form-item style="width:500px;margin-bottom: 60px">
          <el-button  round style="width: 100%">Submit</el-button>
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
      RegForm: {
        name: '',
        password: '',
        email:'',
      }
    };
  },
  methods:{
    goHome(){
      this.$router.push("/login");
    }
  }
}
</script>

<style scoped>

</style>
