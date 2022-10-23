import { useContext } from "react"
import { ethiopianGirlContext } from "../../../contexts/EthiopianGirlProvaider.component";
import AllCards from "../../featurs/Card/AllCards.component"
import { Col, Row } from "react-bootstrap"

export default function EthiopianGirlPage(){

    const {ethiopianGirl}=useContext(ethiopianGirlContext)
    return (
      <>
        <h1>Store</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
          {ethiopianGirl?.map(item => (
            <Col key={item.id}>
              <AllCards {...item} />
            </Col>
          ))}
        </Row>
      </>
    );
}
