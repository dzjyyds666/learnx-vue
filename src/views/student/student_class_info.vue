<template>
  <div class="student_class_info">
    <div class="class_info_header">
      <div class="header_back">
        <el-icon size="30" @click="$router.back"><ArrowLeftBold /></el-icon>
      </div>
      <div style="margin-left: 200px; display: flex; align-items: center">
        <img src="../../assets//img/avatar.jpeg" alt="课程封面" class="class_info_img" />
        <!-- 课程名称 -->
        <div>
          <div class="class_info_name">课程名：<span>golang</span></div>
          <div class="class_info_type">课程分类：<span>公开课</span></div>
        </div>
      </div>
    </div>

    <div class="class_info_content_header">
      <el-button
        type="text"
        @click="navIndex = 1"
        :style="{ color: navIndex === 1 ? '#6a0dad' : 'white' }"
        class="class_info_content_title"
        >学习资源</el-button
      >
      <el-button
        type="text"
        @click="navIndex = 2"
        :style="{ color: navIndex === 2 ? '#6a0dad' : 'white' }"
        class="class_info_content_title"
        >学习任务</el-button
      >
    </div>
    <div class="class_info_content_body">
      <div class="class_info_content_body_left">
        <div
          class="no_data"
          v-if="
            (chapterList.length === 0 && navIndex === 1) ||
            (navIndex === 2 && taskList.length === 0)
          "
        >
          <img src="../../assets/img/暂无数据.png" alt="暂无数据" width="200px" />
          <div style="color: var(--gray-text)">暂无数据</div>
        </div>
        <div v-if="navIndex === 1 && chapterList.length > 0">
          <classChapterList />
        </div>
        <div v-if="navIndex === 2 && taskList.length > 0">
          <classHomeWorkList />
        </div>
      </div>
      <div class="class_info_content_body_right">
        <div class="class_teacher_info">
          <el-avatar shape="circle" :size="50" :src="avatarUrl"></el-avatar>
          <div style="margin-top: 20px; font-size: larger; font-weight: 800">杜智军</div>
        </div>
        <div class="class_info_profile">
          <div
            style="
              font-weight: 900;
              font-size: 20px;
              border-left: 2px solid green;
              padding-left: 10px;
            "
          >
            课程介绍
          </div>
          <div style="margin-top: 30px; color: var(--gray-text)">所属学期</div>
          <div style="margin-top: 10px">2024-2025年第一学期</div>
          <div style="margin-top: 10px; color: var(--gray-text)">课程学时</div>
          <div style="margin-top: 10px; font-size: x-larger; font-weight: 900">48</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import classChapterList from '../../components/student/classResource.vue'
import classHomeWorkList from '../../components/student/classHomeWork.vue'
const navIndex = ref(1)

const avatarUrl = ref(
  'https://c-ssl.dtstatic.com/uploads/blog/202402/24/wgSJa9OLI97j3LP.thumb.300_0.png_webp',
)

const taskList = ref([{ name: '111' }])

const chapterList = ref([
  {
    name: '111',
  },
])
</script>

<style lang="scss" scoped>
.student_class_info {
  width: 100vw;
  background-color: var(--light-bg);

  .class_info_header {
    width: 100%;
    height: 40vh;
    // 渐变色
    background: linear-gradient(to bottom, var(--primary-color), var(--accent-color));
    padding: 20px;
    color: white;

    display: flex;
    align-items: center;

    .header_back {
      position: absolute;
      top: 20px;
      left: 20px;
      :hover {
        color: var(--accent-color);
      }
    }

    .class_info_img {
      width: 250px;
      height: 150px;
      border-radius: 20px;
    }

    .class_info_name {
      font-weight: 900;
      font-size: 30px;
      margin-left: 50px;
    }

    .class_info_type {
      margin-top: 10px;
      margin-left: 50px;
    }
  }

  .class_info_content_header {
    width: 100%;
    background-color: var(--accent-color);
    display: flex;
    justify-content: center;

    .class_info_content_title {
      // 鼠标显示箭头
      cursor: pointer;
      color: white;
      margin: 10px 50px;
      font-size: larger;
    }
  }

  .class_info_content_body {
    width: 70%;
    margin: 20px auto;
    display: flex;

    .class_info_content_body_left {
      border-radius: 20px;
      width: 65%;
      margin: 20px;
      min-height: 500px;
      background-color: white;

      .no_data {
        width: 100%;
        min-height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    }

    .class_info_content_body_right {
      width: 30%;
      margin: 20px;
      min-height: 500px;

      .class_teacher_info {
        width: 100%;
        height: 30vh;
        border-radius: 20px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      .class_info_profile {
        margin-top: 30px;
        max-width: 100%;
        border-radius: 20px;
        background-color: white;
        padding: 20px;
      }
    }
  }
}
</style>
