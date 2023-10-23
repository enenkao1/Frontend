<template>
<div>
  <img src="@/assets/logo.png" alt="" style = "width: 60%;margin-top: 50px">
  <h1 style="text-align: center;margin-top: 50px">Welcome to smart coder community</h1>
  <el-button type="primary" round="true" style="margin-top: 70px;margin-bottom:30px;float: left">Post</el-button>
  <div>
    <el-table
        :data="tableData" @row-click="goTask"
        stripe
        style="width: 100%;">
      <el-table-column
          prop="date"
          label="Date"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label=" "
          width="700"

        >
      </el-table-column>
      <el-table-column
          prop="author"
          label="Author"
          width="200">
      </el-table-column>
      <el-table-column
          prop="reply"
          label="Last replied"
          >
      </el-table-column>
    </el-table>
  </div>
  </div>

</template>

<script>
export default {
  name: "ForumView",
  data() {
    return {
      tableData: [{
        date: '2023-10-23',
        name: 'Welcome to here',
        author: 'Admin',
        reply:'user'
      }, {
        date: '2023-10-23',
        name: 'Welcome to here',
        author: 'Admin',
        reply:'user'
      }, {
        date: '2023-10-23',
        name: 'Welcome to here',
        author: 'Admin',
        reply:'user'
      }]
    }
  },
  methods:{
    goTask(){
      this.$router.push("/task");
    }
  }
}
</script>

<style scoped>

</style>
