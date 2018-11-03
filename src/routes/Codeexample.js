
import React from 'react';
import { Layout, Button, Avatar ,List, Icon } from 'antd';
import { Link } from 'dva/router';
import { Pagination } from 'antd';
import { isAbsolute } from 'path';
import avaterppt from '../assets/ppt.jpg';
import styles from './courseware.css';



class Codeexample extends React.Component{

    onChange = (pageNumber) => {
      console.log('Page: ', pageNumber);
    }

    handleSubmit = (e) => {
      console.log(e);
    }
    
    

    render(){
      const data = [
          {
            title: '这是题目',
          },
          {
            title: '这里也是题目',
          },
          {
            title: '又是一个题目',
          },
          {
            title: '还是题目',
          },
        ];
   
      return(
        <div >   
          <List
            className={styles.list}
            // header={<h2>机器学习课程课件</h2>}
            dataSource={data}
            renderItem={item => (
            <List.Item  > 
              {/* actions={[<a>下载</a>]} */}
              <List.Item.Meta
                avatar={<Avatar size="large" shape="square" icon="code" theme="filled" />}
                // avatar={<Avatar size="large" icon="file-ppt" />}
                title={<Link to="/Layout/Code">{item.title}</Link>}
                description="这里是描述"
              />
            </List.Item>
                )}  
          />
          {/* <div >
            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange} />  
          </div> */}
        </div>
          
      );
    }
}

export default Codeexample;