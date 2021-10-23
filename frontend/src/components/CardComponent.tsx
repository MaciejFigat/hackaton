import React from 'react'
import { Card, Button } from 'react-bootstrap'
interface CardComponentProps {
  variantCard?: string
  header?: string
  title?: string | any
  description?: string | any
  link?: string
  linkDescription?: string
  variantButton?: string
}

const CardComponent: React.FC<CardComponentProps> = ({
  header,
  variantCard,
  variantButton,
  title,
  description,
  link,
  linkDescription,
}) => {
  return (
    <Card
      bg={variantCard}
      style={{ width: '18rem', height: '12rem', minWidth: '200px' }}
      text={variantCard === 'light' ? 'dark' : 'white'}
      className='mx-2'
    >
      {header && <Card.Header as='h5'>{header}</Card.Header>}
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        <Card.Text>{description}</Card.Text>
        {linkDescription !== '' ? (
          <Button
            variant={variantButton}
            style={{ position: 'absolute', bottom: '0.75rem' }}
          >
            <a href={link}>{linkDescription}</a>
          </Button>
        ) : (
          <></>
        )}
      </Card.Body>
    </Card>
  )
}
export default CardComponent
