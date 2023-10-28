<template>
  <div style="height: 100vh; width: 100vw;">
    <app-header></app-header>
    <el-container style="height: 100%; background-color: #333">
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
        <div v-if="showResult" class="result-container">
          <el-input
              type="textarea"
              :rows="10"
              v-model="result"
              placeholder="Result will be displayed here"
              readonly>
          </el-input>
          <div class="button-group">
            <el-button type="success" @click="handleAccept">Accept</el-button>
            <el-button type="primary" @click="handlePost">Post</el-button>
          </div>
        </div>
      </el-main>
    </el-container>
    <div>
      <loading-with-countdown :is-visible="isLoading" />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/public/Header.vue';
import AppNavbar from '@/components/public/Navbar.vue';
import LoadingWithCountdown from "@/components/public/LoadingWithCountdown.vue";
import axios from "axios";

export default {
  components: {
    AppHeader,
    AppNavbar,
    LoadingWithCountdown,
  },
  data() {
    return {
      textarea: '',
      radio: 0,
      showResult: false,
      resultData: '',
      isLoading: false,
      result: this.resultData
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
      const prompt = `Generate code according to the requirement, requirement is: ${this.textarea}`;
      const langMapping = { 3: 'Python', 6: 'Java', 9: 'Javascript' };
      const payload = {
        seed: 2000,
        lang: langMapping[this.radio],
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
      } finally {
        this.isLoading = false;
      }
    },
    handleAccept() {
      this.$emit('clear');
    },
    handlePost() {
      console.log('Posted');
      this.$router.push({
        path: '/taskcreate',
        query: {
          lang: this.lang,
          prompt: this.textarea,
          resultData: this.resultData
        }
      })
    },
    handleClear() {
      this.textarea = '';
      this.radio = 0;
      this.showResult = false;
      this.resultData = '';
    },
  },
  watch: {
    resultData(newVal) {
      this.result = newVal;
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

.result-container {
  margin-top: 50px;
  margin-left: 50px;
  width: 80%;
  align-content: flex-start;
}

.button-group {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}

</style>
