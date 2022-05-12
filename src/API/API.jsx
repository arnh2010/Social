import * as axios from "axios"
import React from "react"

const instance = axios.create(
  {
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "bbc049c5-60df-4119-be10-b4024f8dc7d2" }
  })

export const HeaderAPI = {
  getUserProfile(userId) {
    console.log('нужна другая фция')
    return ProfileAPI.getUserProfile(userId)
     },

  getUsers(pageSize, currentPage) {
    return instance.get(`users?count=${pageSize}&page=${currentPage}`)
      .then(Response => {
        return (Response.data)
      }
      )
  },

  postFollow(userId) {
    return instance.post(`/follow/${userId}`)
      .then(Response => {
        return (Response.data)
      }
      )
  },

  deleteFollow(userId) {
    return instance.delete(`/follow/${userId}`)
      .then(Response => {
        return (Response.data)
      }
      )
  }
}

export const ProfileAPI = {
  getUserProfile(userId) {
    return instance.get('profile/' + userId)
      .then(Response => {
        return (Response.data)
      }
      )
  },
  getUserStatus(userId) {
    return instance.get('profile/status/' + userId)
      .then(Response => {
        return (Response.data)
      }
      )
  },
  putUserStatus(status) {
    return instance.put('profile/status/',{status:status})
  }
}

export const AuthAPI = {
  postLogin(email,password,rememberMe) {
    return instance.post('auth/login/',{email:email,password:password,rememberMe:rememberMe} )
      .then(Response => {
        return (Response.data)
      }
      )
  },

  deleteLogin() {
    return instance.delete('auth/login/')
    .then(Response => {
      return (Response.data)
    }
    )
},
  
  getAuth() {
    return instance.get('auth/me')
    .then(Response =>{
      if (Response.data.resultCode === 0) {
        return (Response.data.data)}})
        }
}

