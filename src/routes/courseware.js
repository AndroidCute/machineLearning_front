
import React from 'react';
import { Layout, Button, Avatar ,List,Icon,} from 'antd';
import { Pagination } from 'antd';
import { isAbsolute } from 'path';


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
            
            <div >   
            <List
              dataSource={data}
              renderItem={item => (
              <List.Item>
                <List.Item.Meta
                   // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a>{item.title}</a>}
                />
              </List.Item>
                  )}
                 
            />
               <div >
                  <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange} />  
               </div>
            </div>
           
        );
    }
}

export default courseware;