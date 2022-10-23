import { useContext } from "react"
import { ethiopianCoupleContext } from "../../../contexts/EthiopianCoupleProvaider.component";
import AllCards from "../../featurs/Card/AllCards.component"
import { Col, Row } from "react-bootstrap"

export default function EthiopianCouplePage(){

    const {ethiopianCouple}=useContext(ethiopianCoupleContext)
    return (
      <>
        <h1>Store</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
          {ethiopianCouple?.map(item => (
            <Col key={item.id}>
              <AllCards {...item} />
            </Col>
          ))}
        </Row>
      </>
    );
}