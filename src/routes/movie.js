
import React from 'react';
import { Layout, Button, Avatar ,List,Icon,} from 'antd';
import { Pagination } from 'antd';
import { isAbsolute } from 'path';
import avaterppt from '../assets/video.jpg';
import styles from './courseware.css';
import files from '../models/files';
import { connect } from 'dva';

class movie extends React.Component{
  UNSAFE_componentWillMount() {
    this.props.dispatch({type: "files/getSearchList", payload:{ file_type: 'movie' }});
  }

  onChange = (pageNumber) => {
    console.log('Page: ', pageNumber);
  }

  handleSubmit = (e) => {
    console.log(e);
  }
  
  render(){
    const { list } = this.props.files; 
    
    return(
        <div >   
        <List
          className={styles.list}
          header={<h2>机器学习视频</h2>}
          dataSource={list}
          pagination={{
            onChange: (page) => {
            console.log(page);
            },
            //7个为一页
            pageSize: 7,
          }}
          renderItem={item => (
          <List.Item  > 
            {/* actions={[<a>下载</a>]} */}
            <List.Item.Meta
              avatar={<Avatar size="large" shape="square" src={avaterppt} />}
              // avatar={<Avatar size="large" icon="file-ppt" />}
              title={<a href={item.url}>{item.name}</a>}
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

export default connect((files)=>(files))(movie);