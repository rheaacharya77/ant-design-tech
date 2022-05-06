import React from "react";
import "./App.css";
import "antd/dist/antd.css";

import Appheader from "./components/common/header";
import Appfooter from "./components/common/footer";
import Apphome from "./Views/home";

import { Layout} from "antd";
const { Header,Content,Footer} = Layout;


const App = () => {
  return (
    <Layout className="mainLayout">
      <Header>
        <Appheader/>
      </Header>
      <Content>
      <Apphome/>
      </Content>
      <Footer>
        <Appfooter/>
      </Footer>
    </Layout>
  );
};

export default App;
