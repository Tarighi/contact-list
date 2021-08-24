import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../pages/Home'
import LoginPage from '../pages/Login'
import NotFound from '../pages/NotFound'

const routes = [
    { name: 'Home', path: '/Home', component: HomePage },
	{ name: 'Login', path: '/Login', component: LoginPage },
	// plan on directly navigating to the not-found route using its name
	{ path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
	// if you omit the last `*`, the `/` character in params will be encoded when resolving or pushing
	{ path: '/:pathMatch(.*)', name: 'bad-not-found', component: NotFound }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// router.resolve({
// 	name: 'not-found',
// 	params: { pathMatch: ['not', 'found'] }
//   }).href; // '/not/found'


router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/Login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  if (authRequired && !loggedIn) {
    return next('/Login');
  }

  next();
})

export default router;









// import VueRouter from 'vue-router'
// // import { createWebHistory, createRouter } from "vue-router";
// import HomePage from '../pages/Home'
// import LoginPage from '../pages/Login'

// const router = new VueRouter({
// 	mode: 'history',
//     routes: [
// 		{ name: 'Home', path: '/pages/Home', component: HomePage },
// 		{ name: 'Login', path: '/pages/Login', component: LoginPage },
// 		{ path: '*', redirect: '/' }
// 	]
// })


// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/pages/Login'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');
//   console.log(loggedIn);
//   if (authRequired && !loggedIn) {
//     return next('/pages/Login');
//   }

//   next();
// })


// export default router
