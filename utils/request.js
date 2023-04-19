function request({ url, method, data }) {
    const BASE_URL = "https://api.imooc-blog.lgdsunday.club/api"
    return new Promise((resolve, reject) => {
        uni.request({
            url: BASE_URL + url,
            method,
            data,
            header: {
                // Authorization
            },
            success: (res) => {
                resolve(res)
            },
            fail: (err) => {
                reject(err)
            }
        })
    })

}
export default request


