import { createRouter, createWebHistory } from 'vue-router'
import Products from "@/views/Products.vue";
import Comparator from "@/views/Comparator.vue";
import ProductDetails from "@/views/ProductDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/comparator',
      name: 'Comparator',
      component: Comparator
    },
    {
      path: '/details/:id',
      name: 'ProductDetails',
      component: ProductDetails,
      props : true
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.body.classList.add('page-transition');
  next();
});

router.afterEach(() => {
  document.body.classList.remove('page-transition');
});

export default router
