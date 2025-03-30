<template>
  <div class="classAdd">
    <div class="classAdd_title">
      <span class="classAdd_title_text">添加课程</span>
    </div>
    <el-form label-position="right" :model="classInfo" label-width="100px" class="classAdd_form">
      <el-form-item label="课程名:">
        <el-input v-model="classInfo.class_name" placeholder="请输入课程名"></el-input>
      </el-form-item>
      <el-form-item label="课程类型:">
        <el-select v-model="classInfo.class_type" placeholder="请选择课程类型">
          <el-option label="必修课" value="必修课"></el-option>
          <el-option label="选修课" value="选修课"></el-option>
          <el-option label="实践课" value="实践课"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="课程学分:">
        <el-select v-model="classInfo.class_score" placeholder="请选择课程学分">
          <el-option label="0.5" value="0.5"></el-option>
          <el-option label="1" value="1"></el-option>
          <el-option label="1.5" value="1.5"></el-option>
          <el-option label="2" value="2"></el-option>
          <el-option label="2.5" value="2.5"></el-option>
          <el-option label="3" value="3"></el-option>
          <el-option label="3.5" value="3.5"></el-option>
          <el-option label="4" value="4"></el-option>
          <el-option label="4.5" value="4.5"></el-option>
          <el-option label="5" value="5"></el-option>
          <el-option label="5.5" value="5.5"></el-option>
          <el-option label="6" value="6"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="课程学期:">
        <el-date-picker v-model="startYear" type="year" placeholder="选择开始学年" />
        <span style="margin: 0 10px; color: var(--gray-text)"> -> </span>
        <el-date-picker v-model="endYear" type="year" placeholder="选择结束学年" />
        <span style="width: 200px; margin-left: 30px"
          ><el-input clearable placeholder="输入学期" v-model="studyTerm"></el-input
        ></span>
      </el-form-item>
      <el-form-item label="课程学时:">
        <el-input v-model="classInfo.class_time" placeholder="请输入课程学时"></el-input>
      </el-form-item>

      <el-form-item label="课程学院:">
        <el-input v-model="classInfo.class_college" placeholder="请输入课程学院"></el-input>
      </el-form-item>
      <el-form-item label="课程简介:">
        <el-mention
          v-model="classInfo.class_desc"
          type="textarea"
          placeholder="请输入课程的简介"
          rows="4"
        />
      </el-form-item>
      <el-form-item label="课程大纲:">
        <!-- TODO上传课程大纲 -->
        <el-button round>上传</el-button>
      </el-form-item>
      <el-form-item>
        <el-button
          style="background-color: var(--primary-color); color: var(--light-text)"
          size="large"
          round
          @click="dialogVisible = true"
          >创建</el-button
        >
        <el-button size="large" round @click="resetClassInfo">重置</el-button>
      </el-form-item>
    </el-form>

    <el-dialog v-model="dialogVisible" align-center width="30%">
      <template #title>
        <span>创建课程</span>
      </template>
      <span>是否要创建课程？</span>
      <template #footer>
        <el-button @click="dialogVisible = false" round>取消</el-button>
        <el-button
          style="background-color: var(--primary-color); color: var(--light-text)"
          @click="handleCreateClass(classInfo)"
          round
          >确定</el-button
        >
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const classInfo = ref({
  class_name: '',
  class_desc: '',
  class_type: '',
  class_score: '',
  class_time: '',
  class_college: '',
  class_school_term: '',
  class_outline: '',
})

const startYear = ref('')
const endYear = ref('')
const studyTerm = ref('')

const dialogVisible = ref(false)

const handleCreateClass = (classInfo) => {
  classInfo.value.class_school_term = `${startYear.value}-${endYear.value} ${studyTerm.value}`
  console.log('创建课程', classInfo.value)
}

const resetClassInfo = () => {
  classInfo.value = {
    class_name: '',
    class_desc: '',
    class_type: '',
    class_score: '',
    class_time: '',
    class_college: '',
    class_school_term: '',
    class_outline: '',
  }
}
</script>

<style lang="scss" scoped>
.classAdd {
  background-color: var(--light-background);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .classAdd_title {
    margin: 50px 0 0 0;
    text-align: center;
    width: 100%;
    font-size: 2rem;
    color: var(--primary-color);
  }
  .classAdd_form {
    margin-top: 30px;
    width: 70%;
  }
}
</style>
