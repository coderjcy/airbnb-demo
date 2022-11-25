import request from ".."

export function fetchHomeData() {
  return request.get({
    url: '/home/goodprice'
  })
}
export function fetchHomeHighSocreData() {
  return request.get({
    url: '/home/highscore'
  })
}

export function fetchHomeDiscontData() {
  return request.get({
    url: '/home/discount'
  })
}
export function fetchRecommendData() {
  return request.get({
    url: '/home/hotrecommenddest'
  })
}
export function fetchLongForData() {
  return request.get({
    url: '/home/longfor'
  })
}
export function fetchHomePluseData() {
  return request.get({
    url: '/home/plus'
  })
}
