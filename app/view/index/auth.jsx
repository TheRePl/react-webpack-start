// https://github.com/mjrussell/redux-auth-wrapper
import { UserAuthWrapper } from 'redux-auth-wrapper';
import Loader from './Loader';

// 普通容器，登录直接跳转对应地址，未登录就跳指定位置
export const UserIsAuthenticated = UserAuthWrapper({
  wrapperDisplayName: 'UserIsAuthenticated', // 组件名称，react-Devtools调试
  authSelector: state => state.data, // 确切的数据将被当作props传递给组件
  authenticatingSelector: state => state.isLogin, // store 这个数据项
  failureRedirectPath: '/toLogin',
  LoadingComponent: Loader, // 组件项，当 authenticatingSelector： true时启动
});

// 登录容器，判断登录后跳转的地址
export const UserIsNotAuthenticated = UserAuthWrapper({
  authSelector: state => {
    console.log(state);
    return state.data;
  }, // 返回 authData
  wrapperDisplayName: 'UserIsNotAuthenticated',
  predicate: user => user === null,
  // 接受authData，当为false时，进入faolureRedirectPath; 默认情况：authDate为对象或者null时返回false;
  failureRedirectPath: (state, ownProps) => {
    console.log(ownProps);
    let path;
    if (ownProps.location.query) {
      console.log('+++++++++++登录 or 退出登录 地址：/', ownProps.location.query);
      // 从其他路由来，将其他路由地址存入登录后跳转的地址
      path = ownProps.location.query.redirect;
    } else {
      console.log('___________登录 or 退出登录 地址：/');
      // 登录成功或退出登录后的地址
      path = '/';
    }
    console.log(path);
    return path;
  },
  // predicate: authData => authData.isLoading === false,
  // 当为false时，进入faolureRedirectPath; 默认情况：authDate为对象或者null时返回false;
  // LoadingComponent: Loading, // 当 authenticatingSelector： true时启动
  // FailureComponent: Error, // 错误信息组件：路由不存在是启动
  // allowRedirectBack: true, // 是否将重定向参数传递到 failureRedirectPath /*true*/
});

export const UserIsAdmin = UserAuthWrapper({
  authSelector: state => state.user.data,
  failureRedirectPath: '/',
  wrapperDisplayName: 'UserIsAdmin',
  predicate: user => user.isAdmin, // 如果true直接进入，否则进入 failureRedirectPath
});
// 可以使用 UserIsAuthenticated(UserAuthWrapper(component));形式共享 UserIsAuthenticated模式。