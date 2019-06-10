import React from 'react';
import { Router, Switch } from 'dva/router';
import IndexPage from './pages/IndexPage';
import Home from './pages/Home/routes';
import Admin from './pages/Admin/routes';
import About from './pages/About/routes';
import Register from './pages/Register/routes';
import Login from './pages/Login/routes';
import Menus from './pages/Menus/routes';
import { SubRoute } from './utils/SubRoute.js';

const routeConfig = [
  {
    path: '/',
    // LoadingComponent: null,
    // component: () => import('./pages/IndexPage'),
    component: IndexPage,
    model: [],
    routes: [
      {
        path: '/home',
        // LoadingComponent: null,
        // component: () => import('./pages/Home'),
        component: Home,
        redirect: true,
        model: [],
      },
      {
        path: '/admin',
        // LoadingComponent: null,
        // component: () => import('./pages/Admin'),
        component: Admin,
        model: [],
      },
      {
        path: '/about',
        // LoadingComponent: null,
        // component: () => import('./pages/About'),
        component: About,
        model: [],
      },
      {
        path: '/register',
        // LoadingComponent: null,
        // component: () => import('./pages/Register'),
        component: Register,
        model: [],
      },
      {
        path: '/login',
        // LoadingComponent: null,
        // component: () => import('./pages/Login'),
        component: Login,
        model: [],
      },
      {
        path: '/menus',
        // LoadingComponent: null,
        // component: () => import('./pages/Menus'),
        component: Menus,
        model: [],
      },
    ]
  }
]
function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {
          routeConfig.map((item, index) => {
            return <SubRoute key={index} {...item} app={app}/>
          })
        }
      </Switch>
    </Router>
  );
};

export default RouterConfig;
