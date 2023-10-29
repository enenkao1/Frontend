/* eslint-disable */
<template >
<div class="mainBox">
  <app-header></app-header>
  <div class="insideBox">
    <div style="flex: 1;margin-bottom: 20px">
      <div style="height: 5vh;display: flex;align-items: center">
        <div size="small" style="flex: 1">
          <el-button size="small" style="float: left;margin-left: 30px" @click = "goBack">back</el-button>
        </div>
        <el-pagination
            @current-change="handlePageChange"
            :current-page="currentPage"
            :page-size="itemsPerPage"
            background
            layout="prev, pager, next"
            :total="this.answerList.length"
        >
        </el-pagination>
      </div>

      <el-container v-for="post in posts" :key="post.id" style="width: 100%;margin: auto;">
        <el-header height="20px" style="background-color: azure;"> </el-header>
        <el-container>
          <el-aside  width="250px" class="postAside">
            <img src="@/assets/User.jpg" alt="" style = "width: 50%;border: 2px solid white;margin-top: 20px">
            <div class="username">{{ post.username }}</div>
          </el-aside>
          <el-main  style="background-color: white;border: 2px solid #000000">
            <div style="border-bottom: 2px dashed black;height: 2vh;text-align: left;display: flex;align-items: center;justify-content: space-between">
                Published: {{ post.submittedTime }}
                <h4 v-if="post.accepted" style="margin-bottom: 15px">Adopted Answer</h4>
                <el-button size="small" style="margin-bottom: 15px" v-if="isLandlord && noAdoption && post.userId != LandlordId" @click="adoptClick(post.floor)">Adopt</el-button>
            </div>
            <div style="text-align: left;margin-top: 20px">
              {{ post.content }}
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>

      <el-container class="replyInput">
        <el-aside  width="250px" class="elAside">
          <img src="@/assets/User.jpg" alt="Image" style = "width: 50%;border: 2px solid white;margin-top: 20px;">
          <div style="" class="username">Your Username</div>
        </el-aside>
        <el-main  style="background-color: white;border: 2px solid #000000">
          <div class="replyInput">
            <el-input
                type="textarea"
                :rows="10"
                placeholder="Reply something..."
                v-model="textarea"
                style="border: 3px solid black;margin-bottom: 20px">
            </el-input>
            <el-button type="primary" style="float: left" @click="newAnswer">Post</el-button>
          </div>
        </el-main>
      </el-container>


  </div>

</div>
</template>

<script>
import AppHeader from "@/components/public/Header.vue";
import axios from "axios";

