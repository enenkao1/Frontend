<template>
  <div style="height: 100vh; width: 100vw;">
    <app-header></app-header>
    <el-container style="height: calc(100% - 60px); background-color: #333">
      <app-navbar></app-navbar>
      <el-main class="container">
        <p class="text">Description</p>
        <el-input
            class="input"
            type="textarea"
            :rows="10"
            placeholder="Please describe your needs"
            v-model="textarea">
        </el-input>
        <p class="text">Programming Language</p>
        <el-radio-group v-model="radio" class="radio">
          <el-radio :label="3">Python</el-radio>
          <el-radio :label="6">Java</el-radio>
          <el-radio :label="9">Javascript</el-radio>
        </el-radio-group>
        <el-button type="primary" class="submit-button" @click="handleSubmit">Submit</el-button>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue';
import AppNavbar from '@/components/Home/Navbar.vue';

export default {
  components: {
    AppHeader,
    AppNavbar,
  },
  data() {
    return {
      textarea: '',
      radio: 3
    }
  },
  methods: {
    handleSubmit() {
      console.log('Submitted!');
      this.$router.push('/result');
      // 在这里添加你的提交逻辑
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.text {
  margin-left: 50px;
  margin-top: 25px;
  text-align: left;
  margin-bottom: 10px;
  color: white;
}

.input {
  margin-left: 50px;
  width: 80%;
  align-content: flex-start;
}

.radio {
  margin-left: 50px;
}

.submit-button {
  align-self: flex-end;
  margin-right: 240px;
  margin-top: 40px;
}
</style>
