<template>
  <div class="class_student">
    <div class="class_student_header">
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
      <el-input
        v-model="newAccount"
        style="width: 240px; margin-left: 20px"
        size="large"
        placeholder="输入学号添加学生"
      ></el-input>
      <el-button type="primary" size="large" @click="searchStudent" style="margin-left: 10px"
        >添加</el-button
      >

      <el-button type="primary" size="large" @click="importStudent" style="margin-left: 20px"
        >从文件导入</el-button
      >
    </div>
    <el-table :data="currentData" stripe style="width: 100%">
      <el-table-column prop="id" label="学号" width="180" />
      <el-table-column prop="name" label="名字" width="250" />
      <el-table-column prop="collage" label="学院" width="250" />
      <el-table-column prop="profession" label="专业" />
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tableData = ref([
  {
    id: '001',
    name: '张三',
    collage: '计算机科学与技术',
    profession: '计算机科学与技术',
  },
  {
    id: '002',
    name: '李四',
    collage: '计算机科学与技术',
    profession: '计算机科学与技术',
  },
  {
    id: '003',
    name: '王五',
    collage: '计算机科学与技术',
    profession: '计算机科学与技术',
  },
])

const account = ref('')

const newAccount = ref('')

const currentData = ref(tableData.value)

const importStudent = () => {
  console.log('导入')
}

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
.class_student {
  .class_student_header {
    margin: 10px;
  }
}
</style>
