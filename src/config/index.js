/* 
 *环境配置
 */
// const env = import.meta.env.MODE || 'prod';
const env = process.env.NODE_ENV;
console.log('env',env)
const EnvConfig = {
    development: {
        baseApi: '/test',
        mockApi: 'https://www.fastmock.site/mock/0f849fac2bea76617f56addc773b86e5/blog' 
    },
    production: {
        baseApi: 'http://apis.jsykaj.com'
    }
}

export default {
    env,
    namespace: '_blog',
    mock: false,
    ...EnvConfig[env]
}