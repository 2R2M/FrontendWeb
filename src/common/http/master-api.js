import { useContext } from 'react'
import { Context } from '../../index'
import { $authHost, $host } from './index'

import jwtDecode from 'jwt-decode'

export const registration = async (email, password) => {
  const data = await $host.post('api/registration', {
    email,
    password,
  })
  localStorage.setItem('token', data.data.token)

  return jwtDecode(data.data.token)
}

export const login = async (email, password) => {
  const data = await $host.post('/token', {
    email,
    password,
  })
  localStorage.setItem('token', data.data.token)

  return jwtDecode(data.data.token)
}
 
export const check = async (master) => {
    await $host.get("/validateToken").then((res) => {
    master.setMaster(jwtDecode(res.data.token))
    master.setAuth(true)
    console.log('пенис')
    localStorage.setItem('token', res.data.token)
  });

}
