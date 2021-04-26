import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import "./index.css";

import { Tabs } from "antd";
import "antd/dist/antd.css";
const TabPane = Tabs.TabPane;

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/tabs">Tabs</NavLink>
          </li>
        </ul>

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <div>Home</div>;
            }}
          />
          <Route
            path="/tabs/:tab?"
            render={({ match, history }) => {
              return (
                <div className="card-container">
                  <Switch>
                    <Tabs
                      type="card"
                      defaultActiveKey={match.params.tab}
                      onChange={key => {
                        console.log(match);
                        history.push(`/tabs/${key}`);
                      }}
                    >
                      <TabPane tab="Tab Title 1" key="1">
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                      </TabPane>
                      <TabPane tab="Tab Title 2" key="2">
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                      </TabPane>
                      <TabPane tab="Tab Title 3" key="3">
                        <p>Content of Tab Pane 3</p>
                        <p>Content of Tab Pane 3</p>
                        <p>Content of Tab Pane 3</p>
                      </TabPane>
                    </Tabs>
                  </Switch>
                </div>
              );
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
