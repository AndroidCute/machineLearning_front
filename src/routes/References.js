import React from 'react';
import { Card,li,ul} from 'antd';
import { Pagination } from 'antd';
import { isAbsolute } from 'path';
import avataryay from '../assets/yay.jpg';
import avatarppt from '../assets/ppt.jpg';


const  { Meta } = Card;
class References extends React.Component{

    
    render(){
        return(
          <div >
            <ul>
              <li>
                <Card
                  hoverable
                  style={{ width: 200 }}
                  cover={
                          <a alt="example" href="https://zhidao.baidu.com/question/1242610189329787539.html">
                          <img alt="example" width="150" height="140" src={avatarppt} />
                          </a>
                        }
                >
                <Meta
                title="参考书籍"
                description="作者：
                            版本：
                            出版社："
                />
                </Card>
              </li>
              <li>
                <Card
                    hoverable
                    style={{ width: 200 }}
                    cover={<a alt="example" href="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=monline_4_dg&wd=python%E5%9B%BE%E7%89%87&oq=python%25E5%259F%25BA%25E7%25A1%2580%25E6%2595%2599%25E7%25A8%258B%25E5%259B%25BE%25E7%2589%2587&rsv_pq=b59b9fe50002899c&rsv_t=017bR9nc9chL13QDrr2XiI9pydRztsYffp1TILiI6rQGieDnfT%2BeBHFRSM663tDOg9XK&rqlang=cn&rsv_enter=1&inputT=289&rsv_sug3=5&rsv_sug1=2&rsv_sug7=100&rsv_sug2=0&rsv_sug4=3313"><img alt="example"
                    width="184"
                    height="140"
                    src={avataryay} /></a>}
                >
                <Meta
                title="参考书籍"
                description="作者：
                              版本：
                              出版社："
                />
                </Card>
              </li>
              <li>

              </li>
            </ul>
            {/* <div>
            
            </div>
            <div>
              
            </div> */}
          </div>
        );
    }
}

export default References;