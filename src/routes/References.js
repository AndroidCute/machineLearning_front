import React from 'react';
import { IconText, Button, Avatar ,List,Icon,} from 'antd';
import { Pagination } from 'antd';
import { isAbsolute } from 'path';


class References extends React.Component{

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
            title:  '《人工神经网络原理》',
            description: '《人工神经网络原理》介绍了人工神经网络的基本理论，系统地阐述了六种典型的人工神经网络模型，即早期的感知机神经网络、自适应线性元件神经网络、误差反向传播神经网络、Hopfield神经网络、B0ltzmann机和自适应共振理论神经网络，以及它们的网络结构、学习算法、工作原理及应用实例，为读者深入了解和研究人工神经网络奠定了基础。',
            content: '书名：人工神经网络原理；作者：马锐；定价：25.00元；出版社：机械工业出版社；出版时间：2010年9月1日；ISBN:9787111312666；开本：16开。',
            extra:<img width={129} height={182} src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=3f34125604e93901420f856c1a853f82/7a899e510fb30f24014a4675cd95d143ac4b03f7.jpg" />,
        });
        listData.push({
           // href: 'http://ant.design',//书籍电子版链接
            title:  '《机器学习》',//书籍名称
            //简介
            description: '机器学习是计算机科学与人工智能的重要分支领域。 本书作为该领域的入门教材，在内容上尽可能涵盖机器学习基础知识的各方面。 为了使尽可能多的读者通过本书对机器学习有所了解, 作者试图尽可能少地使用数学知识。 然而, 少量的概率、统计、代数、优化、逻辑知识似乎不可避免. 因此, 本书更适合大学三年级以上的理工科本科生和研究生, 以及具有类似背景的对机器学习感兴趣的人士。 ',
            //书籍信息
            content: '书名：机器学习；作者：周志华；定价：88.00元；出版社：清华大学出版社；出版时间：2016年1月1日；ISBN: 9787302423287；页数：425。',
            //封面长宽，图片封面（书籍长款比1：根号2，即1:1.414）
            extra:<img width={129} height={182} src="http://images.zxhsd.com/photo/book_b//C/02163/3441214-fm-b.jpg"/>,
        });
        listData.push({
            //href: 'http://ant.design',
            title:  '《人工神经网络教程》',
            description: '该书系统地论述了人工神经网络的主要理论、设计基础及应用实例，旨在使读者了解神经网络的发展背景和研究对象，理解和熟悉它的基本原理和主要应用，掌握它有结构和设计应用方法，为深入研究和应用开发打下基础。为了便于读者理解，书中尽量避免烦琐的数学推导，加强了应用举例，并在内容的选择和编排上注意到读者初次接触新概念的易接受性和思维的逻辑性。作为扩充知识，书中还介绍了人工神经系统的基本概念、体系结构、控制特生及信息模式。',
            content: '书名：人工神经网络教程；作者：韩力群；定价：36.00元；出版社：北京邮电学院出版社；出版时间：2006年12月1日；ISBN:9787563513673；页数：330。',
            extra:<img width={129} height={182} src="https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=2bab94faa70f4bfb8cd099523b741fcd/2fdda3cc7cd98d10a840f754223fb80e7bec903b.jpg" />,
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

export default References;