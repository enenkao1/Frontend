<template >
<div style="height: 150vh;background-color: gray">
  <div>
    <el-container class="UpContainer">
      <img src="@/assets/logo.png" alt="" style = "width:1000px">
    </el-container>
  </div>
  <div class="insideBox">
    <div style="flex: 1">
      <div style="height: 5vh;display: flex;align-items: center">
        <div size="small" style="flex: 1">
          <el-button size="small" style="float: left;margin-left: 30px" @click = "goBack">back</el-button>
        </div>
        <el-pagination
            style="float: right;"
            small
            layout="prev, pager, next"
            :total="30"
        >
        </el-pagination>
      </div>

      <el-container style="width: 100%;margin: auto;">
        <el-header height="20px" style="background-color: azure;"> </el-header>
        <el-container>
          <el-aside  width="250px" class="postAside">
            <img src="@/assets/User.jpg" alt="" style = "width: 50%;border: 2px solid white;margin-top: 20px">
            <div class="username">Username</div>
          </el-aside>
          <el-main  style="background-color: white;border: 2px solid #000000">
            <div style="border-bottom: 2px dashed black;height: 2vh;text-align: left">
              Published: Today
            </div>
            <div style="text-align: left;margin-top: 20px">
              Content
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
                placeholder="请输入内容"
                v-model="textarea"
                style="border: 3px solid black;margin-bottom: 20px">
            </el-input>
            <el-button type="primary" style="float: left">Post</el-button>
          </div>
        </el-main>
      </el-container>


  </div>

</div>
</template>

<script>
export default {
  name: "postView",
  data() {
    return {
      textarea: ''
    }
  },
  methods:{
    goBack(){
      this.$router.push("/forum");
    }
  }
}
</script>

<style scoped>
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
  height: 130vh;
  background-color: white;
  display: flex;
  flex-direction: column;
}
.replyInput{
  flex:0;
  width: 100%;
  align-self: center;

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
