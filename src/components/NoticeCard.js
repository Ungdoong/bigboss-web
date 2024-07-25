import React, { useState, useCallback } from "react";
import { Card, Row, Col, Modal, Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const tabList = [
  {
    key: "alarm",
    tab: "빅보스 통신",
  },
  {
    key: "notice",
    tab: "공지사항",
  },
];

export default function NoticeCard() {
  const [openNoticeModal, setOpenNoticeModal] = useState(false);
  const [openAlarmModal, setOpenAlarmModal] = useState(false);
  const [activeTabKey, setActiveTabKey] = useState("alarm");
  const [notices, setNotices] = useState([
    { id: 1, title: "notice1", content: "content1" },
    { id: 2, title: "notice2", content: "content2" },
  ]);
  const [currentNotice, setCurrentNotice] = useState("");
  const [alarm, setAlarm] = useState("");
  const [tempAlarm, setTempAlarm] = useState("");
  const [tempNoticeId, setTempNoticeId] = useState(-1);
  const [tempNoticeTitle, setTempNoticeTitle] = useState("");
  const [tempNoticeContent, setTempNoticeContent] = useState("");

  const onClickCreateNotice = () => {
    setTempNoticeId(-1);
    setTempNoticeTitle("");
    setTempNoticeContent("");
    setOpenNoticeModal(true);
  };

  const onClickEditNotice = (notice) => {
    setTempNoticeId(notice.id);
    setTempNoticeTitle(notice.title);
    setTempNoticeContent(notice.content);
    setCurrentNotice(notice);
    setOpenNoticeModal(true);
  };

  const onClickEditAlarm = useCallback(() => {
    setTempAlarm(alarm);
    setOpenAlarmModal(true);
  }, [alarm]);

  const onClickDeleteNotice = useCallback(() => {
    Modal.confirm({
      title: "삭제하시겠습니까?",
      okText: "삭제",
      okType: "danger",
      onOk() {
        setNotices(notices.filter((notice) => notice.id !== tempNoticeId));
        setOpenNoticeModal(false);
      },
      centered: true
    });
  }, [tempNoticeId, notices]);

  const handleChangeNotice = (e) => {
    setOpenNoticeModal(false);
  };

  const handlechangeAlarm = useCallback(() => {
    setAlarm(tempAlarm);
    setOpenAlarmModal(false);
  }, [tempAlarm]);

  const topCardContent = useCallback(() => {
    switch (activeTabKey) {
      case "alarm":
        return (
          <div
            className="alarm-content text-ellipsis"
            onClick={onClickEditAlarm}
          >
            {alarm}
          </div>
        );
      case "notice":
        return (
          <>
            <div className="notice-plus" onClick={onClickCreateNotice}>
              <PlusOutlined
                style={{
                  color: "white",
                  backgroundColor: "#3281f7",
                  padding: "2px",
                  borderRadius: "4px",
                }}
              />
            </div>
            {notices.map((notice, i) => (
              <Row key={i}>
                <Col
                  span={22}
                  className="notice-title text-ellipsis"
                  onClick={() => onClickEditNotice(notice)}
                >
                  <span>· {notice.title}</span>
                </Col>
              </Row>
            ))}
          </>
        );
      default:
        return <></>;
    }
  }, [activeTabKey, alarm, notices, onClickEditAlarm]);

  return (
    <>
      <Card
        className="dashboard-card top"
        title="필독!"
        bordered
        tabList={tabList}
        onTabChange={(key) => setActiveTabKey(key)}
      >
        {topCardContent()}
      </Card>
      <Modal
        title="빅보스 통신"
        open={openAlarmModal}
        onOk={handlechangeAlarm}
        onCancel={() => setOpenAlarmModal(false)}
        style={{ minWidth: "60vw" }}
      >
        <TextArea
          showCount
          maxLength={2000}
          onChange={(e) => setTempAlarm(e.target.value)}
          value={tempAlarm}
          style={{ marginBottom: "20px", height: "60vh" }}
        />
      </Modal>
      <Modal
        title="공지사항"
        open={openNoticeModal}
        onOk={handleChangeNotice}
        onCancel={() => setOpenNoticeModal(false)}
        style={{ minWidth: "60vw" }}
        okButtonProps={{ disabled: tempNoticeTitle === "" }}
      >
        <div className="notice-modal-body">
          <div className="notice-modal-body-title">제목</div>
          <Input
            status={tempNoticeTitle === "" ? "error" : ""}
            onChange={(e) => setTempNoticeTitle(e.target.value)}
            value={tempNoticeTitle}
            style={{ marginBottom: "10px" }}
          />
          <div className="notice-modal-body-title">내용</div>
          <TextArea
            showCount
            maxLength={2000}
            onChange={(e) => setTempNoticeContent(e.target.value)}
            value={tempNoticeContent}
            style={{ marginBottom: "20px", height: "50vh" }}
          />
          <div
            className="notice-modal-delete-btn"
            onClick={onClickDeleteNotice}
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
