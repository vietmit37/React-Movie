import { FileOutlined, DesktopOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Col, Layout, Menu, Row } from "antd";
import _ from "lodash";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, NavLink, Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const { userLogin } = useSelector((state) => state.authReducer);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (!localStorage.getItem("UserCustomer")) {
    alert("Bạn không có quyền truy cập vào trang này !");
    return <Navigate to="/" />;
  }

  if (userLogin.maLoaiNguoiDung !== "QuanTri") {
    alert("Bạn không có quyền truy cập vào trang này !");
    return <Navigate to="/" />;
  }
  const operations = (
    <Fragment>
      {!_.isEmpty(userLogin) ? (
        <Fragment>
          <Row
            onClick={() => {}}
            style={{
              display: "flex",
              color: "white",
              marginRight: "10px",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Col span={20}>
              Hello ! {userLogin.taiKhoan}
              <Button
                type="danger"
                shape="circle"
                size="large"
                style={{ marginLeft: "10px", marginRight: "20px" }}
              >
                {userLogin.taiKhoan.substr(0, 1)}
              </Button>
            </Col>
            <Col span={2}>
              <Button
                onClick={() => {
                  localStorage.removeItem("UserCustomer");
                  window.location.reload();
                }}
                type="warning"
              >
                Đăng xuất
              </Button>
            </Col>
          </Row>
        </Fragment>
      ) : (
        ""
      )}
    </Fragment>
  );
  return (
    <Fragment>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo">
            <img
              src="../img/logo.png"
              alt="..."
              style={{ width: "50%", height: "60px" }}
            />
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<UserOutlined />}>
              <NavLink to="/admin">Users</NavLink>
            </Menu.Item>
            <SubMenu key="sub1" icon={<FileOutlined />} title="Films">
              <Menu.Item key="10" icon={<FileOutlined />}>
                <NavLink to="/admin/films">Films</NavLink>
              </Menu.Item>
              <Menu.Item key="11" icon={<FileOutlined />}>
                <NavLink to="/admin/films/addnew">Add new</NavLink>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            <div
              style={{
                textAlign: "right",
                paddingRight: "1rem",
              }}
            >
              {operations}
            </div>
          </Header>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            ></Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              {props.children}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Movie ©2022
          </Footer>
        </Layout>
      </Layout>
    </Fragment>
  );
};
export default AdminLayout;
