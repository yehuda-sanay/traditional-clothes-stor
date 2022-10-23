import { useContext } from "react";
import { ethiopianBoyContext } from "../../../contexts/EthiopianBoyProvaider.component";
import AllCards from "../../featurs/Card/AllCards.component";
import { Col, Row } from "react-bootstrap"

export default function EthiopianBoyPage() {
  const { ethiopianBoy } = useContext(ethiopianBoyContext);
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {ethiopianBoy?.map(item => (
          <Col key={item.id}>
            <AllCards {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
{/* <h1>ethiopianBoy</h1>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {ethiopianBoy?.map((ethiopian, index) => (
            <Grid item xs={3}>
              <AllCards ethiopian={ethiopian} item={index} />
            </Grid>
          ))}
        </Grid>
      </Box> */}