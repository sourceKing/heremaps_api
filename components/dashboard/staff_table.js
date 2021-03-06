import { Table, Button, Space, Avatar } from "antd";

const dataSource = [];

for (let i = 0; i < 12; i++) {
  dataSource.push({
    key: i.toString(),
    users_name: "Charles Nweze-" + i.toString(),
    email: `charles_nweze-${i.toString()}@gmail.com`,
    last_seen: "19-Aug-2020",
    action: "Review",
  });
}

const columns = [
  {
    title: "Users Name",
    dataIndex: "users_name",
    key: "users_name",
    render: (text) => (
      <Space direction="horizontal" size="small">
        <Avatar src="/profile_pic2.jpeg" size="small" shape="circle"></Avatar>
        <span>{text}</span>
      </Space>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Last seen",
    dataIndex: "last_seen",
    key: "last_seen",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (text) => (
      <Button type="ghost" size="middle" style={{ borderRadius: 30 }}>
        {text}
      </Button>
    ),
  },
];

const StaffTable = ({ removeStaff }) => (
  <Table
    dataSource={dataSource}
    columns={columns}
    size="small"
    sticky={true}
    onRow={(record, rowIndex) => {
      return {
        onClick: (event) => {
          // changePropModalVisibility();
          // console.log(record, rowIndex);
          removeStaff(record.email);
          console.log(record);
        }, // click row
        // onDoubleClick: event => {}, // double click row
        // onContextMenu: event => {}, // right button click row
        // onMouseEnter: event => {}, // mouse enter row
        // onMouseLeave: event => {}, // mouse leave row
      };
    }}
  />
);

export default StaffTable;
