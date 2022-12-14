type RequestMethod = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'| undefined

const BASE_URL = 'https://mock.apifox.cn/m1/1646135-0-default'

type ErrorResponse = {
  code: number;
  message: string;
};

const request = <T>(method: RequestMethod, uri: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    wx.request({
      method,
      url: BASE_URL + uri,
      success: (response) => {
        response.statusCode !== 200 && reject(response.data as ErrorResponse)
        resolve(response.data as T)
      },
      fail: (error) => {
        reject({ code: 500, message: error.errMsg })
      }

    })
  }

  )
}

export default request