export default {
  name: "postView",
  components: {
    AppHeader,
  },
  data() {
    return {
      landLordPost:{ id: 1, date: "2023-10-25", userId: "User1", content: "This is a sample post!",adopt:false, },
      textarea: '',
      currentPage : 1,
      itemsPerPage: 5,
      userId:'Me',
      total: 0,
      isLandlord:false,
      LandlordId: -1,
      noAdoption:true,
      taskID: -1,
      answerList:[],
      taskDetail:[],
      totalAnswer:-1,
      test:true,

    }
  },
  computed:{
    posts(){
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.answerList.slice(start, end);
    }
  },
  beforeMount() {
    this.taskID = localStorage.getItem("lastOpen");
    this.getDetail();
    this.getTotalAnswerAmount();
    this.getDetail();
  },
  mounted() {

  },
  methods:{
    goBack(){
      this.$router.push("/forum");
    },
    handlePageChange(page) {
      this.currentPage = page;
    },
    goToLastPage() {
      const finalPage = Math.ceil(this.answerList.length / this.itemsPerPage);
      this.currentPage = finalPage;
    },
    deleteTest(){
      console.log(this.answerList.length);
      this.answerList.splice(1,1);
      this.test = false;

    },

    async newAnswer() {
      let Text = this.textarea;
      const Time = new Date().toLocaleDateString();
      let newData = {
        accepted: 0,
        userId: localStorage.getItem('id'),
        content: Text,
        taskId: this.taskID,
        submittedTime: Time,
        floor:this.answerList.length+1,
      };
      const response = await axios.post('http://localhost:9090/answer/auth/add', newData);
      if (response.data.code == 200) {
        this.$message.success("Reply success! ");
        this.textarea='';
        this.getDetail();
        this.goToLastPage();
      } else {
        this.$message.error("Reply fail ");
      }
    },
    async adoptClick(id){
      let adoptid= 0 ;
      /* eslint-disable */
      for (const row of this.answerList) {
        if(row.answerId == id){
          // console.log("checkit" + (row.answerId + 1));
          // let pack1 = {
          //   answerId: row.answerId,
          // };
          // const res = await axios.post('http://localhost:9090/answer/auth/updateAccepted',pack1);
          // if(res.data.code == 200){
          //    console.log(1)
          //    let pack2 = {taskId: this.taskID};
          //    const res2 = await axios.post('http://localhost:9090/task/auth/task/updateFinishedStatus',pack2);
          //    if(res2.data.code == 200){
          //      this.$message.success("Adopt success! ");
          //      this.noAdoption = false;
          //    }else{
          //      console.log(res2);
          //      this.$message.error("Task update error! ");
          //    }
          // }else{
          //    console.log(res);
          //    this.$message.error("Answer update error! ");
          // }
          adoptid = row.answerId;

        }
      }
      console.log("checkit" + adoptid);
      let pack1 = {
        status: 1,
        answerId: adoptid,
        taskId: this.taskID,
      };
      const res = await axios.post("http://localhost:9090/answer/auth/adopt",pack1);
      if(res.data.code == 200){
             this.$message.success("Adopt success! ");
             this.noAdoption = false;
      }else{
        console.log(res);
        this.$message.error("Answer update error! ");
      }
    },
    getDetail(){
      axios.get("http://localhost:9090/task/auth/task/detail",{params:{
          taskId : this.taskID,
      }}).then((res)=>{
          this.taskDetail = res.data.data.task;
          if(this.taskDetail.accepted==1){
            this.noAdoption = false;
          }
          this.answerList = res.data.data.answerList;
           this.getUser();
          this.splitDetail();
          }
      );
    },
    splitDetail(){
      this.landLordPost = this.answerList[0];
      this.LandlordId = this.landLordPost.userId;
      if(localStorage.getItem('id')==this.LandlordId){
        this.isLandlord = true;
      }
      //console.log(this.landLordPost);
      const Index = this.answerList.findIndex(item => item.accepted ===1);
      // if(Index > -1 && Index !==1){
      //   let Item = this.answerList[Index];
      //   this.answerList.splice(Index,1);
      //   console.log(this.answerList);
      //   // this.answerList.splice(1,0,1);
      //   // console.log(this.answerList);
      // }
    },
    getUser(){
      this.answerList.forEach((row,index) => {
        axios.get("http://localhost:9090/users/auth/getusername", {params:{userId : row.userId}}).then((response) => {
              this.$set(this.answerList,index,{ ...row, username: response.data.data });
            }
        );
      })
    },
    getTotalAnswerAmount(){
        axios.get("http://localhost:9090/answer/auth/count").then((response) => {
              this.totalAnswer = response.data.data;
            }
        );
    },

  },

}
</script>

<style scoped>
.mainBox{
  min-height: 100vh;
  height:auto;
  background-color: gray;
  overflow: auto;
}
.UpContainer {
  margin: auto;
  height: 20vh;
  background-color: white;
  justify-content: center;
  border-bottom: 10px solid black;
}
.insideBox{
  width: 90%;
  margin: auto;
  height: 80vh;
  background-color: white;
  display: flex;
  flex-direction: column;
}
.replyInput{
  flex:0;
  width: 100%;
  align-self: center;
  margin-top: 50px;

}
.postAside{
  background-color: cadetblue;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  height: 240px;
}
.elAside{
  background-color: cadetblue;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
}
.username{
  margin-top: 15px;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
}
</style>
