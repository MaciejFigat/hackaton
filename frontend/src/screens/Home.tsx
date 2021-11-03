import React from 'react'
import CardComponent from '../components/CardComponent'
import { LinkContainer } from 'react-router-bootstrap'
// import SectionCode from '../components/SectionCode'
// import { codeExampleOne } from '../codeSnippets/codeOne'
import Solutions from './Solutions'

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
                <span className='text-danger'>Stop </span>SMS phishing{' '}
              </h1>
              <div className='card border-warning mb-3'>
                <div className='card-header'>
                  {' '}
                  <span className='text-success lead'>
                    Cybersecurity in your mobile
                  </span>
                </div>
                <div className='card-body'>
                  <h4 className='card-title'>Lorem, ipsum dolor.</h4>
                  <p className='card-text'>
                    Naszym celem jest zwiększenie sprawności i utrzymanie
                    bezpiecznej platformy komunikacyjnej między klientem a
                    użytkownikiem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <h2>
              <span className='text'>Chcemy zaadresować dwa problemy </span>
            </h2>

            <div className='card border-warning mb-3'>
              <div className='card-header'>
                {' '}
                <span className='text-warning lead my-4'>
                  Fałszywe wiadomości SMS
                </span>
              </div>
              <div className='card-body'>
                <h4 className='card-title'>Lorem, ipsum dolor.</h4>
                <p className='card-text'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veniam delectus accusamus tenetur animi consequatur deleniti!
                </p>
              </div>
            </div>
            <div className='card border-info mb-3'>
              <div className='card-header'>
                {' '}
                <span className='text-info lead my-4'>
                  Autoryzacja bankowych połączeń telefonicznych
                </span>
              </div>
              <div className='card-body'>
                <h4 className='card-title'>Lorem, ipsum dolor.</h4>
                <p className='card-text'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veniam delectus accusamus tenetur animi consequatur deleniti!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section
        id='partTwo'
        className='bg-dark text-light p-5 p-lg-0 pt-lg-5 h-100 text-center text-sm-start my-3 my-5'
      >
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div>
              <h1>
                <span className='text-danger'>
                  Przykładowe rozwiązanie problemu - analiza treści SMS
                </span>
              </h1>
            </div>
            <div className='card border-success mb-3'>
              <div className='card-header'>
                {' '}
                <span className='text-success lead my-4'>
                  Dodatkowa warstwa zabezpieczeń przed phishingiem
                </span>
              </div>
              <div className='card-body'>
                <h4 className='card-title'>Analiza treści</h4>
                <p className='card-text lead'>
                  Badamy wiadomość pod względem obecności szkodliwych linków i
                  podejrzanych treści.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <Solutions />

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
              link='/about/#partOne'
              linkDescription='Architektura rozwiązania'
              variantButton='primary'
            />
          </div>
        </div>
      </section>

      <section
        id='partThree'
        className='bg-dark text-light p-3 p-lg-0 pt-lg-5 text-center text-sm-start'
      >
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
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

            <CardComponent
              variantCard='success'
              title='Budowanie zaufania'
              description='Korzystne będzie budowanie wzajemnego zaufania.'
              link=''
              linkDescription=''
              variantButton='danger'
            />

            <CardComponent
              variantCard='primary'
              title='Przeciwdziałanie obojętności'
              description='Strach przed oszustwem, błędne praktyki i zaniedbania powodują wzrastającą obojętność klienta.'
              link=''
              linkDescription=''
              variantButton='warning'
            />
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home
