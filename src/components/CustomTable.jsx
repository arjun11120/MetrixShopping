import React, { useState } from "react";
import { Table, Input, Button, DatePicker } from "antd";
import { SearchOutlined, FilterOutlined, SendOutlined, DownOutlined } from "@ant-design/icons";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const dateFormat = 'YYYY-MM-DD';

const CustomTable = () => {
  const [searchOrder, setSearchOrder] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const orders = [
    {
      "CustomerName": "Janet Adebayo",
      "OrderDate": "2024-08-12",
      "OrderType": "Home Delivery",
      "TrackingID": "9348fjt73",
      "OrderTotal": "₦25,000.00",
      "Action": "Completed",
      "Status": "Completed",
      "key": 1
    },
    {
      "CustomerName": "Samuel Johnson",
      "OrderDate": "2024-07-12",
      "OrderType": "Home Delivery",
      "TrackingID": "9348fjt74",
      "OrderTotal": "₦25,000.00",
      "Action": "In-Progress",
      "Status": "In-Progress",
      "key": 2
    },
    {
      "CustomerName": "Francis Doe",
      "OrderDate": "2024-08-12",
      "OrderType": "Pick Up",
      "TrackingID": "9348fjt75",
      "OrderTotal": "₦25,000.00",
      "Action": "Pending",
      "Status": "Pending",
      "key": 3
    },
    {
      "CustomerName": "Christian Dior",
      "OrderDate": "2024-08-12",
      "OrderType": "Pick Up",
      "TrackingID": "9348fjt76",
      "OrderTotal": "₦25,000.00",
      "Action": "Completed",
      "Status": "Completed",
      "key": 4
    },
    {
      "CustomerName": "Christian Dior",
      "OrderDate": "2024-07-12",
      "OrderType": "Pick Up",
      "TrackingID": "9348fjt77",
      "OrderTotal": "₦25,000.00",
      "Action": "Completed",
      "Status": "Completed",
      "key": 5
    },
    {
      "CustomerName": "Janet Adebayo",
      "OrderDate": "2024-08-12",
      "OrderType": "Home Delivery",
      "TrackingID": "9348fjt78",
      "OrderTotal": "₦25,000.00",
      "Action": "Completed",
      "Status": "Completed",
      "key": 6
    },
    {
      "CustomerName": "Samuel Johnson",
      "OrderDate": "2024-08-12",
      "OrderType": "Home Delivery",
      "TrackingID": "9348fjt79",
      "OrderTotal": "₦25,000.00",
      "Action": "In-Progress",
      "Status": "In-Progress",
      "key": 7
    },
    {
      "CustomerName": "Francis Doe",
      "OrderDate": "2024-08-12",
      "OrderType": "Pick Up",
      "TrackingID": "9348fjt80",
      "OrderTotal": "₦25,000.00",
      "Action": "Pending",
      "Status": "Pending",
      "key": 8
    },
    {
      "CustomerName": "Christian Dior",
      "OrderDate": "2024-07-12",
      "OrderType": "Pick Up",
      "TrackingID": "9348fjt81",
      "OrderTotal": "₦25,000.00",
      "Action": "Completed",
      "Status": "Completed",
      "key": 9
    },
    {
      "CustomerName": "Christian Dior",
      "OrderDate": "2024-08-12",
      "OrderType": "Pick Up",
      "TrackingID": "9348fjt82",
      "OrderTotal": "₦25,000.00",
      "Action": "Completed",
      "Status": "Completed",
      "key": 10
    }
  ];

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "CustomerName",
      key: "CustomerName",
      sorter: true,
    },
    {
      title: "Order Date",
      dataIndex: "OrderDate",
      key: "OrderDate",
      sorter: true,
    },
    {
      title: "Order Type",
      dataIndex: "OrderType",
      key: "OrderType",
      sorter: true,
    },
    {
      title: "Tracking ID",
      dataIndex: "TrackingID",
      key: "TrackingID",
      sorter: true,
    },
    {
      title: "Order Total",
      dataIndex: "OrderTotal",
      key: "OrderTotal",
      sorter: true,
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      sorter: true,
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      sorter: true,
    },
  ];

  const handleTableChange = (pagination, filters, sorter) => {
    setSortColumn(sorter.field);
    setSortOrder(sorter.order);
  };

  const handleSearch = (e) => {
    setSearchOrder(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const filterOrdersByDate = (orders) => {
    if (!selectedDate) return orders;
    return orders.filter(order => {
      return dayjs(order.OrderDate).isSame(selectedDate, 'day');
    });
  };

  const searchedOrders = orders.filter((order) =>
    order.CustomerName.toLowerCase().includes(searchOrder.toLowerCase())
  );

  const filteredOrders = filterOrdersByDate(searchedOrders);

  const sortedData = [...filteredOrders].sort((a, b) => {
    if (!sortColumn) return 0;
    const order = sortOrder === "ascend" ? 1 : -1;
    if (a[sortColumn] < b[sortColumn]) return -order;
    if (a[sortColumn] > b[sortColumn]) return order;
    return 0;
  });

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className="mt-3">
      <div className="d-flex align-items-center justify-content-between">
        <span style={{ fontWeight: 400, fontSize: "16px" }}>Customer Orders</span>
        <div className="d-flex">
          <Input
            addonBefore={<SearchOutlined />}
            placeholder="Search Order"
            onChange={handleSearch}
            style={{ marginBottom: 16, width: "50%", marginLeft: "10px" }}
          />
          <DatePicker
            format={dateFormat}
            onChange={handleDateChange}
            style={{ marginLeft: "10px", marginRight: "10px" }}
          />
          <Button icon={<SendOutlined />} style={{ marginLeft: "10px", marginRight: "10px" }}>Share</Button>
          <Button icon={<DownOutlined />} iconPosition={"end"} style={{ marginRight: "10px" }}>Bulk Action</Button>
        </div>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={sortedData}
        pagination={false}
        onChange={handleTableChange}
        rowKey="key"
      />
    </div>
  );
};

export default CustomTable;
