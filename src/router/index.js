import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticlesView from '../views/ArticlesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/calculator',
    name: 'CalculatorView',
    component: () => import('../views/CalculatorView.vue')
  },
  {
    path: '/portfolio',
    name: 'PortfolioView',
    component: () => import('../views/PortfolioView.vue')
  },
  {
    path: '/articles',
    name: 'ArticlesView',
    component: ArticlesView,
    children: [
      { 
          path: ':page',
          component: ArticlesView,
          props: true
      }
  ]
  },

  {
    path: '/appointment',
    name: 'AppointmentView',
    component: () => import('../views/AppointmentView.vue')
  },
  {
    path: '/haircuts',
    name: 'HaircutsView',
    component: () => import('../views/HaircutsView.vue')
  },
  {
    path: '/haircoloring',
    name: 'HairColoringView',
    component: () => import('../views/HairColoringView.vue')
  },
  {
    path: '/procedures',
    name: 'ProceduresView',
    component: () => import('../views/ProceduresView.vue')
  },
  {
    path: '/SingleArticle',
    name: 'SingleArticleView',
    component: () => import('../views/SingleArticleView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    // name: "Component404Page",
    component: () => import('../views/ErrorPage404.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
})

export default router
