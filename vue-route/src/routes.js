/*
  Lazy Loading; uygulamanın bir kısmına ulaşmak istediğimizde ya da
  uygulamanın bir kısmını yüklemek istediğimizde kullanılır.
*/
// burda componentlerin hepsini kullanmasak bile import ettik.

import Home from './components/Home.vue';
import Header from './components/Header.vue';
/*
import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
*/

const User = resolve => {
  require.ensure(
    ['./components/user/User.vue'], () => {
      resolve(require('./components/user/User.vue'));
    }, 'user'
    // user is group name
  );
};
const UserStart = resolve => {
  require.ensure(
    ['./components/user/UserStart.vue'], () => {
      resolve(require('./components/user/UserStart.vue'));
    }, 'user'
  );
};
const UserEdit = resolve => {
  require.ensure(
    ['./components/user/UserEdit.vue'], () => {
      resolve(require('./components/user/UserEdit.vue'));
    }, 'user'
  );
};
const UserDetail = resolve => {
  require.ensure(
    ['./components/user/UserDetail.vue'], () => {
      resolve(require('./components/user/UserDetail.vue'));
    }, 'user'
  );
};


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
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log('inside user/id');
          next();
        }
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



  // Route Params vid 'props'
  // { path: '/', component: Hello }, // No props, no nothing
  // { path: '/hello/:name', component: Hello, props: true }, // Pass route.params to props
  // { path: '/static', component: Hello, props: { name: 'world' } }, // static values
  // { path: '/dynamic/:years', component: Hello, props: dynamicPropsFn }, // custom logic for mapping between route and props
  // { path: '/attrs', component: Hello, props: { name: 'attrs' } }
];