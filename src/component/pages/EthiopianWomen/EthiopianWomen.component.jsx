import React, { useContext } from "react";
import { ethiopianWomenContext } from "../../../contexts/EthiopianWomenPrivaider";
import AllCards from "../../featurs/Card/AllCards.component";
import { Col, Row } from "react-bootstrap"

export default function EthiopianWomenPage() {
  const { ethiopianWomen , setEthiopianWomen } = useContext ( ethiopianWomenContext )
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {ethiopianWomen?.map(item => (
          <Col key={item.id}>
            <AllCards {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};