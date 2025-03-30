<template>
  <div class="classList">
    <el-card
      class="box-card classList_item"
      v-for="item in 10"
      :key="item"
      @click="$router.push('/teacher/class_manage')"
    >
      <template #header>
        <div>
          <span>课程名称</span>
          <el-button style="float: right" type="text" @click.stop="openClassInfoDrawer"
            >查看详情</el-button
          >
        </div>
      </template>
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        style="width: 100%"
        alt="课程图片"
      />
      <template #footer>
        <el-tag v-for="tag in ['已归档']" :key="tag" size="small">{{ tag }}</el-tag>
      </template>
    </el-card>

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
      <template #footer>
        <div style="flex: auto">
          <el-button @click="moveClassToCrash" style="color: red" size="large" round
            >移入回收箱</el-button
          >
          <el-button
            style="background-color: var(--primary-color); color: var(--light-text)"
            @click="copyClass"
            size="large"
            round
            >复制课程</el-button
          >
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const drawer = ref(false)

const openClassInfoDrawer = () => {
  drawer.value = true
}

const moveClassToCrash = () => {
  // TODO 删除课程
  console.log('删除课程')
}

const copyClass = () => {
  // TODO 复制课程
  console.log('复制课程')
}
</script>

<style lang="scss" scoped>
.classList {
  display: flex;
  flex-wrap: wrap;
  .classList_item {
    width: 22%;
    height: 20%;
    margin: 1%;
    .classList_item_tag {
      position: relative;
      bottom: 0;
      left: 0;
      right: 0;
    }
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
