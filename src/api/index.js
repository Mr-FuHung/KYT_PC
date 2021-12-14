import $ajax from '@/utils/ajax'

export default {
    //获取文章分类
    getArticleClassify: () => $ajax({
        url: '/articleClassify/all/list.ajax'
    })
}