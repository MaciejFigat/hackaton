import React, { useState } from 'react'
import MockupMobile from '../components/MockupMobile'
import axios from 'axios'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'

interface SolutionsProps {}

interface ResponseBody {
  data?: {
    link?: any
    sms?: any
    status?: 'OK' | 'FRAUD'
  }
  status?: any
  link?: any
  statusText?: any
}

const Solutions: React.FC<SolutionsProps> = () => {
  const dataHandler = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const data = await axios.get(
      `https://778c-185-152-122-218.ngrok.io/sms/{text}?sms=${textMessage}`,
      config
    )
    //@ts-ignore
    setFetchedData(data)
    console.log(data)
  }

  const [textMessage, setTextMessage] = useState<string>(
    'Hello Friend, My name is Prince Nassid! I have good news for You! ... Just follow the link so we can talk about the money http://yourbankaccountismine.co'
  )
  const [fetchedData, setFetchedData] = useState<ResponseBody>({
    status: 'za mało danych',
  })
  return (
    <>
      <Container className='mt-5'>
        <Row className='justify-content-md-center'></Row>
        <Row className='justify-content-md-center mt-5'>
          <Col sm={4}></Col>
          <Col sm={8}>
            <MockupMobile
              version={'galaxy-s8'}
              children={
                <>
                  <Form className='mt-5'>
                    <Form.Group
                      className='mb-3'
                      controlId='exampleForm.ControlInput1'
                    ></Form.Group>
                    <Form.Group
                      className='mb-3 mt-5'
                      controlId='exampleForm.ControlTextarea1'
                    >
                      <Form.Label>Treść badanej wiadomości</Form.Label>
                      <Form.Control
                        as='textarea'
                        rows={9}
                        placeholder='Hello Friend, My name is Prince Nassid! I have good news for You! ... Just follow the link so we can talk about the money http://yourbankaccountismine.co'
                        onChange={(e: any) => setTextMessage(e.target.value)}
                      />
                    </Form.Group>
                  </Form>
                  <Button onClick={dataHandler}>Sprawdź SMS</Button>
                  {fetchedData.data && fetchedData.data.status === 'OK' && (
                    <div className='mt-5 text-success'>
                      Wynik analizy:{' '}
                      {fetchedData.data && fetchedData.data.status}{' '}
                    </div>
                  )}
                  {fetchedData.data && fetchedData.data.status === 'FRAUD' && (
                    <div className='mt-5 text-danger'>
                      Wynik analizy:{' '}
                      {fetchedData.data && fetchedData.data.status}
                    </div>
                  )}
                  {fetchedData.data && (
                    <div className='mt-5'>
                      Proponujemy byś przeczytał:
                      <a href={fetchedData.data.link} className='text-info'>
                        {' '}
                        link jak będzie działał.
                      </a>
                    </div>
                  )}
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
