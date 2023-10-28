<template>
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
</template>

<script>
export default {
  props: {
    showResult: {
      type: Boolean,
      default: false
    },
    resultData: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      result: this.resultData
    };
  },
  methods: {
    handleAccept() {
      this.$emit('clear');
    },
    handlePost() {
      console.log('Posted');
      this.$router.push('/taskcreate');
    }
  },
  watch: {
    resultData(newVal) {
      this.result = newVal;
    }
  }
};
</script>

<style scoped>
.result-container {
  width: 100%;
}

.button-group {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
</style>
