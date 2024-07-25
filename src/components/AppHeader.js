import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import Logo from "./logo.svg";

const items = [
  {
    label: <img src={Logo} className="app-logo" alt="BigBoss" />,
    key: "logo",
  },
  {
    label: "대시보드",
    key: "dashboard",
  },
  {
    label: "보스",
    key: "boss",
  },
];

export default function AppHeader() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("dashboard");

  const onClick = useCallback(
    (e) => {
      if (e.key === current) {
        return;
      }
      
      setCurrent(e.key);

      switch (e.key) {
        case "logo":
        case "dashboard":
          navigate("/");
          break;
        case "boss":
          navigate("/boss");
          break;
        default:
          break;
      }
    },
    [navigate, current]
  );

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      theme="dark"
      style={{
        padding: "10px 0",
        fontSize: "24px",
        boxShadow: "0 6px 16px 0 rgba(25,25,25,.06)",
        color: "white",
        position: "sticky",
        top: "0"
      }}
    />
  );
}
