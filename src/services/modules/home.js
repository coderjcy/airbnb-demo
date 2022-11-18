import request from ".."

export function fetchHomeData() {
  return request.get({
    url: '/home/goodprice'
  })
}