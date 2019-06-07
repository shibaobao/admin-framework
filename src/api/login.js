import api from './index'
import axios from 'axios'

export function login (parameter) {
  return axios.post(api.Login, parameter)
}

export function getSmsCaptcha (parameter) {
  return axios.post(api.SendSms, parameter)
}

export function getUserInfo () {
  return axios.get(api.UserInfo)
}

export function logout () {
  return axios.post(api.Logout)
}
