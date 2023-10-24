<!--这只是个对gpt给的代码的测试页面-->
<template>
  <div>
    <!-- Loop through posts and create an el-aside for each post -->
    <el-aside v-for="post in posts" :key="post.id" class="aside-container">
      <!-- Display date at the top -->
      <div class="post-date">{{ post.date }}</div>

      <!-- Display user ID on the left -->
      <div class="post-user">{{ post.userId }}</div>

      <!-- Display content on the right -->
      <div class="post-content">{{ post.content }}</div>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: "TempView",
  data() {
    return {
      posts: [
        { id: 1, date: "2023-10-25", userId: "User1", content: "This is a sample post!" },
        { id: 2, date: "2023-10-25", userId: "User2", content: "This is a sample post!" },
        { id: 3, date: "2023-10-25", userId: "User3", content: "This is a sample post!" },
        { id: 4, date: "2023-10-25", userId: "User4", content: "This is a sample post!" },
        { id: 5, date: "2023-10-25", userId: "User5", content: "This is a sample post!" },
        { id: 6, date: "2023-10-25", userId: "User6", content: "This is a sample post!" },
        // ... add other posts
      ]
    };
  }
}
</script>

<style scoped>
.aside-container {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;  /* Optional: add a border between asides */
}

.post-date {
  flex-basis: 15%;  /* Adjust as needed */
  text-align: center;
  font-weight: bold;
}

.post-user {
  flex-basis: 25%;  /* Adjust as needed */
  text-align: left;
}

.post-content {
  flex-basis: 60%;  /* Adjust as needed */
  text-align: right;
}
</style>
