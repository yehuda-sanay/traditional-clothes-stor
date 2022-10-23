import { useContext } from "react"
import { ethiopianMenContext } from "../../../contexts/EthiopianMenProvaider"
import AllCards from "../../featurs/Card/AllCards.component"
import { Col, Row } from "react-bootstrap"
function EthiopianMenPage(){
    const {ethiopianMen}=useContext(ethiopianMenContext)
    return (
      <>
        <h1>Store</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
          {ethiopianMen?.map(item => (
            <Col key={item.id}>
              <AllCards {...item} />
            </Col>
          ))}
        </Row>
      </>
    );
}
export default EthiopianMenPage;