"use client";

import { useState } from "react";
import { ConfigProvider, Layout, Menu, MenuTheme } from "antd";
const { Sider } = Layout;
import { sidebarItems } from "@/constants/sidebarItems";
import { USER_ROLE } from "@/constants/role";
import { getUserInfo } from "@/services/auth.service";
import { useAppSelector } from "@/redux/hooks";
import { SiderTheme } from "antd/es/layout/Sider";
import car from "../../assets/car.png";
import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
  const theme = useAppSelector((state) => state.config.theme);
  const [collapsed, setCollapsed] = useState(false);
  const { role } = getUserInfo() as any;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4c92d4",
          borderRadius: 2,
          fontSize: 16,
        },
      }}
    >
      <Sider
        collapsible
        theme={theme as SiderTheme | undefined}
        // theme="dark"
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={280}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          left: 0,
          top: 0,
          bottom: 0,
          // backgroundColor: "#cdb4db",
        }}
      >
        <div className="flex justify-center cursor-pointer m-2">
          <Link href={`/dashboard/${role}`}>
            <Image src={car} width={49} alt="Prime palette logo" />
          </Link>
        </div>
        <Menu
          style={{
            borderTop: "0.5px solid #e8e8e8",
            borderRight: "none",
          }}
          theme={theme as MenuTheme | undefined}
          // theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={sidebarItems(role)}
        />
      </Sider>
    </ConfigProvider>
  );
};

export default SideBar;
