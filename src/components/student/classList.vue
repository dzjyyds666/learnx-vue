<template>
  <div class="student_class">
    <div class="student_class_card">
      <el-card @click="$router.push('/student/class_info')">
        <template #header>
          <div class="card_header">
            <span>golang</span>
            <el-button style="float: right" type="text" @click.stop="openClassInfoDrawer"
              >查看详情</el-button
            >
          </div>
        </template>
        <img
          src="../../assets/img/avatar.jpeg"
          style="border-radius: 10px"
          alt="课程封面"
          width="100%"
        />
        <template #footer>
          <el-tag type="success">更新中</el-tag>
        </template>
      </el-card>
    </div>
    <el-drawer v-model="drawer" title="课程信息" direction="rtl" class="classList_drawer">
      <div class="div_item">
        <div>课程名称：</div>
        <div>golang</div>
      </div>
      <div class="div_item">
        <div>所属学院：</div>
        <div>计算机科学与工程学院</div>
      </div>
      <div class="div_item">
        <div>所属学期：</div>
        <div>2023-2024学年第一学期</div>
      </div>
      <div class="div_item">
        <div>课程类型：</div>
        <div>计算机科学与技术</div>
      </div>
      <div class="div_item">
        <div>课程学分：</div>
        <div>3</div>
      </div>
      <div class="div_item">
        <div>课程简介：</div>
        <div>golang是一个开源的编程语言，由Google开发，用于构建安全、可靠、高效的分布式系统。</div>
      </div>
      <div class="div_item">
        <div>课程目标：</div>
        <div>掌握golang的基本语法和编程思想</div>
      </div>
      <div class="div_item">
        <div>课程大纲：</div>
        <!-- TODO 课程大纲文件形式展示 -->
        <div>golang课程大纲</div>
      </div>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const openClassInfoDrawer = () => {
  drawer.value = true
}
</script>

<style lang="scss" scoped>
.student_class {
  .student_class_card {
    padding: 20px;
    width: 20%;
  }

  .classList_drawer {
    width: 50%;
    height: 100%;
    .div_item {
      display: flex;
      margin-bottom: 10px;
      font-size: 16px;
      color: var(--text-color);
      > div:first-child {
        white-space: nowrap;
        color: var(--gray-text);
      }
    }
  }
}
</style>
