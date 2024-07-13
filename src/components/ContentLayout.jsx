import React from "react";
import { Layout, Breadcrumb } from "antd";
import Dashboard from "./Dashboard";
import Order from "./Order";
import CommonPageHeader from "./CommonPageHeader";
import { HomeOutlined } from "@ant-design/icons";
import "../css/sidebar.css";

const { Header, Content } = Layout;

const ContentLayout = ({ selectedOption, getContent }) => {
  return (
    <Content style={{ margin: "0px 16px 16px" }}>
      <Header className="p-0">
        <CommonPageHeader selectedOption={selectedOption} />
      </Header>
      <Content style={{ margin: "16px 0" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <HomeOutlined style={{ color: "#5570f1", marginLeft: "10px" }} />
        </Breadcrumb>
        <div style={{ minHeight: 360 }}>
          {getContent()}
        </div>
      </Content>
    </Content>
  );
};

export default ContentLayout;
