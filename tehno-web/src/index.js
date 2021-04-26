import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
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
          <li><Link to="/">Home</Link></li>
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
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}