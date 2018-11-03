
import React from 'react';
import { Layout, Button, Avatar ,List,Icon,} from 'antd';
import { Pagination } from 'antd';
import { isAbsolute } from 'path';
import avaterppt from '../assets/ppt.jpg';
import styles from './courseware.css';

class courseware extends React.Component{

    onChange = (pageNumber) => {
      console.log('Page: ', pageNumber);
    }

    handleSubmit = (e) => {
      console.log(e);
    }
    
    

    render(){


        const data = [
            {
              title: '第一章——机器学习入门',
            },
            {
              title: '第二章',
            },
            {
              title: '第三章',
            },
            {
              title: '第四章',
            },
          ];
    
        return(
            <div >   
            <List
              className={styles.list}
              header={<h2>机器学习课程课件</h2>}
              dataSource={data}
              renderItem={item => (
              <List.Item  > 
                {/* actions={[<a>下载</a>]} */}
                <List.Item.Meta
                  avatar={<Avatar size="large" shape="square" src={avaterppt} />}
                  // avatar={<Avatar size="large" icon="file-ppt" />}
                  title={<a>{item.title}</a>}
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

export default courseware;