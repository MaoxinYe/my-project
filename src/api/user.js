import request from '@/utils/request'

export function login(data) {
  console.log('login----------')
  return request({
    url: '/api/admin/login',
    method: 'post',
    data
  })
}

// export function login(username, password) {
//   console.log('login')
//   return axios.post(
//     '/api/admin/login',
//     data{}
//   )
// }

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
