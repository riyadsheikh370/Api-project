import axios from "axios"
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Menu from "./Components/Menu/Menu"

function App() {
  let [product, setProduct] = useState([])

  let getdata = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setProduct(response.data.products);
    })
  }
  useEffect(() => {
    getdata()
  }, [])

  console.log(product);

  return (
    <>
    <Menu/>
      <Container>
        <Row>
          {product.map((item) => (
            <Col lg={4}>
              <div className="one">
                <h2>{item.title}</h2>
                <img className="w-100" src={item.thumbnail} alt={item.thumbnail} />
                <p>{item.description}</p>
                <h4>${item.price}</h4>
              </div>
            </Col>
          ))}

        </Row>
      </Container>
    </>
  )
}

export default App
