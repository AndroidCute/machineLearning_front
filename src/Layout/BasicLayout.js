import React from 'react';
import { Link, Route, Redirect, Switch } from 'dva/router'

import { isAbsolute } from 'path';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import styles from './BasicLayout.css'
import Home from './Home'
import List from '../routes/List';
import RegistrationForm from '../routes/Add';
import courseware from '../routes/courseware';
import References from '../routes/References';
import Codeexample from '../routes/Codeexample';
import Code from '../routes/Code';
import Upload from '../routes/upload';
import Data from '../routes/data';
import movie from '../routes/movie';
import Netfile from '../routes/netfile';
import HtmlPage from '../routes/HtmlPage';

const MenuItemGroup = Menu.ItemGroup;
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class BasicLayout extends React.Component {
  // state = {
  //   current: 'mail',
  // };

  // handleClick = (e) => {
  //   console.log('click ', e);
  //   this.setState({
  //     current: e.key,
  //   });
  // }

  render() {
    return (
      <Layout style={{padding: 0, margin: 0}} >
        <Header className={styles.header}>
          <div className={styles.logo} />
          {/* <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu> */}
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff', }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="course">
                <Link to="/Layout/Courseware">
                  <Icon type="file-ppt" />
                  教学课件
                </Link>
              </Menu.Item>
              <Menu.Item key="video">
                <Link to="/Layout/Movie">
                  <Icon type="video-camera" theme="outlined" />
                  学习视频
                </Link>
              </Menu.Item>
              <Menu.Item key="html">
                <Link to="/Layout/Netfile">
                  <Icon type="file" theme="outlined" />
                  网页资料
                </Link>
              </Menu.Item>
              <Menu.Item key="code">
                <Link to="/Layout/Codeexample">
                <Icon type="edit" theme="outlined" />
                  代码示例
                </Link>
              </Menu.Item>
              <Menu.Item key="reference">
                <Link to="/Layout/Reference">
                <Icon type="read" theme="outlined" />
                  参考书籍
                </Link>
              </Menu.Item>
              <SubMenu key="sub6" title={<span><Icon type="profile" theme="outlined" />常用数据</span>}>
                <Menu.Item key="handW">
                  <Link to="/Layout/Data">
                    手写体数字识别
                  </Link>
                </Menu.Item>
                <Menu.Item key="20">ORL人脸库</Menu.Item>
              </SubMenu>
                <Menu.Item key="net">
                  <Link to="/Layout/HtmlPage">
                  <Icon type="link" theme="outlined" />
                    相关网址
                  </Link>
                </Menu.Item>
                <Menu.Item key="upload">
                <Link to="/Layout/Upload">
                <Icon type="edit" theme="outlined" />
                  上传
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 650 }} >
            <Switch>
              <Route exact path="/Layout/Home" component={Home} />
              <Route exact path="/Layout/Courseware" component={courseware} />
              <Route exact path="/Layout/Reference" component={References} />
              <Route exact path="/Layout/Codeexample" component={Codeexample} />
              <Route exact path="/Layout/Upload" component={Upload} />
              <Route exact path="/Layout/Movie" component={movie} />
              <Route exact path="/Layout/Netfile" component={Netfile} />
              <Route exact path="/Layout/Data" component={Data} />
              <Route exact path="/Layout/Code/:id" component={Code} />
              <Route exact path="/Layout/HtmlPage" component={HtmlPage}  />

              {/* <Route exact path="/Layout/Bar" component={BarChart} /> */}
              <Redirect from="*" to='/Layout/Home' />
            </Switch>
          </Content>
        </Layout>
        <Footer style={{textAlign: "center", position: isAbsolute }}>
          ML-material ©2018 Created by 安卓阳 && 陈晓雪
        </Footer>
      </Layout>
    )
  };
}
  
  //   return (
  //     <Layout style={{padding: 0, margin: 0}}>
  //       <Header style={{ backgroundColor: 'white', position: isAbsolute, zIndex: 1, width: '100%' }}>
  //         <Menu
  //           //theme="dark"
  //           mode="horizontal"
  //           defaultSelectedKeys={['Home']}
  //           style={{ lineHeight: '64px' }}
  //         >
  //           <Menu.Item key="Home">
  //             <Link to="/Layout/Home">
  //               <Icon type="home" />
  //               首页
  //             </Link>
  //           </Menu.Item>
  //           <Menu.Item key="List">
  //             <Link to="/Layout/List">
  //               <Icon type="profile" />
  //               学籍列表和查询
  //             </Link>
  //           </Menu.Item>
  //           <Menu.Item key="Add">
  //             <Link to="/Layout/Add">
  //               <Icon type="form" />
  //               增加学籍
  //             </Link>
  //           </Menu.Item>
  //           <SubMenu title={<span><Icon type="pie-chart" />学籍统计</span>}>
  //             <MenuItemGroup>
  //               <Menu.Item key="setting:1">
  //                 <Link to="/Layout/Statistics">
  //                   年龄统计饼图
  //                 </Link> 
  //               </Menu.Item>
  //               <Menu.Item key="setting:2">
  //                 <Link to="/Layout/Bar">
  //                   柱状图
  //                 </Link> 
  //               </Menu.Item>
  //               <Menu.Item key="setting:3">
  //                 年级人数折线图
  //               </Menu.Item>
  //               {/* <Menu.Item key="setting:4">
  //                 Option 4
  //               </Menu.Item> */}
  //             </MenuItemGroup>
  //           </SubMenu>
  //         </Menu>
  //       </Header>
  //       <Content style={{minHeight: 600, margin: 20}}>
          
  //       </Content>
  //       <Footer style={{textAlign: "center", position: isAbsolute }}>
  //         ML-material ©2018 Created by Anzhuoyang&Chenxiaoxue
  //       </Footer>
  //     </Layout>
  // )



export default BasicLayout;