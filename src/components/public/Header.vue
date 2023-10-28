<template>
  <el-header class="header" height = 100px;>
    <img src="@/assets/logo.png" alt="Logo" class="logo">
    <div class="navigation-menu">
      <router-link to="/forum" class="menu-item">Forum</router-link>
      <router-link to="/codeGeneration" class="menu-item">Home</router-link>
    </div>
    <div class="user-info">
      <span class="username">{{ username }}</span>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="goToForum">
            <i class="el-icon-chat-line-square"></i>
            Forum
          </el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">
            <i class="el-icon-switch-button"></i>
            Sign out
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      username: '',
    };
  },
  created() {
    const storedUsername = localStorage.getItem('username') || sessionStorage.getItem('username');
    if (storedUsername) {
      this.username = `Hi, ${storedUsername}`;
    } else {
      this.username = 'Hi, Guest';
    }
  },
  methods: {
    goToForum() {
      this.$router.push('/forum');
    },
    logout() {
      localStorage.removeItem('username');
      sessionStorage.removeItem('username');
      this.$router.push('/login');
    },
  },
};
</script>


<style scoped>
.header {
  background-color: #333;
  color: white;
  line-height: 60px;
  height: 100px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  border-bottom: 1px solid palegoldenrod;
}

.logo {
  height: 50%;
  margin-right: 20px;
}

.user-info {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.username {
  margin-right: 10px;
}

.el-icon-arrow-down {
  background-color: transparent;
  font-size: 15px;
  color: palegoldenrod;
  cursor: pointer;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.navigation-menu {
  display: flex;
  margin-left: 20px;
  align-items: center;
  justify-content: flex-end;
}

.menu-item {
  color: white;
  margin-right: 20px;
  text-decoration: none;
  cursor: pointer;
}

.menu-item:hover {
  text-decoration: underline;
}
</style>
