import React from 'react';
import { Layout, Button, Avatar ,List,Icon,} from 'antd';
import { Pagination } from 'antd';
import { isAbsolute } from 'path';

const { Header, Content,Footer } = Layout;


class courseware extends React.Component{

     onChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
      }
    render(){

        const data = [
            {
              title: 'Ant Design Title 1',
            },
            {
              title: 'Ant Design Title 2',
            },
            {
              title: 'Ant Design Title 3',
            },
            {
              title: 'Ant Design Title 4',
            },
          ];
          
        return(
          <div>
             <Button type="primary">
            <Icon type="left" />
            </Button>

            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
              <List.Item>
                <List.Item.Meta
                   // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://192.168.43.119:8000">{item.title}</a>}
                />
              </List.Item>
                  )}
            />
             <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange} /> 
          </div>
         
        );
    }
}

export default courseware;