import React from 'react'

interface AttackVectorsProps {}

const AttackVectors: React.FC<AttackVectorsProps> = () => {
  return (
    <>
      <section
        id='partOne'
        className='bg-dark text-light p-5 p-lg-0 pt-lg-5 h-100 text-center text-sm-start my-3 my-5'
      >
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div>
              <h1>
                <span className='text-danger'>
                  Niedostateczne zabezpieczenia, w porównaniu do desktopu. Brak
                  możliwości uwiarygodnienia nadawcy wiadomości.
                </span>
              </h1>
              <p className='lead my-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, totam? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Praesentium blanditiis repellendus pariatur
                mollitia soluta, accusantium, autem ut dicta in consequuntur
                assumenda facilis at, nemo doloremque ratione quia excepturi
                expedita consectetur eligendi delectus magni porro totam?
                Recusandae dolorum nulla sed! Sint consequatur sequi tempore
                sed. Voluptate eum doloribus quasi dignissimos ipsam saepe ut
                quisquam ad reiciendis unde aspernatur tempore repellendus nihil
                id, molestiae omnis nisi suscipit autem eius dolore possimus
                nobis perspiciatis harum! Impedit dignissimos magnam corrupti
                itaque recusandae iste quibusdam. Doloribus ullam, ipsam id sint
                ea, est pariatur, commodi perspiciatis fugiat necessitatibus
                beatae. Quam maxime facere dolores, fugit voluptas dolorum?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id='partTwo'
        className='bg-dark text-light p-5 p-lg-0 pt-lg-5 h-100 text-center text-sm-start my-3 my-5'
      >
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div>
              <h1>
                <span className='text-info'>
                  Większe zaufanie użytkowników niż w przypadku emaili -
                  mniejsze doświadczenie z atakami tego rodzaju{' '}
                </span>
              </h1>
              <p className='lead my-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, ab incidunt! Tempora ad, qui laudantium nesciunt
                adipisci illum deserunt nisi! Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Totam, dolor incidunt. Accusantium
                quas asperiores omnis voluptatum molestias labore tenetur
                assumenda sit corporis ex debitis, ducimus perspiciatis
                cupiditate sequi rerum, earum perferendis sed voluptatibus
                excepturi iste ab sint? Incidunt facilis a quo aspernatur
                excepturi, veritatis cupiditate sint doloribus velit dolorem
                dolor error temporibus harum inventore! Possimus beatae quasi
                fuga laudantium dignissimos provident in, hic cum dicta ab ex
                delectus non voluptas totam, distinctio atque consequuntur
                recusandae minima inventore perspiciatis asperiores, obcaecati
                maxime tempora! Corporis eum natus quasi. Nihil aspernatur
                provident porro corporis ipsa quis explicabo recusandae
                excepturi a repudiandae. Labore, amet!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id='partThree'
        className='bg-dark text-light p-5 p-lg-0 pt-lg-5 h-100 text-center text-sm-start my-3 my-5'
      >
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div>
              <h1>
                <span className='text-danger'>
                  Bardziej intymna relacja, w związku z codzienną funkcją SMS-ów
                  - skutkuje mniejszą uwagą i większą możliwością
                  spersonalizowanego ataku
                </span>
              </h1>
              <p className='lead my-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In ut
                recusandae et minus, odit autem laudantium aspernatur rerum quos
                consequatur. Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Laborum ad pariatur est reiciendis! Fuga et eligendi,
                rerum delectus sapiente repellat?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default AttackVectors
