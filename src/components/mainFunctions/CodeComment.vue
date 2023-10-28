<template>
  <div style="height: 100vh; width: 100vw;">
    <app-header></app-header>
    <el-container style="height: 100%; background-color: #333">
      <app-navbar></app-navbar>
      <el-main class="container">
        <p class="text">Code</p>
        <el-input
            class="input"
            type="textarea"
            :rows="10"
            placeholder="Please input the code you want to add comment"
            v-model="textarea">
        </el-input>
        <el-button type="primary" class="submit-button" @click="handleSubmit">Submit</el-button>
        <result-display
            :show-result="showResult"
            :result-data="resultData"
            @clear="handleClear"
            class="result-display">
        </result-display>
      </el-main>
    </el-container>
    <div>
      <loading-with-countdown :is-visible="isLoading" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AppHeader from '@/components/public/Header.vue';
import AppNavbar from '@/components/public/Navbar.vue';
import ResultDisplay from '@/components/public/ResultDisplay.vue';
import LoadingWithCountdown from "@/components/public/LoadingWithCountdown.vue";

export default {
  components: {
    AppHeader,
    AppNavbar,
    ResultDisplay,
    LoadingWithCountdown
  },
  data() {
    return {
      textarea: '',
      radio: 3,
      showResult: false,
      resultData: '',
      isLoading: false,
    }
  },
  methods: {
    post(url, data, success){
      axios.post(url, data).then(({data}) => {
        if (data.status === 200) {
          success(data);
        }
      })
    },
    async handleSubmit() {
      this.isLoading = true;
      console.log('Submitted!');
      const prompt = `The current code needs to be commented, the code is${this.textarea}`;
      const payload = {
        seed: 2000,
        lang: 0,
        prompt,
        max_length: 1280,
        top_p: 0.95,
        temperature: 0.2,
        top_k: 0
      };

      try {
        this.post(this.$cudaurl + '/createItem', payload, (data) =>{
          this.resultData = data.response
          this.showResult = true})
      } catch (error) {
        console.error('请求失败:', error);
        // 处理错误，例如显示错误消息
      } finally {
        this.isLoading = false;
      }
    },
    handleClear() {
      this.textarea = '';
      this.radio = 3;
      this.showResult = false;
      this.resultData = '';
    },
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
.submit-button {
  align-self: flex-end;
  margin-right: 240px;
  margin-top: 40px;
}

.result-display {
  margin-top: 50px;
  margin-left: 50px;
  width: 80%;
  align-content: flex-start;
}
</style>
