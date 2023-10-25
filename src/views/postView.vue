/* eslint-disable */
<template >
<div class="mainBox">
  <div>
    <el-container class="UpContainer">
      <img src="@/assets/logo.png" alt="" style = "width:1000px">
    </el-container>
  </div>
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
            :total="this.data.length"
        >
        </el-pagination>
      </div>

      <el-container v-for="post in posts" :key="post.id" style="width: 100%;margin: auto;">
        <el-header height="20px" style="background-color: azure;"> </el-header>
        <el-container>
          <el-aside  width="250px" class="postAside">
            <img src="@/assets/User.jpg" alt="" style = "width: 50%;border: 2px solid white;margin-top: 20px">
            <div class="username">{{ post.userId }}</div>
          </el-aside>
          <el-main  style="background-color: white;border: 2px solid #000000">
            <div style="border-bottom: 2px dashed black;height: 2vh;text-align: left;display: flex;align-items: center;justify-content: space-between">
                Published: {{ post.date }}
                <h4 v-if="post.adopt" style="margin-bottom: 15px">Adopted Answer</h4>
                <el-button size="small" style="margin-bottom: 15px" v-if="isLandlord && noAdoption" @click="adoptClick(post.id)">Adopt</el-button>
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
            <el-button type="primary" style="float: left" @click="newPost">Post</el-button>
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
      landLordPost:{ id: 1, date: "2023-10-25", userId: "User1", content: "This is a sample post!",adopt:false },
      adoptPost:{ id: 0, date: " ", userId: " ", content: " ",adopt:true, },
      data: [
        { id: 3, date: "2023-10-25", userId: "User3", content: "This is a sample post!",adopt:false, },
        { id: 4, date: "2023-10-25", userId: "User4", content: "This is a sample post!",adopt:false, },

        // ... add other posts
      ],
      textarea: '',
      currentPage : 1,
      itemsPerPage: 5,
      userId:'Me',
      total: 0,
      isLandlord:true,
      noAdoption:true,
    }
  },
  computed:{
    posts(){
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.data.slice(start, end);
    }
  },
  mounted() {
    this.data.unshift(this.landLordPost);
  },
  methods:{
    goBack(){
      this.$router.push("/forum");
    },
    handlePageChange(page) {
      this.currentPage = page;
    },
    goToLastPage() {
      const finalPage = Math.ceil(this.data.length / this.itemsPerPage);
      this.currentPage = finalPage;
    },
    newPost(){
      let Text = this.textarea;
      let newData = {
        id: this.data.length + 1,
        date:'2023-10-25',
        userId:this.userId,
        content: Text,
        adopt: false
      }
      this.data.push(newData);
      // console.log(this.data);
      this.textarea = '';
      this.goToLastPage();

    },
    // eslint-disable-next-line no-unused-vars
    adoptClick(id){
      console.log(id);
      /* eslint-disable */
      this.data.forEach((row,index)=>{
        if(row.id == id){
          console.log(row.content);
          this.adoptPost = {...row}
          console.log(this.adoptPost.content);
        }
      });
    }
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
