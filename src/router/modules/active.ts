const Layout = () => import('../../Layout/index.vue')

export default {
    path: '/active',
    component: Layout,
    meta: {
        icon: 'iconfont icon-manage-order-fill',
        title: 'active',
    },
    children: [
        {
            path: '/activeConfig',
            component: () => import("@/views/active/index.vue"),
            meta: {
                title: '九宫格活动配置',
                icon: 'iconfont icon-upload',
            }
        }
    ]
}