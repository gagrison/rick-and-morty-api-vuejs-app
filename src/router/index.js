import Vue from 'vue';
import VueRouter from 'vue-router';
import Characters from '@/views/Characters.vue';
import Locations from '@/views/Locations.vue';
import Episodes from '@/views/Episodes.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Characters',
      query: {
        page: 1
      }
    }
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters,
    props: (route) => ({ page: Number(route.query.page) })
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Locations,
    props: (route) => ({ page: Number(route.query.page) })
  },
  {
    path: '/episodes',
    name: 'Episodes',
    component: Episodes,
    props: (route) => ({ page: Number(route.query.page) })
  }
];

const router = new VueRouter({
  routes
});

export default router;
