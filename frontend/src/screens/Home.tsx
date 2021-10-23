import React from 'react'
// import { LinkContainer } from 'react-router-bootstrap'
// import CardComponent from '../components/CardComponent'
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      {' '}
      <section
        id='partOne'
        className='bg-dark text-light p-5 p-lg-0 pt-lg-5 h-100 text-center text-sm-start my-3 my-5'
      >
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div>
              <h1>
                <span className='text-info'>SMS phishing</span> analiza problemu{' '}
                <span className='text-success'>
                  propozycje rozwiązań technologicznych
                </span>
              </h1>
              <p className='lead my-4'>
                <a
                  href='https://mm.tt/2065761032?t=NdpOQ3FFO0'
                  className='text-danger'
                >
                  mapa myśli
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home
