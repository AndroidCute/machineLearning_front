import { Layout } from 'antd';
import React from 'react';
import { connect } from 'dva';



const { Content } = Layout;
class Code extends React.Component {


  render() {
    return(
      <div>
        <Layout>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 150 }}>
            这里是具体问题的描述
          </Content>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 400 }}>
            <div>
              这里是代码
              <pre>
                <code></code>
                fd 
                 stopPropagation();
                 fdh j
                 g
                 dfh
              </pre>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Code;