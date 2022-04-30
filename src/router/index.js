import { defineAsyncComponent } from 'vue' ;
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'
const BlogPost   = defineAsyncComponent(() => import('../views/BlogPost.vue'));
const createBlog = defineAsyncComponent(() => import('../views/CreatePost.vue'));

const routes = [
  { path: '/', name: 'home',component: HomeView },
  { path:'/blog',name:'blog',component:BlogPost },
  { path:'/create-blog',name:'createblog',component:createBlog },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
