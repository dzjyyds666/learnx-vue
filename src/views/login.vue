<template>
  <div class="login-container">
    <div
      style="display: flex; width: 100%; height: 100%; align-items: center; justify-content: center"
    >
      <span class="span-left">
        <img src="../assets/img/空状态.png" alt="" width="60%" height="60%" />
      </span>
      <span class="span-right">
        <el-card class="login-card">
          <h2 class="login-title">欢迎登录:)</h2>
          <el-form :model="form" :rules="rules" ref="loginFormRef" label-width="80px">
            <!-- 用户名 -->
            <el-form-item label="账号" prop="account">
              <el-input v-model="form.account" placeholder="请输入用户名" clearable />
            </el-form-item>
            <!-- 密码 -->
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="form.password"
                type="password"
                placeholder="请输入密码"
                show-password
                clearable
              />
            </el-form-item>
            <!-- 登录按钮 -->
            <el-form-item>
              <el-button type="primary" class="login-btn" @click="handleLogin">登录</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import userApi from '../api/user.js'
import { useRouter } from 'vue-router'

const form = ref({
  account: '',
  password: '',
})

const loginFormRef = ref(null)

const rules = {
  account: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
}

const router = useRouter()

const handleLogin = () => {
  loginFormRef.value.validate((valid) => {
    if (valid) {
      userApi.Login(form.value).then((res) => {
        if (res.status_code == 200) {
          // 把token存入localStorage
          ElMessage({ message: '登录成功', type: 'success' })
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('role', res.data.role)
          // 跳转到首页
          router.push({ path: '/' })
        } else {
          // 登录失败
          ElMessage({ message: '登录失败', type: 'error' })
        }
      })
    } else {
      ElMessage({ message: '请填写完整信息', type: 'warning' })
    }
  })
}
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #7b1fa2, #512da8);
}

.span-left {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.span-right {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  width: 75%;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.login-title {
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.login-btn {
  width: 100%;
}

.extra-links {
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #7b1fa2;
}

.extra-links a {
  color: inherit;
  text-decoration: none;
}

.extra-links span {
  margin: 0 8px;
  color: #888;
}
</style>
