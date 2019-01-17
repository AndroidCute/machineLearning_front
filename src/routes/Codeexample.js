
import React from 'react';
import { List, } from 'antd';


class Codeexample extends React.Component{

  onChange = (pageNumber) => {
    console.log('Page: ', pageNumber);
  }
  

render(){
    const listData = [];
    /*//循环给listData赋值，忽略
    for (let i = 0; i < 23; i++) {
            listData.push({
                href: 'http://ant.design',
                title: `ant design part ${i}`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                //description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            });
       
    }*/
    listData.push({
        //href: 'http://ant.design',
        title:  ' 点击下载项目代码压缩包 ',
        description: ' 决策树随机森林 ',
        href: 'http://127.0.0.1:7001/public/uploads/cd370f0695f7e17a44b3de8317fae6ef.zip'
    });
    listData.push({
       href: 'http://127.0.0.1:7001/public/uploads/395a66d5ee605462f9f02c05d19f509e.zip',
        title:  ' 点击下载项目代码压缩包 ',
        //简介
        description: ' 此网站包含了机器学习的一些基础知识和相关资料 ',
        //书籍信息

    });    
      
    return(
        <div >   
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: (page) => {
                    console.log(page);
                    },
                    //五本书为一页
                    pageSize: 5,
                }}
                dataSource={listData}
               // footer={<div><b>ant design</b> footer part</div>}
                renderItem={item => (
                    <List.Item
                        key={item.title}//列表
                        extra={item.extra}//图片
                    >
                    <List.Item.Meta
                        title={<a href={item.href}>{item.title}</a>}//书籍信息
                        description={item.description}
                        />
                        {item.content}
                    </List.Item>
                    )}
            />
        </div>
       
    );
}
}

export default Codeexample;

