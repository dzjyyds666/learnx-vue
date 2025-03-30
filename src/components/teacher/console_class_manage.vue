<template>
  <div class="class_manage_1">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="class_manage_1_header">
      <el-tab-pane label="课程信息" name="classInfo">
        <div class="class_info_body">
          <div class="class_cover">
            <img src="../../assets/img/avatar.jpeg" alt="课程封面" class="class_cover_img" />
            <div style="color: var(--gray-text); text-align: center; margin-top: 20px">
              课程封面
            </div>
          </div>
          <div style="width: 2%"></div>
          <div class="class_info">
            <div>
              <div>课程名称：</div>
              <div>golang</div>
            </div>
            <div>
              <div>课程类型：</div>
              <div>公开课</div>
            </div>
            <div>
              <div>课程学分：</div>
              <div>3</div>
            </div>
            <div>
              <div>课程学期：</div>
              <div>2023-2024学年第一学期</div>
            </div>
            <div>
              <div>课程学时：</div>
              <span>48</span>
            </div>
            <div>
              <div>课程学院：</div>
              <div>计算机科学与工程学院</div>
            </div>
            <div>
              <div>课程简介：</div>
              <div>
                golang是一个开源的编程语言，由Google开发，用于构建安全、可靠、高效的分布式系统。golang是一个开源的编程语言，由Google开发，用于构建安全、可靠、高效的分布式系统golang是一个开源的编程语言，由Google开发，用于构建安全、可靠、高效的分布式系统golang是一个开源的编程语言，由Google开发，用于构建安全、可靠、高效的分布式系统
              </div>
            </div>
            <div>
              <div>课程大纲：</div>
              <div>
                <!-- TODO文件形式 -->
                <span style="margin-right: 20px">文件名</span>
                <el-button
                  round
                  style="background-color: var(--primary-color); color: var(--light-text)"
                  >下载</el-button
                >
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="修改信息" name="editInfo">
        <div class="class_info_edit">
          <div class="class_cover">
            <img src="../../assets/img/avatar.jpeg" alt="课程封面" class="class_cover_img" />
            <div style="color: var(--gray-text); text-align: center; margin-top: 20px">
              点击封面图片修改课程封面，图片最大不超过5MB
            </div>
          </div>
          <div style="width: 5%"></div>
          <div class="class_edit_form">
            <el-form :model="editClassInfo" label-width="auto">
              <el-form-item label="课程名称">
                <el-input v-model="editClassInfo.class_name" placeholder="请输入课程名称" />
              </el-form-item>
              <el-form-item label="课程学时">
                <el-input
                  v-model="editClassInfo.class_time"
                  placeholder="请输入课程学时"
                ></el-input>
              </el-form-item>
              <el-form-item label="课程分类">
                <el-select v-model="editClassInfo.class_type" placeholder="请选择课程分类">
                  <el-option label="必修课" value="必修课"></el-option>
                  <el-option label="选修课" value="选修课"></el-option>
                  <el-option label="实践课" value="实践课"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="课程学分">
                <el-select v-model="editClassInfo.class_score" placeholder="请选择课程学分">
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
              <el-form-item label="课程学院">
                <el-input
                  v-model="editClassInfo.class_college"
                  placeholder="请输入课程学院"
                ></el-input>
              </el-form-item>
              <el-form-item label="课程简介">
                <el-mention
                  v-model="editClassInfo.class_desc"
                  type="textarea"
                  placeholder="请输入课程的简介"
                  rows="4"
                />
              </el-form-item>
              <el-form-item>
                <el-button style="margin-left: auto" round>重置</el-button>
                <el-button
                  round
                  style="
                    background-color: var(--primary-color);
                    color: var(--light-text);
                    margin-right: 30px;
                  "
                >
                  修改
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeName = ref('classInfo')

const editClassInfo = ref({
  class_name: '',
  class_desc: '',
  class_type: '',
  class_score: '',
  class_time: '',
  class_college: '',
})
</script>

<style lang="scss" scoped>
.class_manage_1 {
  width: 85vw;
  height: 90vh;
  .class_manage_1_header {
    margin: 10px;
    .class_info_body {
      display: flex;
      .class_cover {
        width: 25%;
        height: 100%;
        .class_cover_img {
          width: 100%;
          height: 25%;
          border-radius: 10px;
        }
      }
      .class_info {
        width: 72%;
        div {
          margin-bottom: 10px;
          display: flex;
          > div:first-child {
            color: var(--gray-text);
            white-space: nowrap;
          }
          > div:last-child {
            // 行间距
          }
        }
      }
    }
    .class_info_edit {
      display: flex;
      .class_cover {
        width: 25%;
        height: 100%;
        .class_cover_img {
          width: 100%;
          height: 25%;
          border-radius: 10px;
        }
      }

      .class_edit_form {
        width: 70%;
      }
    }
  }
}
</style>
