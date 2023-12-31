"use client";

import Link from "next/link";
import Image from "next/image";
import car from "../../assets/car.png";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { authKey } from "@/constants/storageKey";
import { Avatar, Button, Dropdown, MenuProps, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

const NavBar = () => {
  const router = useRouter();
  const { role } = getUserInfo() as any;
  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/auth/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Link href="/profile">
          <Button type="text">My Profile</Button>
        </Link>
      ),
    },
    {
      key: "0",
      label: (
        <Button onClick={logOut} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];

  return (
    <header className="bg-gray">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-2">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <Image src={car} width={78} alt="Car repairing service logo" />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-black-500 transition hover:text-blue-500/75"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black-500 transition hover:text-blue-500/75"
                    href="/services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black-500 transition hover:text-blue-500/75"
                    href="/blog"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black-500 transition hover:text-blue-500/75"
                    href="/faq"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black-500 transition hover:text-blue-500/75"
                    href="/feedback"
                  >
                    Feedback
                  </Link>
                </li>
                {role && ( role === "user" || role === "admin" || role === "super_admin") && (
                  <li>
                    <Link
                      className="text-black-500 transition hover:text-blue-500/75"
                      href={`/dashboard/${role}`}
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {!role ? (
                <div className="sm:flex sm:gap-4">
                  <>
                    <Link
                      className="rounded-md bg-blue-600 px-5 py-2.5  text-white shadow"
                      href="/auth/login"
                    >
                      Login
                    </Link>
                    <div className="hidden sm:flex">
                      <Link
                        className="rounded-md bg-blue-600 px-5 py-2.5  text-white"
                        href="/auth/signUp"
                      >
                        SignUp
                      </Link>
                    </div>
                  </>
                </div>
              ) : (
                <Dropdown menu={{ items }}>
                  <a>
                    <Space wrap size={16}>
                      <Avatar size="large" icon={<UserOutlined />} />
                    </Space>
                  </a>
                </Dropdown>
              )}

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
