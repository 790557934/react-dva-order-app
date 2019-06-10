import React from 'react';
import { connect } from 'dva';
import { NavBar } from '../components';
import { SubRoute, RedirectRoute, NoPath } from '../utils/SubRoute.js';
// import Home from './Home';
// import Menus from './Menus';
// import About from './About';
// import Admin from './Admin';
// import Login from './Login';
// import Register from './Register';
import { Switch } from 'dva/router';
import { Layout } from 'antd';
import styles from './IndexPage.scss';

const { Header, Content } = Layout;

function IndexPage(props) {
  const { routes, app } = props;
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <NavBar pathname={props.location.pathname} />
      </Header>
      <Content className={styles.content}>
        <Switch>
          {/* 一级路由 */}
          {/* <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/menus' component={Menus} />
          <Route path='/admin' component={Admin} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} /> */}
          {
            routes.map((item, idx) => {
              return <SubRoute key={idx} {...item} app={app}/>
            })
          }
          
          {/* 
              重定向方式：
                如果路由配置中没有redirect：true（通过循环渲染重定向）
                则默认第一个路由为重定向路由
           */}
          {/* <Redirect to='/home'/> */}
          <RedirectRoute exact={true} from='/' routes={routes} />

          {/* 输入的链接不存在，跳转到NoPath组件中 */}
          <NoPath status={404}/>
        </Switch>
      </Content>
    </Layout>
  );
}

export default connect()(IndexPage);
