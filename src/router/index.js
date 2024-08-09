import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import('@/view/loginPage'),
  },
  {
    path: '/layout',
    redirect: '/layout/test',
    meta: {
      title: '主体',
    },
    component: () => import('@/view/layout'),
    children: [
      {
        path: '/layout/test',
        meta: {
          title: '测试',
        },
        component: () => import('@/view/testPage'),
      },
    ],
  },
  {
    path: '/tailwindcss_test',
    meta: {
      title: 'tailwindcss测试',
    },
    component: () => import('@/view/tailwindcss_test'),
  },
]

let router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
