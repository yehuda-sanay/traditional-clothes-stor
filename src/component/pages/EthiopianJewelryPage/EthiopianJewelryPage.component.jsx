import { useContext } from "react"
import { ethiopianJewelryContext } from "../../../contexts/EthiopianJewelryProvaider.component";
import AllCards from "../../featurs/Card/AllCards.component"
import { Col, Row } from "react-bootstrap"
function EthiopianJewelryPage(){
    const {ethiopianJewelry}=useContext(ethiopianJewelryContext)
    return (
      <>
        <h1>Store</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
          {ethiopianJewelry?.map(item => (
            <Col key={item.id}>
              <AllCards {...item} />
            </Col>
          ))}
        </Row>
      </>
    );
}
export default EthiopianJewelryPage;