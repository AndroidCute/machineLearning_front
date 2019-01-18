import React from 'react';
import {List, Avatar }from 'antd';
import avaterppt from '../assets/ppt.jpg';

class Learnware extends React.Component{

  onChange = (pageNumber) => {
      console.log('Page: ', pageNumber);
    }
    

  render(){
    const listData = [];
    listData.push({
        href: 'http://127.0.0.1:7001/public/uploads/902e78c4e0722c2fcb212d94d7da6875.ppt',
        title:  '第1章——绪论.ppt',
        //description: '《人工神经网络原理》介绍了人工神经网络的基本理论，系统地阐述了六种典型的人工神经网络模型，即早期的感知机神经网络、自适应线性元件神经网络、误差反向传播神经网络、Hopfield神经网络、B0ltzmann机和自适应共振理论神经网络，以及它们的网络结构、学习算法、工作原理及应用实例，为读者深入了解和研究人工神经网络奠定了基础。',
        //content: '书名：人工神经网络原理；作者：马锐；定价：25.00元；出版社：机械工业出版社；出版时间：2010年9月1日；ISBN:9787111312666；开本：16开。',
    });
    listData.push({
        href: 'http://127.0.0.1:7001/public/uploads/09877668f4442c1c94e3cebd19e3ddad.ppt',//绝对路径
        title:  '第2章——朴素贝叶斯分类.ppt',
    });
    listData.push({
        href: 'http://127.0.0.1:7001/public/uploads/dd19c4afa7e22aec4b9f34b980c836b2.ppt',
        title:  '第3章——K近邻分类.ppt',
    });
    listData.push({
        href: 'http://127.0.0.1:7001/public/uploads/44cbe0e79aa2abe2a32b5f4439a1f989.ppt',//绝对路径
        title:  '第4章——线性模型.ppt.',
    });
    listData.push({
        href: 'http://127.0.0.1:7001/public/uploads/2786a3a3f09976b74c041c99c9c44c0f.ppt',
        title:  '第5章——决策树.ppt',
    });
    listData.push({
        href: 'http://127.0.0.1:7001/public/uploads/bf47fba337220d3fd3bfe2025db9c4b0.ppt',//绝对路径
        title:  '第6章——神经网络.ppt.',
    });
    listData.push({
        href: 'http://127.0.0.1:7001/public/uploads/12a7cf44eade126f9ab1046880e8be46.ppt',
        title:  '第7章——支持向量机.ppt',
    });
    listData.push({
        href: 'http://127.0.0.1:7001/public/uploads/9a0beb07fc39c0d4efafc60eb87653f2.ppt',//绝对路径
        title:  '第8章——集成学习.ppt.',
    });
    listData.push({
        href: 'http://127.0.0.1:7001/public/uploads/385f26e2bdb0ca30cb8edb68643fe901.ppt',
        title:  '第9章——K均值和谱聚类.ppt',
    });
    listData.push({
        href: 'http://127.0.0.1:7001/public/uploads/b5274a0ad5ea43a9c020641dcac4519d.ppt',//绝对路径
        title:  '第10章——PCA和SVD.ppt.',
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
              //7本书为一页
              pageSize: 7,
          }}
          dataSource={listData}
          header={<h2>机器学习课程课件</h2>}
        // footer={<div><b>ant design</b> footer part</div>}
          renderItem={item => (
            <List.Item
              key={item.title}//列表
              // extra={item.extra}//图片
            >
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}//书籍信息
              description={item.description}
              avatar={<Avatar src={avaterppt} />}
              />
              {item.content}
            </List.Item>
          )}
        />
      </div>
      
    );
  }
}

export default Learnware;