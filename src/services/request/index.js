import axios from 'axios'


class MyRequest {
  constructor(config) {
    this.instance = axios.create(config)
    this.instance.interceptors.response.use((res) => {
      return res.data
    }, (err) => {
      return err
    })
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: 'get' })
  }
  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}


export default MyRequest