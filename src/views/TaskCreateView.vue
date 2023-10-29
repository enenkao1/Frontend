<template>
  <div class="container">
    <div class="content">
      <el-button size="small" style="float: left;margin-left: 30px;width: 10%" @click = "goBack">back</el-button>
      <div class="input-group" style="display: flex;flex-direction: row;align-items: center;margin-top: 5%">
        <div style="width: 20%;font-size: 25px;font-weight: bold">Language:</div>
        <div style="width: 80%;text-align: left">
          <div v-if="langFail" class="failText">
            Please input the type of your code
          </div>
          <el-input
              type="textarea"
              :rows="2"
              placeholder="Your language type..."
              v-model="lang"
              style="border: 3px solid black;margin-bottom: 20px">
          </el-input>
        </div>
      </div>

      <div class="input-group" style="display: flex;flex-direction: row;align-items: center;margin-top: 10%">
        <div style="width: 20%;font-size: 25px;font-weight: bold">Title:</div>
        <div style="width: 80%;text-align: left">
          <div v-if="titleFail" class="failText">
            Please input the title
          </div>
          <el-input
              type="textarea"
              :rows="2"
              placeholder="Your language type..."
              v-model="title"
              style="border: 3px solid black;margin-bottom: 20px">
          </el-input>
        </div>
      </div>

      <div class="input-group" style="display: flex;flex-direction: row;align-items: center;margin-top: 10%">
        <div style="width: 20%;font-size: 25px;font-weight: bold">Requirement:</div>
        <div style="width: 80%;text-align: left">
          <div v-if="ReqFail"  class="failText">
            Please input your requirement
          </div>
          <el-input
              type="textarea"
              :rows="10"
              placeholder="Your language type..."
              v-model="ReqText"
              style="border: 3px solid black;margin-bottom: 20px">
          </el-input>
        </div>
      </div>
      <div style="display: flex;justify-content: center;margin-top: 5%">
        <el-button type="primary" round class="postButton" @click="taskPost()">Task Post</el-button>
      </div>


    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TaskCreateView",
  data(){
    return {
      lang: '',
      title:'',
      ReqText:'',
      getData:[],
      langFail: false,
      titleFail: false,
      ReqFail: false,
      totalAnswer:0,
    }
  },
  mounted() {
    this.getTask();
    this.getTotalAnswerAmount();
  },
  methods: {
    async taskPost() {
      if(this.lang.length==0){
        this.langFail = true;
      }else{
        this.langFail = false;
      }
      if(this.title.length==0){
        this.titleFail = true;
      }else{
        this.titleFail = false;
      }
      if(this.ReqText.length==0){
        this.ReqFail = true;
      }else{
        this.ReqFail = false;
      }
      if(this.lang.length * this.title.length * this.ReqText.length != 0){
        // eslint-disable-next-line no-unused-vars
        const Time = new Date().toLocaleDateString();
        let newTask = {
          submittedTime: Time,
          content: this.title,
          finished: 0,
          userId: localStorage.getItem('id'),
          codeType: this.lang,
        }
        const response = await axios.post('http://localhost:9090/task/auth/add', newTask);
        if(response.data.code == 200){
          await this.addAnswer();
        }else{
          this.$message.error("Task create fail ");
          console.log(response.data);
          console.log('PostFail')
        }
      }else{
        this.$message.error("Task create fail ");
        console.log('PostFail')
      }
    },
    async addAnswer() {
      const Time = new Date().toLocaleDateString();
      let landlordPost = {
        taskId: this.getData.length + 1,
        submittedTime: Time,
        content: this.ReqText,
        userId: localStorage.getItem('id'),
        floor: 1,
      };
      const response = await axios.post('http://localhost:9090/answer/auth/add', landlordPost);
      if(response.data.code == 200){
        this.$message.success("Task create success! ");
        this.goForum();
      }else{
        this.$message.error("Task create fail ");
        console.log(response.data);
        console.log('AddanswerFail')
      }
    },
    getTask(){
      // eslint-disable-next-line no-unused-vars
      axios.get("http://localhost:9090/task/auth/ask/alllist").then((response) => {
            this.getData = response.data.data;
            console.log(this.getData.length);
            //console.log(this.getData);
          }
      );
    },
    goForum() {
      this.$router.push("/forum");
    },
    getTotalAnswerAmount(){
      axios.get("http://localhost:9090/answer/auth/count").then((response) => {
            this.totalAnswer = response.data.data;
            console.log(this.totalAnswer);
          }
      );
    },
    goBack(){
      this.$router.push("/forum");
    },
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  /*min-height: 150vh;*/
  padding: 20px;

}

.content {
  background-color: white;
  border: 2px solid black;
  border-radius: 15px;

  width: 1150px;
  height: 100%;
  min-height: 85vh;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  box-shadow:
      0 8px 15px rgba(0, 0, 0, 0.3),  /* 外阴影 */
      inset 0 4px 4px rgba(255, 255, 255, 0.3); /* 内阴影，增加立体感 */
}

.input-group {
  display: flex;
  flex-direction: column;
}

.postButton{
  margin-top:10px;
  margin-bottom:10px;
  float: left;
  width: 50%;
}

textarea {
  resize: vertical;
}
.failText{
  color: red;
  margin-bottom: 20px;
}
</style>
