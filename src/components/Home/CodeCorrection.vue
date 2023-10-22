<template>
  <div style="height: 100vh; width: 100vw;">
    <app-header></app-header>
    <el-container style="height: calc(100% - 60px); background-color: #333">
      <app-navbar></app-navbar>
      <el-main>
        <el-input
            type="textarea"
            :rows="2"
            placeholder="Please input"
            v-model="textarea">
        </el-input>
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
      textarea: ''
    }
  }
};
</script>

<style scoped>
.content {
  margin-bottom: 200px;
  padding: 200px;
}

.board {
  padding: 200px;
}
</style>
