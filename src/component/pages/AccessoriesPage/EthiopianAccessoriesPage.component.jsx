import { useContext } from "react"
import { ethiopianAccessoriesContext } from "../../../contexts/EthiopianAccessoriesProvaider.component";
import AllCards from "../../featurs/Card/AllCards.component"
import { Col, Row } from "react-bootstrap"

export default function EthiopianAccessoriesPage(){

    const {ethiopianAccessories}=useContext(ethiopianAccessoriesContext)
    return (
      <>
        <h1>Store</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
          {ethiopianAccessories?.map(item => (
            <Col key={item.id}>
              <AllCards {...item} />
            </Col>
          ))}
        </Row>
      </>
    );
}