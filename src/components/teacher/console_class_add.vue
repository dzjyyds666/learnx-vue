<template>
  <div class="classAdd">
    <el-form label-position="right" :model="classInfo" label-width="100px" class="classAdd_form">
      <upload width="200px" height="200px"></upload>
      <el-form-item label="课程名:">
        <el-input v-model="classInfo.class_name" placeholder="请输入课程名"></el-input>
      </el-form-item>
      <el-form-item label="课程类型:">
        <el-select v-model="classInfo.class_type" placeholder="请选择课程类型">
          <el-option
            :label="item"
            :value="item"
            v-for="(item, index) in class_type_list"
            :key="index"
          ></el-option>
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
        <div style="display: flex">
          <el-select
            v-model="studyYear"
            placeholder="请选择课程学期"
            style="width: 400px; margin-right: 50px"
          >
            <el-option
              v-for="(item, index) in class_school_term"
              :key="index"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
          <el-select v-model="studyTerm" placeholder="请选择课程学期">
            <el-option label="第一学期" value="第一学期"></el-option>
            <el-option label="第二学期" value="第二学期"></el-option>
          </el-select>
        </div>
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
import upload from '../../components/common/upload.vue'
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

const class_type_list = ref(['公共基础课', '专业课', '院级选修课', '校级选修课'])
const class_school_term = ref([
  '2024-2025',
  '2025-2026',
  '2026-2027',
  '2027-2028',
  '2028-2029',
  '2029-2030',
  '2030-2031',
  '2031-2032',
  '2032-2033',
  '2033-2034',
  '2034-2035',
  '2035-2036',
  '2036-2037',
  '2037-2038',
  '2038-2039',
  '2039-2040',
  '2040-2041',
  '2041-2042',
  '2042-2043',
  '2043-2044',
  '2044-2045',
  '2045-2046',
  '2046-2047',
  '2047-2048',
  '2048-2049',
  '2049-2050',
])

const studyYear = ref('')
const studyTerm = ref('')

const dialogVisible = ref(false)

const handleCreateClass = () => {
  classInfo.value.class_school_term = `${studyYear.value}年${studyTerm.value}`
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .classAdd_title {
    margin: 20px;
    text-align: center;
    width: 100%;
    font-size: 1rem;
    color: var(--primary-color);
  }
  .classAdd_form {
    margin-top: 30px;
    width: 70%;
  }
}
</style>
