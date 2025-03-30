import { request } from './request.js'

const path = {
  applyUpload: '/cos/upload/apply',
  uploadSingleFile: '/upload/single/',
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
}
