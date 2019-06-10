import React, { Component } from 'react';
import { Icon, Menu } from 'antd';
import { Link } from 'dva/router';
import style from './index.scss';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKeys: [] //当前选中的菜单
        };
    };
    componentDidMount(){
        const { pathname } = this.props;
        this.handleSetSelectKeys(pathname); //设置第一次进入对应路由当前选中的菜单
    };
    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.pathname !== this.props.pathname){ //切换菜单，设置当前选中的菜单
            this.handleSetSelectKeys(nextProps.pathname);
        }
    };
    handleSetSelectKeys(pathName) { //根据路由props 设置当前选中的是哪个菜单
        let arr = pathName.split('/'); //获取父组件传过来的props，根据/进行分割props传过来的数据
        this.setState({
            selectedKeys: arr.length < 2 ? ['home'] : [arr[1]] //判断路由是/还是/xxx 如果是/ 当前选中的默认设置为home 否则 设置当前选中的为数组的第1项
        });
    }
    render() {
        return (
            <div className={style.nav}>
                <div className={style.logo}>
                    <Icon type="sketch" />
                </div>
                <Menu mode='horizontal' defaultSelectedKeys={['home']} className={style['menu-left']} selectedKeys={this.state.selectedKeys}>
                    <Menu.Item key='home'><Link to='/'>主页</Link></Menu.Item>
                    <Menu.Item key='menus'><Link to='/menus'>菜单</Link></Menu.Item>
                    <Menu.Item key='admin'><Link to='/admin'>管理</Link></Menu.Item>
                    <Menu.Item key='about'><Link to='/about'>关于我们</Link></Menu.Item>
                    <Menu.Item key='login' className={style.login}><Link to='/login'>登录</Link></Menu.Item>
                    <Menu.Item key='register' className={style.register}><Link to='/register'>注册</Link></Menu.Item>
                </Menu>

            </div>
        )
    }
}
