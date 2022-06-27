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
    meta: {
      title: '主体',
    },
    component: () => import('@/view/layout'),
  },
  {
    path: '/test',
    meta: {
      title: '测试',
    },
    component: () => import('@/view/testPage'),
  },
]

let router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
