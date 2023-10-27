<template>
  <div class="container">
    <div class="content">
      <div class="input-group" style="display: flex;flex-direction: row;align-items: center;margin-top: 10%">
        <div style="width: 20%;font-size: 25px;font-weight: bold">Language:</div>
        <el-input
            type="textarea"
            :rows="2"
            placeholder="Your language type..."
            v-model="lang"
            style="border: 3px solid black;margin-bottom: 20px">
        </el-input>
      </div>

      <div class="input-group" style="display: flex;flex-direction: row;align-items: center;margin-top: 10%">
        <div style="width: 20%;font-size: 25px;font-weight: bold">Title:</div>
        <el-input
            type="textarea"
            :rows="2"
            placeholder="Your title..."
            v-model="title"
            style="border: 3px solid black;margin-bottom: 20px">
        </el-input>
      </div>

      <div class="input-group" style="display: flex;flex-direction: row;align-items: center;margin-top: 10%">
        <div style="width: 20%;font-size: 25px;font-weight: bold">Requirement:</div>
        <el-input
            type="textarea"
            :rows="10"
            placeholder="Your requirement..."
            v-model="ReqText"
            style="border: 3px solid black;margin-bottom: 20px">
        </el-input>
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

    }
  },
  mounted() {
    this.getTask();
  },
  methods: {
    async taskPost() {

      // eslint-disable-next-line no-unused-vars
      const Time = new Date().toLocaleDateString();
      let newTask = {
        taskId: this.getData.length + 1,
        submittedTime: Time,
        content: this.title,
        finished: 0,
        userId: 1,
        codeType: this.lang,
      }
      const response = await axios.post('http://localhost:9090/task/auth/add', newTask);
      console.log('Data saved', response.data.message);
      this.goForum();
    },
    getTask(){
      // eslint-disable-next-line no-unused-vars
      axios.get("http://localhost:9090/task/auth/ask/list").then((response) => {
            this.getData = response.data.data;
            //console.log(this.getData);
          }
      );
    },
    goForum() {
      this.$router.push("/forum");
    }
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
</style>
