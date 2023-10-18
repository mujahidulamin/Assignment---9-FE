//sidebar items

import type { MenuProps } from "antd";
import {
  TableOutlined,
  AppstoreOutlined,
  UserOutlined,
  BookOutlined,
  ControlOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";
export const sidebarItems = (role: string) => {
  const adminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href="/">Back To Website</Link>,
      icon: <HomeOutlined />,
      key: `/`,
    },
    {
      label: (
        <Link href={`/dashboard/${role}/userManagement`}>User Management</Link>
      ),
      icon: <UserOutlined />,
      key: `/dashboard/${role}/userManagement`,
    },
    {
      label: (
        <Link href={`/dashboard/${role}/serviceManagement`}>
          Service Management
        </Link>
      ),
      icon: <ControlOutlined />,
      key: `/dashboard/${role}/serviceManagement`,
    },
    {
      label: (
        <Link href={`/dashboard/${role}/bookingManagement`}>
          Booking Management
        </Link>
      ),
      icon: <BookOutlined />,
      key: `/dashboard/${role}/bookingManagement`,
    },
    {
      label: "Content Management",
      key: "content-management",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: (
            <Link href={`/dashboard/${role}/content/blogManagement`}>
              Blog Management
            </Link>
          ),
          key: `/dashboard/${role}/content/blogManagement`,
        },
        {
          label: (
            <Link href={`/dashboard/${role}/content/faqManagement`}>
              FAQ Management
            </Link>
          ),
          key: `/dashboard/${role}/content/faqManagement`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href="/">Back To Website</Link>,
      icon: <HomeOutlined />,
      key: `/`,
    },
    {
      label: (
        <Link href={`/dashboard/${role}/adminManagement`}>Manage Admin</Link>
      ),
      icon: <TableOutlined />,
      key: `/dashboard/${role}/adminManagement`,
    },
  ];


  const userSidebarItems: MenuProps["items"] = [
    {
      label: <Link href="/">Back To Website</Link>,
      icon: <HomeOutlined />,
      key: `/`,
    },
    {
      label: (
        <Link href={`/dashboard/${role}/myBookings`}>Bookings</Link>
      ),
      icon: <TableOutlined />,
      key: `/dashboard/${role}/myBookings`,
    },
  ];



  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.USER) return userSidebarItems;
};
