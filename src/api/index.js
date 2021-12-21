import $ajax from '@/utils/ajax'

export default {
    //获取Banner图
    getBanner: data=> $ajax({
        url: '/api/Web/getAdv',
        method:'post',
        data
    }),
    //首页banner下 新闻-公告-认证-健康小课堂
    getIndexHot: data=> $ajax({
        url: '/api/Web/indexHot',
        method:'post',
        data
    }),
    //about 关于我们 lianxi 联系我们 join 加入我们
    getSetting: data=> $ajax({
        url: '/api/Web/indexHot',
        method:'post',
        data
    }),
}