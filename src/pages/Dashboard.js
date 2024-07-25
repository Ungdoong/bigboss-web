import React from "react";
import { Row, Col } from "antd";
import NoticeCard from "../components/NoticeCard";
import BossCard from "../components/BossCard";

function Dashboard() {
  return (
    <div className="dashboard">
      <Row gutter={16} style={{ marginBottom: "20px" }}>
        <Col span={24}>
          <NoticeCard />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={10}>
          <BossCard />
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
