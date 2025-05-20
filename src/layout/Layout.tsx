import {
  AlertOutlined,
  FullscreenOutlined,
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { GetProps } from "antd";
import {
  Avatar,
  Breadcrumb,
  Input,
  Layout,
  Menu,
  MenuProps,
  Space,
  theme,
  Typography,
} from "antd";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../media/images/download.png";
import { useAuth } from "../modules/auths/hooks/useAuths";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
type MenuItemInfouser = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

function getItemInfouser(
  key: React.Key,
  label?: React.ReactNode,
  icon?: React.ReactNode,
  children?: MenuItemInfouser[]
): MenuItemInfouser {
  return {
    key,
    label,
    icon,
    children,
  } as MenuItemInfouser;
}
const items: MenuItem[] = [
  getItem("Apps", "3", <HomeOutlined className="size-icon" />, [
    getItem("Feed", "4"),
  ]),
  getItem("Admin", "sub1", <UserOutlined className="size-icon" />, [
    getItem("User Management", "4", null, [
      getItem(<Link to="user/create-user">Create User</Link>, "5"),
      getItem(<Link to="user/list-user">List User</Link>, "6"),
    ]),
    getItem("Product Management", "7", null, [
      getItem(<Link to="products">Products</Link>, "8"),
    ]),
  ]),
];

const MainLayout: React.FC = () => {
  const { logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  var elem = document.documentElement;

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  const itemsInfoUser: MenuItemInfouser[] = [
    getItemInfouser(
      "1",
      undefined,
      <Space wrap>
        <Avatar size={40} icon={<UserOutlined />} />
      </Space>,
      [
        getItemInfouser("2", <Link to="profile/personal-info">Profile</Link>),
        getItemInfouser("3", <span onClick={logout}>Logout</span>),
      ]
    ),
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          className="demo-logo-vertical"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.5rem",
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{ width: "50px", height: "50px" }}
          ></img>
          {!collapsed && (
            <h1 style={{ color: "white", marginLeft: "10px" }}>
              Base Ecomerce
            </h1>
          )}
        </div>
        <Menu
          className="menu-sidebar"
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="layout-page">
        <Header
          style={{
            padding: "0 30",
            backgroundColor: "#F8FBFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Search
            placeholder="input search"
            onSearch={onSearch}
            enterButton
            style={{ width: "25rem" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "2rem",
            }}
          >
            <FullscreenOutlined
              onClick={toggleFullscreen}
              style={{ fontSize: "160%" }}
            />
            <AlertOutlined style={{ fontSize: "160%" }} />
            <SettingOutlined style={{ fontSize: "160%" }} />
            <Menu
              className="menu-sidebar"
              defaultSelectedKeys={["1"]}
              mode="horizontal"
              items={itemsInfoUser}
            ></Menu>
          </div>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Base Ecomerce ©{new Date().getFullYear()} Created by base-ecomerce
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
