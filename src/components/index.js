
const components = {
    headline: () => import('./headline/headline.vue')
}

export default {
    install: function (Vue) {
        for (const key in components) {
            Vue.component( key,components[key])
        }
    }
}