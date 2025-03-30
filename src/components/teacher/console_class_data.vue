<template>
  <div class="class_data">
    <div class="class_data_header">
      <el-input
        v-model="account"
        clearable
        style="width: 240px"
        size="large"
        placeholder="输入学号搜索"
      >
        <template #prefix>
          <el-icon><Search /></el-icon>
        </template>
      </el-input>
      <el-button type="primary" size="large" @click="searchStudent" style="margin-left: 10px"
        >搜索</el-button
      >
    </div>

    <el-table :data="currentData" stripe style="width: 100%">
      <el-table-column prop="id" label="学号" width="180" />
      <el-table-column prop="name" label="名字" width="180" />
      <el-table-column prop="collage" label="学院" width="180" />
      <el-table-column prop="profession" label="专业" width="180" />
      <el-table-column prop="class" label="学习时长" width="180" />
      <el-table-column prop="score" label="资源下载次数" />
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tableData = ref([
  {
    id: '2018000001',
    name: '张三',
    collage: '计算机科学与技术',
    profession: '计算机科学与技术',
    class: '1h',
    score: '1次',
  },
  {
    id: '2018000002',
    name: '李四',
    collage: '计算机科学与技术',
    profession: '计算机科学与技术',
    class: '1h',
    score: '1次',
  },
])

const account = ref('')

const currentData = ref(tableData.value)

const searchStudent = () => {
  if (account.value === '') {
    currentData.value = tableData.value
    return
  }
  currentData.value = tableData.value.filter((item) => {
    return item.id.includes(account.value)
  })
}
</script>

<style lang="scss" scoped>
.class_data {
  .class_data_header {
    margin: 10px;
  }
}
</style>
