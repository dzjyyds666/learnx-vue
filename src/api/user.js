import '../api/request.js'
import { request } from '../api/request.js'

const path = {
  login: '/user/signin',
}

export default {
  Login(data) {
    return request({
      method: 'post',
      url: path.login,
      data: data,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
}
