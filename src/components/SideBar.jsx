import React, { useState } from "react";
import { Menu, Layout } from "antd"; // Removed Slider from Ant Design
import { HomeOutlined } from "@ant-design/icons";
import { getItem } from "./utils"; // Assuming you move getItem function to utils.js or another appropriate file
import "../css/sidebar.css";
import bagIcon from "../assets/images/bag.png";
import conversationIcon from "../assets/images/conversation.png";
import dashboard from "../assets/images/dashboard.png";
import Graph from "../assets/images/Graph.png";
import inventory from "../assets/images/inventory.png";
import settings from "../assets/images/settings.png";
import CustomersIcon from "../assets/images/Customers.png";
import LogoutIcon from "../assets/images/Logout.png";
import ContactIcon from "../assets/images/contact.png";
import Gift from "../assets/images/gift.png";

const { Sider } = Layout;

const SideBar = ({ selectedOption, handleMenuClick }) => {
  const items = [
    getItem(
      "Dashboard",
      "1",
      <img src={dashboard} width={20} height={20} alt="Dashboard" />
    ),
    getItem(
      "Orders",
      "2",
      <img src={bagIcon} width={20} height={20} alt="Orders" />
    ),
    getItem(
      "Customers",
      "3",
      <img src={CustomersIcon} width={20} height={20} alt="Customers" />
    ),
    getItem(
      "Inventory",
      "4",
      <img src={inventory} width={20} height={20} alt="Inventory" />
    ),
    getItem(
      "Conversations",
      "5",
      <img src={conversationIcon} width={20} height={20} alt="Conversations" />
    ),
    getItem(
      "Settings",
      "6",
      <img src={settings} width={20} height={20} alt="Settings" />
    ),
  ];

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{
        background: "#fff",
      }}
    >
      <div className="demo-logo-vertical" />
      <h2
        className="d-flex align-items-center"
        style={{
          margin: "10px",
        }}
      >
        <img
          src={Graph}
          width={30}
          height={30}
          preview={false}
          className="logout-icon"
        />
        {!collapsed && "Metrix"}
      </h2>
      <Menu
        mode="inline"
        selectedKeys={[selectedOption]}
        collapsed={collapsed}
        onClick={handleMenuClick}
        style={{
          maxWidth: "200px",
          padding: "12px",
        }}
      >
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default SideBar;
