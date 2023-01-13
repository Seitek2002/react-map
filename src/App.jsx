import React from "react";
import Map from "./components/Map";
import { Button, Col, Row } from "antd";
import "antd/dist/reset.css";
import "./App.css";
import Table from "./components/Table";
import Preloader from "./components/Preloader";
import { useSelector } from "react-redux";
import { getLoadingSelector } from "./selectors/PointsSelector";
function App() {
  const loading = useSelector(getLoadingSelector);

  return (
    <Row align={"middle"}>
      <Col span={12}>
        <Table />
      </Col>
      <Col span={12}>
        {!loading ? <Map /> : <Preloader />}
      </Col>
    </Row>
  );
}

export default App;
