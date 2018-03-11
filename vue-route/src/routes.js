import User from './components/user/User.vue';
import Home from './components/Home.vue';

export const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/user/:id',
    component: User
  },



  //              Route Params vid 'props'
  // { path: '/', component: Hello }, // No props, no nothing
  // { path: '/hello/:name', component: Hello, props: true }, // Pass route.params to props
  // { path: '/static', component: Hello, props: { name: 'world' } }, // static values
  // { path: '/dynamic/:years', component: Hello, props: dynamicPropsFn }, // custom logic for mapping between route and props
  // { path: '/attrs', component: Hello, props: { name: 'attrs' } }
];