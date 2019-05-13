import { post, get } from './helpers'

const getUserInfo = get('/user/info')

module.exports = {
  getUserInfo
}
