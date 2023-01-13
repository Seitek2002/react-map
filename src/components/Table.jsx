import React, { useState } from "react";
import { Table as AntTable } from "antd";
import { useDispatch } from "react-redux";
import { getPoints } from "../reducers/PointsSlice";

const Table = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(null);
  const columns = [
    {
      title: "Номер заявки",
      dataIndex: "numberOfApplication",
      key: "name",
    },
    {
      title: "Координаты от lat",
      dataIndex: "pointsFromLat",
      key: "name",
    },
    {
      title: "Координаты от lng",
      dataIndex: "pointsFromLng",
      key: "age",
    },
    {
      title: "Координаты до lat",
      dataIndex: "pointsToLat",
      key: "address",
    },
    {
      title: "Координаты до lng",
      dataIndex: "pointsToLng",
      key: "address",
    },
  ];
  const data = [
    {
      key: "1",
      numberOfApplication: "1",
      pointsFromLat: "42.862377",
      pointsFromLng: "74.552509",
      pointsToLat: "42.859443488123",
      pointsToLng: "74.66782847934559",
    },
    {
      key: "2",
      numberOfApplication: "2",
      pointsFromLat: "42.862377",
      pointsFromLng: "74.552509",
      pointsToLat: "42.880467486861264",
      pointsToLng: "74.58899689786091",
    },
    {
      key: "3",
      numberOfApplication: "3",
      pointsFromLat: "42.862377",
      pointsFromLng: "74.552509",
      pointsToLat: "59.84660399",
      pointsToLng: "30.29496392",
    },
    {
      key: "4",
      numberOfApplication: "4",
      pointsFromLat: "42.862377",
      pointsFromLng: "74.552509",
      pointsToLat: "59.82761295",
      pointsToLng: "30.41705607",
    },
    {
      key: "5",
      numberOfApplication: "5",
      pointsFromLat: "42.862377",
      pointsFromLng: "74.552509",
      pointsToLat: "59.84660399",
      pointsToLng: "30.29496392",
    },
  ];

  return (
    <AntTable
      rowClassName={(record, index) => (record.key === active ? 'active' : '')}
      bordered
      pagination={false}
      onRow={(record) => {
        return {
          onClick: (event) => {
            setActive(event.target.parentElement.dataset.rowKey)
            dispatch(
              getPoints(
                `${record.pointsFromLng},${record.pointsFromLat};${record.pointsToLng},${record.pointsToLat}`
              )
            );
          },
        };
      }}
      columns={columns}
      dataSource={data}
    />
  );
};

export default Table;
