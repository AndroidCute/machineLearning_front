import React from 'react';
import {List, Avatar }from 'antd';
import avaterppt from '../assets/zip.png';

class Datanew extends React.Component{

    onChange = (pageNumber) => {
       console.log('Page: ', pageNumber);
     }
     

   render(){
       const listData = [];
       listData.push({
           href: 'http://127.0.0.1:7001/public/uploads/0177b3ba966ca56b8bc539c48341255b.zip',
           title:  '手写体数据集',
           //description: '《人工神经网络原理》介绍了人工神经网络的基本理论，系统地阐述了六种典型的人工神经网络模型，即早期的感知机神经网络、自适应线性元件神经网络、误差反向传播神经网络、Hopfield神经网络、B0ltzmann机和自适应共振理论神经网络，以及它们的网络结构、学习算法、工作原理及应用实例，为读者深入了解和研究人工神经网络奠定了基础。',
           //content: '书名：人工神经网络原理；作者：马锐；定价：25.00元；出版社：机械工业出版社；出版时间：2010年9月1日；ISBN:9787111312666；开本：16开。',
       });
       listData.push({
           href: 'http://127.0.0.1:7001/public/uploads/dd60797468988ff30a42a3d71c0f31d6.zip',//绝对路径
           title:  'ORL人脸库',
       });
       listData.push({
           href: 'http://127.0.0.1:7001/public/uploads/cd370f0695f7e17a44b3de8317fae6ef.zip',
           title:  '特征工程',
          // description: '该书系统地论述了人工神经网络的主要理论、设计基础及应用实例，旨在使读者了解神经网络的发展背景和研究对象，理解和熟悉它的基本原理和主要应用，掌握它有结构和设计应用方法，为深入研究和应用开发打下基础。为了便于读者理解，书中尽量避免烦琐的数学推导，加强了应用举例，并在内容的选择和编排上注意到读者初次接触新概念的易接受性和思维的逻辑性。作为扩充知识，书中还介绍了人工神经系统的基本概念、体系结构、控制特生及信息模式。',
          // content: '书名：人工神经网络教程；作者：韩力群；定价：36.00元；出版社：北京邮电学院出版社；出版时间：2006年12月1日；ISBN:9787563513673；页数：330。',
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
                       pageSize: 10,
                   }}
                   dataSource={listData}
                  // footer={<div><b>ant design</b> footer part</div>}
                   renderItem={item => (
                       <List.Item
                           key={item.title}//列表
                          // extra={item.extra}//图片
                       >
                       <List.Item.Meta
                           title={<a href={item.href}>{item.title}</a>}//书籍信息
                           description={item.description}
                           avatar={<Avatar size="large" shape="square" src={avaterppt} />}
                           />
                           {item.content}
                       </List.Item>
                       )}
               />
           </div>
          
       );
   }
}

export default Datanew;