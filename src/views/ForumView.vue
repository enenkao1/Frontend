/* eslint-disable */
<template>
<div>
  <app-header></app-header>
  <h1 style="text-align: center;margin-top: 30px">Welcome to smart coder community</h1>
  <div class="buttonBox" >
    <div style="width: 100%;">
      <el-button type="primary" round class="postButton" @click="goCreateTask()">Create Task</el-button>
    </div>
    <div style="display: flex;flex-direction: column;width: 200px">
      <div>
      <el-switch
          v-model="selfFocus"
          style="margin-top: 50px"
          inactive-text="Only your task"
          @change = "selfChange"
      >
      </el-switch>
      </div>
      <div>
        <el-switch
            v-model="unsolvedFocus"
            style="margin-top: 30px"
            inactive-text="Only unsolved"
            @change = "statusChange"
        >
        </el-switch>
      </div>
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
          prop="asyncName"
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
      selfFocus:false,
      unsolvedFocus:false,
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
    handlePageChange(page) {
      this.currentPage = page;
    },
    getTask(){
      // eslint-disable-next-line no-unused-vars
      axios.get("http://localhost:9090/task/auth/ask/alllist").then((response) => {
          this.getData = response.data.data;
          this.getUser();
          //console.log(this.getData);
        }
      );
    },
    goCreateTask(){
      this.$router.push("/taskcreate");
    },
    // eslint-disable-next-line no-unused-vars
    getUser(){
      this.getData.forEach((row,index) => {
        axios.get("http://localhost:9090/users/auth/getusername", {params:{userId : row.userId}}).then((response) => {
              this.$set(this.getData,index,{ ...row, asyncName: response.data.data });
            }
        );
      })
    },
    selfChange(value){
        if(value==true){
          if(this.unsolvedFocus==true){
            axios.get("http://localhost:9090/task/auth/my/ask/list",{params:{userId : localStorage.getItem('id')}}).then((response) => {
                  this.getData = response.data.data;
                  this.getUser();
                }
            );
          }else{
            axios.get("http://localhost:9090/task/auth/my/list",{params:{userId : localStorage.getItem('id')}}).then((response) => {
                  this.getData = response.data.data;
                  this.getUser();
                }
            );
          }
        }else{
          if(this.unsolvedFocus==true){
            axios.get("http://localhost:9090/task/auth/ask/unfinishedlist",{params:{userId : localStorage.getItem('id')}}).then((response) => {
                  this.getData = response.data.data;
                  this.getUser();
                }
            );
          }else{
            this.getTask();
          }
        }
    },
    statusChange(value){
      if(value==true){
        if(this.selfFocus==true){
          axios.get("http://localhost:9090/task/auth/my/ask/list",{params:{userId : localStorage.getItem('id')}}).then((response) => {
                this.getData = response.data.data;
                this.getUser();
              }
          );
        }else{
          axios.get("http://localhost:9090/task/auth/ask/unfinishedlist",{params:{userId : localStorage.getItem('id')}}).then((response) => {
                this.getData = response.data.data;
                this.getUser();
              }
          );
        }
      }else{
        if(this.selfFocus==true){
          axios.get("http://localhost:9090/task/auth/my/list",{params:{userId : localStorage.getItem('id')}}).then((response) => {
                this.getData = response.data.data;
                this.getUser();
              }
          );
        }else{
          this.getTask();
        }
      }
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
  height: 10vh;
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
