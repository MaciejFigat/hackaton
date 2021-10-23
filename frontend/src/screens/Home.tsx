import React from 'react'
import CardComponent from '../components/CardComponent'
import { LinkContainer } from 'react-router-bootstrap'
import SectionCode from '../components/SectionCode'
import { codeExampleOne } from '../codeSnippets/codeOne'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className='min-vh-100'>
      <section
        id='partOne'
        className='bg-dark text-light p-5 p-lg-0 pt-lg-5 h-100 text-center text-sm-start my-3 my-5'
      >
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div>
              <h1>
                <span className='text-info'>Smishing </span>SMS phishing{' '}
                <span className='text-success'>analiza problemu</span>
              </h1>
              <p className='lead my-4'>
                Naszym celem jest zwiększenie sprawności i utrzymanie stabilnej
                platformy komunikacyjnej między klientem a użytkownikiem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id='partTwo'
        className='bg-dark text-light p-3 p-lg-0 pt-lg-5 text-center text-sm-start'
      >
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div>
              <h2>
                <LinkContainer to={'/home'}>
                  <span className='text-warning'>SMS'y</span>
                </LinkContainer>{' '}
                stanowią atrakcyjny wektor ataku
              </h2>
            </div>

            <CardComponent
              variantCard='info'
              title='Zabezpieczenia'
              description='Niedostateczne zabezpieczenia urządzeń mobilnych, w porównaniu do desktopu.'
              link=''
              linkDescription='Więcej info'
              variantButton='secondary'
            />
            <CardComponent
              variantCard='light'
              title='Nasze rozwiązanie'
              description='Proponujemy ...'
              link=''
              linkDescription='Architektura rozwiązania'
              variantButton='primary'
            />
          </div>
        </div>
      </section>
      <section className='partTwo'>
        <SectionCode
          sectionID='partOne'
          title='przykład nr 1'
          version='secondary'
          description='sample code'
          codeExample={codeExampleOne}
        />
      </section>
      <section
        id='partThree'
        className='bg-dark text-light p-3 p-lg-0 pt-lg-5 text-center text-sm-start'
      >
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <CardComponent
              variantCard='dark'
              title='Przeciwdziałanie obojętności'
              description='Strach przed oszustwem, błędne praktyki i zaniedbania powodują wzrastającą obojętność klienta.'
              link=''
              linkDescription='Więcej info'
              variantButton='warning'
            />

            <div>
              <h2>
                <LinkContainer to={'/snippets'}>
                  <span className='text-info'>Utracone korzyści -</span>
                </LinkContainer>{' '}
                wraz z utratą zaufania klientów tracimy
                <span className='text-warning'>
                  {' '}
                  cenny kanał dystrybucji informacji.
                </span>{' '}
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home

{
  /* <CardComponent
variantCard='success'
title='Budowanie zaufania'
description='Korzystne będzie budowanie wzajemnego zaufania.'
link=''
linkDescription='Więcej info'
variantButton='danger'
/> */
}
