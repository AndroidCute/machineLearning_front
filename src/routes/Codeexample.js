
import React from 'react';
import { Layout, Button, Avatar ,List, Icon } from 'antd';
import { Link } from 'dva/router';
import { Pagination } from 'antd';
import { isAbsolute } from 'path';
import avaterppt from '../assets/ppt.jpg';
import styles from './courseware.css';
import { connect } from 'dva';


class Codeexample extends React.Component{

  UNSAFE_componentWillMount() {
    this.props.dispatch({type: "files/getSearchList", payload:{ file_type: 'word' }});
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
            // header={<h2>机器学习课程课件</h2>}
            dataSource={list}
            renderItem={item => (
            <List.Item  > 
              {/* actions={[<a>下载</a>]} */}
              <List.Item.Meta
                avatar={<Avatar size="large" shape="square" icon="code" theme="filled" />}
                // avatar={<Avatar size="large" icon="file-ppt" />}
                title={<Link to={`/Layout/Code/${item.id}`}>{item.name}</Link>}
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

export default connect((files)=>(files))(Codeexample);

