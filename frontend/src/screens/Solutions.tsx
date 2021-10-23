import React, { useState } from 'react'
import MockupMobile from '../components/MockupMobile'
import axios from 'axios'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
interface SolutionsProps {}
interface ResponseBody {
  sms?: any
  status?: any
  link?: any
}

const Solutions: React.FC<SolutionsProps> = () => {
  const dataHandler = async () => {
    const data = await axios.get(
      `https://778c-185-152-122-218.ngrok.io/sms/{text}?sms=${textMessage}`
    )
    setFetchedData(data)
    console.log(data)
  }

  const [textMessage, setTextMessage] = useState<string>('')
  const [fetchedData, setFetchedData] = useState<ResponseBody>({
    status: 'za mało danych',
  })
  return (
    <>
      <Container className='mt-5'>
        <Row className='justify-content-md-center'>
          <h3>Zweryfikuj treść</h3>
        </Row>
        <Row className='justify-content-md-center mt-5'>
          <Col sm={4}>Przykład zastosowania walidacji</Col>
          <Col sm={8}>
            <MockupMobile
              children={
                <>
                  <Form className='mt-5'>
                    <Form.Group
                      className='mb-3'
                      controlId='exampleForm.ControlInput1'
                    >
                      <Form.Label>Email </Form.Label>
                      <Form.Control type='email' placeholder='are we safe?' />
                    </Form.Group>
                    <Form.Group
                      className='mb-3'
                      controlId='exampleForm.ControlTextarea1'
                    >
                      <Form.Label>Example textarea</Form.Label>
                      <Form.Control
                        as='textarea'
                        rows={9}
                        onChange={(e: any) => setTextMessage(e.target.value)}
                      />
                    </Form.Group>
                  </Form>
                  <Button onClick={dataHandler}>Sprawdź SMS</Button>
                  <div className='mt-5'>
                    Jesteś bezpieczny: {fetchedData.status}
                  </div>
                </>
              }
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Solutions
