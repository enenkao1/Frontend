<template>
  <div>
    <app-header></app-header>
    <app-navbar></app-navbar>
    <!-- 页面其他内容 -->
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
};
</script>


<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}
</style>
