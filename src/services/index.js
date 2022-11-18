import MyRequest from "./request";
import { BASE_URL, TIMEOUT } from "./config";


const request = new MyRequest({
  timeout: TIMEOUT,
  baseURL: BASE_URL
})


export default request
export * from './modules/home'
