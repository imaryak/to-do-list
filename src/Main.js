import React from 'react';
import { Layout, Row, Col } from 'antd';

import AddItem from './AddItem';
import ItemList from './ItemList';

const { Content } = Layout;

class Main extends React.Component {
  render() {
    return (
      <Layout>
        <Content 
          style={{height: '100vh'}}
        >
          <Row style={{height: '100%'}}>
            <Col 
              style={{
                height: '100%', 
                display:'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }} 
              span={12}
            >
              <AddItem />
            </Col>
            <Col 
              style={{
                height: '100%', 
                display:'flex',
                alignItems: 'center',
              }} 
              span={12}
            >
              <ItemList />
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

export default Main;