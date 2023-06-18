import { createRouter, createWebHistory } from 'vue-router'
import QuestionView from "../views/QuestionView.vue"
import FormDetail from "../views/FormDetail.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path:'/questionView',
      name:"QuestionView",
      component:QuestionView
    },
    {
      path:'//formDetail/:formId',
      name:"FormDetail",
      component:FormDetail
    }
  ]
})

export default router
