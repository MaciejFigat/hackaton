const codeExampleOne: string = `
<Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        <Card.Text>{description}</Card.Text>
        <Button
          variant={variantButton}
          style={{ position: 'absolute', bottom: '1rem' }}
        >
          <a href={link}>{linkDescription}</a>
        </Button>
        <div className='device device-galaxy-s8'>
          <div className='device-frame'>
            <div>Mockup 3333</div>
          </div>
          <div className='device-stripe' />
          <div className='device-header' />
          <div className='device-sensors' />
          <div className='device-btns' />
          <div className='device-power' />
        </div>
      </Card.Body>
    </Card>
 
`


export {
  codeExampleOne,

}
