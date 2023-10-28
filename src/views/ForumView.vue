/* eslint-disable */
<template>
<div>
  <app-header></app-header>
  <h1 style="text-align: center;margin-top: 30px">Welcome to smart coder community</h1>
  <div class="buttonBox" >
    <div style="text-align: left; width: 100%;">
      <el-button type="primary" round class="postButton" @click="goCreateTask()">Create Task</el-button>
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
          prop="submittedTime"
          label="Date"
          width="300">
      </el-table-column>
      <el-table-column
          prop="content"
          label=" "
          width="500"
        >
      </el-table-column>
      <el-table-column
          prop="codeType"
          label="Language"
          width="200"
      >
      </el-table-column>
      <el-table-column
          prop="finished"
          label="Status"
          width="150">
        <template v-slot:default="scope">
          <span>{{ scope.row.finished === 0 ? 'Unsolved' : scope.row.status }}</span>
          <span>{{ scope.row.finished === 1 ? 'Solved' : scope.row.status }}</span>
        </template>
      </el-table-column>
      <el-table-column
          prop="userId"
          label="Author"
          width="150">
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
import axios from "axios";
import AppHeader from "@/components/public/Header.vue";

export default {
  name: "ForumView",
  components: {
    AppHeader,
  },
  data() {
    return {
      new : 0,
      currentPage : 1,
      itemsPerPage: 16,
      tableData: [{ }],
      getData:[],

    }
  },
  computed:{
    paginatedData(){
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.getData.slice(start, end);
    },

  },
  mounted() {
    this.getTask();
  },
  methods:{
    // eslint-disable-next-line no-unused-vars
    goTask(row){
      localStorage.setItem("lastOpen",row.taskId);
      this.$router.push("/post");
    },
    addPost(){
      this.new = this.new + 1 ;
      let postName = 'Welcome to here ' + this.new;
      this.tableData.push({
        id:this.tableData.length+1,
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
    getTask(){
      // eslint-disable-next-line no-unused-vars
      axios.get("http://localhost:9090/task/auth/ask/alllist").then((response) => {
          this.getData = response.data.data;
          //console.log(this.getData);
        }
      );
    },
    async addTask() {
      this.new = this.new + 1;
      let postName = 'Welcome to here ' + this.new;
      let newTask = {
        taskId: this.getData.length + 1,
        submittedTime: '2023-10-23',
        content: postName,
        finished: 0,
        userId: 1,
        codeType: 'java'
      }
      const response = await axios.post('http://localhost:9090/task/auth/add', newTask);
      console.log('Data saved', response.data.message);
      this.getTask();
    },
    goCreateTask(){
      this.$router.push("/taskcreate");
    }
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
  width: 1300px;
  margin: auto;
  min-height: 60vh;
  height: auto;
  background-color: white;
  border: 1px solid black;
}
.tableUp{
  height: 2vh;
  background-color: lightgray;
  width: 1300px;
  margin: auto;
  display: flex;
  align-items:center;
  border: 1px solid gray;
}
.buttonBox{
  height: 5vh;
  background-color: white;
  width: 1300px;
  margin: auto;
  display: flex;
  justify-content: center;
}
.table{
  width: 100%;
  text-align: center;
}
</style>
