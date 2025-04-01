import { request } from './request.js'

const path = {
  applyUpload: '/cos/upload/apply',
  uploadSingleFile: '/cos/upload/single/',
  uploadPartInit: '/cos//upload/init',
  uploadPart: '/upload/multi',
}

export default {
  ApplyUpload(data) {
    return request({
      method: 'post',
      url: path.applyUpload,
      data: data,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  uploadSingleFile(fid, data) {
    return request({
      method: 'post',
      url: path.uploadSingleFile + fid,
      data: data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
  // 初始化分片上传
  uploadPartInit(data) {
    return request({
      method: 'post',
      url: path.uploadPartInit,
      data: data,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  uploadPart(fid, data) {
    return request({
      method: 'post',
      url: path.uploadPartInit + fid,
      data: data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
}
