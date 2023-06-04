import { makeAutoObservable } from 'mobx'

export default class MasterStore {
  constructor() {
    this._isAuth = false
    this._master = {}
    makeAutoObservable(this)
  }

  setAuth(bool) {
    this._isAuth = bool
  }

  setMaster(value) {
    this._master = value
  }

  get isAuth() {
    return this._isAuth
  }

  get master() {
    return this._master
  }
}
