import React, { useState } from "react";
import { Row, Col, Card } from "antd";

export default function BossCard() {
  const [bosses, setBosses] = useState([
    { key: 1, name: "베나투스", level: "60", killed: "15:41" },
    { key: 2, name: "비오렌트", level: "65", killed: "15:41" },
  ]);

  return (
    <Card className="dashboard-card boss" title="보스 현황" bordered>
      <Row className="boss-record-header">
        <Col span={12} className="boss-name">
          이름
        </Col>
        <Col span={4} className="boss-gen-time">
          Killed
        </Col>
        <Col span={4} className="boss-next-time">
          Next
        </Col>
      </Row>
      {bosses.map((boss, i) => (
        <Row key={i} className="boss-record">
          <Col span={12} className="boss-name">
            {boss.name}({boss.level})
          </Col>
          <Col span={4} className="boss-gen-time">
            {boss.killed}
          </Col>
          <Col span={4} className="boss-next-time">
            {boss.killed}
          </Col>
        </Row>
      ))}
    </Card>
  );
}
