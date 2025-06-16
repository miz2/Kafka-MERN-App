import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarMenu = () => {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: (
        <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,56H216V96H40ZM216,200H112V112H216v88Z" />
      ),
    },
    {
      name: "Create Rule",
      path: "/create-rule",
      icon: (
        <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z" />
      ),
    },
    {
      name: "Rule Logs",
      path: "/rule-logs",
      icon: (
        <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z" />
      ),
    },
    {
      name: "Settings",
      path: "/settings",
      icon: (
        <path d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm96-24a16,16,0,1,1-16,16A16,16,0,0,1,224,64ZM32,64a16,16,0,1,1,16,16A16,16,0,0,1,32,64Z" />
      ),
    },
  ];

  return (
    <div className="flex h-screen">
      <div className="layout-content-container flex flex-col w-80">
        <div className="flex h-full min-h-[700px] flex-col justify-between bg-white p-4">
          <div className="flex flex-col gap-4">
            {/* Avatar + Heading */}
            <div className="flex gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBEkLhSzRarHdGr2F2lTZjACVApow2gFNQEKoLU-HTAt9goePk72_r-eqZ9RszNwxekqc-a7dq6-4yS2HRIDLEhB6N5GoE5i_P6CpamEm5E_VYKcpaLMbUSDDA-bmQnr0hNId16107y9rz9ohFQcAsqFnYNzlngftv73zPSzS9oshJYXR_7Y3pwT9QpwNbheGG_DUlP8oYsAUANXsYFsC83ID72s-gl6gwSLKqV5Q0TvVSKtNfZ9bbfNsvG8nwWu7TidLdI3u0LMFYV")',
                }}
              />
              <h1 className="text-[#111418] text-base font-medium leading-normal">
                Automation Rules
              </h1>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-2">
              {menuItems.map(({ name, icon, path }, index) => {
                const isActive = location.pathname === path;
                return (
                  <Link
                    to={path}
                    key={index}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl transition ${
                      isActive ? "bg-[#f0f2f5]" : ""
                    } hover:bg-[#f0f2f5]`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      {icon}
                    </svg>
                    <p className="text-[#111418] text-sm font-medium leading-normal">
                      {name}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
