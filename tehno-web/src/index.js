import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const { Header, Content, Footer } = Layout;

ReactDOM.render(
  <body>
  <Router>
    <Layout>
        <ul>
          <li><div class="homeDiv"><Link to="/">Home</Link></div></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      
    </Layout>

    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
    </Switch>
    <Footer style={{ textAlign: 'center' }}> Catalina Bucur ©2021 UTM Project</Footer>
  </Router>
  </body>,
  document.getElementById('root'),
);

function Home() {

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}


  return <List
  itemLayout="vertical"
  size="large"
  pagination={{
    onChange: page => {
      console.log(page);
    },
    pageSize: 3,
  }}
  dataSource={listData}
  renderItem={item => (
    <List.Item
      key={item.title}
      actions={[
        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
      ]}
      extra={
        <img
          width={272}
          alt="logo"
          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        />
      }
    >
      <List.Item.Meta
        avatar={<Avatar src={item.avatar} />}
        title={<a href={item.href}>{item.title}</a>}
        description={item.description}
      />
      {item.content}
    </List.Item>
  )}
/>
}

function About() {
  return <h2>About</h2>;
}