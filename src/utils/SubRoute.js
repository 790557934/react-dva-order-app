import React from 'react';
import { Route, Redirect } from 'dva/router';
// import dynamic from 'dva/dynamic';
import NoMatch from '../components/noMatch';

//解决动态加载路由组件的方法

// const dynamicCom = (app, models, component, routes) => {
//     return dynamic({
//         LoadingComponent: null,
//         app,
//         models: () => models,
//         component: () => component().then(res => {
//             console.log(res);
//         })
//     });
// }

// dynamic({
//   app,
//   models: () => models,
//   component: () => 
//   component().then( (res) => {
//     const Component = res.default || res;
//     return props => <Component {...props} routes={routes} app={app}/>
//   }),
// });

function SubRoute({ routes, component: Component, app, model }) {
    return <Route render={props => <Component {...props} routes={routes} />} />
};

function RedirectRoute({ exact, from, routes }) {
    const routeFilter = routes.filter(item => {
        return item.redirect;
    });
    const to = routeFilter.length > 0 ? routeFilter[0].path : routes[0].path;
    return (
        <Redirect exact={exact} from={from} to={to} />
    )
};

function NoPath({ status }) {
    return (
        <Route render={props => <NoMatch {...props} status={status} />} />
    )
};

export { SubRoute, RedirectRoute, NoPath };
