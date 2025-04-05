<template>
  <div class="file_upload" :style="{ width: props.width, height: props.height }">
    <div class="upload_header"></div>
    <input type="file" @change="handleFileSelect" ref="fileInput" style="display: none" />
    <div class="upload_content" @click="triggerFileInput" @dragover.prevent @drop="handleDrop">
      <!-- 原生文件选择 -->
      <img src="../../assets/img/upload_to_cload.png" alt="" width="50px" />
      <p>点击或者拖动文件上传</p>
    </div>
    <div class="upload_footer">
      <el-text line-clamp="1">{{ file != null ? file.name : null }}</el-text>
      <el-button @click="startUpload" type="primary" :disabled="!file || uploading"
        >开始上传</el-button
      >
      <el-button @click="cancelUpload" :disabled="!uploading">取消上传</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import cosApi from '@/api/cos'

const props = defineProps({
  width: {
    type: String,
    default: '200px',
  },
  height: {
    type: String,
    default: '200px',
  },
})

// 常量
const CHUNK_SIZE = 200 * 1024 * 1024 // 200MB

const fileInput = ref(null)
// 响应式数据
const file = ref(null)
const uploading = ref(false)
const progress = ref(0)
const controller = ref(null) // 用于取消请求

const triggerFileInput = () => {
  fileInput.value.click()
}

const handleDrop = (e) => {
  e.preventDefault()
  const droppedFile = e.dataTransfer.files[0]
  if (droppedFile) {
    file.value = droppedFile
  }
}

// 文件选择处理
const handleFileSelect = (e) => {
  const selectedFile = e.target.files[0]
  if (!selectedFile) return

  file.value = selectedFile
  progress.value = 0
}

const startUpload = async () => {
  if (!file.value || uploading.value) {
    ElMessage.warning('文件为空')
    return
  }
  //申请上传
  var data = await applyUpload()

  if (data == null) {
    return
  }

  //判断file的大小，大文件分片，小文件直接上传
  if (file.value.size > CHUNK_SIZE) {
    uploadPart()
  } else {
    // 小文件直接上传
    uplaodSingle(data.fid)
  }
}

// 申请文件上传
const applyUpload = async () => {
  if (!file.value || uploading.value) return
  var file_name = file.value.name
  var file_size = file.value.size
  var file_type = file.value.type
  try {
    var res = await cosApi.ApplyUpload({
      file_name: file_name,
      file_size: file_size,
      file_type: file_type,
    })

    if (res.status_code == 200) {
      // 上传成功
      console.log(res.data)
      return res.data
    } else {
      ElMessage.error('申请上传失败')
    }
  } catch (err) {
    ElMessage.error('申请上传失败')
  }
  return null
}

// 单文件上传
const uplaodSingle = async (fid) => {
  if (!file.value || uploading.value) return

  console.log('开始上传', fid)
  uploading.value = true
  controller.value = new AbortController()

  try {
    const formData = new FormData()
    formData.append('file', file.value)
    var res = await cosApi.uploadSingleFile(fid, formData)
    if (res.status_code == 200) {
      ElMessage.success('上传成功')
      uploading.value = false
      controller.value = null
      console.log(res.data)
    } else {
      console.log(res)
      ElMessage.error('上传失败')
    }
  } catch (e) {
    console.log(e)
    ElMessage.error('上传失败')
  }
}

const uploadInit = async () => {
  // 初始化上传
}

// 分片上传
const uploadPart = async () => {
  if (!file.value || uploading.value) return

  uploading.value = true
  controller.value = new AbortController()

  try {
    const chunks = createChunks(file.value)
    const totalChunks = chunks.length

    for (let index = 0; index < totalChunks; index++) {
      // 如果取消则终止循环
      if (!uploading.value) break

      const chunk = chunks[index]
      const formData = new FormData()
      formData.append('file', chunk)
      formData.append('filename', file.value.name)
      formData.append('chunkIndex', index)
      formData.append('totalChunks', totalChunks)

      await axios.post(UPLOAD_URL, formData, {
        signal: controller.value.signal,
        onUploadProgress: (progressEvent) => {
          // 计算当前分片进度对整体的贡献
          const chunkProgress = (progressEvent.loaded / progressEvent.total) * 100
          const totalProgress = (index / totalChunks) * 100 + chunkProgress / totalChunks
          progress.value = Math.min(totalProgress, 100)
        },
      })
    }

    if (uploading.value) {
      alert('上传成功!')
    }
  } catch (err) {
    if (axios.isCancel(err)) {
      console.log('上传已取消')
    } else {
      alert('上传失败: ' + err.message)
    }
  } finally {
    uploading.value = false
    controller.value = null
  }
}

// 创建文件分片
const createChunks = (file) => {
  const chunks = []
  let start = 0
  while (start < file.size) {
    const end = Math.min(start + CHUNK_SIZE, file.size)
    chunks.push(file.slice(start, end))
    start = end
  }
  return chunks
}

// 取消上传
const cancelUpload = () => {
  uploading.value = false
  if (controller.value) {
    controller.value.abort()
  }
}

// 格式化文件大小
const formatSize = (bytes) => {
  const units = ['B', 'KB', 'MB', 'GB']
  let unitIndex = 0
  while (bytes >= 1024 && unitIndex < units.length - 1) {
    bytes /= 1024
    unitIndex++
  }
  return `${bytes.toFixed(2)} ${units[unitIndex]}`
}
</script>

<style lang="scss" scoped>
.file_upload {
  // 居中
  margin: 0 auto;
  // 内部居中
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .upload_content {
    padding: 10px;
    border-radius: 20px;
    // 虚线边框
    border: 1px dashed black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      color: var(--gray-text);
    }
  }

  .upload_footer {
    margin-top: 10px;
  }
}
</style>
