
const components = {
    headline: () => import('./headline/headline.vue'),
    myButton: () => import('./myButton/myButton.vue'),
    dateView: () => import('./dateView/dateView.vue'),
    moreBtn: () => import('./moreBtn/moreBtn.vue'),
    card: () => import('./card/card.vue'),
}

export default {
    install: function (Vue) {
        for (const key in components) {
            Vue.component(key, components[key])
        }
    }
}