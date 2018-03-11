import Home from './components/Home.vue';
import Header from './components/Header.vue';
import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';

export const routes = [
  {
    path: '',
   // component: Home,
    name: 'home',
    components: {
      default: Home,
      'header-top': Header
    }
  },
  {
    path: '/user',
    //component: User,
    components: {
      default: User,
      'header-bottom': Header
    },
    children: [
      {
        path: '',
        component: UserStart
      },
      {
        path: ':id',
        component: UserDetail
      },
      {
        path: ':id/edit',
        component: UserEdit,
        name: 'userEdit'
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }



  //              Route Params vid 'props'
  // { path: '/', component: Hello }, // No props, no nothing
  // { path: '/hello/:name', component: Hello, props: true }, // Pass route.params to props
  // { path: '/static', component: Hello, props: { name: 'world' } }, // static values
  // { path: '/dynamic/:years', component: Hello, props: dynamicPropsFn }, // custom logic for mapping between route and props
  // { path: '/attrs', component: Hello, props: { name: 'attrs' } }
];