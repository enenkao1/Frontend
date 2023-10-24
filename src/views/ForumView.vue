/* eslint-disable */
<template>
<div>
  <img src="@/assets/logo.png" alt="" style = "width: 60%;margin-top: 50px">
  <h1 style="text-align: center;margin-top: 30px">Welcome to smart coder community</h1>
  <div class="buttonBox" >
    <div style="text-align: left; width: 100%;">
      <el-button type="primary" round="true" class="postButton" @click="addPost()">Post</el-button>
    </div>
  </div>
  <div class="tableUp">
  </div>
  <div class="insideBox">
    <el-table
        :data="paginatedData"
        :cell-style="{padding:'13px'}"
        stripe
        @row-click="goTask"
        class="table">
      <el-table-column
          prop="date"
          label="Date"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label=" "
          width="500"
        >
      </el-table-column>
      <el-table-column
          prop="status"
          label="Status"
          width="200">
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
  <div style="margin-top: 10px">
    <el-pagination
        @current-change="handlePageChange"
        :current-page="currentPage"
        :page-size="itemsPerPage"
        background
        layout="prev, pager, next"
        :total="tableData.length">
    </el-pagination>
  </div>
</div>

</template>

<script>
export default {
  name: "ForumView",
  data() {
    return {
      new : 0,
      currentPage : 1,
      itemsPerPage: 16,
      tableData: [{
        date: '2023-10-23',
        name: 'Welcome to here',
        status: 'Unsolved',
        author: 'Admin',
        reply:'user'
      }, {
        date: '2023-10-23',
        name: 'Welcome to here',
        status: 'Unsolved',
        author: 'Admin',
        reply:'user'
      }, {
        date: '2023-10-23',
        name: 'Welcome to here',
        status: 'Unsolved',
        author: 'Admin',
        reply:'user'
      }]
    }
  },
  computed:{
    paginatedData(){
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.tableData.slice(start, end);
    }
  },
  methods:{
    goTask(){
      this.$router.push("/post");
    },
    addPost(){
      this.new = this.new + 1 ;
      let postName = 'Welcome to here ' + this.new;
      this.tableData.push({
        date: '2023-10-23',
        name: postName,
        status: 'Solved',
        author: 'Admin',
        reply:'user'
      })
    },
    handlePageChange(page) {
      this.currentPage = page;
    },
  }
}
</script>

<style scoped>
.postButton{
  margin-top:10px;
  margin-bottom:10px;
  float: left;
}
.insideBox{
  width: 90%;
  margin: auto;
  min-height: 60vh;
  height: auto;
  background-color: white;
  border: 1px solid black;
}
.tableUp{
  height: 2vh;
  background-color: lightgray;
  width: 90%;
  margin: auto;
  display: flex;
  align-items:center;
  border: 1px solid gray;
}
.buttonBox{
  height: 5vh;
  background-color: white;
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
}
.table{
  width: 100%;
  text-align: center;
}
</style>
